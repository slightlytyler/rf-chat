import axios from "axios";
import { trimChars } from "lodash/fp";
import React from "react";

const domain = "http://localhost:8080";

const prefix = "api";

const buildUrl = endpoint =>
  [domain, prefix, trimChars("/", endpoint)].join("/");

const rejectErrorResponses = res =>
  res.data.error ? Promise.reject(res.data.error) : res;

const extractErrors = err => {
  console.error(err);
  // Error handling? :fidget_spinner
  return "An error occured";
};

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      errors: null,
      isLoading: true,
      update: this.update
    };
  }

  componentDidMount() {
    this.makeQuery();
  }

  componentDidUpdate(prevProps) {
    if (this.props.endpoint !== prevProps.endpoint) {
      this.setState({ isLoading: true });
      this.makeQuery();
    }
  }

  update = fn =>
    this.setState(state => ({
      data: fn(state.data)
    }));

  makeQuery = () => {
    axios
      .get(buildUrl(this.props.endpoint))
      .then(rejectErrorResponses)
      .then(res => this.setState({ data: res.data, isLoading: false }))
      .catch(res =>
        this.setState({ errors: extractErrors(res), isLoading: false })
      );
  };

  render() {
    return this.props.children(this.state);
  }
}

class Mutation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mutate: this.makeMutation
    };
  }

  makeMutation = data =>
    axios
      .post(buildUrl(this.props.endpoint), data)
      .then(rejectErrorResponses)
      .then(res => res.data)
      .catch(extractErrors);

  render() {
    return this.props.children(this.state);
  }
}

export { Mutation, Query };
