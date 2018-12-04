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
    const hydratedSession = JSON.parse(localStorage.getItem("session"));
    const previousSession =
      hydratedSession === '"null"' ? null : hydratedSession;
    this.state = {
      actions: {
        login: this.login
      },
      session: previousSession
    };
  }

  createSession = username => ({
    authenticatedAt: new Date().toISOString(),
    viewer: { name: username }
  });

  setSession = (session, cb) => {
    localStorage.setItem("session", JSON.stringify(session));
    this.setState({ session }, cb);
  };

  login = username => {
    const session = this.createSession(username);
    this.setSession(session, () => this.props.onAuthChange(session));
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
