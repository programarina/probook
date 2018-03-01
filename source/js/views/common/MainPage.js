import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routeCodes, publicPath } from '../../constants/routes';
import Header from '../../components/common/Header';
import OverviewPage from '../overview/OverviewPage';
import CreateNotePage from '../create/CreateNotePage';

const MainPage = (props) => {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={publicPath} component={OverviewPage} />
        <Route path={routeCodes.CREATE_PAGE} component={CreateNotePage} />
      </Switch>
    </div>
  );
}

export default MainPage;