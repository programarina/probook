import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  logOutAction = () => {
    // localStorage.removeItem('sessionId');
    // console.log(this.props.user);
    // window.location.assign(`/signin`);
  }

  render() {
    return (
      <div className='headerContainer'>
        <div className='header'>
          <h3>Hi,{this.props.user.username}</h3>
          <button onClick={this.logOutAction}>Log out</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userSignIn
  }
}

export default connect(mapStateToProps)(Header);