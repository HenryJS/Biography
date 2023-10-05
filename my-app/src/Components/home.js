import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from '../Assets/image.jpg';
import './styles/home.css';

const Home = () => {
  return (
    <section id="profile" className="home-section">
      <div className="section-pic-container">
        <img src={Image} alt="John Doe profile" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">John Doe</h1>
        <p className="section-text-p2">Frontend Developer</p>
        <div className="btn-container">
          <Button
            variant="outlined"
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </Button>
          <Button
            variant="outlined"
            className="btn btn-color-1"
            component={Link}
            to="/contact"
          >
            Contact Info
          </Button>
        </div>
        <div id="socials-container">
          <LinkedInIcon
            className="icon"
            onClick={() => window.open('https://linkedin.com/')}
          />
          <GitHubIcon
            className="icon"
            onClick={() => window.open('https://github.com/')}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
