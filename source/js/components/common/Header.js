import React, { Component } from 'react';
import { redirectionService } from '../../services/redirectionService';
import { routeCodes } from '../../constants/routes';

class Header extends Component {
  logOutAction = () => {
    localStorage.removeItem('sessionId');
    redirectionService.redirect(routeCodes.SIGN_IN);

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

export default Header;
