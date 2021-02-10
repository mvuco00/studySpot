import React from "react";
import AuxComp from "../../HOC/auxcomp";

const ToDo = (props) => (
  <AuxComp>
    <div>TODO</div>
    <div>{props.children}</div>
  </AuxComp>
);

export default ToDo;
