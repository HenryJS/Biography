import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import ExperienceIcon from '@mui/icons-material/WorkOutline';
import Me from '../Assets/me.jpg';
import './styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section__text__p1">Get To Know More</div>
      <div className="title">About Me</div>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={Me} alt="/" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <ExperienceIcon className="icon" />
              <div className="icon-title">Experience</div>
              <div className="icon-description">2+ years Frontend Development</div>
            </div>
            <div className="details-container">
              <SchoolIcon className="icon" />
              <div className="icon-title">Education</div>
              <div className="icon-description">B.Sc. Bachelors Degree<br />Computer Technology</div>
            </div>
          </div>
          <div className="text-container">
          <p>
              I'm a passionate software developer with over 2 years of experience in Frontend Development.
              My educational background includes a B.Sc. in Computer Technology.
              I specialize in creating elegant and user-friendly web applications, and I love to tackle complex problems.
              With a strong foundation in coding and problem-solving, I bring creativity and attention to detail to every project.
              My goal is to build innovative solutions that make a positive impact on the user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
