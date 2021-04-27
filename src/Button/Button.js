import React, { Component } from "react";
import propTypes from "prop-types";

class Button extends Component {
  static propTypes = { fn: propTypes.func };

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    return (
      <button className="Button" type="button" onClick={(e) => this.props.fn()}>
        Load more
      </button>
    );
  }
}

export default Button;
