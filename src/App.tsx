import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <div>
      <Header />
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<h2>Company Overview</h2>} />
        <Route path="/team" element={<h2>Team Intellect Resource</h2>} />
        <Route path="/differentiator" element={<h2>Our Differentiator</h2>} />
        <Route path="/work" element={<h2>Work @ Intellect Resource</h2>} />
        <Route path="/services" element={<h2>Services Page</h2>} />
        <Route path="/vision" element={<h2>Vision Page</h2>} />
        <Route path="/openings" element={<h2>Openings Page</h2>} />
        <Route path="/contact" element={<h2>Contact Us</h2>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
