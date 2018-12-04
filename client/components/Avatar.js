import styled from "@emotion/styled";
import React from "react";

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

const Avatar = props => (
  <Wrapper>
    <Viewer>{props.session.viewer.name}</Viewer>
    <OnlineSince>Online for 12 minutes</OnlineSince>
  </Wrapper>
);

export default Avatar;
