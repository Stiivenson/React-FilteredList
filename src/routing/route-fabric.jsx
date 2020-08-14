import React from 'react';

import { Switch } from 'react-router-dom';
import RouteBuilder from './route-builder';

import App from '../components/app';

const routes = [
  {
    path: '/',
    component: App,
  },
];

export default function RouteFabric() {
  return (
    <>
      <Switch>
        {routes.map(({ path, component }) => (
          <RouteBuilder key={path} path={path} component={component} />
        ))}
      </Switch>
    </>
  );
}
