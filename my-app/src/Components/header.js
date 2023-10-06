import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './styles/header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        John Henry
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <MenuIcon />
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className='nav-link'><a href="#about">About</a></li>
          <li className='nav-link'><a href="#experience">Experience</a></li>
          <li className='nav-link'><a href="#projects">Projects</a></li>
          <li className='nav-link'><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
