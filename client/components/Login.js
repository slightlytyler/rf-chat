import React from "react";
import Form from "./Form";

const Wrapper = "div";

const Login = () => (
  <Wrapper>
    <Form>
      <Form.Errors />
      <Form.Field name="username" placeholder="Type your username..." />
      <Form.SubmitButton>Join the DoorDash Chat!</Form.SubmitButton>
    </Form>
  </Wrapper>
);

export default Login;
