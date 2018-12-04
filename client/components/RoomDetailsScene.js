import styled from "@emotion/styled";
import React from "react";
import effect from "../utils/effect";
import { Mutation, Query } from "./Api";
import AuthHandler from "./AuthHandler";
import MessageCreator from "./MessageCreator";
import MessageList from "./MessageList";
import RoomMemberList from "./RoomMemberList";
import ScrollHandler from "./ScrollHandler";
import WaitFor from "./WaitFor";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
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
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

const Body = styled(ScrollHandler.View)`
  flex: 1 1 auto;
  padding: ${props => props.theme.spacing.md};
`;

const Footer = styled("div")`
  z-index: 10;
  flex-shrink: 0;
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.color.white};
  box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.15);
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
                // This is hacky. We'll have to improve this API with
                // "scroll to message" functionality to make it :ok_hand:
                <ScrollHandler initialPosition={100000}>
                  <Body>
                    <WaitFor
                      condition={isLoadingMessages}
                      render={() => <MessageList messages={messages} />}
                    />
                  </Body>
                  <Footer>
                    <AuthHandler.Consumer>
                      {({ session }) => (
                        <ScrollHandler.Consumer>
                          {({ scrollBottom }) => (
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
                                      name: session.viewer
                                    })
                                      .then(effect(optimisticUpdate))
                                      .then(effect(scrollBottom));
                                  }}
                                />
                              )}
                            </Mutation>
                          )}
                        </ScrollHandler.Consumer>
                      )}
                    </AuthHandler.Consumer>
                  </Footer>
                </ScrollHandler>
              )}
            </Query>
          </Wrapper>
        )}
      />
    )}
  </Query>
);

export default RoomDetailsScene;
