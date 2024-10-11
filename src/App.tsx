import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar } from './common/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './common/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './components/AboutUs';

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/destination" element={<Destination />} />
          <Route path="/search" element={<Search />} /> */}
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
