import React, { Component } from "react";
import { Info } from "./Info";
import { Loading } from "./Loading";

class Container extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  mockApiFetch = (success, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve({ status: "ready" });
        } else {
          reject({ status: "error" });
        }
      }, timeout);
    });
  };

  async componentDidMount() {
    const result = await this.mockApiFetch(true, 3000);

    if (result.status === "ready") {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="wrapper">
        {!this.state.loading && <Info />}
        {this.state.loading && <Loading />}
      </div>
    );
  }
}

export default Container;
