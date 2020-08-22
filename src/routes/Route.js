import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

function Route({
  isPrivate = false, 
  Component, 
  ...rest
}) {
  const { userId } = useAuth();

  console.log(!!userId, isPrivate)

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!userId ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/',
            }}
          />
        )
      }} 
    />
  );
}

export default Route;