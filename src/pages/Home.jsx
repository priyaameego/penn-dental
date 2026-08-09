import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

function Home() {
  useScrollAnimation();
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper after component mounts
    if (window.Swiper && document.querySelector('.mySwiper') && !swiperRef.current) {
      swiperRef.current = new window.Swiper(".mySwiper", {
        effect: "fade", // Switching to fade for a more cinematic feel
        fadeEffect: {
          crossFade: true
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in">
      <style>
        {`
          .page-fade-in {
            animation: fadeInPage 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          @keyframes fadeInPage {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      {/* 1. Large Hero Slideshow */}
      <section className="hero-slider-section">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            
            {/* Slide 1: Company Video */}
            <div className="swiper-slide">
              <div className="slide-video-container">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/video_thumb.png"
                  className="slide-video"
                >
                  <source src="/company_video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="slide-overlay" style={{ background: 'rgba(0,0,0,0.4)' }}></div>
              <div className="container slide-content-wrapper" style={{ justifyContent: 'center' }}>
                <div className="slide-text" style={{ width: '100%', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <span className="slide-badge" style={{ backgroundColor: 'var(--accent)', marginBottom: '15px' }}>WELCOME TO</span>
                  <img src="/logo_brown.png" alt="Penn Dental Logo" style={{ height: '100px', marginBottom: '20px', filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.4))' }} />
                  <h1 className="slide-heading" style={{ color: '#fff', textShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>Creating healthy,<br/>whiter, brighter<br/>smiles since 1979</h1>
                  <div style={{ marginTop: '30px' }}>
                    <Link to="/contact.html" className="btn-solid" style={{ backgroundColor: 'var(--accent)', color: '#fff', padding: '15px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Book Appointment</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Penn Dental Advertisement */}
            <div className="swiper-slide">
              <div className="slide-bg ken-burns" style={{ backgroundImage: "url('/clinic_banner_1.png')" }}></div>
              <div className="slide-overlay" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
              <div className="container slide-content-wrapper" style={{ justifyContent: 'center' }}>
                <div className="slide-text" style={{ width: '100%', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <span className="slide-badge" style={{ backgroundColor: 'var(--primary-dark)', marginBottom: '15px' }}>EXCELLENCE IN</span>
                  <h1 className="slide-heading" style={{ color: '#fff', textShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>Premium<br/>Family Dentistry</h1>
                  <h1 className="slide-heading" style={{ color: '#fff', fontSize: '2.5rem', marginTop: '10px' }}>Your smile is our top priority</h1>
                  <div style={{ marginTop: '30px' }}>
                    <Link to="/contact.html" className="btn-solid" style={{ backgroundColor: 'var(--accent)', color: '#fff', padding: '15px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Schedule a Consultation</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: X-Guide Advertisement */}
            <div className="swiper-slide">
              <div className="slide-bg ken-burns" style={{ backgroundImage: "url('/clinic_banner_2.png')" }}></div>
              <div className="slide-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))' }}></div>
              <div className="container slide-content-wrapper" style={{ justifyContent: 'center' }}>
                <div className="slide-text" style={{ width: '100%', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <span className="slide-badge" style={{ backgroundColor: 'var(--accent)', marginBottom: '15px' }}>ADVANCED TECHNOLOGY</span>
                  <h1 className="slide-heading" style={{ color: '#fff', fontSize: '3rem', textShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>X-Guide®<br/>Surgical System</h1>
                  <p style={{ color: '#eee', fontSize: '1.2rem', maxWidth: '500px', margin: '20px 0', lineHeight: '1.6' }}>
                    Dynamic 3D Navigation for precise, safe, and efficient dental implant placement. Experience the future of dentistry.
                  </p>
                  <div style={{ marginTop: '30px' }}>
                    <Link to="/services/dental-implants" className="btn-solid" style={{ backgroundColor: '#fff', color: 'var(--primary-dark)', padding: '15px 40px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Controls */}
          <div className="swiper-button-prev" style={{ color: 'var(--bg-white)' }}></div>
          <div className="swiper-button-next" style={{ color: 'var(--bg-white)' }}></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="feature-cards">
        <div className="container">
          <div className="cards-grid">
            <div className="card animate-on-scroll fade-up" style={{ backgroundColor: 'var(--primary-dark)', color: '#fff', borderBottom: '4px solid var(--accent)' }}>
              <div className="card-icon" style={{ color: 'var(--accent)' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2C7.58 2 4 5.58 4 10c0 3.32 2.03 6.16 4.93 7.37L12 22l3.07-4.63C17.97 16.16 20 13.32 20 10c0-4.42-3.58-8-8-8z"/></svg>
              </div>
              <div className="card-content">
                <h3 style={{ color: '#fff' }}>X-Guide® System</h3>
                <h4 style={{ color: 'var(--accent)' }}>Dynamic 3-D Navigation</h4>
                <p style={{ opacity: 0.9 }}>Extends the capabilities of our cone beam system for highly accurate dental implant procedures.</p>
              </div>
            </div>
            
            <div className="card animate-on-scroll fade-up" style={{ transitionDelay: '100ms', backgroundColor: 'var(--primary-dark)', color: '#fff', borderBottom: '4px solid var(--accent)' }}>
              <div className="card-icon" style={{ color: 'var(--accent)' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </div>
              <div className="card-content">
                <h3 style={{ color: '#fff' }}>Cosmetic Dentistry</h3>
                <h4 style={{ color: 'var(--accent)' }}>Complete Smile Makeover</h4>
                <p style={{ opacity: 0.9 }}>Designed to rejuvenate your smile and give you the confidence you deserve with premium materials.</p>
              </div>
            </div>
            
            <div className="card animate-on-scroll fade-up" style={{ transitionDelay: '200ms', backgroundColor: 'var(--primary-dark)', color: '#fff', borderBottom: '4px solid var(--accent)' }}>
              <div className="card-icon" style={{ color: 'var(--accent)' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
              </div>
              <div className="card-content">
                <h3 style={{ color: '#fff' }}>Orthodontics</h3>
                <h4 style={{ color: 'var(--accent)' }}>Invisalign® Clear Aligners</h4>
                <p style={{ opacity: 0.9 }}>Achieve that straight, beautiful smile discreetly and comfortably with our clear aligner solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Marquee */}
      <section className="insurance-marquee" style={{ backgroundColor: 'var(--accent)' }}>
        <div className="marquee-content">
          <span>We Accept all PPO Insurance</span>
          <span>We Accept all PPO Insurance</span>
          <span>We Accept all PPO Insurance</span>
          <span>We Accept all PPO Insurance</span>
          <span>We Accept all PPO Insurance</span>
        </div>
      </section>

      {/* --- NEW SECTION 1: ABOUT / WELCOME --- */}
      <section className="welcome-section section-padding" style={{ backgroundColor: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'flex-start' }}>
            <div className="welcome-image animate-on-scroll slide-right" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', marginTop: '10px' }}>
              <img src="/daniel.png" alt="Penn Dental Team" style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.8s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            
            <div className="welcome-content animate-on-scroll slide-left">
              <h5 className="sub-heading" style={{ color: 'var(--accent)', marginBottom: '5px' }}>DENTISTRY</h5>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '15px' }}>Hello dear visitor</p>
              <h2 className="mb-4 text-large" style={{ color: 'var(--primary-dark)', lineHeight: '1.2' }}>Welcome To Penn Dental And Implant Center</h2>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '15px' }}>We know that a healthy mouth—especially the teeth, lips, and tongue—is essential for speech and affects our ability to taste, chew, and digest foods. We also know that poor oral health—such as chronic inflammation from gum disease—has been associated with heart disease, blockages, and strokes.</p>
                <p style={{ marginBottom: '15px' }}>Research even suggests that a healthy mouth may help prevent pre-term births and low birth-weight babies, and help us prevent memory loss in later years of life. We are committed to helping you maintain your oral health as an integral part of your overall health and wellness.</p>
                <p>We offer a complete range of dental care that covers everything from emergency care to regular exams and cleanings, orthodontics, bridges, crowns, dentures, fillings, implants, root canals, veneers, extractions, and so much more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Showcase Section (Small video player and Welcome Dr Juma removed) */}
      <section className="services-showcase section-padding bg-light-pattern">
        <style>
          {`
            .premium-list-item {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: pointer;
              border-radius: 8px;
              padding: 8px 12px;
              margin-left: -12px;
            }
            .premium-list-item:hover {
              font-weight: 700;
              color: var(--primary-dark);
              background: rgba(183, 110, 121, 0.05);
              transform: translateX(10px);
              box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            }
            .premium-list-item:hover .check-icon {
              transform: scale(1.2);
              transition: transform 0.3s ease;
            }
            .check-icon {
              transition: transform 0.3s ease;
            }
          `}
        </style>
        <div className="container">
          <h2 className="section-title animate-on-scroll fade-up" style={{ textAlign: 'center', letterSpacing: '1px', fontWeight: '700' }}>We serve Dallas and adjoining areas.</h2>
          <div className="showcase-grid" style={{ marginTop: '50px' }}>
            <div className="showcase-list animate-on-scroll slide-right">
              <h5 className="sub-heading" style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>What we do</h5>
              <h2 className="mb-4 text-large" style={{ fontWeight: '800', lineHeight: '1.2', color: 'var(--primary-dark)' }}>Premium Dental <span style={{ color: 'var(--accent)' }}>Care</span></h2>
              <ul className="service-check-list">
                <li className="premium-list-item"><i className="check-icon" style={{ color: 'var(--accent)' }}>✓</i> X-Guided® Dental Surgery</li>
                <li className="premium-list-item"><i className="check-icon" style={{ color: 'var(--accent)' }}>✓</i> Periodontal Therapy</li>
                <li className="premium-list-item"><i className="check-icon" style={{ color: 'var(--accent)' }}>✓</i> Preventive Cleanings</li>
                <li className="premium-list-item"><i className="check-icon" style={{ color: 'var(--accent)' }}>✓</i> Implants, Root Canals, Veneers, Extractions</li>
                <li className="premium-list-item"><i className="check-icon" style={{ color: 'var(--accent)' }}>✓</i> Grafting, Orthodontics, Bridges, Crowns</li>
              </ul>
            </div>
            <div className="showcase-slider animate-on-scroll slide-left">
              <div className="before-after-container" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative' }}>
                <BeforeAfterSlider
                  beforeImage="https://penndentaldfw.com/wp-content/uploads/2017/07/before-1-600x327.jpg"
                  afterImage="https://penndentaldfw.com/wp-content/uploads/2017/07/after-1-600x327.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: PERSONALIZED DENTAL CARE --- */}
      <section className="personalized-care-section section-padding" style={{ backgroundColor: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left: Video & Eyebrow */}
            <div className="video-column animate-on-scroll slide-right" style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '15px', lineHeight: '1.4' }}>
                Creating Healthy, Whiter, Brighter<br/>Smiles Since 1979
              </h4>
              <div className="video-thumbnail-wrapper" style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', cursor: 'pointer', display: 'inline-block', width: '100%' }}>
                <img src="https://img.youtube.com/vi/L5ZIWdoj7Ro/sddefault.jpg" alt="Penn Dental Video" style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                
                {/* Play Button Overlay */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', pointerEvents: 'none' }}>
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="var(--primary-dark)" style={{ marginLeft: '4px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="content-column animate-on-scroll slide-left">
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '15px', lineHeight: '1.2' }}>Personalized Dental care for DFW</h2>
              
              {/* Theme-colored separator */}
              <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '25px', borderRadius: '2px' }}></div>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p>
                  Dental cleaning and examinations are considered preventive care, which allows teeth to be cavity and infection-free. Everyone in the family can stay healthy by scheduling dental cleanings and examinations twice a year. Services for damaged teeth such as dental crowns and root canals protect damaged teeth and replace missing teeth. Dental restoration uses several methods to place things like veneers, crowns, bridges, and dental implants to replenish damaged teeth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: OUR SERVICES GRID --- */}
      <section className="services-grid-section section-padding bg-light-pattern" style={{ borderTop: '1px solid #eaeaea', overflow: 'hidden' }}>
        <style>
          {`
            .service-grid-item {
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 10px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: pointer;
              border-radius: 8px;
              position: relative;
            }
            .service-grid-item:hover {
              background: rgba(183, 110, 121, 0.05);
              transform: translateX(8px);
              box-shadow: 0 4px 10px rgba(0,0,0,0.02);
            }
            .service-grid-item .leaf-icon {
              color: var(--accent);
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              flex-shrink: 0;
            }
            .service-grid-item:hover .leaf-icon {
              transform: scale(1.3) rotate(10deg);
            }
            .service-grid-text {
              font-size: 1.05rem;
              color: var(--text-main);
              font-weight: 500;
              transition: color 0.3s ease;
            }
            .service-grid-item:hover .service-grid-text {
              color: var(--primary-dark);
              font-weight: 700;
            }
            .services-grid-layout {
              display: grid;
              grid-template-columns: 1fr;
              gap: 40px;
              align-items: center;
            }
            @media (min-width: 992px) {
              .services-grid-layout {
                grid-template-columns: 1fr 3fr;
                gap: 60px;
              }
            }
            .four-col-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
            }
          `}
        </style>
        <div className="container">
          <div className="services-grid-layout">
            
            {/* Left: Icon & Heading */}
            <div className="services-grid-header animate-on-scroll slide-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(183, 110, 121, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', border: '2px solid rgba(183, 110, 121, 0.2)' }}>
                {/* Tooth Icon */}
                <svg viewBox="0 0 24 24" width="40" height="40" fill="var(--accent)">
                  <path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" />
                </svg>
              </div>
              <h5 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Know Before You Go</h5>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.2' }}>Our <span style={{ color: 'var(--accent)' }}>Services</span></h2>
            </div>

            {/* Right: 4 Column Grid */}
            <div className="services-grid-list animate-on-scroll slide-left">
              <div className="four-col-grid">
                
                {/* Column 1 */}
                <div className="grid-col">
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Tooth Colored Fillings</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Root Canal Therapy</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Tooth Extractions</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="grid-col">
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Veneers</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">X-Rays</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Tooth Cleaning</span>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="grid-col">
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Whitening</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Dentures</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Implants</span>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="grid-col">
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Bridges</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Crowns</span>
                  </div>
                  <div className="service-grid-item">
                    <svg className="leaf-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.7 6.4-10.4 7.2-11.1.4-.4 1.1-.4 1.5 0 .8.7 7.3 6.4 7.3 11.1 0 4.4-3.6 8-8 8z" /></svg>
                    <span className="service-grid-text">Orthodontist</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Specialities */}
      <section className="specialities-section section-padding">
        <div className="container">
          <h2 className="text-center section-title mb-5 animate-on-scroll fade-up">Our Specialities</h2>
          <div className="specialities-grid">
            
            <div className="speciality-card animate-on-scroll fade-up" style={{ borderRadius: '15px' }}>
              <img src="/spec_ortho.png" alt="Orthodontics" />
              <div className="speciality-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 style={{ color: 'var(--accent)' }}>Orthodontics</h3>
                <div className="hover-content">
                  <p>Straighten your teeth and improve your bite with our comprehensive orthodontic solutions.</p>
                  <Link to="/services/orthodontics" style={{ color: '#fff', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>Learn More</Link>
                </div>
              </div>
            </div>

            <div className="speciality-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms', borderRadius: '15px' }}>
              <img src="/spec_cosmetic.png" alt="Cosmetic Dentistry" />
              <div className="speciality-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 style={{ color: 'var(--accent)' }}>Cosmetic Dentistry</h3>
                <div className="hover-content">
                  <p>Transform your smile with premium veneers, whitening, and complete smile makeovers.</p>
                  <Link to="/services/cosmetic-dentistry" style={{ color: '#fff', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>Learn More</Link>
                </div>
              </div>
            </div>

            <div className="speciality-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms', borderRadius: '15px' }}>
              <img src="/spec_pediatric.png" alt="Pediatric Dentistry" />
              <div className="speciality-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 style={{ color: 'var(--accent)' }}>Sleep Apnea</h3>
                <div className="hover-content">
                  <p>Breathe easier and sleep better with our custom oral appliance therapy.</p>
                  <Link to="/services/sleep-apnea" style={{ color: '#fff', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>Learn More</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: APPOINTMENT CTA & MEMBERSHIPS --- */}
      <section className="appointment-cta-section" style={{ marginTop: '50px' }}>
        
        {/* Premium Banner CTA */}
        <div className="cta-banner animate-on-scroll fade-up" style={{ background: 'linear-gradient(135deg, var(--primary-dark), #1a1a1a)', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
          
          {/* Decorative Background Elements */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(183, 110, 121, 0.1)', filter: 'blur(30px)', animation: 'pulse 4s infinite alternate' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(183, 110, 121, 0.05)', filter: 'blur(20px)', animation: 'pulse 5s infinite alternate-reverse' }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px' }}>
              <div style={{ flex: '1 1 500px' }}>
                <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '400', marginBottom: '10px' }}>
                  <strong style={{ fontWeight: '800' }}>Make a</strong> Quick Appointment
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Please contact us and a member of our staff will reach out as soon as possible!</p>
              </div>
              <div>
                <Link to="/contact" className="premium-btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: 'var(--primary-dark)', padding: '15px 35px', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 25px rgba(0,0,0,0.3)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'; }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  Quick Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Memberships */}
        <div className="memberships-container section-padding bg-light-pattern animate-on-scroll fade-up">
          <div className="container text-center">
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-dark)', marginBottom: '50px' }}>Memberships & Affiliations</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px', opacity: '0.6' }}>
              {/* Using styled text as elegant placeholders for logos */}
              <h3 style={{ fontSize: '1.8rem', fontWeight: '300', letterSpacing: '-1px', margin: 0, transition: 'opacity 0.3s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}>Clear<span style={{fontWeight:'700'}}>Correct</span></h3>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', fontStyle: 'italic', margin: 0, transition: 'opacity 0.3s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}><span style={{color:'var(--accent)'}}>invis</span>align</h3>
              <h3 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '2px', margin: 0, transition: 'opacity 0.3s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}>AAFE</h3>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', margin: 0, transition: 'opacity 0.3s', cursor: 'default', lineHeight: '1.2' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}>MASTER <br/><span style={{fontSize:'0.8rem', fontWeight:'400'}}>Fast Braces Provider</span></h3>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '300', margin: 0, transition: 'opacity 0.3s', cursor: 'default', lineHeight: '1.2' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.6'}>s<span style={{color:'var(--accent)'}}>mile</span> <br/><span style={{fontSize:'0.8rem', fontWeight:'400'}}>center</span></h3>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: PATIENTS TESTIMONIAL --- */}
      <section className="patients-testimonial-section section-padding" style={{ backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .watermark-text {
              position: absolute;
              top: 50%;
              left: 2%;
              transform: translateY(-50%);
              font-size: 15vw;
              font-weight: 900;
              color: rgba(183, 110, 121, 0.04);
              z-index: 0;
              pointer-events: none;
              white-space: nowrap;
              letter-spacing: 15px;
            }
            .testimonial-bubble {
              background: var(--bg-light);
              border-radius: 15px;
              padding: 40px;
              position: relative;
              box-shadow: 0 20px 40px rgba(0,0,0,0.05);
              border-bottom-left-radius: 0;
              transition: transform 0.5s ease;
            }
            .testimonial-bubble:hover {
              transform: translateY(-5px);
            }
            .testimonial-bubble::after {
              content: '';
              position: absolute;
              bottom: -20px;
              left: 0;
              width: 0;
              height: 0;
              border-top: 20px solid var(--bg-light);
              border-right: 20px solid transparent;
            }
            .dot-active {
              background-color: var(--accent) !important;
              transform: scale(1.2);
            }
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.8; }
              100% { transform: scale(1.1); opacity: 1; }
            }
          `}
        </style>
        
        <div className="watermark-text animate-on-scroll slide-right">PATIENTS</div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            {/* Left: Heading */}
            <div className="patients-header animate-on-scroll slide-right" style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(183,110,121,0.3)', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                <svg viewBox="0 0 24 24" width="45" height="45" fill="#fff">
                  <path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" />
                </svg>
              </div>
              <div>
                <h5 style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Some of our happy patients</h5>
                <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary-dark)', lineHeight: '1.2' }}>Our <span style={{ color: 'var(--accent)' }}>Patients</span></h2>
              </div>
            </div>

            {/* Right: Testimonial Bubble */}
            <div className="patients-testimonial animate-on-scroll slide-left">
              <div className="testimonial-bubble">
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '0', fontStyle: 'italic' }}>
                  "Penn dental is amazing! Couldn't have found a better place to go to! The staff is amazing and treats you like family! Been going here for about two years, and I can say that this is my best dental experience. From basic cleanings to more intense procedures, they make sure to take care of you!"
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', paddingLeft: '20px' }}>
                <h4 style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '1.3rem', margin: 0 }}>Hailey Faul</h4>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="dot-active" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ccc', transition: 'all 0.3s ease', cursor: 'pointer' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ccc', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#ccc'}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ccc', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#ccc'}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
