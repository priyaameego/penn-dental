import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../dental-implants.css'; // Assuming this contains some useful base classes

function XGuide() {
  useScrollAnimation();
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    document.title = "X-Guide | Dynamic 3D Navigation for Dental Implants";
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', fontFamily: '"Outfit", sans-serif' }}>
      <style>
        {`
          .xguide-hero-bg-text {
            font-size: 150px;
            top: 20px;
          }
          .xguide-hero-title {
            font-size: 3.5rem;
          }
          .xguide-diagram-title {
            font-size: 3rem;
          }
          .xguide-step-center {
            width: 300px;
          }
          @media (max-width: 768px) {
            .xguide-hero-bg-text {
              font-size: 60px !important;
              top: 50px !important;
              letter-spacing: 2px !important;
            }
            .xguide-hero-title {
              font-size: 2.2rem !important;
            }
            .xguide-diagram-title {
              font-size: 2rem !important;
            }
            .xguide-step-center {
              width: 100% !important;
            }
            .xguide-alert-box {
              flex-direction: column;
              text-align: center;
              padding: 20px !important;
            }
            .xguide-alert-icon {
              margin-bottom: 10px;
            }
          }
        `}
      </style>
      
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '100px 20px 60px', textAlign: 'center' }}>
        {/* Faint DENTISTRY text in background */}
        <div className="xguide-hero-bg-text" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          color: '#f0f4f8', fontWeight: 'bold', zIndex: 0, opacity: 0.6,
          pointerEvents: 'none', whiteSpace: 'nowrap', letterSpacing: '5px'
        }}>
          DENTISTRY
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          {/* Logo element */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
            <div style={{ 
              width: '50px', height: '50px', backgroundColor: '#3b66f5', borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', flexShrink: 0
            }}>
              <svg width="25" height="25" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 6 5 6 9c0 2 1 4 2 5v5c0 1 1 2 2 2h4c1 0 2-1 2-2v-5c1-1 2-3 2-5 0-4-2-7-6-7zm0 16h-2v-3h2v3zm2-6h-4v-2h4v2z"/></svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '500', margin: 0, letterSpacing: '1px' }}>
              NAVIGATED SURGERY <span style={{ color: '#3b66f5' }}>TODAY</span>
            </h2>
          </div>
          
          <h1 className="xguide-hero-title" style={{ fontWeight: '400', margin: '0 auto 20px auto', maxWidth: '800px', color: '#000', lineHeight: '1.2' }}>
            Dynamic 3D Navigation for Dental Implants
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#0025aa', margin: '0 auto 40px auto' }}></div>
        </div>
      </section>

      {/* 2. TECHNOLOGY SPLIT SECTION */}
      <section style={{ padding: '40px 20px', background: '#fff' }}>
        <div className="container animate-on-scroll fade-up" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          
          {/* Video Embed */}
          <div style={{ flex: '1 1 300px', position: 'relative', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', aspectRatio: '16/9' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/e5Wju5aG_CI?autoplay=0&rel=0" 
              title="X-Guide Dynamic 3D Navigation" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0 }}
            ></iframe>
          </div>
          
          {/* Technology Text */}
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '500', marginBottom: '20px', color: '#000', textAlign: 'center' }}>
              TECHNOLOGY
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', textAlign: 'justify' }}>
              Penn Dental and Implant Center features the latest innovative technology, including 3D CBCT imaging, digital radiography and digital impressions. These technologies are brought to the residents of Dallas-Fort Worth Metroplex to improve the quality and comfort of patients receiving general dentistry care as well as dental implants and oral surgery.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ACCORDION & HIGHLIGHT SECTION */}
      <section style={{ padding: '60px 20px', background: '#fff' }}>
        <div className="container animate-on-scroll fade-up" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Accordion 1 */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '15px', color: '#000', lineHeight: '1.4' }}>
              HOW GUIDED IMPLANT SURGERY WITH X-GUIDE WORKS
            </h3>
            <div 
              onClick={() => toggleAccordion('works')}
              style={{ border: '1px solid #eaeaea', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: '#fdfdfd' }}
            >
              <span style={{ fontSize: '1.1rem', color: '#555' }}>Click here to read more.</span>
              <svg style={{ transform: openAccordion === 'works' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', flexShrink: 0 }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            {openAccordion === 'works' && (
              <div style={{ padding: '20px', border: '1px solid #eaeaea', borderTop: 'none', color: '#444', lineHeight: '1.6' }}>
                Our workflow blends easily into your existing procedure to provide a higher level of implant accuracy with just a few steps. It acts like GPS for your drill.
              </div>
            )}
          </div>
          
          {/* Accordion 2 */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '15px', color: '#000', lineHeight: '1.4' }}>
              BENEFITS OF GUIDED IMPLANT SURGERY WITH X-GUIDE
            </h3>
            <div 
              onClick={() => toggleAccordion('benefits')}
              style={{ border: '1px solid #eaeaea', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: '#fdfdfd' }}
            >
              <span style={{ fontSize: '1.1rem', color: '#555' }}>Click here to read more.</span>
              <svg style={{ transform: openAccordion === 'benefits' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', flexShrink: 0 }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            {openAccordion === 'benefits' && (
              <div style={{ padding: '20px', border: '1px solid #eaeaea', borderTop: 'none', color: '#444', lineHeight: '1.6' }}>
                Benefits include pinpoint accuracy, faster recovery times, and superior aesthetic results.
              </div>
            )}
          </div>

          {/* Alert Box */}
          <div className="xguide-alert-box" style={{ background: '#e1f0fa', borderLeft: '4px solid #3b66f5', padding: '20px 30px', display: 'flex', alignItems: 'center', gap: '20px', borderRadius: '4px' }}>
            <div className="xguide-alert-icon" style={{ color: '#3b66f5', flexShrink: 0 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-5 0h-2v-2h2v2zm0-4h-2V8h2v4zm-1 10c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"/></svg>
            </div>
            <div>
              <div style={{ color: '#556b82', fontSize: '1.1rem', fontWeight: '500', marginBottom: '5px' }}>Same-Day Navigated-Surgery</div>
              <div style={{ color: '#556b82', fontSize: '1.05rem' }}>Appropriate for More Cases at a Fraction of the Cost of Traditional Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW / PRECISION SECTION */}
      <section style={{ padding: '40px 20px 80px', background: '#fff', textAlign: 'center' }}>
        <div className="container animate-on-scroll fade-up" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.8', marginBottom: '60px' }}>
            Elevate precision and control in your dental implant procedures. The <strong>X-Guide system</strong> is designed to provide easy navigation for better control – our workflow blends easily into your existing procedure to provide a higher level of implant accuracy with just a few steps.
          </p>
          
          {/* CONSULTATION DIAGRAM */}
          <div style={{ border: '1px solid #eaeaea', borderRadius: '10px', padding: '30px 20px', marginBottom: '40px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h2 className="xguide-diagram-title" style={{ color: '#8cc63f', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              CONSULTATION:
            </h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
              
              {/* Step 1 */}
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#b2d235', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px', flexShrink: 0 }}>1</div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0025aa', marginRight: '10px' }}>X-Clip</span>
                  <span style={{ color: '#8cc63f', fontSize: '0.9rem', fontWeight: 'bold' }}>(&lt;5 mins)</span>
                </div>
                <div style={{ background: '#f5f5f5', height: '200px', borderRadius: '5px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=300&auto=format&fit=crop" alt="X-Clip" style={{ height: '100%', width: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
              </div>
              
              {/* Step 2 */}
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#b2d235', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px', flexShrink: 0 }}>2</div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0025aa' }}>Scan</span>
                </div>
                <div style={{ background: '#000', height: '200px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=300&auto=format&fit=crop" alt="Scan" style={{ height: '100%', width: '100%', objectFit: 'cover', opacity: 0.7 }} />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <div className="xguide-step-center" style={{ textAlign: 'left', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#b2d235', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px', flexShrink: 0 }}>3</div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0025aa' }}>Plan</span>
                </div>
                <div style={{ background: '#000', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
                  <img src="https://img.youtube.com/vi/e5Wju5aG_CI/sddefault.jpg" alt="Plan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* SURGERY DIAGRAM */}
          <div style={{ border: '1px solid #eaeaea', borderRadius: '10px', padding: '30px 20px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <h2 className="xguide-diagram-title" style={{ color: '#8cc63f', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              SURGERY:
            </h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
              {/* Step 4 */}
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#b2d235', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px', flexShrink: 0 }}>4</div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0025aa', marginRight: '10px' }}>Calibrate</span>
                  <span style={{ color: '#8cc63f', fontSize: '0.9rem', fontWeight: 'bold' }}>(&lt;5 mins)</span>
                </div>
                <div style={{ background: '#f5f5f5', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
                   <img src="https://img.youtube.com/vi/e5Wju5aG_CI/sddefault.jpg" alt="Calibrate" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
              </div>
              
              {/* Step 5 */}
              <div style={{ flex: '1', minWidth: '250px', textAlign: 'left', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#b2d235', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px', flexShrink: 0 }}>5</div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0025aa', marginRight: '10px' }}>System Check</span>
                  <span style={{ color: '#8cc63f', fontSize: '0.9rem', fontWeight: 'bold' }}>(&lt;1 min)</span>
                </div>
                <div style={{ background: '#f5f5f5', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548?q=80&w=300&auto=format&fit=crop" alt="System Check" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <div className="xguide-step-center" style={{ textAlign: 'left', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#b2d235', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', marginRight: '10px', flexShrink: 0 }}>6</div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0025aa' }}>Navigation Surgery</span>
                </div>
                <div style={{ background: '#000', height: '200px', borderRadius: '5px', overflow: 'hidden' }}>
                  <img src="https://img.youtube.com/vi/e5Wju5aG_CI/sddefault.jpg" alt="Navigation Surgery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}

export default XGuide;
