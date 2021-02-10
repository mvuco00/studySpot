import React from "react";
import classes from "../Layout/layout.css";
import AuxComp from "../../HOC/auxcomp";
import Header from "../../Containers/Header/header";

const Layout = (props) => (
  <AuxComp>
    <Header />
    <div>{props.children}</div>
  </AuxComp>
);

export default Layout;
