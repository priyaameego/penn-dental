import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../contact.css';

function Contact() {
  useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name.trim()) return alert('Name is required.');
    if (!email.trim()) return alert('Email is required.');
    if (!emailRegex.test(email)) return alert('Please enter a valid email address.');

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      alert('Your message has been sent successfully. We will get back to you shortly!');
    }, 1500);
  };

  return (
    <>
      <div className="breadcrumb-section">
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ul className="breadcrumb-list">
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginRight: '5px', marginBottom: '2px' }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Contact</li>
          </ul>
        </div>
      </div>

      <div className="top-contact-info-new">
        <div className="container">
          <div className="top-contact-grid-new">
            
            <div className="contact-card-item animate-on-scroll fade-up">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="contact-card-text">
                <span className="label">Support</span>
                <a href="mailto:admin@penndentaldfw.com">admin@penndentaldfw.com</a>
              </div>
            </div>

            <div className="contact-card-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="contact-card-text">
                <span className="label">Phone</span>
                <a href="tel:+12149420101">+1 214-942-0101</a>
              </div>
            </div>

            <div className="contact-card-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="contact-card-text">
                <span className="label">Address</span>
                <span className="value">1418 W. Jefferson Blvd, Dallas,<br/>Texas, 75208</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className="contact-hero">
        <div className="container contact-layout">
          
          <div className="contact-hero-content animate-on-scroll slide-right">
            <h5>Contact</h5>
            <h1>Get in touch with us …<br/>Send Your Message</h1>
            
            <div className="contact-map" style={{ marginTop: '30px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', transition: 'transform 0.4s ease' }} onMouseOver={(e) => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform='none'}>
              <iframe src="https://www.google.com/maps?ll=32.744281,-96.845085&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=14229109341497883976&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper animate-on-scroll slide-left">
            <div className="contact-form-container" style={{ transition: 'transform 0.4s ease, box-shadow 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='var(--shadow-xl)'; }} onMouseOut={(e) => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='var(--shadow-lg)'; }}>
              <h2>Send a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" className="form-control" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="form-group">
                    <label>Your Email *</label>
                    <input type="email" className="form-control" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" className="form-control" placeholder="(123) 456-7890" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label>Dental Service</label>
                    <select className="form-control" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                      <option value="">Select a service</option>
                      <option value="root_canal">Dental Root Canal</option>
                      <option value="cleaning">Teeth Cleaning</option>
                      <option value="molar_crown">Molar Crown</option>
                      <option value="molar">Molar</option>
                      <option value="professional">Professional</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea className="form-control" placeholder="How can we help you?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Footer for Contact Page */}
      <footer className="contact-footer">
        <div className="container">
          <div className="contact-footer-grid">
            <div className="footer-col">
              <h3>SHORTCUTS</h3>
              <ul>
                <li><Link to="#">Implants</Link></li>
                <li><Link to="#">Filling</Link></li>
                <li><Link to="#">Veneers</Link></li>
                <li><Link to="#">Root Canal Treatment</Link></li>
                <li><Link to="#">Orthodontics</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>SERVICES</h3>
              <ul>
                <li><Link to="#">Root Canal Treatment</Link></li>
                <li><Link to="#">Bridges</Link></li>
                <li><Link to="#">Exam & Cleaning</Link></li>
                <li><Link to="#">Laser Dentistry</Link></li>
                <li><Link to="#">Sleep Dentistry</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>WORKING HOURS</h3>
              <div className="working-hours-list">
                <div>Mon, Tues: <span>8:30 to 6:00</span></div>
                <div>Wed: <span>8:00 to 1:00</span></div>
                <div>Thursday: <span>8:00 to 5:00</span></div>
                <div>Fri, Sat & Sun: <span>Closed</span></div>
              </div>
            </div>
            <div className="footer-col">
              <h3>PENN DENTAL</h3>
              <p style={{ color: '#a0b1ff', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '15px' }}>
                Penn Dental and Implant Center is a private practice dedicated to creating a world-class dental practice in our community.
              </p>
              <div className="working-hours-list">
                <div>Phone: <span>214-942-0101</span></div>
                <div style={{ flexDirection: 'column' }}>Address: <span style={{ marginTop: '5px' }}>1418 W. Jefferson Blvd, Dallas, TX</span></div>
              </div>
            </div>
          </div>
          <div className="contact-footer-bottom">
            <div className="copyright">
              &copy; {new Date().getFullYear()} Penn Dental and Implant Center. All Rights Reserved.
            </div>
            <div className="footer-bottom-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="/contact.html">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
