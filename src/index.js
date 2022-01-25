import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import { worker } from 'mocks/browser';
import AppProvider from './providers/AppProvider';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
        <Root />
      </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
