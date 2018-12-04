import React from "react";

const Wrapper = "div";

const Viewer = "div";

const OnlineSince = "div";

const Avatar = props => (
  <Wrapper>
    <Viewer>{props.session.viewer.name}</Viewer>
    <OnlineSince>Online for 12 minutes</OnlineSince>
  </Wrapper>
);

export default Avatar;
