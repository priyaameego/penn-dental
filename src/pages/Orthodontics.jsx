import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing the premium layout styles

function Orthodontics() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('invisalign');

  useEffect(() => {
    document.title = "Orthodontics | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Straighten your smile discreetly with Invisalign and modern orthodontic treatments at Penn Dental and Implant Center.";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Premium Hero */}
      <section className="implants-hero">
        <div className="container implants-hero-layout">
          <div className="implants-hero-content animate-on-scroll slide-right">
            <span className="implants-eyebrow">Services</span>
            <h1>Modern Orthodontics</h1>
            <p>Achieve a perfectly straight, properly aligned smile with our discreet and comfortable clear aligner therapy.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/spec_ortho.png" alt="Orthodontic Clear Aligners" />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="intro-section">
        <div className="container intro-layout">
          <div className="intro-image animate-on-scroll slide-right">
            <img src="/clinic_banner_1.png" alt="Orthodontic Consultation" />
          </div>
          <div className="intro-content animate-on-scroll slide-left">
            <h2>Beyond Just Straight Teeth</h2>
            <p>Orthodontics isn't just about aesthetics; properly aligned teeth are easier to clean, less prone to uneven wear, and contribute to a healthier bite and jaw joint.</p>
            <p>We specialize in modern clear aligner therapy, like Invisalign, which allows you to straighten your teeth virtually invisibly, without the discomfort and restrictions of traditional metal brackets and wires.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Orthodontics */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Choose Clear Aligners?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">01</div>
              <h3>Virtually Invisible</h3>
              <p>The clear plastic trays are practically unnoticeable, allowing you to straighten your teeth discreetly.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">02</div>
              <h3>Completely Removable</h3>
              <p>Remove them to eat, drink, brush, and floss normally, with no dietary restrictions.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">03</div>
              <h3>Comfortable Fit</h3>
              <p>Custom-trimmed for your gum line, eliminating the irritation caused by metal wires.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="why-num">04</div>
              <h3>Predictable Results</h3>
              <p>Advanced 3D mapping lets you see your final smile before you even start treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Options */}
      <section className="replace-section">
        <div className="container replace-layout">
          <div className="replace-content animate-on-scroll slide-right">
            <h2>Orthodontic Solutions</h2>
            <p>We address a wide variety of alignment issues for adults and teens.</p>
            <div className="replace-options">
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'invisalign' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('invisalign')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Invisalign® Clear Aligners
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'crowding' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('crowding')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Crowding & Spacing Correction
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'bite' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('bite')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Overbite & Underbite Alignment
              </button>
            </div>
          </div>
          <div className="replace-visual animate-on-scroll slide-left">
            <img src="/contact_hero.png" alt="Clear Aligner Treatment" />
          </div>
        </div>
      </section>

      {/* 7. Process Timeline */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Your Aligner Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll fade-up">
              <div className="timeline-dot">1</div>
              <h3>3D Digital Scan</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="timeline-dot">2</div>
              <h3>Custom Treatment Plan</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-dot">3</div>
              <h3>Wear Your Aligners</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="timeline-dot">4</div>
              <h3>Enjoy Your New Smile</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready to Straighten Your Smile?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Orthodontics;
