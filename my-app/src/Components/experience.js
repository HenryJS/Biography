import React from 'react';
import { Work, School } from '@mui/icons-material';
import './styles/experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <p className="experience-sub-title">My Experience</p>
      <div className="experience-details-container">
        <article className="article-container">
          <Work className="icon" />
          <div>
            <h3>Complete Sports </h3>
            <p>Installed and configured Internet for a sports training centre in Kaptagat kenya, which doubles as a hotel for foreign athletes.</p>
          </div>
        </article>
        <article className="article-container">
          <Work className="icon" />
          <div>
            <h3>Eldo Pets</h3>
            <p>Designed an intuitive website for selling Pets</p>
          </div>
        </article>
        <article className="article-container">
          <Work className="icon" />
          <div>
            <h3>CBC App </h3>
            <p>Worked for CBC APP, tasked with developing intuitive UI</p>
          </div>
        </article>
        <article className="article-container">
          <School className="icon" />
          <div>
            <h3>Bachelor's Degree in Computer Technology</h3>
            <p>Multimedia University of Kenya - Graduated October 2023</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
