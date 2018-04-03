import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { routeCodes, publicPath } from '../../constants/routes';
import Header from '../../components/common/Header';
import OverviewPage from '../overview/OverviewPage';
import CreateNotePage from '../create/CreateNotePage';
import PreviewNote from '../../components/create/PreviewNote';

const MainPage = (props) => {
  return (    
    <div>
      <Header history={props.history}/>
      <Switch>
        <Route exact path={publicPath} component={OverviewPage} />
        <Route exact path={routeCodes.CREATE_PAGE} component={CreateNotePage} />
        <Route path={`${routeCodes.CREATE_PAGE}/:id`} component={CreateNotePage} />
      </Switch>
    </div>
  );
}

export default MainPage;
