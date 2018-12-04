import React from "react";
import { NavLink } from "react-router-dom";
import List from "./List";
import Menu from "./Menu";

const Item = Menu.Item.withComponent(NavLink);

const RoomList = props => (
  <Menu>
    <List
      data={props.rooms}
      renderItem={r => (
        <Item key={r.id} to={`/r/${r.id}`}>
          {r.name}
        </Item>
      )}
    />
  </Menu>
);

export default RoomList;
