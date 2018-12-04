import styled from "@emotion/styled";
import React from "react";
import Form from "./Form";
import Page from "./Page";

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => (
  <Wrapper>
    <Form>
      <Form.Errors />
      <Form.Field name="username" placeholder="Type your username..." />
      <Form.Actions>
        <Form.SubmitButton>Join the DoorDash Chat!</Form.SubmitButton>
      </Form.Actions>
    </Form>
  </Wrapper>
);

export default Login;
