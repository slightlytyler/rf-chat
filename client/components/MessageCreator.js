import React from "react";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const Wrapper = "div";

const MessageCreator = props => (
  <Wrapper>
    <Form>
      <Form.Errors />
      <Form.Field
        name="text"
        component={TextInput}
        placeholder="Type a message..."
      />
      <Form.SubmitButton>Send</Form.SubmitButton>
    </Form>
  </Wrapper>
);

export default MessageCreator;
