import styled from "@emotion/styled";
import React from "react";
import AuthHandler from "./AuthHandler";
import RelativeTime from "./RelativeTime";

const Wrapper = styled("div")`
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.color.white};
`;

const Viewer = styled("div")`
  font-size: 1.5rem;
  font-weight: bold;
`;

const OnlineSince = styled("div")`
  margin-top: 0.35rem;
  font-weight: lighter;
`;

const Avatar = () => (
  <Wrapper>
    <AuthHandler.Consumer>
      {({ session }) => (
        <React.Fragment>
          <Viewer>{session.viewer}</Viewer>
          <OnlineSince>
            Online for <RelativeTime date={session.authenticatedAt} />
          </OnlineSince>
        </React.Fragment>
      )}
    </AuthHandler.Consumer>
  </Wrapper>
);

export default Avatar;
