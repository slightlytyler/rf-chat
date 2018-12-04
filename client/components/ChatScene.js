import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Query } from "./Api";
import Avatar from "./Avatar";
import Layout from "./Layout";
import RoomList from "./RoomList";
import RoomDetailsScene from "./RoomDetailsScene";
import WaitFor from "./WaitFor";

const ChatScene = props => (
  <Query endpoint="/rooms">
    {({ data, isLoading }) => (
      <Layout>
        <Layout.Sidebar>
          <Avatar />
          <WaitFor
            condition={isLoading}
            invertColors
            render={() => <RoomList rooms={data} />}
          />
        </Layout.Sidebar>
        <Layout.Content>
          <WaitFor
            condition={isLoading}
            render={() => (
              <Switch>
                <Route path="/r/:roomId" component={RoomDetailsScene} />
                <Redirect to={`/r/${data[0].id}`} />
              </Switch>
            )}
          />
        </Layout.Content>
      </Layout>
    )}
  </Query>
);

export default ChatScene;
