import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import AddNaver from '../pages/AddNaver';
import EditNaver from '../pages/EditNaver';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/login" component={Login} />
      <Route path="/edit-naver" component={EditNaver} isPrivate />
      <Route path="/create-naver" component={AddNaver} isPrivate />
      <Route component={() => (<div>Error 404. Page not found</div>)} />
    </Switch>
  );
}

export default Routes;