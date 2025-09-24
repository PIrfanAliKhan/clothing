import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../../Data/Home/Logo.jpg";
import { heroimg } from "../../Data/Home/Content";
import { FaBars, FaTimes } from "react-icons/fa";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className={`nav-link ${menuOpen ? "active" : ""}`}>
          <ul>
            {/* Categories with submenu */}
            <li>
              Categories
              <ul className="submenu">
                <li>Resorts</li>
                <li>Spa</li>
                <li>Adventure</li>
                <li>Farm House</li>
              </ul>
            </li>

            {/* About with submenu */}
            <li>
              About
              <ul className="submenu">
                <li>Who We Are</li>
                <li>Our Vision</li>
                <li>Careers</li>
              </ul>
            </li>

            {/* Contact with submenu */}
            <li>
              Contact Us
              <ul className="submenu">
                <li>Email: info@example.com</li>
                <li>Phone: +91 9876543210</li>
              </ul>
            </li>

            <li>
              <button onClick={closeMenu}>
                <Link to="/signup">Signup</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="heroimage">
        <img src={heroimg} alt="heroimage" />
        <div className="caption">
          <h2>To explore offer click here</h2>
          <button>EXPLORE OFFERS</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
