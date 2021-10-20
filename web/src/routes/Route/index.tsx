import React from 'react';
import { RouteProps as ReactRouteProps, Route as ReactRoute } from 'react-router-dom';

import DefaultLayout from '../../layouts/Default';

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactRoute
      {...rest}
      render={({ location }) => (
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      )}
    />
  );
};

export default Route;
