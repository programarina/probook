import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import SignInForm from '../../components/login/SignInForm';
import SignUpForm from '../../components/login/SignUpForm';

class LoginPage extends Component {
  render() {
    return (
      <div className='loginPage'>
        <h1>Welcome to ProBook</h1>
        <div className='formContainer'>
          <Link to='/'>
            <h3>Sign in</h3>
          </Link>
          <Link to='/signup'>
            <h3>Sign up</h3>
          </Link>
          <Switch>
            <Route exact path='/' component={ SignInForm } />
            <Route path='/signup' component={ SignUpForm } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default LoginPage;
