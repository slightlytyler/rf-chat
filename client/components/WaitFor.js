import { pick } from "lodash/fp";
import React from "react";
import Branch from "./Branch";
import Spinner from "./Spinner";

const mapSpinnerProps = pick(["invertColors"]);

class WaitFor extends React.Component {
  constructor(props) {
    super(props);
    const tripped = !props.condition;
    this.state = { tripped };
  }

  componentDidUpdate() {
    if (!this.state.tripped && !this.props.condition) {
      this.setState({ tripped: true });
    }
  }

  render() {
    return (
      <Branch
        condition={!this.state.tripped && this.props.condition}
        renderLeft={() => <Spinner {...mapSpinnerProps(this.props)} />}
        renderRight={this.props.render}
      />
    );
  }
}

export default WaitFor;
