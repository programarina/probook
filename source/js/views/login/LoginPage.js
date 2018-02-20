import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import SignInForm from '../../components/login/SignInForm';
import SignUpForm from '../../components/login/SignUpForm';

class LoginPage extends Component {
    render() {
        return (
            <div className='loginPage'>
                <h1>Welcome to ProBook</h1>
                <div className='formContainer'>
                    <Link to='/signin'><h3>Sign in</h3></Link>
                    <Link to='/signup'><h3>Sign up</h3></Link>
                    
                    <Switch>
                        <Redirect exact from='/' to='/signin' />
                        <Route  path="/signin" component={SignInForm} />
                        <Route path="/signup" component={SignUpForm} />
                    </Switch>
                </div>
            </div>

        );
    }
}

export default LoginPage;