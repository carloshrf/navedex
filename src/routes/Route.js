import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

const Route = ({
  isPrivate = false, 
  component: Component, 
  ...rest
}) => {
  const { userId } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={(props) => {
        return isPrivate === !!userId ? (
          <Component props={props} />
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