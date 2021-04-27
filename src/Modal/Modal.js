import React, { Component } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static propTypes = { closeFn: propTypes.func, loader: propTypes.func };

  componentDidMount() {
    console.log("Modal componentdidMount");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeFn();
    }
  };
  handleBackdrope = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeFn();
    }
  };

  componentWillUnmount() {
    console.log(" Modal componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrope}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
