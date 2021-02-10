import React from "react";
import AuxComp from "../../HOC/auxcomp";

const Clock = (props) => (
  <AuxComp>
    <div>CLOCK</div>
    <div>{props.children}</div>
  </AuxComp>
);

export default Clock;
