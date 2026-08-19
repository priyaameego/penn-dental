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

      {/* 2. Restorative Options Grid */}
      <section className="restorative-options-section" style={{ padding: '80px 20px', background: 'var(--bg-white)', textAlign: 'center' }}>
        <style>
          {`
            .restorative-card {
              border-radius: 20px;
              overflow: hidden;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-end;
              padding: 40px 30px;
              min-height: 380px;
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
              box-shadow: 0 10px 30px rgba(0,0,0,0.08);
              cursor: pointer;
            }
            .restorative-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }
            .restorative-card img.restorative-img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.6s ease;
              z-index: 0;
            }
            .restorative-card:hover img.restorative-img {
              transform: scale(1.1);
            }
            .restorative-card-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 80%;
              background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
              z-index: 1;
            }
            .restorative-card-content {
              position: relative;
              z-index: 2;
              text-align: center;
              width: 100%;
              transform: translateY(10px);
              transition: transform 0.4s ease;
            }
            .restorative-card:hover .restorative-card-content {
              transform: translateY(0);
            }
            .restorative-card-title {
              color: #fff;
              font-size: 1.8rem;
              font-weight: 700;
              margin-bottom: 10px;
              text-shadow: 0 2px 10px rgba(0,0,0,0.5);
              font-family: 'Outfit', sans-serif;
            }
          `}
        </style>
        <div className="container">
          <p className="animate-on-scroll fade-up" style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', maxWidth: '900px', margin: '0 auto 60px', lineHeight: '1.6', fontWeight: '500' }}>
            Penn Dental's restorative dentistry services are designed to restore the health, function, and appearance of your smile.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Card 1 */}
            <div className="restorative-card animate-on-scroll fade-up">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop" alt="Porcelain Crowns" className="restorative-img" />
              <div className="restorative-card-overlay"></div>
              <div className="restorative-card-content">
                <h3 className="restorative-card-title">Porcelain Crowns</h3>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="restorative-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop" alt="Fixed Bridges" className="restorative-img" />
              <div className="restorative-card-overlay"></div>
              <div className="restorative-card-content">
                <h3 className="restorative-card-title">Fixed Bridges</h3>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="restorative-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop" alt="Dentures" className="restorative-img" />
              <div className="restorative-card-overlay"></div>
              <div className="restorative-card-content">
                <h3 className="restorative-card-title">Dentures</h3>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="restorative-card animate-on-scroll fade-up">
              <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800&auto=format&fit=crop" alt="Root Canal Therapy" className="restorative-img" />
              <div className="restorative-card-overlay"></div>
              <div className="restorative-card-content">
                <h3 className="restorative-card-title">Root Canal Therapy</h3>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="restorative-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=800&auto=format&fit=crop" alt="Zirconia Crowns" className="restorative-img" />
              <div className="restorative-card-overlay"></div>
              <div className="restorative-card-content">
                <h3 className="restorative-card-title">Zirconia Crowns</h3>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="restorative-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" alt="Metal Free Cosmetic Fillings" className="restorative-img" />
              <div className="restorative-card-overlay"></div>
              <div className="restorative-card-content">
                <h3 className="restorative-card-title">Metal Free Cosmetic Fillings</h3>
              </div>
            </div>
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
