import React from "react";
import ScrollView from "./ScrollView";

const Context = React.createContext({ position: 0, actions: {} });

const View = props => (
  <Context.Consumer>
    {({ position }) => <ScrollView {...props} position={position} />}
  </Context.Consumer>
);

const defaultProps = {
  initialPosition: 0
};

class ScrollHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: props.initialPosition,
      scrollBottom: this.scrollBottom,
      scrollTop: this.scrollTop,
      setPosition: this.setPosition
    };
  }

  // This is hacky but we'd need a more complex API to scroll
  // to a specific element.
  // Guessing we're going to have to do that at some point :wink:
  scrollBottom = () => this.setState({ position: 100000 });

  scrollTop = () => this.setState({ position: 0 });

  setPosition = position => this.setState({ position });

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

ScrollHandler.defaultProps = defaultProps;

ScrollHandler.Consumer = Context.Consumer;
ScrollHandler.View = View;

export default ScrollHandler;
