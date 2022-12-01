import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/header';
import Purchase from './components/purchase';
import Barcode from './components/barcode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Purchase />
    <Barcode />
  </React.StrictMode>
);
