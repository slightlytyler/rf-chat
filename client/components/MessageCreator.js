import styled from "@emotion/styled";
import React from "react";
import { Mutation } from "./Api";
import AuthHandler from "./AuthHandler";
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
  <AuthHandler.Consumer>
    {({ session }) => (
      <Mutation endpoint={`/rooms/${props.match.params.roomId}/messages`}>
        {({ mutate }) => (
          <HorizontalForm
            onSubmit={(values, { setValues }) =>
              mutate({
                message: values.message,
                name: session.viewer.name
              }).then(newMessage => {
                props.updateMessages(prevMessages => [
                  ...prevMessages,
                  newMessage
                ]);
                setValues({ message: "" });
              })
            }
          >
            <Form.Errors />
            <Form.Field
              name="message"
              component={FluidTextInput}
              placeholder="Type a message..."
            />
            <SubmitButton>Send</SubmitButton>
          </HorizontalForm>
        )}
      </Mutation>
    )}
  </AuthHandler.Consumer>
);

export default MessageCreator;
