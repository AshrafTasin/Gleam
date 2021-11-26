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
import NewBlog from "./components/Blogs/NewBlog.js";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getBlogs());
  },[dispatch]);

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Blogs/>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/auth" exact component={Auth} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/new-blog" exact component={NewBlog}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
