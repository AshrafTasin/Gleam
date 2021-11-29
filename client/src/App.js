// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Post from "./components/layout/Post";
import Comment from "./components/Comment/Comment";

import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";
import Auth from "./components/Auth/Auth.js";
import Blogs from "./components/Blogs/Blogs.js";




const App = () => {
=======
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
import NewDiscussion from "./components/DiscussionList/CreateDiscussion.js";
// import NewBlog from "./components/Blogs/NewBlog.js";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getBlogs());
  },[dispatch]);

>>>>>>> discuss works
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
<<<<<<< HEAD
        {/* <Home /> */}
        <Switch>
          <Route exact path="/"> <Redirect to="/home" /></Route>  
          {/* <Route path="/" exact component={Textarea} /> */}
          <Route path="/auth" exact component={Auth} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/home" component={Home} />
          <Route path="/comment" component={Comment} />
          <Route path="/post" component={Post} />
=======
        {/* <Blogs/> */}
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/auth" exact component={Auth} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/new-blog" exact component={NewBlog}/>
          <Route path="/new-disc" exact component={NewDiscussion}/>
>>>>>>> discuss works

        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
