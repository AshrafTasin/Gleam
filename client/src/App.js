// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
import React ,{useEffect} from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";


import { useDispatch } from "react-redux";
import {getBlogs} from './actions/blogs';
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth.js";
import Blogs from "./components/Blogs/Blogs.js";
import NewBlog from "./components/Blogs/CreateBlog.js";
import EditProfile from "./components/Profile/EditProfile.js";
import About from "./components/About/About.js";

import Post from "./components/Blogs/SingleBlogPage/SingleBlogPage.js";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getBlogs());
  },[dispatch]);

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        {/* <Blogs/> */}
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/auth" exact component={Auth} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/new-blog" exact component={NewBlog}/>
          <Route path="/about" exact component={About}/>
          <Route path="/edit" exact component={EditProfile}/>
          <Route path="/blog/:blogid" exact component={Post}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
