import styled from "@emotion/styled";
import React from "react";
import AuthHandler from "./AuthHandler";
import Form from "./Form";
import Page from "./Page";

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => (
  <Wrapper>
    <AuthHandler.Consumer>
      {({ actions }) => (
        <Form onSubmit={values => actions.login(values.username)}>
          <Form.Errors />
          <Form.Field name="username" placeholder="Type your username..." />
          <Form.Actions>
            <Form.SubmitButton>Join the DoorDash Chat!</Form.SubmitButton>
          </Form.Actions>
        </Form>
      )}
    </AuthHandler.Consumer>
  </Wrapper>
);

export default Login;
