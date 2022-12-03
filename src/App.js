import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/sign-up';
import Login from './components/login';
import Catalog from './components/catalog';
import Purchase from './components/purchase';

export default function App() {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/Login" element={<Login />} />

      </Routes>
    </div>
  );
}