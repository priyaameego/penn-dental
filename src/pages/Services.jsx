import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../services.css'; // Adjust path if needed

function Services() {
  useScrollAnimation();

  return (
    <>
      <div className="page-header" style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>Our Services</h1>
        </div>
      </div>
      
      <section className="services-content">
        <div className="container" style={{ padding: '80px 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h4 style={{ color: '#3b5bdb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>SERVICES</h4>
            <h2 style={{ color: 'var(--primary-dark)', fontSize: '2.5rem', marginBottom: '20px' }}>List of our clinic services</h2>
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Our Professional Services designed to provide you with the most comfortable, efficient, and comprehensive dental care possible.</p>
          </div>

          <div className="services-grid">
            
            <div className="service-card animate-on-scroll fade-up">
              <img src="/contact_hero.png" alt="General Dentistry" className="service-image" />
              <div className="service-title-default">
                <h3>General Dentistry</h3>
              </div>
              <div className="service-overlay">
                <h3>General Dentistry</h3>
                <p>Routine cleanings, exams, and x-rays to maintain optimal oral health.</p>
                <Link to="/services/general-dentistry" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="/clinic_banner_1.png" alt="Dental Root Canal" className="service-image" />
              <div className="service-title-default">
                <h3>Dental Root Canal</h3>
              </div>
              <div className="service-overlay">
                <h3>Dental Root Canal</h3>
                <p>Professional root canal treatment designed to help preserve your natural tooth and restore comfortable function.</p>
                <Link to="/services/dental-root-canal" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="/spec_cosmetic.png" alt="Molar Crown" className="service-image" />
              <div className="service-title-default">
                <h3>Molar Crown</h3>
              </div>
              <div className="service-overlay">
                <h3>Molar Crown</h3>
                <p>Custom-crafted dental crowns to protect and strengthen damaged molars for a natural bite.</p>
                <Link to="/services/molar-crown" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up">
              <img src="/dr_juma.png" alt="Molar Professional" className="service-image" />
              <div className="service-title-default">
                <h3>Molar Professional</h3>
              </div>
              <div className="service-overlay">
                <h3>Molar Professional</h3>
                <p>Advanced care and treatment specifically tailored for maintaining the health of your molar teeth.</p>
                <Link to="/services/molar-professional" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="/spec_pediatric.png" alt="Teeth Cleaning" className="service-image" />
              <div className="service-title-default">
                <h3>Teeth Cleaning</h3>
              </div>
              <div className="service-overlay">
                <h3>Teeth Cleaning</h3>
                <p>Daily teeth cleaning and hygiene is the process of removing as much plaque and tartar buildup as possible from the enamel of a tooth.</p>
                <Link to="/services/teeth-cleaning" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="/video_thumb.png" alt="Emergencies" className="service-image" />
              <div className="service-title-default">
                <h3>Emergencies</h3>
              </div>
              <div className="service-overlay">
                <h3>Emergencies</h3>
                <p>Fast, compassionate care for dental emergencies to relieve pain and address urgent issues.</p>
                <Link to="/services/emergencies" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up">
              <img src="/clinic_banner_2.png" alt="Dental Bridges" className="service-image" />
              <div className="service-title-default">
                <h3>Dental Bridges</h3>
              </div>
              <div className="service-overlay">
                <h3>Dental Bridges</h3>
                <p>Restore your smile's function and appearance by closing the gaps caused by missing teeth.</p>
                <Link to="/services/dental-bridges" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <img src="/contact_hero.png" alt="Oral Cancer" className="service-image" />
              <div className="service-title-default">
                <h3>Oral Cancer Screening</h3>
              </div>
              <div className="service-overlay">
                <h3>Oral Cancer</h3>
                <p>Comprehensive oral examinations and advanced screenings for early detection and prevention.</p>
                <Link to="/services/oral-cancer" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

            <div className="service-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <img src="/spec_ortho.png" alt="Orthodontics" className="service-image" />
              <div className="service-title-default">
                <h3>Orthodontics</h3>
              </div>
              <div className="service-overlay">
                <h3>Orthodontics</h3>
                <p>Clear aligners and traditional braces for patients of all ages to achieve a straight smile.</p>
                <Link to="/services/orthodontics" className="more-details">More Details <span>→</span></Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
