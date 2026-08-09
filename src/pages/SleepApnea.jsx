import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing the premium layout styles

function SleepApnea() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('cpap');

  useEffect(() => {
    document.title = "Sleep Apnea Treatment | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Discover advanced and comfortable sleep apnea treatments at Penn Dental and Implant Center to help you breathe easier and sleep better.";
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
            <h1>Sleep Apnea Treatment</h1>
            <p>Breathe easier and sleep better with our custom oral appliance therapy designed to treat Obstructive Sleep Apnea comfortably.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/contact_hero.png" alt="Premium Sleep Apnea Treatment" />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="intro-section">
        <div className="container intro-layout">
          <div className="intro-image animate-on-scroll slide-right">
            <img src="/clinic_banner_1.png" alt="Sleep Apnea Consultation" />
          </div>
          <div className="intro-content animate-on-scroll slide-left">
            <h2>Understanding Sleep Apnea</h2>
            <p>Obstructive Sleep Apnea (OSA) is a potentially serious sleep disorder in which breathing repeatedly stops and starts during sleep. This happens because your throat muscles intermittently relax and block your airway.</p>
            <p>While CPAP machines are the traditional treatment, many patients find them uncomfortable. We offer custom-fitted oral appliances that gently shift the jaw forward, keeping your airway open for a restful night's sleep.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Treat Sleep Apnea */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Treat Sleep Apnea?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">01</div>
              <h3>Improve Heart Health</h3>
              <p>Untreated sleep apnea increases the risk of high blood pressure, heart attacks, and strokes.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">02</div>
              <h3>Boost Energy Levels</h3>
              <p>Restoring proper oxygen flow during sleep eliminates daytime fatigue and brain fog.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">03</div>
              <h3>Stop Snoring</h3>
              <p>Oral appliances effectively reduce or eliminate chronic snoring, helping your partner sleep better too.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="why-num">04</div>
              <h3>Better Quality of Life</h3>
              <p>Experience improved mood, better concentration, and overall enhanced well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Treatment Options */}
      <section className="replace-section">
        <div className="container replace-layout">
          <div className="replace-content animate-on-scroll slide-right">
            <h2>Treatment Options</h2>
            <p>We provide personalized solutions tailored to the severity of your condition and your lifestyle preferences.</p>
            <div className="replace-options">
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'cpap' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('cpap')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Oral Appliance Therapy
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'surgery' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('surgery')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Lifestyle Modifications
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'combo' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('combo')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Surgical Options
              </button>
            </div>
          </div>
          <div className="replace-visual animate-on-scroll slide-left">
            <img src="/spec_ortho.png" alt="Treatment Options" />
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Benefits of Oral Appliances</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll fade-up">
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Comfortable to Wear</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Silent Operation</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Easy to Travel With</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up">
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>No Masks or Hoses</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>High Patient Compliance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Evaluation */}
      <section className="evaluation-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Evaluation for Sleep Apnea</h2>
            <p>Proper diagnosis is the key to effective treatment.</p>
          </div>
          <div className="eval-cards">
            <div className="eval-card animate-on-scroll fade-up">
              <div className="eval-num">01</div>
              <p>Comprehensive review of your medical history and sleep patterns.</p>
            </div>
            <div className="eval-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="eval-num">02</div>
              <p>At-home or clinical sleep study to monitor breathing disruptions.</p>
            </div>
            <div className="eval-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="eval-num">03</div>
              <p>3D imaging of your airway to identify structural blockages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Process Timeline */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Treatment Process</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll fade-up">
              <div className="timeline-dot">1</div>
              <h3>Consultation & Scan</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="timeline-dot">2</div>
              <h3>Sleep Study Analysis</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-dot">3</div>
              <h3>Appliance Fitting</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="timeline-dot">4</div>
              <h3>Follow-up & Adjustments</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready for a Better Night's Sleep?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SleepApnea;
