import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import SignInForm from '../../components/login/SignInForm';
import SignUpForm from '../../components/login/SignUpForm';
import { routeCodes } from '../../constants/routes';

class LoginPage extends Component {
  render() {
    return (
      <div className='loginPage'>
        <h1>Welcome to ProBook</h1>
        <div className='formContainer'>
          <Link to={routeCodes.SIGN_IN}>
            <h3>Sign in</h3>
          </Link>
          <Link to={routeCodes.SIGN_UP}>
            <h3>Sign up</h3>
          </Link>
          <Switch>
            <Route exact path={routeCodes.SIGN_IN} component={SignInForm} />
            <Route path={routeCodes.SIGN_UP} component={SignUpForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default LoginPage;
