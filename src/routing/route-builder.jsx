import React from 'react';

import { Route } from 'react-router-dom';

export default function RouteBuilder(route) {
  return <Route path={route.path} render={() => <route.component />} />;
}
