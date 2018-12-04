import axios from "axios";
import React from "react";

const domain = "http://localhost:8080";

const prefix = "api";

const buildUrl = endpoint => [domain, prefix, endpoint].join("/");

const extractErrors = err => {
  console.error(err);
  return "An error occured";
};

class Query extends React.Component {
  state = {
    data: null,
    errors: null,
    isLoading: true
  };

  componentDidMount() {
    this.makeRequest();
  }

  componentDidUpdate(prevProps) {
    if (this.props.endpoint !== prevProps.endpoint) {
      this.setState({ isLoading: true });
      this.makeRequest();
    }
  }

  makeRequest = () => {
    axios
      .get(buildUrl(this.props.endpoint))
      .then(res => this.setState({ data: res.data, isLoading: false }))
      .catch(res =>
        this.setState({ errors: extractErrors(res), isLoading: false })
      );
  };

  render() {
    return this.props.children(this.state);
  }
}

export default Query;
