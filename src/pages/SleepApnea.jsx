import React, { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../dental-implants.css'; // Reusing premium layout styles

function SleepApnea() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Sleep Apnea Treatment | Penn Dental and Implant Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Learn about sleep apnea, diagnosis through sleep studies, and non-surgical treatment options like CPAP and oral appliances at Penn Dental.";
    }
    window.scrollTo(0, 0);
  }, []);

  const NumberBadge = ({ number }) => (
    <div style={{ 
      background: 'var(--accent)', 
      color: '#fff', 
      width: '70px', 
      height: '70px', 
      borderRadius: '15px 15px 15px 4px', 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '2.5rem', 
      fontWeight: '800',
      marginBottom: '20px',
      boxShadow: '0 10px 20px rgba(183, 110, 121, 0.3)'
    }}>
      {number}
    </div>
  );

  return (
    <>
      {/* 1. Premium Hero */}
      <section className="implants-hero">
        <div className="container implants-hero-layout">
          <div className="implants-hero-content animate-on-scroll slide-right">
            <span className="implants-eyebrow">WHAT WE DO?</span>
            <h1>Sleep Apnea</h1>
            <p>Breathe easier and sleep better with our comprehensive diagnosis and personalized treatment options designed for your comfort.</p>
            <div className="implants-hero-buttons">
              <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            </div>
          </div>
          <div className="implants-hero-visual animate-on-scroll slide-left">
            <img src="/contact_hero.png" alt="Peaceful sleep" style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Section 1: Sleep Apnea Definition */}
      <section className="standard-split-section" style={{ background: 'var(--bg-white)' }}>
        <div className="container standard-layout">
          <div className="standard-content animate-on-scroll slide-right" style={{ textAlign: 'center', padding: '0 20px' }}>
            <NumberBadge number="1" />
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Sleep Apnea</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'left' }}>
              Sleep apnea is a condition in which your sleep is interrupted repeatedly throughout the night as a result of your breathing stopping and starting again as you sleep. This can prevent you from getting proper rest, cause you to fall asleep at unexpected times during the day, and lead to accidents and injuries while you are awake. Just as seriously, sleep apnea can put you at risk for health issues such as pulmonary hypertension, heart disease, diabetes, ADHD, erectile dysfunction and stroke just to name a few.
            </p>
          </div>
          <div className="standard-visual animate-on-scroll slide-left">
            <img src="https://penndentaldfw.com/wp-content/uploads/2020/04/1200px-Obstruction_ventilation_apn%C3%A9e_sommeil.svg_-631x360.png" alt="Airway anatomy concept" style={{ borderRadius: '24px', objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '400px' }} />
          </div>
        </div>
      </section>

      {/* Section 2: Do You Have Sleep Apnea? */}
      <section className="standard-split-section" style={{ background: 'var(--bg-light)' }}>
        <div className="container standard-layout reverse">
          <div className="standard-content animate-on-scroll slide-left" style={{ textAlign: 'center', padding: '0 20px' }}>
            <NumberBadge number="2" />
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Do You Have Sleep Apnea?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'left' }}>
              Typically, Patients that are suspected of having an airway obstruction or sleep apnea are highly advised to take part in a polysomnography, or sleep study, as part of their care. If you have not yet had a polysomnography, Penn Dental and Implant Center will work with you and your medical provider to have the study completed. If you have had a sleep study already, your doctor will review the results in preparing a treatment plan in conjunction with your primary medical doctor or other treating doctors such as your ENT, Pulmonologist or Neurologist.
            </p>
          </div>
          <div className="standard-visual animate-on-scroll slide-right">
            <img src="https://penndentaldfw.com/wp-content/uploads/2020/04/HomeCare-Sleep-Apnea-fb-1-600x314.jpg" alt="Sleepless nights concept" style={{ borderRadius: '24px', objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '400px' }} />
          </div>
        </div>
      </section>

      {/* Section 3: Treatment Options */}
      <section className="standard-split-section" style={{ background: 'var(--bg-white)', paddingBottom: '120px' }}>
        <div className="container">
          <div className="animate-on-scroll fade-up" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <NumberBadge number="3" />
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>Treatment Options For Sleep Apnea</h2>
            
            <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)', textAlign: 'left' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '25px' }}>
                Medical Doctors sometimes prescribe therapy for Obstructive Sleep Apnea with CPAP (continuous positive airway pressure) as a non-surgical treatment for sleep apnea. A CPAP machine helps open the airway to normalize breathing as you sleep. Some patients find the therapy effective, but others cannot tolerate wearing a CPAP mask to sleep every night.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                An alternative non-surgical approach to sleep apnea in some cases is a wearable appliance. These devices include oral appliances that ease the lower jaw forward and splints that hold the tongue in place. These appliances may be effective for mild to moderate cases of sleep apnea. Some, patients however, choose to stop using these appliances after a while and continue experiencing symptoms as a result. In such cases, further consultations with ENT's or Oral Surgeons for surgical solutions to treating sleep apnea may be considered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="implants-cta">
        <div className="container animate-on-scroll fade-up">
          <h2>Ready for a Better Night's Sleep?</h2>
          <div className="implants-hero-buttons">
            <Link to="/contact.html" className="btn-submit" style={{ display: 'inline-flex', width: 'auto', padding: '15px 30px' }}>Schedule a Consultation</Link>
            <Link to="/contact.html" className="btn-white">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SleepApnea;
