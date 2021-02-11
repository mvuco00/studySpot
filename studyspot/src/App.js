import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Clock from "./Components/Clock/clock";
import ToDo from "./Components/ToDo/todo";
import Layout from "./Components/Layout/layout";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/todo" component={ToDo} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <Router>
        <Layout>{routes}</Layout>
      </Router>
    );
  }
}

export default App;
