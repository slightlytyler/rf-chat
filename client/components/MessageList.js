import React from "react";
import AuthHandler from "./AuthHandler";
import ChatBubble from "./ChatBubble";
import List from "./List";

const Wrapper = "div";

const MessageList = props => (
  <Wrapper>
    <AuthHandler.Consumer>
      {({ session }) => (
        <List
          data={props.messages}
          renderItem={m => (
            <ChatBubble
              message={m}
              key={m.id}
              possessive={m.name === session.viewer.name ? "ours" : "theirs"}
            />
          )}
        />
      )}
    </AuthHandler.Consumer>
  </Wrapper>
);

export default MessageList;
