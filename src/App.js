import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/sign-up";
import Login from "./components/login";
import Catalog from "./components/catalog";
import Purchase from "./components/purchase";
import Barcode from "./components/Barcode";
import AdminLogin from "./components/admin-log-in";
import Review from "./components/review";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />

        <Route path="/catalog" element={<Catalog />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/Barcode" element={<Barcode />} />
        <Route path="/Review" element={<Review />} />
      </Routes>
    </div>
  );
}
