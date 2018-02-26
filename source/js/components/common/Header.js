import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='headerContainer'>
        <div className='header'>
          <h3>Hi, name</h3>
          <button>Log out</button>
        </div>
      </div>

    );
  }
}

export default Header;
