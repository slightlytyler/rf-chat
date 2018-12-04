import { css, Global } from "@emotion/core";
import React from "react";

const styles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
