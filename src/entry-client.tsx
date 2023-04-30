import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './store/store';
import React from 'react';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
