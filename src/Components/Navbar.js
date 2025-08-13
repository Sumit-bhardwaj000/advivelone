import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-logo">
          <span className="logo-part1">Advice</span>
          <span className="logo-part2">Kuber Shatu</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Servicepage" className="nav-links" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Aboutpage" className="nav-links" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contactpage" className="nav-links" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item cta">
            <Link to="/Form" className="nav-links cta-button" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;