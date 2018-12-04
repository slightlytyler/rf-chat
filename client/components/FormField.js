import { omit } from "lodash/fp";
import React from "react";
import TextInput from "./TextInput";

const defaultProps = {
  component: TextInput
};

const FormField = props => {
  const Input = props.component;
  const childProps = omit(["component", "name"], props);
  return <Input {...childProps} />;
};

FormField.defaultProps;

export default FormField;
