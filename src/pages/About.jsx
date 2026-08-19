import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../about.css'; // Make sure to import the CSS

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

const About = () => {
  useScrollAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set SEO Meta Tags
    document.title = "About Us | Penn Dental and Implant Center";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Learn about Penn Dental and Implant Center, our history, experienced dental team, advanced technology, and commitment to personalized dental care in Dallas-Fort Worth.");
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = "Learn about Penn Dental and Implant Center, our history, experienced dental team, advanced technology, and commitment to personalized dental care in Dallas-Fort Worth.";
      document.head.appendChild(meta);
    }
  }, []);

  const teamMembers = [
    { name: 'Dr. Dipali Patel', role: 'Dentist', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Dipali-Patel-600x901.jpg' },
    { name: 'Rosie Ruez', role: 'RDA', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Rosie-Ruiz-600x901.jpg' },
    { name: 'Michelle Chandler', role: 'RDH', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Michelle-Chandler-600x901.jpg' },
    { name: 'Enalexa Trujillo', role: 'RDA', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Enelexsia-Trujillo-600x901.jpg' },
    { name: 'Sara Johnson', role: 'Office Manager', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Sara-Johnson-600x901.jpg' },
    { name: 'Elizabeth Rodgers', role: 'Supervising RDA', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Liz-Rodgers-600x901.jpg' },
    { name: 'Dr. Daniel Juma', role: 'Dentist, Founder', image: 'https://penndentaldfw.com/wp-content/uploads/2020/02/Dan-600x899.jpg' }
  ];

  return (
    <div className="about-page">

      {/* 1. HERO */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <span className="about-eyebrow">DENTISTRY</span>
            <h1 className="about-title">About Our Practice</h1>
            <p className="about-subtitle">"Hello dear visitor"</p>
          </div>
          <div className="about-hero-image-wrapper">
            <img src="/clinic_banner_1.png" alt="About Our Practice" className="about-hero-image" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT OUR PRACTICE */}
      <section className="about-practice">
        <div className="about-practice-container">
          <h2 className="section-heading">About Our Practice</h2>
          <p className="editorial-text">
            Penn Dental and Implant Center was established in 1979 as Penn Gary W DDS by the late Dr Gary Penn and has enjoyed a longstanding tradition of providing quality dental care for families throughout the greater Dallas-Fort Worth metroplex. In 2019, Dr Daniel Juma took stewardship of the practice, continuing the commitment to a high standard of excellence in quality surgical treatment and personalized dental care with a whole health approach that has earned the trust of patients and dental colleagues.
          </p>
          <div className="editorial-highlight">
            Penn Dental and Implant Center is a private practice dedicated to creating a world-class dental practice in our community by providing our patients with a positive and personal experience as well as ensuring our patients receive the highest quality of care.
          </div>
        </div>
      </section>

      {/* 2.5 MEET THE DENTIST */}
      <section className="meet-dentist-section section-padding" style={{ backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
        <style>
          {`
            .dentist-watermark {
              position: absolute;
              top: -30px;
              left: 50%;
              transform: translateX(-40%);
              font-size: 14vw;
              font-weight: 900;
              color: rgba(41, 93, 227, 0.04);
              z-index: 0;
              pointer-events: none;
              line-height: 1;
              white-space: nowrap;
              letter-spacing: 5px;
            }
            .dentist-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 50px;
              position: relative;
              z-index: 1;
            }
            @media (min-width: 992px) {
              .dentist-grid {
                grid-template-columns: 400px 1fr;
                gap: 60px;
                align-items: flex-start;
              }
            }
            .dentist-image-card {
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: var(--shadow-md);
            }
            .dentist-image-card img {
              width: 100%;
              display: block;
            }
            .dentist-badge {
              position: absolute;
              bottom: 25px;
              left: 25px;
            }
            .dentist-name {
              background: #3664ff;
              color: #fff;
              padding: 10px 20px;
              font-size: 1.5rem;
              font-weight: 800;
              display: inline-block;
              margin-bottom: 2px;
            }
            .dentist-title {
              background: #fff;
              color: #3664ff;
              padding: 5px 20px;
              font-size: 0.95rem;
              font-weight: 500;
              display: inline-block;
              margin-bottom: 12px;
            }
            .dentist-socials {
              display: flex;
              gap: 12px;
            }
            .social-circle {
              width: 38px;
              height: 38px;
              background: #3664ff;
              color: #fff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: var(--transition);
            }
            .social-circle:hover {
              background: #1a4cd9;
              transform: translateY(-2px);
            }
            .dentist-header {
              display: flex;
              align-items: center;
              gap: 15px;
              margin-bottom: 30px;
            }
            .dentist-icon {
              width: 60px;
              height: 60px;
              background: #3664ff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
            }
          `}
        </style>
        <div className="dentist-watermark">DENTIST</div>
        <div className="container">
          <div className="dentist-grid">
            <div className="dentist-image-card">
              <img src="https://penndentaldfw.com/wp-content/uploads/2020/02/Dan-600x899.jpg" alt="Dr. Daniel Juma" />
              <div className="dentist-badge">
                <div className="dentist-name">Dr. Daniel Juma</div>
                <br/>
                <div className="dentist-title">Dentist, Founder</div>
                <div className="dentist-socials">
                  <a href="#" className="social-circle"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
                  <a href="#" className="social-circle" style={{fontSize: '18px', fontWeight: '800'}}>X</a>
                  <a href="#" className="social-circle"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12a10.5 10.5 0 01-2 6.13c-.3.42-.59.78-.9 1.15a10.45 10.45 0 01-6.85 3.19h-.44a10.57 10.57 0 01-6.72-2.88 10.36 10.36 0 01-3.12-6.52c-.11-.93-.11-1.87 0-2.8a10.38 10.38 0 013.12-6.5A10.66 10.66 0 0112 1.5a10.62 10.62 0 016.92 2.92A10.4 10.4 0 0122 10.44v1.56zM8.88 15.65c0-.6.18-1.12.57-1.52.41-.42.92-.61 1.58-.61a2 2 0 011.52.56c.4.4.61.94.61 1.57a2 2 0 01-.61 1.56c-.4.43-.91.64-1.55.64a2 2 0 01-1.54-.58c-.38-.41-.58-.93-.58-1.62zM7.34 9.17c.5-.55 1.16-.82 1.95-.82.91 0 1.62.3 2.16.89.51.55.76 1.25.76 2.05s-.25 1.48-.76 2.02c-.53.58-1.25.87-2.15.87-.79 0-1.46-.27-1.97-.84-.52-.56-.78-1.26-.78-2.05 0-.79.26-1.51.79-2.12zm10.23.01c.54.59.81 1.33.81 2.16 0 .84-.27 1.58-.8 2.18-.54.6-1.26.9-2.12.9-.84 0-1.53-.29-2.05-.88-.51-.59-.77-1.31-.77-2.15s.26-1.57.78-2.16c.52-.6 1.22-.9 2.07-.9.84 0 1.54.28 2.08.85zm-2.07 3.86a1.65 1.65 0 001.21-.49 1.66 1.66 0 00.5-1.21c0-.49-.17-.91-.5-1.24a1.63 1.63 0 00-1.2-.5 1.62 1.62 0 00-1.21.5 1.65 1.65 0 00-.5 1.22c0 .48.17.9.5 1.23a1.65 1.65 0 001.2.49z"/></svg></a>
                </div>
              </div>
            </div>
            
            <div className="dentist-content">
              <div className="dentist-header">
                <div className="dentist-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" /></svg>
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: 'var(--primary-dark)' }}>Meet Our <span style={{ color: '#3664ff' }}>Dentist</span></h2>
              </div>
              
              <div style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-muted)' }}>
                <p style={{ marginBottom: '20px' }}>
                  We love to help patients work better with their dentists. Dr. Daniel Juma will help to ask the right questions.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Dr. Daniel Juma is a graduate of Baylor College of Dentistry, Dallas, Texas. Dr. Juma, earned his Doctorate in Dental Surgery in 2012 from Baylor, having been awarded for his excellence in Periodontology as well as being a recipient of the prestigious W.R Hammond Scholar and Dr. P Earl Williams Awards. 
                </p>
                <p style={{ marginBottom: '20px' }}>
                  In addition, Dr, Juma's preceptorship at Strong Memorial Hospital, Rochester General Hospital and Eastman Institute in New York exposed him to the different specialties of dentistry including Oral Pathology, Oral Surgery, and Prosthodontics. 
                </p>
                <p>
                  During his tenure at Baylor, Dr. Juma also received training in enteral oral sedation and nitrous oxide administration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREDENTIALS, EXPERIENCE, CONVENIENCE & ADVANCED TECHNOLOGY */}
      <section className="text-blocks-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <style>
          {`
            .zigzag-divider {
              width: 100%;
              height: 20px;
              background-image: url("data:image/svg+xml,%3Csvg width='40' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L10 0 L30 20 L40 10' stroke='%23e0e0e0' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
              background-repeat: repeat-x;
              margin: 60px 0;
              opacity: 0.6;
            }
            .text-block-container {
              max-width: 1000px;
              margin: 0 auto;
              padding: 0 20px;
            }
            .text-block-title {
              font-size: 1.8rem;
              font-weight: 600;
              color: var(--primary-dark);
              margin-bottom: 25px;
            }
            .text-block-content {
              font-size: 1.1rem;
              line-height: 1.9;
              color: var(--text-muted);
            }
            .text-block-link {
              color: #3664ff;
              text-decoration: none;
              transition: color 0.3s ease;
            }
            .text-block-link:hover {
              color: #1a4cd9;
              text-decoration: underline;
            }
          `}
        </style>
        <div className="text-block-container">
          
          <div className="zigzag-divider" style={{ marginTop: 0 }}></div>

          <div className="animate-on-scroll fade-up">
            <h2 className="text-block-title">Credentials</h2>
            <p className="text-block-content">
              Our Board Certified doctors are ADA recognized practitioners in General dentistry, with Dr Juma focusing on Oral Implantology. Penn Dental and Implant Center provides a full range of Whole Health Dental treatment including airway management, Orthodontics, surgical procedures such as dental implant placement, removal of wisdom teeth, bone grafting, and periodontal surgery. Our doctors at Penn Dental and Implant Center are recognized as leaders in the profession, involved in researching innovative techniques, educating colleagues, and serving in prominent positions in various professional associations including the Academy of General Dentistry, the International Congress of Oral Implantology, Clear Correct Board Mentor, Fastbraces Master Provider.
            </p>
          </div>

          <div className="zigzag-divider"></div>

          <div className="animate-on-scroll fade-up">
            <h2 className="text-block-title">Experience</h2>
            <p className="text-block-content">
              As one of the premier dental implant practices in the DFW Metroplex, our doctors have extensive experience providing general dentistry and surgical dental implant procedures, including advanced techniques in Cosmetic and Restorative dentistry, Clear aligner Orthodontic treatment, bone grafting and complex implant reconstruction. Our doctors here at Penn Dental and Implant Center are highly regarded for their expertise in this highly technical field.
            </p>
          </div>

          <div className="zigzag-divider"></div>

          <div className="animate-on-scroll fade-up">
            <h2 className="text-block-title">Convenience</h2>
            <p className="text-block-content">
              Penn Dental and Implant Center is conveniently located minutes from downtown Dallas and the surrounding cities of Irving, Desoto, Duncanville, GrandPrairie. We are nestled in the vibrant historical district of Winnetka Heights surrounded by the charming and eclectic neighborhoods of the Kessler Park and Bishop Arts district in the Oak Cliff area. Our Historical practice has been renovated to include state-of-the-art imaging, monitoring and surgical equipment designed to provide a safe and comfortable environment for our patients.
            </p>
          </div>

          <div className="zigzag-divider"></div>

          <div className="animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
            <h2 className="text-block-title">Advanced Technology</h2>
            <p className="text-block-content">
              Our updated practice features the latest innovative technology, including digital impressions and digital radiography. To support a higher level of patient care, we use 3D Cone Beam imaging, which provides three-dimensional and cross-sectional views of the head and neck. This allows the doctors to see all aspects of the anatomy that cannot be adequately viewed with conventional dental x-rays. <Link to="/x-guide" className="text-block-link">Click here</Link> to know more about this technology.
            </p>
          </div>

          <div className="zigzag-divider"></div>

        </div>
      </section>

      {/* 7. STATISTICS */}
      <section className="premium-stats-section" style={{ backgroundColor: '#edf2fb', padding: '100px 0' }}>
        <style>
          {`
            .stats-grid-premium {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              max-width: 1100px;
              margin: 0 auto;
              padding: 0 20px;
            }
            @media (min-width: 768px) {
              .stats-grid-premium {
                grid-template-columns: repeat(4, 1fr);
                gap: 40px;
              }
            }
            .stat-card-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .stat-number-card {
              background-color: #3664ff;
              color: white;
              width: 100%;
              padding: 40px 0;
              border-radius: 8px;
              font-size: 3.5rem;
              font-weight: 300;
              margin-bottom: 20px;
              box-shadow: 0 10px 20px rgba(54, 100, 255, 0.15);
              transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .stat-card-wrapper:hover .stat-number-card {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(54, 100, 255, 0.25);
            }
            .stat-label-premium {
              color: #3664ff;
              font-size: 1.05rem;
              font-weight: 400;
              letter-spacing: 0.5px;
            }
            @media (max-width: 767px) {
              .stat-number-card {
                font-size: 2.2rem;
                padding: 25px 0;
              }
              .stat-label-premium {
                font-size: 0.85rem;
              }
            }
          `}
        </style>
        <div className="container">
          <div className="stats-grid-premium">
            <div className="stat-card-wrapper animate-on-scroll fade-up">
              <div className="stat-number-card"><AnimatedCounter end={15} suffix="+" /></div>
              <div className="stat-label-premium">Years of Experience</div>
            </div>
            
            <div className="stat-card-wrapper animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="stat-number-card"><AnimatedCounter end={2} /></div>
              <div className="stat-label-premium">Professional Dentists</div>
            </div>
            
            <div className="stat-card-wrapper animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="stat-number-card"><AnimatedCounter end={5} suffix="k" /></div>
              <div className="stat-label-premium">Happy Patients</div>
            </div>
            
            <div className="stat-card-wrapper animate-on-scroll fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="stat-number-card"><AnimatedCounter end={20} /></div>
              <div className="stat-label-premium">Awards Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR TEAM */}
      <section className="about-team">
        <div className="container">
          <div className="team-header">
            <span className="about-eyebrow">DENTISTS</span>
            <p className="team-role" style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>Our dentists and nurses</p>
            <h2 className="section-heading">Meet Our Team</h2>
            <p className="team-quote">“Our staff prides themselves in their “patient first” approach to care”</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL EXPERIENCE SECTION */}
      <section className="about-final">
        <div className="final-content">
          <h2 className="final-heading">Combined dental experience over 15 years</h2>
          <Link to="/contact.html" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* 10. ACCREDITATION, PATIENTS, AND SKILLS */}
      <section className="about-premium-features section-padding" style={{ backgroundColor: '#fff', overflow: 'hidden', position: 'relative' }}>
        <style>
          {`
            .premium-features-container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 20px;
            }
            .section-watermark {
              position: absolute;
              font-size: 10vw;
              font-weight: 900;
              color: rgba(41, 93, 227, 0.04);
              z-index: 0;
              pointer-events: none;
              line-height: 1;
              white-space: nowrap;
              letter-spacing: 5px;
              top: -40px;
              left: 50px;
            }
            .accreditation-row {
              position: relative;
              margin-bottom: 100px;
            }
            .accreditation-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 40px;
              position: relative;
              z-index: 1;
              margin-top: 50px;
              padding-left: 80px;
            }
            @media (min-width: 768px) {
              .accreditation-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 50px;
              }
            }
            .accred-col h3 {
              color: #1b2666;
              font-size: 1.4rem;
              font-weight: 500;
              margin-bottom: 20px;
              position: relative;
            }
            .accred-col p {
              color: var(--text-muted);
              font-size: 0.95rem;
              line-height: 1.8;
              margin-bottom: 15px;
            }
            .accred-col a {
              color: #1a1a1a;
              font-weight: 500;
              font-size: 0.9rem;
              text-decoration: none;
            }
            .accred-col a:hover {
              text-decoration: underline;
            }
            
            .two-col-row {
              display: grid;
              grid-template-columns: 1fr;
              gap: 60px;
              position: relative;
            }
            @media (min-width: 992px) {
              .two-col-row {
                grid-template-columns: 1fr 1fr;
                gap: 80px;
              }
            }
            
            .section-header {
              display: flex;
              align-items: center;
              gap: 15px;
              margin-bottom: 30px;
              position: relative;
              z-index: 1;
            }
            .header-icon {
              width: 60px;
              height: 60px;
              background: #3664ff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              flex-shrink: 0;
            }
            .header-text p {
              color: #888;
              margin: 0 0 5px 0;
              font-size: 0.95rem;
            }
            .header-text h2 {
              margin: 0;
              font-size: 1.6rem;
              font-weight: 400;
            }
            .header-text h2 span {
              color: #3664ff;
            }
            
            .testimonial-bubble {
              background: #edf2fb;
              padding: 40px;
              border-radius: 5px;
              position: relative;
              margin-top: 30px;
              margin-bottom: 20px;
            }
            .testimonial-bubble::after {
              content: '';
              position: absolute;
              bottom: -20px;
              left: 40px;
              border-width: 20px 20px 0 0;
              border-style: solid;
              border-color: #edf2fb transparent transparent transparent;
            }
            .testimonial-bubble p {
              color: #444;
              font-size: 1.05rem;
              line-height: 1.8;
              margin: 0;
            }
            .testimonial-author {
              color: #3664ff;
              font-weight: 600;
              padding-left: 40px;
              margin-top: 30px;
            }
            .pagination-dots {
              display: flex;
              gap: 8px;
              justify-content: center;
              margin-top: -10px;
            }
            .dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #c3d1fb;
            }
            .dot.active {
              background: #3664ff;
            }
            
            .skill-item {
              margin-bottom: 30px;
            }
            .skill-name {
              font-size: 1rem;
              color: #333;
              margin-bottom: 15px;
              display: block;
            }
            .progress-bg {
              width: calc(100% - 50px); /* Leave room for percentage */
              height: 12px;
              background: #f0f0f0;
              border-radius: 10px;
              position: relative;
            }
            .progress-bar {
              height: 100%;
              width: 0;
              transition: width 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
              background: repeating-linear-gradient(
                45deg,
                #3664ff,
                #3664ff 10px,
                #5079ff 10px,
                #5079ff 20px
              );
              border-radius: 10px;
              position: relative;
            }
            .is-visible .progress-bar {
              width: var(--target-width);
            }
            .progress-percent {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translate(120%, -50%);
              background: #3664ff;
              color: #fff;
              font-size: 0.8rem;
              font-weight: 600;
              padding: 4px 12px;
              border-radius: 20px;
            }
            @media (max-width: 768px) {
              .skill-name {
                font-size: 0.9rem;
                margin-bottom: 10px;
              }
              .progress-bg {
                width: calc(100% - 40px);
              }
              .progress-percent {
                transform: translate(100%, -50%);
                font-size: 0.75rem;
                padding: 3px 8px;
              }
              .skills-col {
                padding-right: 15px;
              }
            }
          `}
        </style>
        <div className="premium-features-container">
          
          <div className="accreditation-row relative">
            <div className="section-watermark">DENTISTRY</div>
            
            <div className="section-header">
              <div className="header-icon">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" /></svg>
              </div>
              <div className="header-text">
                <h2><span>Accreditation</span></h2>
              </div>
            </div>
            
            <div className="accreditation-grid">
              <div className="accred-col animate-on-scroll fade-up">
                <h3>ICOI</h3>
                <p>The ICOI is the worlds largest dental implant organization comprising of general dentists, oral surgeons, periodontist, prosthodontists, endodontists, orthodontists and researchers who are devoted to dental implant education.</p>
                <a href="#">Click here to read more.</a>
              </div>
              <div className="accred-col animate-on-scroll fade-up" style={{transitionDelay: '100ms'}}>
                <h3>Clear Correct<br/>Clic Mentor</h3>
                <p>Dr Juma is a Clear Correct Clic Mentor, Clear Correct provides a clear aligner solution to creating beautiful smiles..with most people not even noticing you're wearing them.</p>
                <a href="#">Click Here to read more.</a>
              </div>
              <div className="accred-col animate-on-scroll fade-up" style={{transitionDelay: '200ms'}}>
                <h3>Hiossen Implants</h3>
                <p>Dr Juma is a Faculty member for Hiossen Implants Advanced Dental Implant Research and Eduction Center (AIC).</p>
                <a href="#">Click here to read more.</a>
              </div>
            </div>
          </div>
          
          <div className="two-col-row" style={{ marginTop: '80px' }}>
            <div className="patients-col relative animate-on-scroll fade-up">
              <div className="section-watermark" style={{ top: '-30px', left: '0' }}>Patients</div>
              
              <div className="section-header">
                <div className="header-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" /></svg>
                </div>
                <div className="header-text">
                  <p>Some of our happy patients</p>
                  <h2>Our <span>Patients</span></h2>
                </div>
              </div>
              
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
                To find the best toothbrushes, toothpaste, floss and other dental products, I spend thousands of hours researching.
              </p>
              
              <div className="testimonial-bubble">
                <p>Penn dental is amazing! Couldn't have found a better place to go to! The staff is amazing and treats you like family! Been going here for about two years, and I can say that this is my best dental experience. From basic cleanings to more intense procedures, they make sure to take care of you!</p>
              </div>
              <div className="pagination-dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="testimonial-author">
                Hailey Faul
              </div>
            </div>
            
            <div className="skills-col relative animate-on-scroll fade-up" style={{transitionDelay: '100ms'}}>
              <div className="section-watermark" style={{ top: '-30px', left: '0' }}>Skills</div>
              
              <div className="section-header">
                <div className="header-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M18.8 4c-1.4 0-2.6 1.1-2.8 2.5l-.2 1.5H8.2l-.2-1.5C7.8 5.1 6.6 4 5.2 4 3.4 4 2 5.4 2 7.2c0 2.1 1.7 4.1 3.5 5.5l1.5 1.2v3.1c0 2.2 1.8 4 4 4 1.1 0 2.1-.4 2.8-1l.2-.2.2.2c.7.6 1.7 1 2.8 1 2.2 0 4-1.8 4-4v-3.1l1.5-1.2C20.3 11.3 22 9.3 22 7.2 22 5.4 20.6 4 18.8 4z" /></svg>
                </div>
                <div className="header-text">
                  <p>Some of our professional skills</p>
                  <h2>Our <span>Skills</span></h2>
                </div>
              </div>
              
              <div className="skills-list" style={{ marginTop: '50px' }}>
                <div className="skill-item">
                  <span className="skill-name">X-Guide™ Technology for Implant Surgery</span>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ '--target-width': '98%' }}>
                      <span className="progress-percent">98%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Cosmetic Dentistry</span>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ '--target-width': '90%' }}>
                      <span className="progress-percent">90%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">X-rays Technology</span>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ '--target-width': '90%' }}>
                      <span className="progress-percent">90%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Orthodontics</span>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ '--target-width': '88%' }}>
                      <span className="progress-percent">88%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Others</span>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ '--target-width': '83%' }}>
                      <span className="progress-percent">83%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
