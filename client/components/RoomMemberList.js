import React from "react";

const Wrapper = "div";

const RoomMemberList = props => (
  <Wrapper>{props.members.map(m => m.name).join(", ")}</Wrapper>
);

export default RoomMemberList;
