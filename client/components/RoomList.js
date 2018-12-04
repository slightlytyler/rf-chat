import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Item = Menu.Item.withComponent(NavLink);

const RoomList = props => (
  <Menu>
    {props.rooms.map(r => (
      <Item key={r.name} to={`/r/${r.name}`}>
        {r.name}
      </Item>
    ))}
  </Menu>
);

export default RoomList;
