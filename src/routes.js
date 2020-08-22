import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AddNaver from './pages/AddNaver';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/add-naver" component={AddNaver} />
    </BrowserRouter>
  );
}

export default Routes;