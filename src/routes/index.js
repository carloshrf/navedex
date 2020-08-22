import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import AddNaver from '../pages/AddNaver';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/create-naver" component={AddNaver} isPrivate />
    </Switch>
  );
}

export default Routes;