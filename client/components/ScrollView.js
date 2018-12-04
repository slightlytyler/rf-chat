import styled from "@emotion/styled";
import { omit } from "lodash/fp";
import React from "react";

const Wrapper = styled("div")`
  overflow: scroll;
`;

const mapChildProps = omit(["position"]);

class ScrollView extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.props.position) {
      // Gotta wait for the render to be committed
      setTimeout(() => this.scrollTo(this.props.position), 100);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== this.ref.current.scrollTop) {
      this.scrollTo(this.props.position);
    }
  }

  scrollTo(position) {
    this.ref.current.scrollTop = position;
  }

  render() {
    return <Wrapper {...mapChildProps(this.props)} ref={this.ref} />;
  }
}

export default ScrollView;
