import styled from "@emotion/styled";
import { noop, omit } from "lodash/fp";
import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";

const Context = React.createContext({
  errors: null,
  handleChange: noop,
  isSubmitting: false,
  values: {}
});

const Wrapper = styled("form")`
  display: flex;
  flex-direction: column;
`;

const Errors = "div";

const Actions = styled("div")`
  margin-top: ${props => props.theme.spacing.md};
`;

const SubmitButton = props => <Button type="submit" {...props} />;

const FormField = props => {
  const Input = props.component || TextInput;
  const childProps = omit(["component"], props);
  return (
    <Context.Consumer>
      {({ values, handleChange }) => (
        <Input
          {...childProps}
          onChange={handleChange}
          value={values[props.name]}
        />
      )}
    </Context.Consumer>
  );
};

const mapChildProps = omit(["children", "initialValues", "onSubmit"]);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      handleChange: this.handleChange,
      isSubmitting: false,
      values: props.initialValues
    };
    this.formHelpers = {
      setErrors: this.setErrors,
      setSubmitting: this.setSubmitting,
      setValues: this.setValues
    };
  }

  setErrors = errors =>
    this.setState(state => ({
      errors: Object.assign({}, state.errors, errors)
    }));

  setSubmitting = isSubmitting =>
    this.setState(state => ({
      isSubmitting: Object.assign({}, state.isSubmitting, isSubmitting)
    }));

  setValues = values =>
    this.setState(state => ({
      values: Object.assign({}, state.values, values)
    }));

  handleChange = e => this.setValues({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.values, this.formHelpers);
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <Wrapper {...mapChildProps(this.props)} onSubmit={this.handleSubmit}>
          {this.props.children}
        </Wrapper>
      </Context.Provider>
    );
  }
}

Form.Actions = Actions;
Form.Errors = Errors;
Form.Field = FormField;
Form.SubmitButton = SubmitButton;

export default Form;
