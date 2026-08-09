import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing the premium layout styles

function OralSurgery() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('extractions');

  useEffect(() => {
    document.title = "Oral Surgery | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Expert oral surgery services including extractions, wisdom teeth removal, and bone grafting at Penn Dental and Implant Center.";
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
            <h1>Expert Oral Surgery</h1>
            <p>Advanced surgical care in a comfortable environment, ensuring optimal outcomes and rapid recovery for complex dental issues.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/dr_juma.png" alt="Oral Surgery Care" />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="intro-section">
        <div className="container intro-layout">
          <div className="intro-image animate-on-scroll slide-right">
            <img src="/clinic_banner_2.png" alt="Modern Surgical Suite" />
          </div>
          <div className="intro-content animate-on-scroll slide-left">
            <h2>Compassionate Surgical Care</h2>
            <p>Oral surgery encompasses a variety of procedures designed to treat complex issues of the mouth, teeth, and jaw. Whether you require a simple extraction or a complex bone graft, our team utilizes state-of-the-art technology to ensure precision and comfort.</p>
            <p>We understand that surgery can be intimidating. Our priority is your safety and peace of mind, offering advanced sedation options to make your experience completely stress-free.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Oral Surgery */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Choose Us for Oral Surgery?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">01</div>
              <h3>Advanced 3D Imaging</h3>
              <p>We use Cone Beam CT scans to map out exact nerve pathways and bone structures before any incision is made.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">02</div>
              <h3>Sedation Options</h3>
              <p>From nitrous oxide to IV sedation, we tailor your comfort level to your specific needs and anxieties.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">03</div>
              <h3>Expert Specialists</h3>
              <p>Our surgeons have years of specialized training in complex maxillofacial and oral procedures.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="why-num">04</div>
              <h3>Fast Recovery Protocols</h3>
              <p>We use PRF (Platelet-Rich Fibrin) technology to accelerate natural healing and minimize post-operative discomfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Options */}
      <section className="replace-section">
        <div className="container replace-layout">
          <div className="replace-content animate-on-scroll slide-right">
            <h2>Our Surgical Procedures</h2>
            <p>We offer a comprehensive range of surgical solutions to restore your oral health.</p>
            <div className="replace-options">
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'extractions' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('extractions')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Tooth Extractions & Wisdom Teeth
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'grafting' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('grafting')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Bone Grafting & Sinus Lifts
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'pathology' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('pathology')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Oral Pathology & Biopsies
              </button>
            </div>
          </div>
          <div className="replace-visual animate-on-scroll slide-left">
            <img src="/video_thumb.png" alt="Surgical Procedures" />
          </div>
        </div>
      </section>

      {/* 7. Process Timeline */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Your Surgical Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll fade-up">
              <div className="timeline-dot">1</div>
              <h3>Comprehensive Consultation</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="timeline-dot">2</div>
              <h3>3D Imaging & Planning</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-dot">3</div>
              <h3>Comfortable Procedure</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="timeline-dot">4</div>
              <h3>Recovery & Follow-up</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready to Restore Your Oral Health?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default OralSurgery;
