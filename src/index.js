import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './components/login';
import Header from './components/header';
import Catalog from './components/catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Catalog />
  </React.StrictMode>
);
