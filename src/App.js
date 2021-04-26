import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

const apiKey = "20461350-36527ad634bc0878b1b72e118";

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    searchWords: "",
    images: [],
    showModal: false,
    modalImage: "",
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  pushImagesToState = (response) => {
    const imagesFromResponse = response.data.hits;
    this.setState({ ...this.state, images: [...imagesFromResponse] });
  };
  setModalImage = (linkImg) => {
    return this.setState(({ modalImage }) => ({ modalImage: linkImg }));
  };
  openLargeImage = (linkImg) => {
    this.setModalImage(linkImg);
    this.toggleModal();
  };
  getImages() {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchWords}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => this.pushImagesToState(response));
  }

  searchFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[1].value);
    const searchWordsValue = event.target[1].value;
    this.setState({ searchWords: searchWordsValue });
    this.getImages();
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal closeFn={this.toggleModal}>
            <img src={this.state.modalImage} alt="modal" />
          </Modal>
        )}
        <Searchbar onSubmit={this.searchFormSubmit} />
        <ImageGallery
          imagesArray={this.state.images}
          modalFn={this.openLargeImage}
        ></ImageGallery>
        <Button />
      </div>
    );
  }
}

export default App;
