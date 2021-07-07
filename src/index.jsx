import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import AppProvider from './state/AppProvider';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById('root')
);
