import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.css";

const Header = (props) => (
  <div className={classes.header}>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/clock">
      Clock
    </NavLink>
    <NavLink exact to="/todo">
      ToDo List
    </NavLink>
  </div>
);

export default Header;
