import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../views/login/LoginPage';
import MainPage from '../views/main/mainPage';
import CreateNotePage from '../views/create/CreateNotePage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ LoginPage } />
        <Route exact path='/signup' component={ LoginPage } />
        <Route path='/main' component={ MainPage } />
        <Route path='/create' component={ CreateNotePage } />
      </Switch>
    );
  }
}

export default App;
