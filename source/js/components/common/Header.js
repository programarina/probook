import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions/users';

class Header extends Component {
  componentDidMount(){
    this.props.getUser('1');
  }
  logOutAction = () => {
    console.log(this.props.user.get('user'));
  }

  render() {
    return (
      <div className='headerContainer'>
        <div className='header'>
          <h3>Hi,</h3>
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

function mapDispatchToProps(dispatch) {
  return { getUser: (id) => dispatch(getUser(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
