import styled from "@emotion/styled";
import React from "react";
import { Route } from "react-router-dom";
import { Query } from "./Api";
import MessageCreator from "./MessageCreator";
import MessageList from "./MessageList";
import RoomMemberList from "./RoomMemberList";
import WaitFor from "./WaitFor";

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
  background-color: ${props => props.theme.color.white};
`;

const Body = styled("div")`
  flex: 1 0 auto;
  padding: ${props => props.theme.spacing.md};
  box-shadow: inset 0px 11px 8px -10px rgba(0, 0, 0, 0.2),
    inset 0px -8px 5px -8px rgba(0, 0, 0, 0.2);
`;

const Footer = styled("div")`
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.color.white};
`;

const Title = styled("div")`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.75rem;
`;

const RoomViewer = props => (
  <Query endpoint={`/rooms/${props.match.params.roomId}`}>
    {({ data: room, isLoading: isLoadingRoom }) => (
      <WaitFor
        condition={isLoadingRoom}
        render={() => (
          <Wrapper>
            <Header>
              <Title>{room.name}</Title>
              <RoomMemberList members={room.users} />
            </Header>
            <Query endpoint={`/rooms/${props.match.params.roomId}/messages`}>
              {({
                data: messages,
                isLoading: isLoadingMessages,
                update: updateMessages
              }) => (
                <React.Fragment>
                  <Body>
                    <WaitFor
                      condition={isLoadingMessages}
                      render={() => <MessageList messages={messages} />}
                    />
                  </Body>
                  <Footer>
                    <Route
                      path={props.match.path}
                      render={routeProps => (
                        <MessageCreator
                          {...routeProps}
                          updateMessages={updateMessages}
                        />
                      )}
                    />
                  </Footer>
                </React.Fragment>
              )}
            </Query>
          </Wrapper>
        )}
      />
    )}
  </Query>
);

export default RoomViewer;
