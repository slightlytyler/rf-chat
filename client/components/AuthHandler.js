import { noop } from "lodash/fp";
import React from "react";

const defaultState = {
  actions: null,
  session: null
};

const Context = React.createContext(defaultState);

const defaultProps = {
  onAuthChange: noop
};

class AuthHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: {
        login: this.login
      },
      session: null
    };
  }

  createSession = username => ({
    authenticatedAt: new Date().toISOString(),
    viewer: { name: username }
  });

  login = username => {
    const session = this.createSession(username);
    this.setState({ session }, () => this.props.onAuthChange(session));
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

AuthHandler.Consumer = Context.Consumer;

export default AuthHandler;
