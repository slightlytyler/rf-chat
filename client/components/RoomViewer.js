import React from "react";
import MessageCreator from "./MessageCreator";
import MessageList from "./MessageList";
import RoomMemberList from "./RoomMemberList";

const Wrapper = "div";

const Header = "div";

const Body = "div";

const Footer = "div";

const Title = "div";

const MEMBERS = [
  { name: "Ryan Gonzales" },
  { name: "Cathleen" },
  { name: "Grover" },
  { name: "Abdul" },
  { name: "Dude" }
];

const MESSAGES = [
  {
    sender: { name: "Cathleen" },
    text: "Hey whats up"
  },
  {
    sender: { name: "Grover" },
    text: "First part"
  },
  {
    sender: { name: "Grover" },
    text: "Second part"
  },
  {
    sender: { name: "Tyler" },
    text: "This is my own message"
  }
];

const ROOM = { name: "Analytics" };

const RoomViewer = props => (
  <Wrapper>
    <Header>
      <Title>{ROOM.name}</Title>
      <RoomMemberList members={MEMBERS} />
    </Header>
    <Body>
      <MessageList messages={MESSAGES} />
    </Body>
    <Footer>
      <MessageCreator />
    </Footer>
  </Wrapper>
);

export default RoomViewer;
