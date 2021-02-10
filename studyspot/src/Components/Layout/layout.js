import React from "react";
import classes from "../Layout/layout.css";
import AuxComp from "../../HOC/auxcomp";

const Layout = (props) => (
  <AuxComp>
    <div className={classes.header2}>Header</div>
    <div>{props.children}</div>
  </AuxComp>
);

export default Layout;
