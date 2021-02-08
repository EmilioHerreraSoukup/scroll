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



  // We want to call the fake api when the app is Container is loaded
  // this.mockApiFetch(true, 3000)

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
