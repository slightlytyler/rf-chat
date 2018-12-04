import { kebabCase } from "lodash/fp";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Avatar from "./Avatar";
import Container from "./Container";
import Layout from "./Layout";
import Login from "./Login";
import RoomList from "./RoomList";
import RoomViewer from "./RoomViewer";

const ROOMS = [
  {
    name: "Analytics"
  },
  {
    name: "Business"
  },
  {
    name: "Design"
  },
  {
    name: "Engineering"
  },
  {
    name: "HR"
  },
  {
    name: "Operations"
  },
  {
    name: "Special Ops"
  }
];

const SESSION = {
  authenticatedAt: "2018-12-04T04:34:48.936Z",
  viewer: { name: "Tyler Martinez" }
};

const App = () => (
  <Container>
    <Switch>
      <Route path="/login" component={Login} />
      <AuthenticatedRoute
        render={() => (
          <Layout>
            <Layout.Sidebar>
              <Avatar session={SESSION} />
              <RoomList rooms={ROOMS} />
            </Layout.Sidebar>
            <Layout.Content>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/r/:roomId" component={RoomViewer} />
                <Redirect to={`/r/${kebabCase(ROOMS[0].name)}`} />
              </Switch>
            </Layout.Content>
          </Layout>
        )}
      />
    </Switch>
  </Container>
);

export default App;
