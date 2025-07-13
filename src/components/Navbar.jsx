import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/events', text: 'Events' },
    { path: '/achievements', text: 'Achievements' },
    { path: '/faculty', text: 'Faculty' },
    { path: '/office-bearers', text: 'Office Bearers' },
    { path: '/industry-alumni', text: 'Advisory Committee' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
  <img
    src="/images/icdc_logo.jpg" 
    alt="IC Design Club Logo"
    className="logo-img"
  />
</div>


        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => isActive ? 'active-link' : ''}
              onClick={closeMenu}
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="nav-icons">
          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
