import styled from "@emotion/styled";
import React from "react";
import Branch from "./Branch";
import List from "./List";

const Wrapper = styled("div")`
  display: flex;
  font-size: 1.15rem;
`;

const Item = styled("div")`
  &:first-of-type {
    color: ${props => props.theme.color.pink};
  }
`;

const RoomMemberList = props => (
  <Wrapper>
    <List
      data={props.members}
      renderItem={(m, i) => (
        <React.Fragment key={m.name}>
          <Item>{m.name}</Item>
          <Branch
            condition={i !== props.members.length - 1}
            renderLeft={() => <span>{","}&nbsp;</span>}
          />
        </React.Fragment>
      )}
    />
  </Wrapper>
);

export default RoomMemberList;
