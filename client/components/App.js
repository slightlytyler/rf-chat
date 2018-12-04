import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AuthHandler from "./AuthHandler";
import ChatScene from "./ChatScene";
import Container from "./Container";
import LoginScene from "./LoginScene";

const App = () => (
  <Container>
    <Route
      render={({ history }) => (
        <AuthHandler onAuthChange={() => history.push("/")}>
          <Switch>
            <Route path="/login" component={LoginScene} />
            <AuthenticatedRoute component={ChatScene} />
          </Switch>
        </AuthHandler>
      )}
    />
  </Container>
);

export default App;
