import { kebabCase } from "lodash/fp";
import React from "react";
import { NavLink } from "react-router-dom";
import List from "./List";
import Menu from "./Menu";

const Item = Menu.Item.withComponent(NavLink);

const RoomList = props => (
  <Menu>
    <List
      data={props.rooms}
      renderItem={r => {
        const roomPath = `/r/${kebabCase(r.name)}`;
        return (
          <Item
            isActive={match => {
              if (!match) return false;
              return match.url === roomPath;
            }}
            key={r.name}
            to={roomPath}
          >
            {r.name}
          </Item>
        );
      }}
    />
  </Menu>
);

export default RoomList;
