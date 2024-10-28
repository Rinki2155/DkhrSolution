import React from 'react';

function Header() {
  return (
<>
<div className="header-container"></div>
<div className="container d-flex justify-content-between align-items-center px-5 py-3">
      {/* Logo and Title */}
      <div className="d-flex align-items-center">
        <img
          src="Image/logo.jpg" 
          alt="Intellect Resource Logo"
          className="header-logo"
        />
        
      </div>

      {/* Enquiry Button */}
      {/* <button className="btn btn-warning header-btn">ENQUIRY NOW</button> */}
    </div></>
  );
}

export default Header;
