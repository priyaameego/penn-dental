import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../testimonials.css';

const slidesData = [
  { text: "State-of-the-art facility with a team that treats you like family. I wouldn't trust my dental health with anyone else.", author: "James H.", label: "Routine Care" },
  { text: "They repaired a chipped tooth flawlessly in just one visit. The color match is perfect; you can't even tell it was ever broken!", author: "Lisa B.", label: "Cosmetic Dentistry" },
  { text: "Dr. Juma is a true professional. He takes the time to listen and explains all options without any pressure. Highly recommended.", author: "William P.", label: "General Dentistry" }
];

function Testimonials() {
  useScrollAnimation();
  
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Swipe logic for slider
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
      setCurrentSlide(prev => (prev + 1) % slidesData.length);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      setCurrentSlide(prev => (prev - 1 + slidesData.length) % slidesData.length);
    }
    setTouchStartX(null);
  };

  return (
    <>
      <section className="testimonials-hero">
        <div className="container animate-on-scroll fade-up">
          <span className="t-label">Patient</span>
          <h1>Testimonials</h1>
          <p>Check out why our patients love us</p>
        </div>
      </section>

      <div className="t-breadcrumb">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><span style={{ margin: '0 10px' }}>→</span> Testimonials</li>
          </ul>
        </div>
      </div>

      <section className="t-intro">
        <div className="container animate-on-scroll fade-up">
          <h2>Trusted by Our Patients</h2>
          <p>Every smile tells a story. Read what our patients have to say about their experience with our dental team and personalized care.</p>
        </div>
      </section>

      <section className="t-video-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'var(--primary-dark)', marginBottom: '40px', fontSize: '2rem' }} className="animate-on-scroll fade-up">Hear From Our Patients</h2>
          
          <div className="t-video-grid">
            <div className="t-video-card animate-on-scroll fade-up" onClick={() => openVideo('L5ZIWdoj7Ro')}>
              <img src="https://img.youtube.com/vi/L5ZIWdoj7Ro/sddefault.jpg" alt="Patient Video 1" />
              <div className="t-play-btn">▶</div>
            </div>
            <div className="t-video-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }} onClick={() => openVideo('jviYRNZUTa0')}>
              <img src="https://img.youtube.com/vi/jviYRNZUTa0/sddefault.jpg" alt="Patient Video 2" />
              <div className="t-play-btn">▶</div>
            </div>
            <div className="t-video-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }} onClick={() => openVideo('sjdGuINQQZQ')}>
              <img src="https://img.youtube.com/vi/sjdGuINQQZQ/sddefault.jpg" alt="Patient Video 3" />
              <div className="t-play-btn">▶</div>
            </div>
            <div className="t-video-card animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }} onClick={() => openVideo('mgMtDkG0o4s')}>
              <img src="https://img.youtube.com/vi/mgMtDkG0o4s/sddefault.jpg" alt="Patient Video 4" />
              <div className="t-play-btn">▶</div>
            </div>
          </div>
        </div>
      </section>

      <section className="t-grid-section">
        <div className="container">
          <div className="t-grid">
            
            <div className="t-card animate-on-scroll fade-up">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"The entire team made me feel incredibly comfortable. My dental implants look completely natural, and the procedure was virtually painless. Best dentist in Dallas!"</p>
              <div className="t-author">
                <div className="t-author-info">
                  <h4>Michael R.</h4>
                  <span>Dental Implants</span>
                </div>
              </div>
            </div>

            <div className="t-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"I had a severe toothache and they fit me in the same day for a root canal. Dr. Juma explained everything clearly and I felt no pain. Highly recommend them."</p>
              <div className="t-author">
                <div className="t-author-info">
                  <h4>Sarah L.</h4>
                  <span>Root Canal</span>
                </div>
              </div>
            </div>

            <div className="t-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"My smile makeover exceeded all my expectations. The porcelain veneers changed my life and gave me back my confidence. The staff is warm and extremely professional."</p>
              <div className="t-author">
                <div className="t-author-info">
                  <h4>Jessica T.</h4>
                  <span>Cosmetic Dentistry</span>
                </div>
              </div>
            </div>

            <div className="t-card animate-on-scroll fade-up">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"I take my whole family here. They are fantastic with kids and make routine cleanings a breeze. The office is beautiful and uses the latest technology."</p>
              <div className="t-author">
                <div className="t-author-info">
                  <h4>David M.</h4>
                  <span>General Dentistry</span>
                </div>
              </div>
            </div>
            
            <div className="t-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"After avoiding the dentist for years due to anxiety, I finally found a place where I feel at ease. The hygienists are so gentle and kind."</p>
              <div className="t-author">
                <div className="t-author-info">
                  <h4>Emily W.</h4>
                  <span>Teeth Cleaning</span>
                </div>
              </div>
            </div>
            
            <div className="t-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"My Invisalign treatment was incredibly smooth. They mapped out the entire process with 3D scanners. My teeth are perfectly straight now!"</p>
              <div className="t-author">
                <div className="t-author-info">
                  <h4>Robert C.</h4>
                  <span>Orthodontics</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="t-featured">
        <div className="container t-featured-layout">
          <div className="t-feat-img animate-on-scroll slide-right">
            <img src="/dr_juma.png" alt="Patient Consultation" />
          </div>
          <div className="t-feat-content animate-on-scroll slide-left">
            <div className="t-stars">★★★★★</div>
            <p className="t-feat-quote">"This clinic truly changed my perspective on dental care. The use of advanced 3D technology made my implant surgery precise and quick. I felt cared for every step of the way."</p>
            <div className="t-author-info">
              <h4 style={{ fontSize: '1.2rem' }}>Amanda K.</h4>
              <span style={{ fontSize: '1rem' }}>Restorative Dentistry</span>
            </div>
          </div>
        </div>
      </section>

      <section className="t-slider-section">
        <div 
          className="container t-slider-container" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
        >
          {slidesData.map((slide, index) => (
            <div key={index} className={`t-slide ${currentSlide === index ? 'active' : ''}`}>
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">"{slide.text}"</p>
              <div className="t-author-info">
                <h4>{slide.author}</h4>
                <span>{slide.label}</span>
              </div>
            </div>
          ))}

          <div className="t-controls">
            <button className="t-btn prev" onClick={() => setCurrentSlide(prev => (prev - 1 + slidesData.length) % slidesData.length)}>❮</button>
            <div className="t-dots">
              {slidesData.map((_, index) => (
                <span 
                  key={index} 
                  className={`t-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
            <button className="t-btn next" onClick={() => setCurrentSlide(prev => (prev + 1) % slidesData.length)}>❯</button>
          </div>
        </div>
      </section>

      <section className="t-stats-section">
        <div className="container t-stats-grid">
          <div className="t-stat animate-on-scroll fade-up">
            <h3>5★</h3>
            <p>Patient Experience</p>
          </div>
          <div className="t-stat animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
            <h3>1000+</h3>
            <p>Smiles Supported</p>
          </div>
          <div className="t-stat animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="t-stat animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
            <h3 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '57px' }}>X-Guide®</h3>
            <p>Modern Technology</p>
          </div>
        </div>
      </section>

      <section className="t-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready to Start Your Smile Journey?</h2>
          <p>Schedule your visit and experience personalized dental care designed around you.</p>
          <div className="t-cta-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', fontSize: '1rem', padding: '15px 30px' }}>Book an Appointment</Link>
            <Link to="/contact.html" className="nav-btn-solid" style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '50px' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      {activeVideo && (
        <div className="v-lightbox active" onClick={closeVideo}>
          <div className="v-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="v-close" onClick={closeVideo}>&times;</button>
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
