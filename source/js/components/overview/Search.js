import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      placeholder:'Search'
    };
    this.bounceTimeout;
  };

  handleSearch = ({ target }) => {
    this.setState({ searchString: target.value });
  }

  debounce = () => {
    clearTimeout(this.bounceTimeout);
    this.bounceTimeout = setTimeout(() => {
      this.props.searchTerm(this.state.searchString);
    }, 500);
  }
  
  clearTimer = () =>{
    clearTimeout(this.bounceTimeout);
  }

  render() {
    return (
      <section className='searchForm'>
        <input
          type='text'
          placeholder={this.state.placeholder}
          onFocus={()=>this.setState({placeholder:''})}
          onBlur={()=>this.setState({placeholder:'Search'})}
          value={this.state.searchString}
          onChange={this.handleSearch}
          onKeyUp={this.debounce}
          onKeyDown={this.clearTimer} />
      </section>
    );
  }
}

export default Search;
