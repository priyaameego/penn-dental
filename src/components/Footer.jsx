import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="premium-site-footer">
      <div className="footer-overlay"></div>
      <div className="container footer-content-grid">
        <div className="footer-col-main">
          <p className="footer-description">
            Penn Dental and Implant Center is a private practice dedicated to creating a world-class dental practice in our community by providing our patients with a positive and personal experience as well as ensuring our patients receive the highest quality of care.
          </p>
          <p className="footer-contact-item">
            <strong>Phone :</strong> <a href="tel:2149420101">214-942-0101</a>
          </p>
          <p className="footer-contact-item">
            <strong>Address :</strong> <a href="https://maps.google.com/?q=1418+W.+Jefferson+Blvd,+Dallas,+Texas,+75208" target="_blank" rel="noopener noreferrer">1418 W. Jefferson Blvd, Dallas, Texas, 75208</a>
          </p>
        </div>
        
        <div className="footer-col-links">
          <h3 className="footer-heading">Shortcuts</h3>
          <ul className="footer-links-list">
            <li><Link to="/services/dental-implants">Implants</Link></li>
            <li><Link to="/services/restorative-dentistry">Filling</Link></li>
            <li><Link to="/services/cosmetic-dentistry">Veneers</Link></li>
            <li><Link to="/services/restorative-dentistry">Root Canal</Link></li>
            <li><Link to="/services/restorative-dentistry">Treatment</Link></li>
            <li><Link to="/services/orthodontics">Orthodontics</Link></li>
          </ul>
        </div>

        <div className="footer-col-links">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links-list">
            <li><Link to="/services/restorative-dentistry">Root Canal</Link></li>
            <li><Link to="/services/restorative-dentistry">Treatment</Link></li>
            <li><Link to="/services/restorative-dentistry">Bridges</Link></li>
            <li><Link to="/services/restorative-dentistry">Exam & Cleaning</Link></li>
            <li><Link to="/services/laser-dentistry">Laser Dentistry</Link></li>
            <li><Link to="/services/sleep-apnea">Sleep Dentistry</Link></li>
          </ul>
        </div>

        <div className="footer-col-hours relative">
          <h3 className="footer-heading">Working Hours</h3>
          <div className="hours-list">
            <div className="hours-row">
              <span className="day">Mon,Tues</span>
              <span className="time">8:30 to 6:00</span>
            </div>
            <div className="hours-divider"></div>
            <div className="hours-row">
              <span className="day">Wed</span>
              <span className="time">8:00 to 1:00</span>
            </div>
            <div className="hours-divider"></div>
            <div className="hours-row">
              <span className="day">Thursday</span>
              <span className="time">8:00 to 5:00</span>
            </div>
            <div className="hours-divider"></div>
            <div className="hours-row">
              <span className="day">Fri, Sat & Sun</span>
              <span className="time">Closed</span>
            </div>
          </div>
          <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              Copyright &copy; {new Date().getFullYear()} Penndentaldfw. All Rights Reserved Powered By Ameego Labs
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/contact.html">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
