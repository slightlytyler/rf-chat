import styled from "@emotion/styled";
import Page from "./Page";

const Layout = styled(Page)`
  display: flex;
`;

const Sidebar = styled("div")`
  width: 20rem;
  height: 100%;
  background-color: ${props => props.theme.color.pink};
`;

const Content = styled("div")`
  flex: 1 0 auto;
  height: 100%;
  background-color: ${props => props.theme.color.lightGray};
`;

Layout.Sidebar = Sidebar;

Layout.Content = Content;

export default Layout;
