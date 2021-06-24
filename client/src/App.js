// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Textarea from "./components/layout/Textarea";

import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth.js";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Textarea} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
