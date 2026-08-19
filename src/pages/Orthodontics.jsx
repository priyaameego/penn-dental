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

      {/* 2. Orthodontic Options Grid */}
      <section className="ortho-options-section" style={{ padding: '80px 20px', background: 'var(--bg-white)', textAlign: 'center' }}>
        <style>
          {`
            .ortho-card {
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
            .ortho-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }
            .ortho-card img.ortho-img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.6s ease;
              z-index: 0;
            }
            .ortho-card:hover img.ortho-img {
              transform: scale(1.1);
            }
            .ortho-card-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 80%;
              background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
              z-index: 1;
            }
            .ortho-card-content {
              position: relative;
              z-index: 2;
              text-align: center;
              width: 100%;
              transform: translateY(10px);
              transition: transform 0.4s ease;
            }
            .ortho-card:hover .ortho-card-content {
              transform: translateY(0);
            }
            .ortho-card-title {
              color: #fff;
              font-size: 1.8rem;
              font-weight: 700;
              margin-bottom: 10px;
              text-shadow: 0 2px 10px rgba(0,0,0,0.5);
              font-family: 'Outfit', sans-serif;
            }
            .ortho-card-desc {
              color: #e0e0e0;
              font-size: 1rem;
              line-height: 1.6;
              margin: 0;
            }
            .ortho-logo-card {
              border-radius: 20px;
              background: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 380px;
              padding: 20px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.08);
              transition: transform 0.4s ease;
            }
            .ortho-logo-card:hover {
              transform: translateY(-8px);
            }
            .ortho-logo-circle {
              border: 4px solid var(--accent);
              border-radius: 50%;
              width: 240px;
              height: 240px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              box-shadow: 0 15px 35px rgba(183, 110, 121, 0.15);
              background: linear-gradient(135deg, #fff, #fef8f9);
            }
          `}
        </style>
        <div className="container">
          <p className="animate-on-scroll fade-up" style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', maxWidth: '900px', margin: '0 auto 60px', lineHeight: '1.6', fontWeight: '500' }}>
            Achieve the straight, healthy smile you've always wanted with our orthodontic treatments. We offer a range of orthodontic options tailored to your individual needs.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Card 1 */}
            <div className="ortho-card animate-on-scroll fade-up">
              <img src="https://images.unsplash.com/photo-1534014902177-3bcbe99ab7e4?q=80&w=800&auto=format&fit=crop" alt="Fastbraces" className="ortho-img" />
              <div className="ortho-card-overlay"></div>
              <div className="ortho-card-content">
                <h3 className="ortho-card-title">Fastbraces ®</h3>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="ortho-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="https://images.unsplash.com/photo-1522844990619-4951c40f7dba?q=80&w=800&auto=format&fit=crop" alt="Invisalign" className="ortho-img" />
              <div className="ortho-card-overlay"></div>
              <div className="ortho-card-content">
                <h3 className="ortho-card-title">Invisalign ®</h3>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="ortho-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=800&auto=format&fit=crop" alt="Clear Correct" className="ortho-img" />
              <div className="ortho-card-overlay"></div>
              <div className="ortho-card-content">
                <h3 className="ortho-card-title">Clear Correct</h3>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="ortho-card animate-on-scroll fade-up">
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" alt="Expander Therapy" className="ortho-img" />
              <div className="ortho-card-overlay"></div>
              <div className="ortho-card-content">
                <h3 className="ortho-card-title">Expander Therapy</h3>
              </div>
            </div>
            
            {/* Card 5 (Logo) */}
            <div className="ortho-logo-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="ortho-logo-circle">
                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#888', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Master</span>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Fastbraces</span>
                <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', marginTop: '5px', letterSpacing: '1px' }}>Provider</span>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="ortho-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" alt="Space Maintainers" className="ortho-img" />
              <div className="ortho-card-overlay"></div>
              <div className="ortho-card-content">
                <h3 className="ortho-card-title">Space<br/>Maintainers</h3>
              </div>
            </div>
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
