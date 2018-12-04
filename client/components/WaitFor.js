import React from "react";
import Branch from "./Branch";
import Spinner from "./Spinner";

const WaitFor = props => (
  <Branch
    condition={props.condition}
    renderLeft={() => <Spinner />}
    renderRight={props.render}
  />
);

export default WaitFor;
