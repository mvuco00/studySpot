import React from "react";
import AuxComp from "../../HOC/auxcomp";
import { NavLink } from "react-router-dom";

const Header = (props) => (
  <AuxComp>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/clock">
      Clock
    </NavLink>
    <NavLink exact to="/todo">
      ToDo List
    </NavLink>
  </AuxComp>
);

export default Header;
