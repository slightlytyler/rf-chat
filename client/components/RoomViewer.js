import styled from "@emotion/styled";
import React from "react";
import MessageCreator from "./MessageCreator";
import MessageList from "./MessageList";
import RoomMemberList from "./RoomMemberList";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled("div")`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.color.darkGray};
`;

const Body = styled("div")`
  flex: 1 0 auto;
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.color.lightGray};
  box-shadow: inset 0px 11px 8px -10px rgba(0, 0, 0, 0.2),
    inset 0px -8px 5px -8px rgba(0, 0, 0, 0.2);
`;

const Footer = styled("div")`
  padding: ${props => props.theme.spacing.md};
`;

const Title = styled("div")`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.75rem;
`;

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
