import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Searchbar.css';

import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { search } = this.state;
    e.preventDefault();
    if (search.trim() === '') {
      return;
    }
    this.props.onSubmit(search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <FaSearch size="24" />
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.search}
            name="search"
            className="SearchForm-input "
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
