import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../gallery.css';

function Gallery() {
  useScrollAnimation();
  
  return (
    <>
      <section className="gallery-hero">
        <div className="container animate-on-scroll fade-up">
          <span className="gallery-label">Our Gallery</span>
          <h1>Smile Transformations</h1>
        </div>
      </section>

      <section className="ba-transformations" style={{ paddingBottom: '100px' }}>
        <div className="container animate-on-scroll fade-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{ fontSize: '1.8rem', fontWeight: '500', marginBottom: '40px', color: 'var(--primary-dark)' }}>
            This is the before and after picture of Mr. Johnny.
          </h2>

          <div className="ba-static-item" style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-dark)', fontWeight: '500' }}>Before</h3>
            <img 
              src="https://penndentaldfw.com/wp-content/uploads/2021/07/1-600x189.jpg" 
              alt="Before" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>

          <div className="ba-static-item">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary-dark)', fontWeight: '500' }}>After</h3>
            <img 
              src="https://penndentaldfw.com/wp-content/uploads/2021/07/2-600x400.jpg" 
              alt="After" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default Gallery;
