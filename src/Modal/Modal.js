import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    console.log("Modal componentdidMount");
  }
  componentWillUnmount() {
    console.log(" Modal componentWillUnmount");
  }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
