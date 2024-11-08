import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Openings from "./components/Openings";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs/>} />

        {/* <Route path="/overview" element={<h2>Company Overview</h2>} /> */}
        {/* <Route path="/team" element={<h2>Team Intellect Resource</h2>} />
        <Route path="/differentiator" element={<h2>Our Differentiator</h2>} />
        <Route path="/work" element={<h2>Work @ Intellect Resource</h2>} /> */}
        <Route path="/services" element={<Service/>} />
        {/* <Route path="/vision" element={<h2>Vision Page</h2>} /> */}
        <Route path="/openings" element={<Openings/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
