import React, { Component } from "react";
import propTypes from "prop-types";

class Searchbar extends Component {
  static propTypes = { onSubmit: propTypes.func };
  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={(event) => this.props.onSubmit(event)}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
