import React from 'react';

function HomePage() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <img src="https://via.placeholder.com/150x50" alt="Logo" />
        <button className="btn btn-warning">ENQUIRY NOW</button>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Company Overview</a></li>
                <li><a className="dropdown-item" href="#">Team Intellect Resource</a></li>
                <li><a className="dropdown-item" href="#">Our Differentiator</a></li>
                <li><a className="dropdown-item" href="#">Work @ Intellect Resource</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Vision</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Openings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Banner */}
      <div className="banner text-center p-5" style={{ background: 'linear-gradient(to top, #e0f7e0, white)' }}>
        <h1 className="display-5">
          HOT SPOT FOR <span style={{ color: 'orange' }}>JOB SEEKERS</span> AND <span style={{ color: 'orange' }}>EMPLOYERS</span>
        </h1>
      </div>

      {/* Services Section */}
      <div className="row text-center py-5 bg-info text-white">
        <div className="col">
          <h2>01</h2>
          <p>Professional Services</p>
        </div>
        <div className="col">
          <h2>02</h2>
          <p>Consulting Services</p>
        </div>
        <div className="col">
          <h2>03</h2>
          <p>Human Resource Outsourcing</p>
        </div>
      </div>

      {/* Job & Candidate Sections */}
      <div className="row text-center py-5">
        <div className="col-md-6">
          <h3>ARE YOU LOOKING FOR A JOB?</h3>
          <p>
            Whether you are looking for a permanent, contract, or contract-to-hire position, 
            we’ll work diligently to find the right job for you.
          </p>
        </div>
        <div className="col-md-6">
          <h3>ARE YOU LOOKING FOR A CANDIDATE?</h3>
          <p>
            Contact our offices for a focused search for your next ideal candidate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
