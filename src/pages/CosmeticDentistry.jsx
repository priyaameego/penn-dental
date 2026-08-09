import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing the premium layout styles

function CosmeticDentistry() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('veneers');

  useEffect(() => {
    document.title = "Cosmetic Dentistry | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Transform your smile with premium cosmetic dentistry including veneers, teeth whitening, and complete smile makeovers at Penn Dental.";
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
            <h1>Cosmetic Dentistry</h1>
            <p>Achieve the flawless, confident smile you've always dreamed of with our customized, high-end cosmetic treatments.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/spec_cosmetic.png" alt="Cosmetic Dentistry Smile" />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="intro-section">
        <div className="container intro-layout">
          <div className="intro-image animate-on-scroll slide-right">
            <img src="/clinic_banner_1.png" alt="Smile Makeover Consultation" />
          </div>
          <div className="intro-content animate-on-scroll slide-left">
            <h2>The Art of a Perfect Smile</h2>
            <p>Your smile is often the first thing people notice about you. Cosmetic dentistry is the perfect blend of art and science, designed to enhance the aesthetics of your teeth while maintaining perfect oral function.</p>
            <p>From minor adjustments to complete smile makeovers, our expert team works closely with you to design a treatment plan that aligns perfectly with your facial structure and personal goals.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Cosmetic Dentistry */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Choose Cosmetic Dentistry?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">01</div>
              <h3>Boost Confidence</h3>
              <p>Eliminate insecurities about stained, chipped, or misaligned teeth and smile freely without hesitation.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">02</div>
              <h3>Look Younger</h3>
              <p>Bright, well-proportioned teeth can take years off your appearance, giving you a fresh, youthful look.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">03</div>
              <h3>Customized Results</h3>
              <p>We use digital smile design technology to preview your new smile before any treatment begins.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="why-num">04</div>
              <h3>Functional Benefits</h3>
              <p>Many cosmetic procedures also strengthen the teeth and improve your bite alignment simultaneously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Options */}
      <section className="replace-section">
        <div className="container replace-layout">
          <div className="replace-content animate-on-scroll slide-right">
            <h2>Our Cosmetic Treatments</h2>
            <p>We offer a full suite of cosmetic services to address any aesthetic concern.</p>
            <div className="replace-options">
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'veneers' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('veneers')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Porcelain Veneers
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'whitening' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('whitening')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Professional Teeth Whitening
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'bonding' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('bonding')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Dental Bonding
              </button>
            </div>
          </div>
          <div className="replace-visual animate-on-scroll slide-left">
            <img src="/contact_hero.png" alt="Cosmetic Treatments" />
          </div>
        </div>
      </section>

      {/* 7. Process Timeline */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Your Smile Makeover Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll fade-up">
              <div className="timeline-dot">1</div>
              <h3>Initial Consultation</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="timeline-dot">2</div>
              <h3>Digital Smile Design</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-dot">3</div>
              <h3>Preparation Phase</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="timeline-dot">4</div>
              <h3>Final Placement</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready to Transform Your Smile?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CosmeticDentistry;
