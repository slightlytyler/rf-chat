import styled from "@emotion/styled";

const defaultProps = {
  type: "button"
};

const Button = styled("button")`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  font-size: 1.5rem;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.pink};
  border-width: 0;
  border-radius: 3px;
  cursor: pointer;
`;

Button.defaultProps = defaultProps;

export default Button;
