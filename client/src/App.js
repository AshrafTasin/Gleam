// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
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
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        {/* <Home /> */}
        <Switch>
          <Route exact path="/"> <Redirect to="/home" /></Route>  
          {/* <Route path="/" exact component={Textarea} /> */}
          <Route path="/auth" exact component={Auth} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/home" component={Home} />
          <Route path="/comment" component={Comment} />
          <Route path="/post" component={Post} />

        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
