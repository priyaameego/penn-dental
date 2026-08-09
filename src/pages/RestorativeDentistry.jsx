import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing the premium layout styles

function RestorativeDentistry() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('crowns');

  useEffect(() => {
    document.title = "Restorative Dentistry | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Restore the function and beauty of your teeth with advanced restorative dentistry solutions at Penn Dental and Implant Center.";
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
            <h1>Restorative Dentistry</h1>
            <p>Rebuild your oral health and regain your biting power with custom-crafted, durable restorative treatments.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/clinic_banner_1.png" alt="Restorative Dentistry" />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="intro-section">
        <div className="container intro-layout">
          <div className="intro-image animate-on-scroll slide-right">
            <img src="/clinic_banner_2.png" alt="Advanced Restorations" />
          </div>
          <div className="intro-content animate-on-scroll slide-left">
            <h2>Bringing Your Smile Back to Life</h2>
            <p>Restorative dentistry focuses on diagnosing and treating conditions affecting the teeth, gums, and maxillofacial portions of the body. If you have decayed, damaged, or missing teeth, we can help restore their strength and appearance.</p>
            <p>Using the highest quality ceramics and composite materials, our restorations are designed to mimic the natural translucency of enamel while providing incredible durability for everyday chewing.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Restorative Dentistry */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Restorative Care is Crucial</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">01</div>
              <h3>Prevent Further Damage</h3>
              <p>Treating decay early prevents it from reaching the nerve, avoiding painful infections and root canals.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">02</div>
              <h3>Restore Chewing Function</h3>
              <p>Missing or damaged teeth make eating difficult and can lead to digestive issues over time.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">03</div>
              <h3>Maintain Jaw Alignment</h3>
              <p>Replacing missing teeth prevents surrounding teeth from shifting out of their proper alignment.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="why-num">04</div>
              <h3>Aesthetic Integration</h3>
              <p>Modern materials ensure that your restorations are completely indistinguishable from your natural teeth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Options */}
      <section className="replace-section">
        <div className="container replace-layout">
          <div className="replace-content animate-on-scroll slide-right">
            <h2>Our Restorative Solutions</h2>
            <p>We provide a comprehensive range of treatments to repair any level of dental damage.</p>
            <div className="replace-options">
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'crowns' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('crowns')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Dental Crowns & Bridges
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'fillings' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('fillings')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Tooth-Colored Fillings
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'dentures' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('dentures')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Custom Dentures & Partials
              </button>
            </div>
          </div>
          <div className="replace-visual animate-on-scroll slide-left">
            <img src="/contact_hero.png" alt="Restorative Dental Solutions" />
          </div>
        </div>
      </section>

      {/* 7. Process Timeline */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>The Restorative Process</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll fade-up">
              <div className="timeline-dot">1</div>
              <h3>Diagnosis & Scans</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="timeline-dot">2</div>
              <h3>Preparation</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-dot">3</div>
              <h3>Custom Fabrication</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="timeline-dot">4</div>
              <h3>Final Bonding</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready to Rebuild Your Smile?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default RestorativeDentistry;
