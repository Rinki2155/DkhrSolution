import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleItineraryMouseClick = () => {
    setShowItinerary(true);
  };

  const handleDestinationMouseClick = () => {
    setShowDestination(true);
  };
  const handleItineraryMouseClickRemove = () => {
    setShowItinerary(false);
  };

  const handleDestinationMouseClickRemove = () => {
    setShowDestination(false);
  };

  const navItem = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact US", path: "/contact-us" },
  ];

  const navData = navItem.map((menuItem, index) => (
    <li
      key={menuItem.name}
      className={`nav-item ${index === 0 ? "home-item" : ""}`}
      onClick={
        index === 2
          ? handleItineraryMouseClick
          : index === 3
          ? handleDestinationMouseClick
          : undefined
      }
      onMouseUp={
        index === 2
          ? handleItineraryMouseClickRemove
          : index === 3
          ? handleDestinationMouseClickRemove
          : undefined
      }
    >
      <Link to={menuItem.path} className="nav-link" onClick={toggleDrawer}>
        {menuItem.name}
      </Link>
    </li>
  ));

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="toggle-button">
          <button className="toggle-button" onClick={toggleDrawer}>
            ☰
          </button>
          <div>
            <Link to="/">
              <img
                src="Image/logo.jpg"
                alt="logo"
                className="nav-logo-small-screen"
              />
            </Link>
          </div>
        </div>
        <div className={`drawer ${drawerOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">
                {" "}
                <img src="Image/logo.jpg" alt="logo" className="nav-logo" />
              </Link>
            </li>
            {navData}
          </ul>
        </div>
      </nav>
    </div>
  );
};
