import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { logo, heroimg } from "../../Data/Home/Content";
import { FaBars, FaTimes } from "react-icons/fa"; 

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />} 
        </div>

        <div className="logo">
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={`nav-link ${menuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={closeMenu}>Categories</li>
            <li onClick={closeMenu}>About</li>
            <li onClick={closeMenu}>Contact Us</li>
            <li>
              <button onClick={closeMenu}>
                <Link to="/signup">Signup</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>

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
