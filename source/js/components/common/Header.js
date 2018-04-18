import React, { Component } from 'react';
import { routeCodes } from '../../constants/routes';
import { connect } from 'react-redux';
import { getUser } from 'actions/users';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loader: false
    };
  }

  componentWillMount() {
    const id = localStorage.getItem('sessionId');
    this.props.getUser(id);
  }

  logOutAction = () => {
    localStorage.removeItem('sessionId');
    this.props.history.push(routeCodes.SIGN_IN, null);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loader !== this.props.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }
    if (nextProps.user !== this.props.user && !nextProps.loader) {
      this.setState({
        user: nextProps.user,
      });
    }
  }

  render() {
    const { user, loader } = this.state;
    if (loader) {
      return <p> </p>;
    }
    return (
      <div className='headerContainer'>
        <div className='header'>
          <h3>Hi, {user.username}</h3>
          <button
            onClick={this.logOutAction}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getUser: id => dispatch(getUser(id))
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.get('user'),
    loader: state.user.get('loading')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
