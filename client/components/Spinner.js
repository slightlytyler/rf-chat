import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props =>
    props.invertColors ? props.theme.color.white : props.theme.color.black};
  font-size: 1.5rem;
`;

const Spinner = props => <Wrapper {...props}>Loading...</Wrapper>;

export default Spinner;
