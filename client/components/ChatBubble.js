import styled from "@emotion/styled";
import React from "react";
import Branch from "./Branch";

const isTheirs = possessive => possessive === "theirs";

const Wrapper = styled("div")`
  &:not(:first-of-type) {
    margin-top: ${props => props.theme.spacing.md};
  }
`;

const Row = styled("div")`
  display: flex;
`;

const Sender = styled("div")`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.color.darkGray};
`;

const Text = styled("div")`
  width: 50%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  margin-left: ${props => (isTheirs(props.possessive) ? 0 : "auto")};
  color: ${props =>
    isTheirs(props.possessive)
      ? props.theme.color.black
      : props.theme.color.white};
  background-color: ${props =>
    isTheirs(props.possessive)
      ? props.theme.color.white
      : props.theme.color.pink};
  border-radius: 20px;
`;

const ChatBubble = props => (
  <Wrapper>
    <Branch
      condition={isTheirs(props.possessive)}
      renderLeft={() => (
        <Row>
          <Sender>{props.message.name}</Sender>
        </Row>
      )}
    />
    <Row>
      <Text possessive={props.possessive}>{props.message.message}</Text>
    </Row>
  </Wrapper>
);

ChatBubble.Sender = Sender;
ChatBubble.Text = Text;

export default ChatBubble;
