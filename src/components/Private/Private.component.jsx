import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAppContext } from '../../state/AppProvider';

function Private({ children, ...rest }) {
  const { state } = useAppContext();
  const { authenticated } = state;

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
