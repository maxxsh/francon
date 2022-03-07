// import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import CareersPage from "./pages/Careers";
import PrivacyPage from "./pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
