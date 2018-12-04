import styled from "@emotion/styled";

const TextInput = styled("input")`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-size: 1.35rem;
  color: ${props => props.theme.color.type};
  border: 1px solid ${props => props.theme.color.lightGray};
  border-radius: 3px;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
`;

export default TextInput;
