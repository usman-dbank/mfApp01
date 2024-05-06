import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app';
import reportWebVitals from './report-web-vitals';
import 'reflect-metadata';
import './assets/styles/index.less';
import { getVersionInfo } from './services/version-info';
import Store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const renderApp = () =>
  root.render(
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

(async () => {
  await getVersionInfo();
  renderApp();
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
