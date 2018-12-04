import styled from "@emotion/styled";
import React from "react";
import effect from "../utils/effect";
import Form from "./Form";
import TextInput from "./TextInput";

const HorizontalForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FluidTextInput = styled(TextInput)`
  flex: 1;
`;

const GhostButton = styled(Form.SubmitButton)`
  background-color: transparent;
  color: ${props => props.theme.color.blue};
`;

const SubmitButton = styled(GhostButton)`
  margin-left: ${props => props.theme.spacing.sm};
`;

const MessageCreator = props => (
  <HorizontalForm
    initialValues={{ message: "" }}
    onSubmit={(values, { setValues }) => {
      const resetValues = () => setValues({ message: "" });
      return props.handleSubmit(values).then(effect(resetValues));
    }}
  >
    <Form.Errors />
    <Form.Field
      name="message"
      component={FluidTextInput}
      placeholder="Type a message..."
    />
    <SubmitButton>Send</SubmitButton>
  </HorizontalForm>
);

export default MessageCreator;
