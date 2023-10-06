import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from '../Assets/image.jpg';
import './styles/home.css';

const Home = () => {
  const openResume = () => {
    window.open('./assets/resume-example.pdf');
  };

  const handleContactInfo = () => {
    // Handle the button click action for the "Contact Info" button
    // For example, you can navigate programmatically or perform some other action
    console.log('Contact Info button clicked');
  };

  return (
    <section id="profile" className="home-section">
      <div className="section-pic-container">
        <img src={Image} alt="John Doe profile" />
      </div>
      <div className="section-text">
        <p className="section-text-p1">Hello, I'm</p>
        <h1 className="title">John Henry</h1>
        <p className="section-text-p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={openResume}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={handleContactInfo}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <LinkedInIcon
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BFmp8phbYQs6UkMKnQwxQEw%3D%3D')}
          />
          <GitHubIcon
            className="icon"
            onClick={() => window.open('https://github.com/HenryJS')}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
