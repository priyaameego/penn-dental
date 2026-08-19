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
          <div className="cards-grid" style={{ position: 'relative', top: '-60px' }}>
            <div className="card card-light animate-on-scroll fade-up">
              <div className="card-icon" style={{ color: 'var(--accent)', background: 'rgba(183, 110, 121, 0.08)', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 20px' }}>
                <svg viewBox="0 0 24 24" width="35" height="35" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2C7.58 2 4 5.58 4 10c0 3.32 2.03 6.16 4.93 7.37L12 22l3.07-4.63C17.97 16.16 20 13.32 20 10c0-4.42-3.58-8-8-8z"/></svg>
              </div>
              <div className="card-content">
                <h3 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>X-Guide® System</h3>
                <h4 style={{ color: 'var(--accent)', fontWeight: '600' }}>Dynamic 3-D Navigation</h4>
                <p style={{ color: 'var(--text-muted)' }}>Extends the capabilities of our cone beam system for highly accurate dental implant procedures.</p>
              </div>
            </div>
            
            <div className="card card-light animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="card-icon" style={{ color: 'var(--accent)', background: 'rgba(183, 110, 121, 0.08)', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 20px' }}>
                <svg viewBox="0 0 24 24" width="35" height="35" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              </div>
              <div className="card-content">
                <h3 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>Cosmetic Dentistry</h3>
                <h4 style={{ color: 'var(--accent)', fontWeight: '600' }}>Complete Smile Makeover</h4>
                <p style={{ color: 'var(--text-muted)' }}>Designed to rejuvenate your smile and give you the confidence you deserve with premium materials.</p>
              </div>
            </div>
            
            <div className="card card-light animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="card-icon" style={{ color: 'var(--accent)', background: 'rgba(183, 110, 121, 0.08)', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 20px' }}>
                <svg viewBox="0 0 24 24" width="35" height="35" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg>
              </div>
              <div className="card-content">
                <h3 style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>Orthodontics</h3>
                <h4 style={{ color: 'var(--accent)', fontWeight: '600' }}>Invisalign® Clear Aligners</h4>
                <p style={{ color: 'var(--text-muted)' }}>Achieve that straight, beautiful smile discreetly and comfortably with our clear aligner solutions.</p>
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
      <section className="welcome-section section-padding" style={{ backgroundColor: 'var(--bg-white)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', backgroundColor: 'rgba(183, 110, 121, 0.03)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div className="welcome-image animate-on-scroll slide-right" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '2px solid var(--accent)', borderRadius: '24px', zIndex: -1 }}></div>
              <img src="/daniel.png" alt="Penn Dental Team" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', transition: 'transform 0.8s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            
            <div className="welcome-content animate-on-scroll slide-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)' }}></span>
                <h5 className="sub-heading" style={{ margin: 0 }}>Dentistry</h5>
              </div>
              <h2 className="section-title">Welcome To Penn Dental <span style={{ color: 'var(--accent)', fontWeight: '300', fontStyle: 'italic' }}>And Implant Center</span></h2>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '20px', fontSize: '1.25rem', color: 'var(--primary-dark)', fontWeight: '500' }}>Hello dear visitor,</p>
                <p style={{ marginBottom: '20px' }}>We know that a healthy mouth—especially the teeth, lips, and tongue—is essential for speech and affects our ability to taste, chew, and digest foods. We also know that poor oral health—such as chronic inflammation from gum disease—has been associated with heart disease, blockages, and strokes.</p>
                <p style={{ marginBottom: '20px' }}>Research even suggests that a healthy mouth may help prevent pre-term births and low birth-weight babies, and help us prevent memory loss in later years of life. We are committed to helping you maintain your oral health as an integral part of your overall health and wellness.</p>
                <p style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '20px', fontStyle: 'italic' }}>We offer a complete range of dental care that covers everything from emergency care to regular exams and cleanings, orthodontics, bridges, crowns, dentures, fillings, implants, root canals, veneers, extractions, and so much more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Showcase Section (Small video player and Welcome Dr Juma removed) */}
      <section className="services-showcase section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <style>
          {`
            .premium-list-item {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: pointer;
              border-radius: 8px;
              padding: 15px 20px;
              margin-left: -20px;
              background: transparent;
              border: 1px solid transparent;
            }
            .premium-list-item:hover {
              background: #fff;
              border: 1px solid rgba(183, 110, 121, 0.1);
              transform: translateX(10px);
              box-shadow: var(--shadow-sm);
            }
            .premium-list-item:hover .check-icon {
              background-color: var(--accent);
              color: #fff;
              transform: scale(1.1);
            }
            .check-icon {
              transition: all 0.3s ease;
              width: 30px;
              height: 30px;
              background-color: rgba(183, 110, 121, 0.1);
              color: var(--accent);
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 0.9rem;
            }
          `}
        </style>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h5 className="sub-heading">Expertise</h5>
            <h2 className="section-title">We serve Dallas and <span style={{ color: 'var(--accent)', fontWeight: '300', fontStyle: 'italic' }}>adjoining areas.</span></h2>
          </div>
          <div className="showcase-grid" style={{ marginTop: '0', alignItems: 'center' }}>
            <div className="showcase-list animate-on-scroll slide-right" style={{ paddingRight: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)' }}></span>
                <h5 className="sub-heading" style={{ margin: 0 }}>What we do</h5>
              </div>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Premium Dental <span style={{ color: 'var(--accent)' }}>Care</span></h2>
              <ul className="service-check-list" style={{ marginTop: '0' }}>
                <li className="premium-list-item"><i className="check-icon">✓</i> <span style={{ fontWeight: '500', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>X-Guided® Dental Surgery</span></li>
                <li className="premium-list-item"><i className="check-icon">✓</i> <span style={{ fontWeight: '500', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Periodontal Therapy</span></li>
                <li className="premium-list-item"><i className="check-icon">✓</i> <span style={{ fontWeight: '500', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Preventive Cleanings</span></li>
                <li className="premium-list-item"><i className="check-icon">✓</i> <span style={{ fontWeight: '500', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Implants, Root Canals, Veneers, Extractions</span></li>
                <li className="premium-list-item"><i className="check-icon">✓</i> <span style={{ fontWeight: '500', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Grafting, Orthodontics, Bridges, Crowns</span></li>
              </ul>
            </div>
            <div className="showcase-slider animate-on-scroll slide-left">
              <div className="before-after-container" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative', border: '8px solid #fff' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* Left: Video & Eyebrow */}
            <div className="video-column animate-on-scroll slide-right" style={{ textAlign: 'center' }}>
              <div className="video-thumbnail-wrapper" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', display: 'inline-block', width: '100%', border: '8px solid #fff' }}>
                <img src="https://img.youtube.com/vi/L5ZIWdoj7Ro/sddefault.jpg" alt="Penn Dental Video" style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                
                {/* Play Button Overlay */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', backgroundColor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', pointerEvents: 'none' }}>
                  <svg viewBox="0 0 24 24" width="35" height="35" fill="var(--accent)" style={{ marginLeft: '4px' }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-muted)', marginTop: '25px', lineHeight: '1.4', fontStyle: 'italic' }}>
                "Creating Healthy, Whiter, Brighter Smiles Since 1979"
              </h4>
            </div>

            {/* Right: Content */}
            <div className="content-column animate-on-scroll slide-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)' }}></span>
                <h5 className="sub-heading" style={{ margin: 0 }}>Treatment</h5>
              </div>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>Personalized Dental <span style={{ color: 'var(--accent)', fontWeight: '300', fontStyle: 'italic' }}>care for DFW</span></h2>
              
              <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)', marginTop: '30px' }}>
                <p>
                  Dental cleaning and examinations are considered preventive care, which allows teeth to be cavity and infection-free. Everyone in the family can stay healthy by scheduling dental cleanings and examinations twice a year.
                </p>
                <p style={{ marginTop: '20px' }}>
                  Services for damaged teeth such as dental crowns and root canals protect damaged teeth and replace missing teeth. Dental restoration uses several methods to place things like veneers, crowns, bridges, and dental implants to replenish damaged teeth.
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
      <section className="specialities-section section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h5 className="sub-heading">Excellence</h5>
            <h2 className="section-title">Our <span style={{ color: 'var(--accent)', fontWeight: '300', fontStyle: 'italic' }}>Specialities</span></h2>
          </div>
          <div className="specialities-grid">
            
            <div className="speciality-card animate-on-scroll fade-up" style={{ borderRadius: '24px' }}>
              <img src="/spec_ortho.png" alt="Orthodontics" />
              <div className="speciality-overlay" style={{ background: 'linear-gradient(to top, rgba(183, 110, 121, 0.95), transparent)' }}>
                <h3 style={{ color: '#fff' }}>Orthodontics</h3>
                <div className="hover-content">
                  <p style={{ color: '#fff' }}>Straighten your teeth and improve your bite with our comprehensive orthodontic solutions.</p>
                  <Link to="/services/orthodontics" style={{ color: '#fff', borderBottom: '1px solid #fff', marginTop: '15px', display: 'inline-block', paddingBottom: '2px', textDecoration: 'none' }}>Learn More</Link>
                </div>
              </div>
            </div>

            <div className="speciality-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms', borderRadius: '24px' }}>
              <img src="/spec_cosmetic.png" alt="Cosmetic Dentistry" />
              <div className="speciality-overlay" style={{ background: 'linear-gradient(to top, rgba(183, 110, 121, 0.95), transparent)' }}>
                <h3 style={{ color: '#fff' }}>Cosmetic Dentistry</h3>
                <div className="hover-content">
                  <p style={{ color: '#fff' }}>Transform your smile with premium veneers, whitening, and complete smile makeovers.</p>
                  <Link to="/services/cosmetic-dentistry" style={{ color: '#fff', borderBottom: '1px solid #fff', marginTop: '15px', display: 'inline-block', paddingBottom: '2px', textDecoration: 'none' }}>Learn More</Link>
                </div>
              </div>
            </div>

            <div className="speciality-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms', borderRadius: '24px' }}>
              <img src="/spec_pediatric.png" alt="Sleep Apnea" />
              <div className="speciality-overlay" style={{ background: 'linear-gradient(to top, rgba(183, 110, 121, 0.95), transparent)' }}>
                <h3 style={{ color: '#fff' }}>Sleep Apnea</h3>
                <div className="hover-content">
                  <p style={{ color: '#fff' }}>Breathe easier and sleep better with our custom oral appliance therapy.</p>
                  <Link to="/services/sleep-apnea" style={{ color: '#fff', borderBottom: '1px solid #fff', marginTop: '15px', display: 'inline-block', paddingBottom: '2px', textDecoration: 'none' }}>Learn More</Link>
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
            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: '40px', overflowX: 'auto', paddingTop: '40px', paddingBottom: '20px' }}>
              <div className="membership-logo-wrapper" data-tooltip="CLEARCORRECT">
                <img src="https://penndentaldfw.com/wp-content/uploads/2020/01/1-300x75.jpg" alt="Affiliation 1" style={{ maxHeight: '40px', width: 'auto', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s ease', cursor: 'pointer', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'} />
              </div>
              <div className="membership-logo-wrapper" data-tooltip="INVISALIGN">
                <img src="https://penndentaldfw.com/wp-content/uploads/2020/01/2-300x75.png" alt="Affiliation 2" style={{ maxHeight: '40px', width: 'auto', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s ease', cursor: 'pointer', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'} />
              </div>
              <div className="membership-logo-wrapper" data-tooltip="AAFE">
                <img src="https://penndentaldfw.com/wp-content/uploads/2020/01/3-300x75.png" alt="Affiliation 3" style={{ maxHeight: '40px', width: 'auto', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s ease', cursor: 'pointer', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'} />
              </div>
              <div className="membership-logo-wrapper" data-tooltip="FAST BRACES">
                <img src="https://penndentaldfw.com/wp-content/uploads/2020/01/5-300x75.png" alt="Affiliation 4" style={{ maxHeight: '40px', width: 'auto', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s ease', cursor: 'pointer', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'} />
              </div>
              <div className="membership-logo-wrapper" data-tooltip="SMILE CENTER">
                <img src="https://penndentaldfw.com/wp-content/uploads/2018/01/logo-dental-1-1-258x100.png" alt="Affiliation 5" style={{ maxHeight: '45px', width: 'auto', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s ease', cursor: 'pointer', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'} />
              </div>
              <div className="membership-logo-wrapper" data-tooltip="CLEAR ALIGNERS">
                <img src="https://penndentaldfw.com/wp-content/uploads/2024/09/AACALogoTransparent@2x-1-300x122.png" alt="Affiliation 6" style={{ maxHeight: '50px', width: 'auto', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s ease', cursor: 'pointer', flexShrink: 0 }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: PATIENTS TESTIMONIAL --- */}
      <section className="patients-testimonial-section section-padding" style={{ backgroundColor: 'var(--bg-light)', position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .watermark-text {
              position: absolute;
              top: 50%;
              left: -5%;
              transform: translateY(-50%);
              font-size: 20vw;
              font-weight: 900;
              color: #ffffff;
              z-index: 0;
              pointer-events: none;
              white-space: nowrap;
              letter-spacing: 15px;
              opacity: 0.8;
            }
            .testimonial-bubble {
              background: #fff;
              border-radius: 24px;
              padding: 50px;
              position: relative;
              box-shadow: var(--shadow-lg);
              border-bottom-left-radius: 4px;
              transition: transform 0.5s ease;
              border: 1px solid rgba(0,0,0,0.02);
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
              border-top: 20px solid #fff;
              border-right: 20px solid transparent;
            }
            .dot-active {
              background-color: var(--accent) !important;
              transform: scale(1.2);
            }
          `}
        </style>
        
        <div className="watermark-text animate-on-scroll slide-right">PATIENTS</div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            
            {/* Left: Heading */}
            <div className="patients-header animate-on-scroll slide-right" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 15px 30px rgba(183,110,121,0.3)', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                <svg viewBox="0 0 24 24" width="45" height="45" fill="#fff">
                  <path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" />
                </svg>
              </div>
              <div>
                <h5 className="sub-heading" style={{ marginBottom: '10px' }}>Testimonials</h5>
                <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '0' }}>Our <span style={{ color: 'var(--accent)', fontWeight: '300', fontStyle: 'italic' }}>Patients</span></h2>
              </div>
            </div>

            {/* Right: Testimonial Bubble */}
            <div className="patients-testimonial animate-on-scroll slide-left">
              <div className="testimonial-bubble">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="rgba(183, 110, 121, 0.1)" style={{ position: 'absolute', top: '30px', left: '30px' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '0', fontStyle: 'italic', position: 'relative', zIndex: 1, paddingLeft: '20px', paddingTop: '10px' }}>
                  "Penn dental is amazing! Couldn't have found a better place to go to! The staff is amazing and treats you like family! Been going here for about two years, and I can say that this is my best dental experience. From basic cleanings to more intense procedures, they make sure to take care of you!"
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingLeft: '20px' }}>
                <div>
                  <h4 style={{ color: 'var(--primary-dark)', fontWeight: '800', fontSize: '1.4rem', margin: 0 }}>Hailey Faul</h4>
                  <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '500' }}>Patient</span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
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
