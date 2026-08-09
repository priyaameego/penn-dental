import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/') ? 'active' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-tagline">Creating healthy, whiter, brighter smiles since 1979</span>
            <span className="top-bar-divider" style={{ margin: '0 10px' }}>|</span>
            <span className="top-bar-address">123 Dental Way, Dallas, TX 75201</span>
          </div>
          <div className="top-bar-right">
            <a href="mailto:admin@apexdentalstudio.com" className="top-bar-link">
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              admin@apexdentalstudio.com
            </a>
            <span className="top-bar-divider">|</span>
            <a href="tel:+11234567890" className="top-bar-link">
              <svg className="icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Us (123) 456-7890
            </a>
          </div>
        </div>
      </div>
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Apex Dental Studio Logo" className="nav-logo" />
          </Link>
          
          <div className="nav-center">
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/about" className={`nav-item ${isActive('/about')}`} onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/x-guide" className={`nav-item ${isActive('/x-guide')}`} onClick={closeMobileMenu}>X Guide</Link></li>
              <li className="has-dropdown">
                <span className={`nav-item ${isActive('/services')}`}>
                  Services <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </span>
                <ul className="dropdown-menu">
                  <li><Link to="/services/dental-implants" className={location.pathname === '/services/dental-implants' ? 'active' : ''} onClick={closeMobileMenu}>Dental Implants</Link></li>
                  <li><Link to="/services/sleep-apnea" className={location.pathname === '/services/sleep-apnea' ? 'active' : ''} onClick={closeMobileMenu}>Sleep Apnea</Link></li>
                  <li><Link to="/services/oral-surgery" className={location.pathname === '/services/oral-surgery' ? 'active' : ''} onClick={closeMobileMenu}>Oral Surgery</Link></li>
                  <li><Link to="/services/cosmetic-dentistry" className={location.pathname === '/services/cosmetic-dentistry' ? 'active' : ''} onClick={closeMobileMenu}>Cosmetic Dentistry</Link></li>
                  <li><Link to="/services/restorative-dentistry" className={location.pathname === '/services/restorative-dentistry' ? 'active' : ''} onClick={closeMobileMenu}>Restorative Dentistry</Link></li>
                  <li><Link to="/services/orthodontics" className={location.pathname === '/services/orthodontics' ? 'active' : ''} onClick={closeMobileMenu}>Orthodontics</Link></li>
                </ul>
              </li>
              <li><Link to="/faq.html" className={`nav-item ${isActive('/faq.html')}`} onClick={closeMobileMenu}>FAQ</Link></li>
              <li><Link to="/testimonials.html" className={`nav-item ${isActive('/testimonials.html')}`} onClick={closeMobileMenu}>Testimonials</Link></li>
              <li><Link to="/gallery.html" className={`nav-item ${isActive('/gallery.html')}`} onClick={closeMobileMenu}>Gallery</Link></li>
              <li><Link to="/blog.html" className={`nav-item ${isActive('/blog.html')}`} onClick={closeMobileMenu}>Blog</Link></li>
              <li><Link to="/contact.html" className={`nav-item ${isActive('/contact.html')}`} onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="nav-right">
            <Link to="/contact.html" className="nav-btn-solid">Book Appointment</Link>
          </div>

          <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Toggle Menu" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
