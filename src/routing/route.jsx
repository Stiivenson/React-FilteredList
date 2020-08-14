import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import RouteFabric from './route-fabric';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouteFabric />
    </BrowserRouter>
  );
};

export default AppRouter;
