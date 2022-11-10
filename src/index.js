import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './components/login';
import Header from './components/header';
import Signup from './components/sign-up';
import Catalog from './components/catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Catalog />
    <Signup />
    <Login />
  </React.StrictMode>
);
