import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css';

function DentalImplants() {
  useScrollAnimation();
  const [activeReplaceTab, setActiveReplaceTab] = useState('single');
  const [activeServiceTab, setActiveServiceTab] = useState('implants');

  useEffect(() => {
    // Update Document Title and Meta Description for SEO
    document.title = "Dental Implants | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Learn about dental implants, treatment planning, implant placement, abutment attachment, and replacement teeth at Penn Dental and Implant Center.";
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Video Slider Section */}
      <section style={{ padding: '60px 20px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
          
          {[
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-overview.png', sub: 'Dental Implants', title: 'Overview' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-consequences.png', sub: 'Consequences', title: 'of Missing Teeth' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-candidate.png', sub: 'Are You a Candidate', title: 'for Dental Implants?' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-faqs.png', sub: 'Dental Implants', title: 'FAQs' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-singletooth.png', sub: 'Replacing a', title: 'Single Tooth' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-previousextraction.png', sub: 'Implant After', title: 'Previous Extraction' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-immediate.png', sub: 'Immediate', title: 'Placement' },
            { img: 'https://icoivideos.com/wp-content/playlists/pre-icoi-replacingallteeth.png', sub: 'Replacing', title: 'All Teeth' }
          ].map((video, idx) => (
            <div key={idx} style={{ flex: '0 0 400px', position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <img src={video.img} alt={video.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.3)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                <div style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '10px', padding: '15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </section>

      {/* 2. SERVICES Tabs Section */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 20px', background: '#fff' }}>
        <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', fontSize: '180px', color: '#f0f4f8', fontWeight: 'bold', zIndex: 0, opacity: 0.8, pointerEvents: 'none', whiteSpace: 'nowrap', fontFamily: 'sans-serif' }}>
          SERVICES
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }}>
            <div style={{ background: '#3b66f5', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 6 5 6 9c0 2 1 4 2 5v5c0 1 1 2 2 2h4c1 0 2-1 2-2v-5c1-1 2-3 2-5 0-4-2-7-6-7zm0 16h-2v-3h2v3zm2-6h-4v-2h4v2z"/></svg>
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: '300', margin: 0, color: '#000' }}>Dental <span style={{ color: '#3b66f5' }}>Implants</span></h2>
          </div>

          {/* Service Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveServiceTab('implants')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', background: activeServiceTab === 'implants' ? '#3b66f5' : '#f0f4f8', color: activeServiceTab === 'implants' ? '#fff' : '#666', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              Dental Implants
            </button>
            <button 
              onClick={() => setActiveServiceTab('placement')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', background: activeServiceTab === 'placement' ? '#3b66f5' : '#f0f4f8', color: activeServiceTab === 'placement' ? '#fff' : '#666', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              Implant Placement
            </button>
            <button 
              onClick={() => setActiveServiceTab('abutment')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', background: activeServiceTab === 'abutment' ? '#3b66f5' : '#f0f4f8', color: activeServiceTab === 'abutment' ? '#fff' : '#666', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              Abutment Attachment
            </button>
            <button 
              onClick={() => setActiveServiceTab('teeth')}
              style={{ padding: '12px 25px', borderRadius: '30px', border: 'none', background: activeServiceTab === 'teeth' ? '#3b66f5' : '#f0f4f8', color: activeServiceTab === 'teeth' ? '#fff' : '#666', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              Replacement Teeth
            </button>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              {activeServiceTab === 'implants' && <img src="https://icoivideos.com/wp-content/playlists/pre-icoi-miniimplants.png" alt="Dental Implants" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', borderRadius: '10px' }} />}
              {activeServiceTab === 'placement' && <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=600&auto=format&fit=crop" alt="Dental Implant Placement" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', borderRadius: '10px' }} />}
              {activeServiceTab === 'abutment' && <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=600&auto=format&fit=crop" alt="Smiling Patient" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', borderRadius: '10px' }} />}
              {activeServiceTab === 'teeth' && <img src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=600&auto=format&fit=crop" alt="Happy Patient Smiling" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', borderRadius: '10px' }} />}
            </div>
            <div style={{ flex: '1 1 500px' }}>
              {activeServiceTab === 'implants' && (
                <>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '20px' }}>
                    Your tooth is made up of two parts , the root which is embedded in your jawbone and the crown which is the part of the tooth you can see. When a tooth is missing or removed, the bone that previously surrounded the tooth root begins to resorb or deteriorate.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                    Dental implants are basically substitute tooth roots that function similar to natural tooth roots, stimulating bone growth and providing a strong foundation for replacement teeth.
                  </p>
                </>
              )}
              {activeServiceTab === 'placement' && (
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                  Your doctor will administer anesthesia to prevent any sensation during surgery. Utilizing a gentle technique, your doctor will prepare the surgical site and place the dental implant in the proper position. A small cover screw will then be attached to the implant. A temporary replacement tooth (or set of teeth) may be inserted following surgery. The implant will be left undisturbed for a several weeks to a few months, to allow the bone to remodel around the implant.
                </p>
              )}
              {activeServiceTab === 'abutment' && (
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                  Once the bone has fused to the bone and formed a strong biological bond, you will then have a small connector post attached to each implant. Your new replacement teeth will be attached to theses abutments. Your doctor will determine the best abutment to use for your case. This is often a custom abutment, which is utilized to enable your doctor to design the ideal shape of your replacement teeth.
                </p>
              )}
              {activeServiceTab === 'teeth' && (
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                  The final phase of treatment is designing and fabricating the final replacement crown, bridge, or set of teeth. Your doctor will take impressions of your teeth and the abutments and send them to a dental technician, who will create the replacement teeth. Together with your doctor, you will determine the best shade to match your natural teeth. Once the technician has fabricated your new teeth, your dentist will attach them to the abutments, completing your treatment.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Dental Implants? */}
      <section style={{ background: '#f3f6fa', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 600px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '30px', color: '#000' }}>Why Dental <span style={{ color: '#3b66f5' }}>Implants?</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '30px' }}>
              Dental implants have become the preferred method of tooth replacement for several important reasons:
            </p>
            <ul style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
              <li style={{ marginBottom: '15px' }}>No other treatment option prevents the bone resorption/deterioration that occurs when a tooth is lost or removed.</li>
              <li style={{ marginBottom: '15px' }}>This is the only tooth replacement option that preserves the adjacent teeth, as opposed to cutting them down to place a bridge or hooking a partial denture to them.</li>
              <li style={{ marginBottom: '15px' }}>Dental implants have by far the best long-term success rates of any treatment option – and this has been documented in the scientific literature for over four decades.</li>
              <li>Since dental implants are designed to last a lifetime, there is rarely a need for additional treatment. With other forms of tooth replacement that need to be replaced every 5 to 10 years, additional dentistry is almost always necessary in the future. As a result, dental implant treatment is the most cost-effective option long-term.</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="/images/implant_procedure.jpg" alt="Dental Implant Procedure" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      {/* 4. Replacing Multiple teeth */}
      <section style={{ background: '#eef2f6', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
            <img src="/images/dental_implant_model.jpg" alt="Dental Implant Placement" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
          </div>
          <div style={{ flex: '1 1 600px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '30px', color: '#000' }}>Replacing <span style={{ color: '#3b66f5' }}>Multiple teeth</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', marginBottom: '20px' }}>
              Versatility of Dental implants allows their use in replacing a single tooth, multiple teeth or all of the teeth. The Dallas Fort Worth metroplex patients may require additional procedures to obtain the optimal esthetic and functional outcome.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', margin: 0 }}>
              A surgical and prosthetic evaluation and consultation with one of our doctors at Penn Dental and Implant Center will determine whether you are a candidate for dental implant treatment and whether additional procedures, such as bone grafting will be necessary.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Benefits of Dental Implants */}
      <section style={{ background: '#f8f9fc', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '20px', color: '#000' }}>Benefits of <span style={{ color: '#3b66f5' }}>Dental Implants</span></h2>
            <div style={{ width: '60px', height: '6px', background: 'linear-gradient(90deg, #3b66f5, #8a2be2)', marginBottom: '30px', borderRadius: '3px' }}></div>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', marginBottom: '40px' }}>
              There are several treatment options for replacing missing teeth, however dental implants present numerous unique benefits for patients:
            </p>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=600&auto=format&fit=crop" alt="Implant Screw" style={{ width: '100%', maxWidth: '250px', borderRadius: '10px' }} />
            </div>
            <button style={{ background: 'linear-gradient(90deg, #3b66f5, #8a2be2)', color: '#fff', border: 'none', padding: '15px 35px', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              Read More <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          
          <div style={{ flex: '1 1 500px' }}>
            <style>
              {`
                details.di-accordion {
                  background: #fff;
                  margin-bottom: 15px;
                  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                  border-radius: 4px;
                }
                details.di-accordion summary {
                  padding: 25px;
                  font-size: 1.2rem;
                  color: #666;
                  cursor: pointer;
                  list-style: none;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }
                details.di-accordion summary::-webkit-details-marker {
                  display: none;
                }
                .di-icon {
                  color: #8a2be2;
                  margin-right: 15px;
                }
                .di-arrow {
                  color: #8a2be2;
                  transition: transform 0.3s ease;
                }
                details.di-accordion[open] .di-arrow {
                  transform: rotate(180deg);
                }
                details.di-accordion p {
                  padding: 0 25px 25px 60px;
                  margin: 0;
                  color: #666;
                  line-height: 1.6;
                }
              `}
            </style>
            
            {/* Accordion items */}
            {[
              'Designed to Last a Lifetime',
              'Preserves Bone and Facial Structures',
              'A Healthier Smile',
              'Natural Appearance',
              'Hygienic and easy maintenance'
            ].map((title, i) => (
              <details className="di-accordion" open={i===0} key={i}>
                <summary>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <svg className="di-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    {title}
                  </div>
                  <svg className="di-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </summary>
                <p>Dental implants provide an excellent, permanent solution that looks and feels just like your natural teeth, enhancing both function and aesthetics for a confident smile.</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* 6. Evaluation for Dental Implants */}
      <section style={{ background: '#fff', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 600px' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '400', marginBottom: '30px', color: '#000' }}>Evaluation for <span style={{ color: '#3b66f5' }}>Dental Implants</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', marginBottom: '40px' }}>
              Penn Dental and Implant Center offers a surgical and restorative consultation to evaluate each patients unique presentation and determine if they are candidates for dental implant treatment as well as to develop an ideal treatment plan based on their individual needs. During your consultation, your Doctor will determine the:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <div style={{ color: '#c7925e', marginRight: '20px', marginTop: '5px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 11 12 14 22 4"></polyline></svg>
                </div>
                <p style={{ margin: 0, fontSize: '1.3rem', color: '#a07142' }}>Quality and quantity of available bone.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <div style={{ color: '#c7925e', marginRight: '20px', marginTop: '5px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 11 12 14 22 4"></polyline></svg>
                </div>
                <p style={{ margin: 0, fontSize: '1.3rem', color: '#a07142' }}>Number of dental implants needed to create the optimal result.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <div style={{ color: '#c7925e', marginRight: '20px', marginTop: '5px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 11 12 14 22 4"></polyline></svg>
                </div>
                <p style={{ margin: 0, fontSize: '1.3rem', color: '#a07142' }}>Other procedures that may be necessary to prepare the surgical site.</p>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <img src="/images/happy_patient_new.jpg" alt="Happy Patient Consultation" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }} />
          </div>
        </div>
      </section>

      {/* 7. Process Steps Organized */}
      <section style={{ background: '#eef2f6', padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '50px', color: '#000', textAlign: 'center' }}>Process</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b66f5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>01</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Advanced Imaging & Treatment Planning</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Penn Dental and Implant Center uses advanced technology, including 3D cone beam imaging, to create highly detailed images of your teeth, bone, and facial structures for precise diagnosis and personalized treatment planning.</p>
            </div>
            
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b66f5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>02</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>X-Guide® 3D Navigation</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>We also use X-Guide® 3D navigation technology for implant surgery, which research has shown to be up to 10 times more accurate than traditional freehand placement.</p>
            </div>
            
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b66f5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>03</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Tooth Extraction</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Once the doctor develops your treatment plan, you'll be ready to schedule your surgery. If the tooth has not yet been removed, the first step is extraction.</p>
            </div>
            
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b66f5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>04</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Bone Grafting</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>A bone graft may be recommended if additional bone is needed to support the implant.</p>
            </div>
            
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b66f5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>05</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Implant Placement</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>In many cases, the extraction, bone graft, and implant placement can be completed during the same procedure.</p>
            </div>
            
            <div style={{ background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#3b66f5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>06</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Healing / Next Steps</h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>In other cases, the implant and bone graft is placed several weeks after the extraction to allow for proper healing.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DentalImplants;
