import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/header';
import Review from './components/review';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Review />
  </React.StrictMode>
);
