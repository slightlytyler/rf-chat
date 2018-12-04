import styled from "@emotion/styled";
import React from "react";

const Header = styled("h1")`
  font-family: sans-serif;
`;

const App = () => (
  <div>
    <Header data-testid="header">DoorDash Chat</Header>
  </div>
);

export default App;
