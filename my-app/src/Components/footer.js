import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me on:</p>
      <div className="social-icons">
        <LinkedInIcon
          className="icon"
          onClick={() => window.open('https://linkedin.com/')}
        />
        <GitHubIcon
          className="icon"
          onClick={() => window.open('https://github.com/')}
        />
      </div>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
