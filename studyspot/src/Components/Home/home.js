import React, { Component } from "react";
import ToDo from "../ToDo/todo";
import Clock from "../Clock/clock";
import classes from "./home.css";

class Home extends Component {
  render() {
    return (
      <div className={classes.home}>
        <ToDo></ToDo>
        <Clock></Clock>
      </div>
    );
  }
}

export default Home;
