import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";
import FormField from "./FormField";

const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;

const Errors = "div";

const Actions = styled("div")`
  margin-top: ${props => props.theme.spacing.md};
`;

const SubmitButton = props => <Button type="submit" {...props} />;

Form.Actions = Actions;
Form.Errors = Errors;
Form.Field = FormField;
Form.SubmitButton = SubmitButton;

export default Form;
