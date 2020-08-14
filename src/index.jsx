import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routing/route';

import { Provider } from 'react-redux';
import store from './redux/store/configStore';

import './style/scss/template.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
