import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Button extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    return (
      <button
        className="Button"
        key={uuidv4()}
        type="button"
        onClick={(event) => console.log(event)}
      >
        Load more
      </button>
    );
  }
}

export default Button;
