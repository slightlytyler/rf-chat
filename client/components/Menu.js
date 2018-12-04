import styled from "@emotion/styled";

const Menu = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Item = styled("div")`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: 1.15rem;
  font-weight: lighter;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &.active {
    cursor: default;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

Menu.Item = Item;

export default Menu;
