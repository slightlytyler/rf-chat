import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthHandler from "./AuthHandler";
import Branch from "./Branch";

const AuthenticatedRoute = props => (
  <AuthHandler.Consumer>
    {({ session }) => (
      <Branch
        condition={session}
        renderLeft={() => <Route {...props} />}
        renderRight={() => <Redirect to="/login" />}
      />
    )}
  </AuthHandler.Consumer>
);

export default AuthenticatedRoute;
