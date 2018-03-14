import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routeCodes } from '../constants/routes';
import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/common/MainPage';

export default class App extends Component {

  render() {
    const storage = localStorage.getItem('sessionId');

    if (false) {
      return (
        <Switch>
          <Redirect exact from={routeCodes.HOME} to={routeCodes.SIGN_IN} />
          <Route path={routeCodes.SIGN_IN} component={LoginPage} />
          <Route path={routeCodes.SIGN_UP} component={LoginPage} />
        </Switch>
      );
    }
    return <MainPage />
  }
}


