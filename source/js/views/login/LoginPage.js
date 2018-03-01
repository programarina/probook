import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import SignInForm from '../../components/login/SignInForm';
import SignUpForm from '../../components/login/SignUpForm';
import { routeCodes } from '../../constants/routes';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      signInTab: true,
      signUpTab: false
    };
  }

  signInTab = () => {
    this.setState({
      signInTab: true,
      signUpTab: false
    });
  }

  signUpTab = () => {
    this.setState({
      signInTab: false,
      signUpTab: true
    });
  }

  render() {
    return (
      <div className='loginPage'>
        <h1>Welcome to ProBook</h1>
        <div className='formContainer'>
          <Link
            to={routeCodes.SIGN_IN}
            className={(this.state.signInTab) ? 'active' : 'nonActive'}
            onClick={this.signInTab}
          >
            <h3>Sign in</h3>
          </Link>
          <Link to={routeCodes.SIGN_UP}
            className={(this.state.signUpTab) ? 'active' : 'nonActive'}
            onClick={this.signUpTab}>
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
