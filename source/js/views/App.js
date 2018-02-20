import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/main/mainPage';

class App extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/signin' />
                <Route  path="/signin" component={LoginPage} />
                <Route path="/main" component={MainPage} />
            </Switch>
        );
    }
}

export default App;