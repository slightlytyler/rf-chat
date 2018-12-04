import styled from "@emotion/styled";
import React from "react";
import effect from "../utils/effect";
import { Mutation, Query } from "./Api";
import AuthHandler from "./AuthHandler";
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
  z-index: 10;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.color.darkGray};
  background-color: ${props => props.theme.color.white};
`;

const Body = styled("div")`
  flex: 1 1 auto;
  overflow: scroll;
  padding: ${props => props.theme.spacing.md};
  box-shadow: inset 0px 11px 8px -10px rgba(0, 0, 0, 0.2),
    inset 0px -8px 5px -8px rgba(0, 0, 0, 0.2);
`;

const Footer = styled("div")`
  z-index: 10;
  flex-shrink: 0;
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.color.white};
`;

const Title = styled("div")`
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: 1.75rem;
`;

const RoomDetailsScene = props => (
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
                    <AuthHandler.Consumer>
                      {({ session }) => (
                        <Mutation
                          endpoint={`/rooms/${
                            props.match.params.roomId
                          }/messages`}
                        >
                          {({ mutate }) => (
                            <MessageCreator
                              handleSubmit={values => {
                                const optimisticUpdate = newMessage =>
                                  updateMessages(prevMessages => [
                                    ...prevMessages,
                                    newMessage
                                  ]);
                                return mutate({
                                  message: values.message,
                                  name: session.viewer.name
                                }).then(effect(optimisticUpdate));
                              }}
                            />
                          )}
                        </Mutation>
                      )}
                    </AuthHandler.Consumer>
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

export default RoomDetailsScene;