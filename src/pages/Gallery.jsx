import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../gallery.css';

const galleryData = [
  { id: 1, category: 'office', src: '/contact_hero.png', alt: 'Modern Reception Area', label: 'Our Office' },
  { id: 2, category: 'technology', src: '/clinic_banner_2.png', alt: '3D Imaging Equipment', label: 'Technology', delay: '50ms' },
  { id: 3, category: 'team', src: '/dr_juma.png', alt: 'Dr. Juma', label: 'Our Team', delay: '100ms' },
  { id: 4, category: 'smiles', src: '/spec_cosmetic.png', alt: 'Cosmetic Dentistry Smile', label: 'Smile Gallery', delay: '150ms' },
  { id: 5, category: 'office', src: '/clinic_banner_1.png', alt: 'Treatment Room', label: 'Our Office', delay: '200ms' },
  { id: 6, category: 'smiles', src: '/spec_ortho.png', alt: 'Orthodontic Smile', label: 'Smile Gallery', delay: '250ms' },
  { id: 7, category: 'technology', src: '/video_thumb.png', alt: 'Dental Technology', label: 'Technology', delay: '300ms' },
  { id: 8, category: 'smiles', src: '/spec_pediatric.png', alt: 'Pediatric Smile', label: 'Smile Gallery', delay: '350ms' },
];

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel, afterLabel, title, description, delay = '0ms' }) {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const moveSlider = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(pos, 100));
    setSliderPos(pos);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) moveSlider(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (isDragging) moveSlider(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={`ba-card animate-on-scroll slide-right`} style={{ transitionDelay: delay }}>
      <div 
        className="ba-slider" 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="ba-image-before">
          <img src={beforeSrc} alt="Before" />
          <span className="ba-label">{beforeLabel}</span>
        </div>
        <div className="ba-image-after" style={{ width: `${sliderPos}%` }}>
          <img src={afterSrc} alt="After" />
          <span className="ba-label">{afterLabel}</span>
        </div>
        <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
          <span className="ba-arrows">↔</span>
        </div>
      </div>
      <div className="ba-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Gallery() {
  useScrollAnimation();
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems = galleryData.filter(item => activeFilter === 'all' || item.category === activeFilter);
  const isLightboxOpen = lightboxIndex !== -1;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext(e);
      if (e.key === 'ArrowLeft') showPrev(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <>
      <section className="gallery-hero">
        <div className="container animate-on-scroll fade-up">
          <span className="gallery-label">Our Gallery</span>
          <h1>Explore Our Practice</h1>
          <p>Take a closer look at our dental practice, advanced technology, welcoming environment, and patient-focused care.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          
          <div className="gallery-filters animate-on-scroll fade-up">
            <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
            <button className={`filter-btn ${activeFilter === 'office' ? 'active' : ''}`} onClick={() => setActiveFilter('office')}>Our Office</button>
            <button className={`filter-btn ${activeFilter === 'technology' ? 'active' : ''}`} onClick={() => setActiveFilter('technology')}>Technology</button>
            <button className={`filter-btn ${activeFilter === 'team' ? 'active' : ''}`} onClick={() => setActiveFilter('team')}>Our Team</button>
            <button className={`filter-btn ${activeFilter === 'smiles' ? 'active' : ''}`} onClick={() => setActiveFilter('smiles')}>Smile Gallery</button>
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-item is-visible" 
                style={{ transitionDelay: item.delay || '0ms' }}
                onClick={() => openLightbox(index)}
              >
                <img src={item.src} alt={item.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <span className="gallery-category">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ba-transformations">
        <div className="container">
          <div className="ba-header animate-on-scroll fade-up">
            <span className="gallery-label">Transformations</span>
            <h2>Before & After Showcase</h2>
            <p>See the real results of our premium dental care. Drag the slider to compare.</p>
          </div>
          
          <div className="ba-grid">
            <BeforeAfterSlider 
              beforeSrc="/contact_hero.png"
              afterSrc="/clinic_banner_1.png"
              beforeLabel="Before"
              afterLabel="After"
              title="Veneers & Whitening"
              description="Complete smile makeover using custom porcelain veneers and professional whitening treatments."
            />
            <BeforeAfterSlider 
              beforeSrc="/spec_ortho.png"
              afterSrc="/spec_cosmetic.png"
              beforeLabel="Before"
              afterLabel="After"
              title="Invisalign Correction"
              description="12-month clear aligner therapy to correct severe crowding and bite alignment."
              delay="150ms"
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-btn lightbox-prev" onClick={showPrev}>❮</button>
          
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={filteredItems[lightboxIndex].src} alt="Fullscreen" className="lightbox-img" />
          </div>
          
          <button className="lightbox-btn lightbox-next" onClick={showNext}>❯</button>
        </div>
      )}
    </>
  );
}

export default Gallery;
