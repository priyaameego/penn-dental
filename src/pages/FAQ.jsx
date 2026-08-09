import React, { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../faq.css';

function AccordionItem({ title, children, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  // Adjust height on window resize if open
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button className="accordion-header" aria-expanded={isOpen} onClick={onClick}>
        {title}
        <div className="accordion-icon"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
      </button>
      <div className="accordion-content" style={{ maxHeight }} ref={contentRef}>
        <div className="accordion-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  useScrollAnimation();
  const [openFaq, setOpenFaq] = useState(null);
  const [openSurgery, setOpenSurgery] = useState(null);
  const [openPostOp, setOpenPostOp] = useState(null);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', question: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, question } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name.trim()) return alert('Your Name is required.');
    if (!email.trim()) return alert('Your Email is required.');
    if (!emailRegex.test(email)) return alert('Please enter a valid email address.');
    if (!question.trim()) return alert('Please enter your question.');

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', question: '' });
      alert('Your question has been sent successfully. We will get back to you soon!');
    }, 1500);
  };

  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero-bg-text">QUESTIONS</div>
        <div className="container faq-hero-content animate-on-scroll fade-up">
          <span className="faq-label">Frequently asked questions</span>
          <h1>Do you have any Questions?</h1>
          <p>Please read the questions below and if you can not find your answer, please send us your question, we will answer you as soon as possible.</p>
        </div>
      </section>

      <section className="faq-main-section">
        <div className="container faq-layout">
          
          <div className="faq-left-column">
            
            <div className="faq-section-header animate-on-scroll slide-right">
              <div className="faq-icon-circle">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <h2>FAQs</h2>
            </div>
            
            <div className="accordion-list animate-on-scroll slide-right" style={{ transitionDelay: '100ms' }}>
              <AccordionItem title="WHAT IS X-GUIDE DYNAMIC 3D NAVIGATION?" isOpen={openFaq === 0} onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
                <p>The X-Guide is a revolutionary system that extends the capabilities of our cone beam system for highly accurate dental implant procedures. It provides real-time, 3D guidance of the drill position and anatomy during surgery, similar to a medical GPS system.</p>
              </AccordionItem>
              <AccordionItem title="HOW X-GUIDE DYNAMIC 3D NAVIGATION WORKS?" isOpen={openFaq === 1} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                <p>It utilizes a combination of specialized software and optical tracking. First, a 3D scan of your mouth is taken. The software then uses this scan to map out the exact position, angle, and depth for the implant. During surgery, the system tracks the doctor's instruments in real-time against this virtual map, ensuring perfect placement.</p>
              </AccordionItem>
              <AccordionItem title="How does X-Guide technology benefit patients?" isOpen={openFaq === 2} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                <p>Benefits include significantly reduced surgical time, smaller incisions, less post-operative pain, and faster recovery. It also ensures the highest level of aesthetic outcome and functional success for the implant.</p>
              </AccordionItem>
              <AccordionItem title="X-Guide System in penndental ?" isOpen={openFaq === 3} onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                <p>Yes, Penn Dental and Implant Center is proud to be equipped with the state-of-the-art X-Guide Dynamic 3D Navigation system, allowing Dr. Juma and our team to provide the highest standard of implant care in Dallas.</p>
              </AccordionItem>
              <AccordionItem title="What are Financial options available at Penn Dental and Implant Center?" isOpen={openFaq === 4} onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                <p>We accept all major PPO insurance plans. For out-of-pocket expenses, we accept cash, major credit cards, and offer flexible financing options to ensure you get the care you need within your budget.</p>
              </AccordionItem>
            </div>

            <div className="faq-section-header animate-on-scroll slide-right" style={{ marginTop: '60px' }}>
              <div className="faq-icon-circle">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h2>Instructions before Surgery :</h2>
            </div>
            
            <div className="accordion-list animate-on-scroll slide-right" style={{ transitionDelay: '100ms' }}>
              <AccordionItem title="Instructions Before Oral Surgery – Anesthesia" isOpen={openSurgery === 0} onClick={() => setOpenSurgery(openSurgery === 0 ? null : 0)}>
                <p>For your comfort and safety during surgery with IV sedation or general anesthesia, please follow these guidelines strictly:</p>
                <ul>
                  <li><strong>Food and Drink:</strong> Do not eat or drink anything (including water) for at least 8 hours prior to your scheduled surgery time.</li>
                  <li><strong>Escort:</strong> A responsible adult must accompany you to the office, remain in the office during the procedure, and drive you home.</li>
                  <li><strong>Clothing:</strong> Wear loose-fitting, comfortable clothing with sleeves that can easily be rolled up.</li>
                  <li><strong>Medications:</strong> Unless instructed otherwise by Dr. Juma, take your routine medications with a small sip of water.</li>
                </ul>
              </AccordionItem>
            </div>
            
            <div className="important-note-box animate-on-scroll slide-right" style={{ transitionDelay: '200ms' }}>
              <p>Please Note: Instructions #1 and #2 are safety precautions and if not followed, your surgery may be cancelled.</p>
              <p>IF YOU HAVE ANY QUESTIONS OR CONCERNS, PLEASE DO NOT HESITATE TO CONTACT YOUR DOCTOR.</p>
            </div>

            <div className="faq-section-header animate-on-scroll slide-right" style={{ marginTop: '60px' }}>
              <div className="faq-icon-circle">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h2>Post-Operative Instructions following :</h2>
            </div>
            
            <div className="accordion-list animate-on-scroll slide-right" style={{ transitionDelay: '100ms' }}>
              <AccordionItem title="1. Dental Extractions and Removal of Impacted Wisdom Teeth" isOpen={openPostOp === 0} onClick={() => setOpenPostOp(openPostOp === 0 ? null : 0)}>
                <p>Bite firmly on the gauze pad provided for 30-45 minutes. Avoid rinsing, spitting, or using a straw for the first 24 hours to prevent dislodging the blood clot. Apply ice to the outside of your face to minimize swelling.</p>
              </AccordionItem>
              <AccordionItem title="2. Dental Extractions and Removal of Impacted Wisdom Teeth" isOpen={openPostOp === 1} onClick={() => setOpenPostOp(openPostOp === 1 ? null : 1)}>
                <p>Maintain a soft food diet for the first few days. Continue to take any prescribed antibiotics until finished, and use pain relievers as directed. Resume gentle brushing on the second day, avoiding the extraction site.</p>
              </AccordionItem>
              <AccordionItem title="3. Dental Implant Surgery" isOpen={openPostOp === 2} onClick={() => setOpenPostOp(openPostOp === 2 ? null : 2)}>
                <p>Slight bleeding and swelling are normal. Avoid chewing directly on the implant site. Do not wear temporary prostheses unless specifically instructed by your doctor. Keep the mouth clean using prescribed antibacterial rinses.</p>
              </AccordionItem>
            </div>

          </div>
          
          <div className="faq-right-column">
            <div className="ask-us-sidebar animate-on-scroll slide-left">
              <div className="ask-us-header">
                <div className="faq-icon-circle">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <h3>Ask Us</h3>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <div className="ask-form-group">
                  <label>Your Name (*)</label>
                  <input type="text" className="ask-form-control" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div className="ask-form-group">
                  <label>Your Email (*)</label>
                  <input type="email" className="ask-form-control" required placeholder="johndoe@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                
                <div className="ask-form-group">
                  <label>Subject</label>
                  <input type="text" className="ask-form-control" placeholder="Inquiry about..." value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                </div>
                
                <div className="ask-form-group">
                  <label>Your Question</label>
                  <textarea className="ask-form-control" required placeholder="Type your question here..." value={formData.question} onChange={e => setFormData({...formData, question: e.target.value})}></textarea>
                </div>
                
                <button type="submit" className="ask-btn-submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default FAQ;
