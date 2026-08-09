import React, { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing premium styling base

function XGuide() {
  useScrollAnimation();

  useEffect(() => {
    console.log("X-Guide page mounted");
    document.title = "X-Guide Guided Implant Surgery | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Advanced guided implant technology designed to provide greater control and precision throughout implant treatment planning and surgery.";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="xguide-page">
      {/* 1. Premium Hero */}
      <section className="implants-hero" style={{ backgroundColor: 'var(--bg-white)', padding: '100px 0 60px 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div className="animate-on-scroll slide-right" style={{ flex: '1', minWidth: '300px' }}>
            <span style={{ 
              color: 'var(--accent)', 
              fontWeight: '600', 
              letterSpacing: '2px', 
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '15px'
            }}>
              X-GUIDE TECHNOLOGY
            </span>
            <h1 style={{ 
              fontSize: '3.5rem', 
              color: 'var(--primary-dark)', 
              lineHeight: '1.1',
              marginBottom: '20px'
            }}>
              Dynamic 3D Navigation for Dental Implants
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '600px' }}>
              Advanced guided implant technology designed to provide greater control and precision throughout implant treatment planning and surgery.
            </p>
          </div>
          <div className="animate-on-scroll slide-left" style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src="/clinic_banner_2.png" alt="X-Guide Technology" style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* 2. Video Section */}
      <section className="video-section section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center animate-on-scroll fade-up">
          <h2 style={{ color: 'var(--primary-dark)', marginBottom: '15px', fontSize: '2.5rem' }}>SEE X-GUIDE IN ACTION</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Experience how dynamic 3D navigation supports guided implant procedures with real-time visual guidance.
          </p>
          <div className="video-container" style={{ 
            position: 'relative', 
            maxWidth: '1000px', 
            margin: '0 auto',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
          }}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="https://img.youtube.com/vi/e5Wju5aG_CI/sddefault.jpg"
              style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
            >
              <source src="/company_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 3. How Guided Implant Surgery With X-Guide Works */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="animate-on-scroll slide-right" style={{ flex: '1', minWidth: '300px' }}>
            <img src="https://img.youtube.com/vi/e5Wju5aG_CI/sddefault.jpg" alt="How X-Guide Works" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="animate-on-scroll slide-left" style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>
              HOW GUIDED IMPLANT SURGERY WITH X-GUIDE WORKS
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '30px' }}>
              Our workflow blends easily into your existing procedure to provide a higher level of implant accuracy with just a few steps. It acts like GPS for your drill.
            </p>
            <Link to="/contact.html" className="btn-outline" style={{ 
              border: '2px solid var(--accent)', 
              color: 'var(--accent)', 
              padding: '12px 30px', 
              borderRadius: '30px', 
              fontWeight: '600',
              display: 'inline-block',
              transition: 'all 0.3s'
            }}>
              Click here to read more
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Benefits */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-dark)', color: 'white' }}>
        <div className="container text-center animate-on-scroll fade-up">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#fff' }}>
            BENEFITS OF GUIDED IMPLANT SURGERY WITH X-GUIDE
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px 30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '15px' }}>⏱</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Faster Recovery</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Minimally invasive approach reduces surgical time and accelerates healing for maximum comfort.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px 30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '15px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Pinpoint Accuracy</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Live 3D navigation ensures precise placement according to your customized digital treatment plan.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px 30px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '15px' }}>✨</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Superior Aesthetics</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>Exact positioning allows for optimal restorative outcomes and beautiful, natural-looking results.</p>
            </div>
          </div>
          <Link to="/contact.html" className="btn-solid" style={{ 
            backgroundColor: 'var(--accent)', 
            color: '#fff', 
            padding: '15px 40px', 
            borderRadius: '8px', 
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            Click here to read more
          </Link>
        </div>
      </section>

      {/* 5. Key Highlights */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            <div className="animate-on-scroll fade-up" style={{ 
              flex: '1', minWidth: '320px', maxWidth: '500px', 
              background: '#fff', padding: '50px 40px', borderRadius: '12px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', borderTop: '4px solid var(--accent)' 
            }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>Same-Day Navigated-Surgery</h3>
              <p style={{ color: 'var(--text-muted)' }}>Scan, plan, and execute seamlessly without waiting for traditional physical guides.</p>
            </div>
            <div className="animate-on-scroll fade-up" style={{ transitionDelay: '100ms',
              flex: '1', minWidth: '320px', maxWidth: '500px', 
              background: '#fff', padding: '50px 40px', borderRadius: '12px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', borderTop: '4px solid var(--accent)' 
            }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '15px' }}>Appropriate for More Cases</h3>
              <p style={{ color: 'var(--text-muted)' }}>At a fraction of the cost of traditional guides, bringing precision to every patient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Main X-Guide Introduction */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div className="animate-on-scroll slide-right" style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>
              Elevate Precision and Control
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              "Elevate precision and control in your dental implant procedures. The X-Guide system is designed to provide easy navigation for better control – our workflow blends easily into your existing procedure to provide a higher level of implant accuracy with just a few steps."
            </p>
          </div>
          <div className="animate-on-scroll slide-left" style={{ flex: '1', minWidth: '300px' }}>
            <img src="/spec_ortho.png" alt="X-Guide Precision" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* 7. Absolute Implant Precision (Position / Angle / Depth) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid #eaeaea' }}>
        <div className="container text-center">
          <div className="animate-on-scroll fade-up">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>Absolute Implant Precision</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 50px auto', lineHeight: '1.8' }}>
              Expand your control over the implant process.<br/><br/>
              By integrating Cone Beam 3D imaging into your practice, it’s clear that you value accuracy and precision in planning. Don’t stop there. Continue to control the exact placement of implant POSITION, ANGLE and DEPTH with X-Guide Dynamic 3D Navigation during live surgery.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {['POSITION', 'ANGLE', 'DEPTH'].map((item, i) => (
              <div key={item} className="animate-on-scroll fade-up" style={{ 
                transitionDelay: `${i * 100}ms`,
                background: '#fff',
                padding: '40px',
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: 'bold', opacity: 0.3, marginBottom: '10px' }}>0{i+1}</span>
                <span style={{ fontSize: '1.2rem', color: 'var(--primary-dark)', fontWeight: '600', letterSpacing: '2px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Live Navigation */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="animate-on-scroll fade-up text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-dark)', marginBottom: '30px' }}>
              X-Guide provides easy, color tracking of drill depth during surgery.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              Our X-Guide system is designed to consistently elevate Precision and Control in your dental implant surgeries.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              Interactive, turn-by-turn guidance gives you the ability to improve every movement of your handpiece during osteotomy and implant delivery for more exact implant placement – like GPS for your drill.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              X-Guide makes it easy to be exact by using impressive, patent-pending navigation technologies.
            </p>
          </div>
          
          <div className="animate-on-scroll fade-up" style={{ marginTop: '60px', position: 'relative', height: '400px', background: 'var(--primary-dark)', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* CSS Technology Visualization */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, #2a2a2a 0%, #111 100%)' }}></div>
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <div style={{ width: '150px', height: '150px', border: '4px dashed var(--accent)', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'spin 10s linear infinite' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.8, boxShadow: '0 0 40px var(--accent)' }}></div>
              </div>
              <p style={{ color: '#fff', marginTop: '20px', letterSpacing: '3px', fontWeight: 'bold' }}>LIVE 3D TRACKING</p>
            </div>
            <style>{`
              @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
          </div>
        </div>
      </section>

      {/* 9. Deliver Implant with Confidence */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="text-center animate-on-scroll fade-up" style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)' }}>Deliver Implant with Confidence</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div className="animate-on-scroll slide-right" style={{ flex: '1', minWidth: '300px' }}>
              <img src="/clinic_banner_1.png" alt="Confident Planning" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div className="animate-on-scroll slide-left" style={{ flex: '1', minWidth: '300px' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>Confident Planning</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                The X-Guide system is compatible with most Cone Beam 3D systems. Use the robust X-Guide implant planning software to plan all factors of the ideal implant location.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                Visualize the placement of virtual teeth for better aesthetic planning.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                If using an intraoral scanner, go a step further with six simple clicks and register the intraoral scan to plan an ideal restorative outcome with opposing teeth in occlusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Technology Visual Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-dark)', color: 'white', overflow: 'hidden' }}>
        <div className="container text-center animate-on-scroll fade-up">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: '#fff' }}>ADVANCED X-GUIDE TECHNOLOGY</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', perspective: '1000px' }}>
            {['3D Imaging', 'Implant Planning', 'Navigation', 'Position', 'Angle', 'Depth'].map((item, i) => (
              <div key={item} className="tech-box" style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--accent)',
                padding: '30px 20px',
                borderRadius: '8px',
                width: '180px',
                transition: 'transform 0.5s ease',
                transformStyle: 'preserve-3d',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateZ(30px) rotateX(10deg)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateZ(0) rotateX(0)'}
              >
                <h4 style={{ color: 'var(--accent)', margin: 0 }}>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 & 12. Quick Appointment */}
      <section className="section-padding text-center" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container animate-on-scroll fade-up">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '20px' }}>Make a Quick Appointment</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px auto', fontStyle: 'italic' }}>
            "You might hear back from an assistant of mine who helps me keep on top of all this email"
          </p>
          <Link to="/contact.html" className="btn-solid" style={{ 
            backgroundColor: 'var(--accent)', 
            color: '#fff', 
            padding: '18px 50px', 
            borderRadius: '50px', 
            fontWeight: 'bold', 
            fontSize: '1.2rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}>
            Quick Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

export default XGuide;
