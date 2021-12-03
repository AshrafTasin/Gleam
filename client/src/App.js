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
import Verification from "./components/Auth/Verification.js";
import NewPassword from "./components/Auth/NewPassword.js";
import PasswordReset from "./components/Auth/PasswordReset.js";
import Confirmation from "./components/Auth/Confirmation.js";


/////// JoyDIp
import NewDiscussion from "./components/DiscussionList/CreateDiscussion.js";
import Discussions from "./components/DiscussionList/DiscussionList.js";
import SingleDiscPage from './components/DiscussionList/SingleDisc/SingleDisc';
import {getDisc} from './actions/discussionList';


import Post from "./components/Blogs/SingleBlogPage/SingleBlogPage.js";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getBlogs());
    dispatch(getDisc());
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
          <Route path='/verification' exact component={Verification}/>
          <Route path='/redirected' exact component={NewPassword} />
          <Route path='/reset-password'exact component={PasswordReset} />
          <Route path='/confirmation' exact component={Confirmation} />

          <Route path="/new-disc" exact component={NewDiscussion}/>
          <Route path="/discussion" exact component={Discussions} />
          <Route path="/discussion/:discussionid" exact component={SingleDiscPage}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
