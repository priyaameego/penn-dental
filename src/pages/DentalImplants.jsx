import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css';

function DentalImplants() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('single');

  useEffect(() => {
    // Update Document Title and Meta Description for SEO
    document.title = "Dental Implants | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Learn about dental implants, treatment planning, implant placement, abutment attachment, and replacement teeth at Penn Dental and Implant Center.";
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Premium Hero */}
      <section className="implants-hero">
        <div className="container implants-hero-layout">
          <div className="implants-hero-content animate-on-scroll slide-right">
            <span className="implants-eyebrow">Services</span>
            <h1>Dental Implants</h1>
            <p>Restore your smile with a strong, natural-looking foundation designed for long-term function and confidence.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/contact_hero.png" alt="Premium Dental Implant Setup" />
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="intro-section">
        <div className="container intro-layout">
          <div className="intro-image animate-on-scroll slide-right">
            <img src="/clinic_banner_1.png" alt="Dental Implant Model" />
          </div>
          <div className="intro-content animate-on-scroll slide-left">
            <h2>Dental Implants</h2>
            <p>Your tooth is made up of two parts, the root which is embedded in your jawbone and the crown which is the part of the tooth you can see. When a tooth is missing or removed, the bone that previously surrounded the tooth root begins to resorb or deteriorate.</p>
            <p>Dental implants are basically substitute tooth roots that function similar to natural tooth roots, stimulating bone growth and providing a strong foundation for replacement teeth.</p>
          </div>
        </div>
      </section>

      {/* 3. Why Dental Implants */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Dental Implants?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">01</div>
              <h3>Bone Preservation</h3>
              <p>Implants integrate with your jawbone, stimulating it and preventing the bone loss that naturally occurs when teeth are missing.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">02</div>
              <h3>Preserves Adjacent Teeth</h3>
              <p>Unlike traditional bridges, implants don't require grinding down healthy neighboring teeth for support.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">03</div>
              <h3>Long-Term Success</h3>
              <p>With proper care, dental implants have a success rate of over 95% and can last a lifetime.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="why-num">04</div>
              <h3>Long-Term Value</h3>
              <p>While the initial cost may be higher, implants eliminate the need for future replacements and repairs associated with bridges or dentures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Replacing Multiple Teeth */}
      <section className="replace-section">
        <div className="container replace-layout">
          <div className="replace-content animate-on-scroll slide-right">
            <h2>Replacing Multiple Teeth</h2>
            <p>Whether you are missing one tooth, several teeth, or an entire arch, dental implants offer a versatile solution.</p>
            <div className="replace-options">
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'single' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('single')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Single Tooth Replacement
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'multiple' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('multiple')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Multiple Teeth Replacement
              </button>
              <button 
                className={`replace-option-btn ${activeReplaceTab === 'full' ? 'active' : ''}`}
                onClick={() => setActiveReplaceTab('full')}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                Full Arch Replacement
              </button>
            </div>
          </div>
          <div className="replace-visual animate-on-scroll slide-left">
            <img src="/spec_ortho.png" alt="Tooth Replacement Options" />
          </div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Benefits of Dental Implants</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll fade-up">
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Designed to Last a Lifetime</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Preserves Bone and Facial Structures</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>A Healthier Smile</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up">
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Natural Appearance</h3>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="benefit-icon">★</div>
              <div className="benefit-text">
                <h3>Hygienic and Easy Maintenance</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 3D Implant Visual */}
      <section className="implant-3d-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Understanding a Dental Implant</h2>
            <p>Three essential components working together seamlessly.</p>
          </div>
          <div className="implant-visual-container animate-on-scroll fade-up">
            <div className="implant-part part-crown">Crown</div>
            <div className="implant-arrow">↓</div>
            <div className="implant-part part-abutment">Abutment</div>
            <div className="implant-arrow">↓</div>
            <div className="implant-part part-implant">Implant</div>
          </div>
        </div>
      </section>

      {/* 7. Evaluation */}
      <section className="evaluation-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Evaluation for Dental Implants</h2>
            <p>Every successful implant procedure starts with a precise and comprehensive evaluation.</p>
          </div>
          <div className="eval-cards">
            <div className="eval-card animate-on-scroll fade-up">
              <div className="eval-num">01</div>
              <p>Quality and quantity of available bone.</p>
            </div>
            <div className="eval-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="eval-num">02</div>
              <p>Number of dental implants needed to create the optimal result.</p>
            </div>
            <div className="eval-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="eval-num">03</div>
              <p>Other procedures that may be necessary to prepare the surgical site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Dental Implant Process */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Dental Implant Process</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll fade-up">
              <div className="timeline-dot">1</div>
              <h3>Evaluation & Treatment Planning</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="timeline-dot">2</div>
              <h3>Implant Placement</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-dot">3</div>
              <h3>Abutment Attachment</h3>
            </div>
            <div className="timeline-item animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="timeline-dot">4</div>
              <h3>Replacement Teeth</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Technology */}
      <section className="why-implants">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Advanced Technology for Precise Planning</h2>
          </div>
          <div className="why-grid">
            <div className="why-card animate-on-scroll fade-up">
              <div className="why-num">1</div>
              <h3>3D Cone Beam Imaging</h3>
              <p>High-resolution scans for precise anatomical mapping and safety.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="why-num">2</div>
              <h3>Digital Treatment Planning</h3>
              <p>Virtual placement of your implants before surgery begins.</p>
            </div>
            <div className="why-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="why-num">3</div>
              <h3>X-Guide 3D Navigation</h3>
              <p>Dynamic GPS-like guidance during surgery for pinpoint accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Implant Placement */}
      <section className="standard-split-section">
        <div className="container standard-layout reverse">
          <div className="standard-content animate-on-scroll slide-left">
            <h2>Implant Placement</h2>
            <p>During the surgical phase, a small titanium post is precisely placed into the jawbone. Over the next few months, a process called osseointegration occurs where the jawbone heals and grows around the implant, anchoring it securely.</p>
          </div>
          <div className="standard-visual animate-on-scroll slide-right">
            <img src="/clinic_banner_2.png" alt="Implant Placement Setup" />
          </div>
        </div>
      </section>

      {/* 11. Video */}
      <section className="video-section">
        <div className="container animate-on-scroll fade-up">
          <h2>See How Dental Implants Work</h2>
          <div className="video-placeholder">
            <img src="/video_thumb.png" alt="Dental Implant Video Placeholder" />
            <div className="play-button">▶</div>
            <div className="video-label">Dental Implant Treatment</div>
          </div>
        </div>
      </section>

      {/* 12. Abutment Attachment */}
      <section className="standard-split-section" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container standard-layout">
          <div className="standard-content animate-on-scroll slide-right">
            <h2>Abutment Attachment</h2>
            <p>Once the implant has integrated with the bone, a small connector piece called an abutment is attached. This serves as the secure foundation for your new custom crown.</p>
          </div>
          <div className="standard-visual animate-on-scroll slide-left" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="implant-part part-abutment" style={{ padding: '30px 60px', fontSize: '1.5rem', border: '2px solid var(--primary-color)' }}>
              Abutment Visual
            </div>
          </div>
        </div>
      </section>

      {/* 13. Replacement Teeth */}
      <section className="standard-split-section">
        <div className="container standard-layout reverse">
          <div className="standard-content animate-on-scroll slide-left">
            <h2>Replacement Teeth</h2>
            <p>The final step is the creation and placement of your replacement teeth. Crafted to perfectly match the color, shape, and size of your natural teeth, these restorations provide a flawless and fully functional smile.</p>
          </div>
          <div className="standard-visual animate-on-scroll slide-right">
            <img src="/spec_cosmetic.png" alt="Replacement Teeth Restoration" />
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready to Explore Dental Implants?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default DentalImplants;
