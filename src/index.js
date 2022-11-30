import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './components/login';
import Header from './components/header';
import Purchase from './components/purchase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Purchase />
  </React.StrictMode>
);
