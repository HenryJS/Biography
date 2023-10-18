import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from '../Assets/me.jpg';
import './styles/home.css'

const ContactBanner = ({ onClose }) => {
  return (
    <div className="contact-banner">
      <div className="banner-header">
        <span>Contact Information</span>
        <CloseIcon className="close-icon" onClick={onClose} />
      </div>
      <div className="banner-content">
        <img src={Image} alt="/" className="rounded-image" />
        <div className="info">
          <p>Name: John Henry</p>
          <p>Email: johnchenry9@gmail.com</p>
          <p>Telephone: +254726177576</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
