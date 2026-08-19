import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing the premium layout styles

function OralSurgery() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('extractions');

  useEffect(() => {
    document.title = "Oral Surgery | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Expert oral surgery services including extractions, wisdom teeth removal, and bone grafting at Penn Dental and Implant Center.";
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
            <h1>Expert Oral Surgery</h1>
            <p>Advanced surgical care in a comfortable environment, ensuring optimal outcomes and rapid recovery for complex dental issues.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
              <a href="#process" className="btn-white">Explore the Process</a>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/dr_juma.png" alt="Oral Surgery Care" />
          </div>
        </div>
      </section>

      {/* Sinus Lifts Section */}
      <section style={{ padding: '80px 20px 40px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ width: '15px', height: '15px', background: 'var(--primary)', margin: '0 auto 20px' }}></div>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Sinus Lifts</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', textAlign: 'center', marginBottom: '20px', textTransform: 'uppercase' }}>Sinus Lifts</h3>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
                Dental implants are a long-lasting, natural-looking, and aesthetically pleasing option for replacing broken, decaying, or missing teeth. Part of what gives implants their durability is the quality of the jaw bone where they are placed. If you are having an implant placed in the back of your upper jaw, your doctor may need to perform a sinus lift to create a strong foundation for the new tooth.
              </p>
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <img src="https://penndentaldfw.com/wp-content/uploads/2020/04/geo-days-_u2i16I-jc-unsplash-scaled-631x360.jpg" alt="Sinus Lift Procedure" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sinus Lift Procedure Section */}
      <section style={{ padding: '40px 20px 60px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '50px', marginBottom: '60px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <img src="/sinus_lift_diagram.jpg" alt="Sinus Lift Anatomical Diagram" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', textAlign: 'center', marginBottom: '20px', textTransform: 'uppercase' }}>Sinus Lift Procedure</h3>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', marginBottom: '20px' }}>
                The sinuses are air-filled spaces within the skull. Because of the proximity of the sinus to the upper jaw, there may not be enough bone to provide a strong foundation for a dental implant. Tooth loss and periodontal disease can cause further bone loss in the area.
              </p>
              <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', margin: 0 }}>
                A sinus lift adds bone in the area of the sinus. The amount and quality of your existing bone will determine the technique that your doctor uses in the procedure. The two most common techniques we utilize are a sinus elevation and a lateral lift.
              </p>
            </div>
          </div>
          
          {/* Accordion */}
          <style>
            {`
              details.os-accordion {
                background: #fafafa;
                border-bottom: 1px solid #eaeaea;
              }
              details.os-accordion summary {
                padding: 20px;
                font-size: 1.1rem;
                font-weight: 600;
                color: #555;
                cursor: pointer;
                list-style: none;
                display: flex;
                align-items: center;
              }
              details.os-accordion summary::-webkit-details-marker {
                display: none;
              }
              details.os-accordion summary::before {
                content: '+';
                margin-right: 15px;
                font-weight: bold;
                font-size: 1.2rem;
                color: #555;
              }
              details.os-accordion[open] summary::before {
                content: '−';
              }
              details.os-accordion p {
                padding: 0 20px 20px 45px;
                margin: 0;
                color: #444;
                line-height: 1.8;
                font-size: 1.05rem;
              }
            `}
          </style>
          <div style={{ borderTop: '1px solid #eaeaea' }}>
            <details className="os-accordion" open>
              <summary>SINUS ELEVATION</summary>
              <p>For patients with adequate bone volume, our doctors can perform a sinus elevation, which is a less invasive approach to sinus lift. We use advanced medical instruments to push the bone gently upward. Then, we leverage X-Guide™ technology to place implants in an extremely accurate manner. This precision allows us to combine the sinus lift and implant placement into a single procedure.</p>
            </details>
            <details className="os-accordion">
              <summary>LATERAL SINUS LIFT</summary>
              <p>Detailed information about lateral sinus lift will be provided during your consultation. Our experts evaluate your jawbone structure to determine if this approach is best suited for your implant needs.</p>
            </details>
            <details className="os-accordion">
              <summary>WHAT TO EXPECT WITH A SINUS LIFT</summary>
              <p>You can expect a comprehensive evaluation followed by a precise, comfortable procedure utilizing the latest in dental sedation and surgical technology for a smooth experience.</p>
            </details>
            <details className="os-accordion">
              <summary>YOUR CONSULTATION</summary>
              <p>During your consultation, we will take 3D imaging scans to precisely map your bone structure and discuss your personalized treatment plan, sedation options, and timeline.</p>
            </details>
            <details className="os-accordion">
              <summary>YOUR PROCEDURE</summary>
              <p>The procedure is typically performed under your preferred level of sedation. Our specialists ensure a pain-free environment while adding necessary bone grafting material to fortify your upper jaw.</p>
            </details>
            <details className="os-accordion">
              <summary>YOUR RECOVERY</summary>
              <p>Recovery is generally straightforward. We will provide detailed post-operative instructions, prescribe necessary medications, and monitor your healing process to ensure optimal results.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Wisdom Teeth Section */}
      <section style={{ padding: '60px 20px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ width: '15px', height: '15px', background: 'var(--primary)', margin: '0 auto 20px' }}></div>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Wisdom Teeth</h2>
          </div>
          <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.8' }}>
            "Wisdom teeth" are the last set of adult teeth that grow in at the beginning of adulthood. Most people develop 32 permanent teeth over their lifetime, and typically, the last four teeth to erupt from the gums are the third molars, or "wisdom teeth." Though these teeth normally emerge anywhere from age 17 to age 21, some patients may experience their wisdom teeth emerging as early as age 11.
            <br/><br/>
            Unfortunately, it is common that patients do not have jaws wide enough to accommodate these new teeth. So, these patients require wisdom teeth removal. Without proper care, wisdom teeth, especially those that are impacted – embedded in the gum tissue and bone of the mouth, can cause pain as they attempt to erupt due to damage to adjacent teeth, or as a result of dental caries or periodontal infection.
          </p>
        </div>
      </section>

      {/* Oral Cancer Section */}
      <section style={{ padding: '60px 20px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ width: '15px', height: '15px', background: 'var(--primary)', margin: '0 auto 20px' }}></div>
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', fontWeight: '300', letterSpacing: '1px', margin: 0 }}>Oral Cancer Screening and Infections</h2>
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#222', marginBottom: '15px' }}>Oral Cancer</h3>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
              Cancer screening and biopsy of questionable tissue is a routine part of the practice. It is important not to ignore any suspicious lumps, sores or discolorations detected by either you or your dentist. The following can be signs at the beginning of a pathologic process or cancerous growth:
            </p>
            <ul style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px', paddingLeft: '20px' }}>
              <li>Reddish or white patches in the mouth</li>
              <li>A sore that fails to heal and bleeds easily</li>
              <li>A lump or thickening on the skin lining the inside of the mouth</li>
              <li>Chronic sore throat or hoarseness</li>
              <li>Difficulty chewing or swallowing</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#222', marginBottom: '15px' }}>Infections</h3>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
              If you have pain and swelling in the face, neck or jaws, they can be symptoms of an infection, which can sometimes develop into a life-threatening emergency if not treated promptly and effectively. Surgical treatment, if needed, may include draining the infected area and eliminating the source of the infection.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OralSurgery;
