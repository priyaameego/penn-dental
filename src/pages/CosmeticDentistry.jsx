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

      {/* 2. Cosmetic Options Grid */}
      <section className="cosmetic-options-section" style={{ padding: '80px 20px', background: 'var(--bg-white)', textAlign: 'center' }}>
        <style>
          {`
            .cosmetic-card {
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
            .cosmetic-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            }
            .cosmetic-card img.cosmetic-img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.6s ease;
              z-index: 0;
            }
            .cosmetic-card:hover img.cosmetic-img {
              transform: scale(1.1);
            }
            .cosmetic-card-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 80%;
              background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
              z-index: 1;
            }
            .cosmetic-card-content {
              position: relative;
              z-index: 2;
              text-align: center;
              width: 100%;
              transform: translateY(10px);
              transition: transform 0.4s ease;
            }
            .cosmetic-card:hover .cosmetic-card-content {
              transform: translateY(0);
            }
            .cosmetic-card-title {
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
            Your dream smile starts at Penn Dental. Our cosmetic dentistry services are designed to enhance your smile's beauty, restore your confidence, and help you look and feel your best.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Card 1 */}
            <div className="cosmetic-card animate-on-scroll fade-up">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Veneers" className="cosmetic-img" />
              <div className="cosmetic-card-overlay"></div>
              <div className="cosmetic-card-content">
                <h3 className="cosmetic-card-title">Veneers</h3>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="cosmetic-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop" alt="E Max Crowns" className="cosmetic-img" />
              <div className="cosmetic-card-overlay"></div>
              <div className="cosmetic-card-content">
                <h3 className="cosmetic-card-title">E Max Crowns</h3>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="cosmetic-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=800&auto=format&fit=crop" alt="Zoom Whitening" className="cosmetic-img" />
              <div className="cosmetic-card-overlay"></div>
              <div className="cosmetic-card-content">
                <h3 className="cosmetic-card-title">Zoom Whitening</h3>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="cosmetic-card animate-on-scroll fade-up">
              <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop" alt="Venus White" className="cosmetic-img" />
              <div className="cosmetic-card-overlay"></div>
              <div className="cosmetic-card-content">
                <h3 className="cosmetic-card-title">Venus White</h3>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="cosmetic-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop" alt="Componeers" className="cosmetic-img" />
              <div className="cosmetic-card-overlay"></div>
              <div className="cosmetic-card-content">
                <h3 className="cosmetic-card-title">Componeers</h3>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="cosmetic-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1522844990619-4951c40f7dba?q=80&w=800&auto=format&fit=crop" alt="Smiles Perfected Whitening" className="cosmetic-img" />
              <div className="cosmetic-card-overlay"></div>
              <div className="cosmetic-card-content">
                <h3 className="cosmetic-card-title">Smiles Perfected Whitening</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CosmeticDentistry;
