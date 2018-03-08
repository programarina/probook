import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchString: ''
    };
  };
  
  handleSearch = ({ target }) => {
    this.setState({ searchString: target.value }, () => {
      this.props.searchTerm(this.state.searchString);
    });
  }

  render() {
    return (
      <section className='searchForm'>
        <input
          type='text'
          placeholder='Search'
          value={this.state.searchString}
          onChange={this.handleSearch} />
      </section>
    );
  }
}

export default Search;
