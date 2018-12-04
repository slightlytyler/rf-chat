import React from "react";
import ChatBubble from "./ChatBubble";

const Wrapper = "div";

const MessageList = props => (
  <Wrapper>
    {props.messages.map(m => (
      <ChatBubble key={m.text}>
        <ChatBubble.Sender>{m.sender.name}</ChatBubble.Sender>
        <ChatBubble.Text>{m.text}</ChatBubble.Text>
      </ChatBubble>
    ))}
  </Wrapper>
);

export default MessageList;
