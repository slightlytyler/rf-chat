import { pick } from "lodash/fp";
import React from "react";
import Branch from "./Branch";
import Spinner from "./Spinner";

const mapSpinnerProps = pick(["invertColors"]);

const WaitFor = props => (
  <Branch
    condition={props.condition}
    renderLeft={() => <Spinner {...mapSpinnerProps(props)} />}
    renderRight={props.render}
  />
);

export default WaitFor;
