import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routeCodes } from '../constants/routes';
import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/common/MainPage';

class App extends Component {
  render() {
    if (true) {
      return (
        <Switch>
          <Redirect exact from={routeCodes.HOME} to={routeCodes.SIGN_IN} />
          <Route exact path={routeCodes.SIGN_IN} component={LoginPage} />
          <Route exact path={routeCodes.SIGN_UP} component={LoginPage} />
        </Switch>
      );
    }
    return <MainPage />
  }
}

export default App;
