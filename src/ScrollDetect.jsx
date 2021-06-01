import React from "react";

export function ScrollDetect(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrollDistance: 0,
      };
    }

    setScrollDistance = () => {
      this.setState({ scrollDistance: window.scrollY });
    };

    componentDidMount() {
      window.addEventListener("scroll", this.setScrollDistance);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.setScrollDistance);
    }

    render() {
      return <WrappedComponent {...this.props} scrolled={false} />;
    }
  };
}
