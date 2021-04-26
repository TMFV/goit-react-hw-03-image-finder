import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.imagesArray.map((image, idx) => {
          return (
            <ImageGalleryItem
              key={uuidv4()}
              imageLink={image.previewURL}
              imagAlt={image.tags}
              largeImageURL={image.largeImageURL}
              modalFn={this.props.modalFn}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
