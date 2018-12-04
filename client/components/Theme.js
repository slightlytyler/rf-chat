import { ThemeProvider } from "emotion-theming";
import React from "react";

const baseColors = {
  pink: "#ff0f39",
  blue: "#468ee5",
  white: "#ffffff",
  black: "#000000",
  lightGray: "#eff1f2",
  darkGray: "#747474"
};

const spacing = {
  xs: ".5rem",
  sm: "1.25rem",
  md: "2rem",
  lg: "3rem"
};

const theme = {
  color: {
    ...baseColors,
    type: baseColors.black
  },
  spacing
};

const Theme = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
