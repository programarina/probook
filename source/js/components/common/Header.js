import React, { Component } from 'react';
import { redirectionService } from '../../services/redirectionService';
import { routeCodes } from '../../constants/routes';
import { connect } from 'react-redux';
import { getUser } from 'actions/users';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.props.getUser('1');
  }
  logOutAction = () => {
    localStorage.removeItem('sessionId');
    redirectionService.redirect(routeCodes.SIGN_IN);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.setState({
        user: nextProps.user
      });
    }
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return;
    }
    return (
      <div className='headerContainer'>
        <div className='header'>
          <h3>Hi, {user.name}</h3>
          <button onClick={this.logOutAction}>Log out</button>
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
    user: state.user.get('user')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
