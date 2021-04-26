import React, { Component } from "react";

class ImageGalleryItem extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={(e) =>
            this.props.modalFn(e.target.attributes[1].textContent)
          }
          src={this.props.imageLink}
          alt={this.props.imageAlt}
          data-large={this.props.largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
