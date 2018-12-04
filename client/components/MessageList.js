import React from "react";
import ChatBubble from "./ChatBubble";
import List from "./List";

const Wrapper = "div";

const MessageList = props => (
  <Wrapper>
    <List
      data={props.messages}
      renderItem={m => (
        <ChatBubble key={m.id}>
          <ChatBubble.Sender>{m.name}</ChatBubble.Sender>
          <ChatBubble.Text>{m.message}</ChatBubble.Text>
        </ChatBubble>
      )}
    />
  </Wrapper>
);

export default MessageList;
