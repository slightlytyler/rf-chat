import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Query } from "./Api";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AuthHandler from "./AuthHandler";
import Avatar from "./Avatar";
import Container from "./Container";
import Layout from "./Layout";
import Login from "./Login";
import RoomList from "./RoomList";
import RoomViewer from "./RoomViewer";
import WaitFor from "./WaitFor";

const App = () => (
  <Container>
    <Route
      render={({ history }) => (
        <AuthHandler onAuthChange={() => history.push("/")}>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthenticatedRoute
              render={() => (
                <Layout>
                  <Query endpoint="/rooms">
                    {({ data, isLoading }) => (
                      <React.Fragment>
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
                                <Route
                                  path="/r/:roomId"
                                  component={RoomViewer}
                                />
                                <Redirect to={`/r/${data[0].id}`} />
                              </Switch>
                            )}
                          />
                        </Layout.Content>
                      </React.Fragment>
                    )}
                  </Query>
                </Layout>
              )}
            />
          </Switch>
        </AuthHandler>
      )}
    />
  </Container>
);

export default App;
