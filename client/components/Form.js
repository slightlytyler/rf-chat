import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";
import FormField from "./FormField";

const Form = styled("form")`
  width: initial;
`;

const Errors = "div";

const SubmitButton = props => <Button type="submit" {...props} />;

Form.Errors = Errors;
Form.Field = FormField;
Form.SubmitButton = SubmitButton;

export default Form;
