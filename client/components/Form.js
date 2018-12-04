import styled from "@emotion/styled";
import { fromPairs } from "lodash/fp";
import React from "react";
import Button from "./Button";
import FormField from "./FormField";

const extractFormData = formHtmlEl => {
  const formData = new FormData(formHtmlEl);
  let data = {};
  for (const [k, v] of formData.entries()) {
    data[k] = v;
  }
  return data;
};

const Wrapper = styled("form")`
  display: flex;
  flex-direction: column;
`;

const Errors = "div";

const Actions = styled("div")`
  margin-top: ${props => props.theme.spacing.md};
`;

const SubmitButton = props => <Button type="submit" {...props} />;

const defaultProps = {
  mapPropsToValues: () => null
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    const values = props.mapPropsToValues(props);
    this.state = {
      errors: null,
      isSubmitting: false,
      values
    };
    this.formActions = {
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

  handleSubmit = e => {
    e.preventDefault();
    const values = extractFormData(e.target);
    this.setState({ values });
    this.props.onSubmit(values, this.formActions);
  };

  render() {
    return (
      <Wrapper className={this.props.className} onSubmit={this.handleSubmit}>
        {this.props.children}
      </Wrapper>
    );
  }
}

Form.defaultProps = defaultProps;

Form.Actions = Actions;
Form.Errors = Errors;
Form.Field = FormField;
Form.SubmitButton = SubmitButton;

export default Form;
