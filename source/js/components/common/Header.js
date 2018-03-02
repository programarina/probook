import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  logOutAction = () => {
    localStorage.removeItem('name');
    window.location.assign(`/signin`);
  }

  render() {
    return (
      <div className='headerContainer'>
        <div className='header'>
          <h3>Hi,{localStorage.getItem('name')}</h3>
          <button onClick={this.logOutAction}>Log out</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header);