import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";

const Container = props => (
  <BrowserRouter>
    <Theme>
      <GlobalStyles />
      {props.children}
    </Theme>
  </BrowserRouter>
);

export default Container;
