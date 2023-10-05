import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        John Henry
      </div>
      <nav className="nav-links">
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
