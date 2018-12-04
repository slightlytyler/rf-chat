import React from "react";
import ChatBubble from "./ChatBubble";
import List from "./List";

const Wrapper = "div";

const MessageList = props => (
  <Wrapper>
    <List
      data={props.messages}
      renderItem={m => (
        <ChatBubble key={m.text}>
          <ChatBubble.Sender>{m.sender.name}</ChatBubble.Sender>
          <ChatBubble.Text>{m.text}</ChatBubble.Text>
        </ChatBubble>
      )}
    />
  </Wrapper>
);

export default MessageList;
