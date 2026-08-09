import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../blog.css';

function BlogDetail() {
  useScrollAnimation();

  return (
    <>
      <div style={{ backgroundColor: '#f8fafe', padding: '20px 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container">
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'center' }}><Link to="/" style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: 500 }}>Home</Link></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ margin: '0 10px' }}>→</span> <Link to="/blog.html" style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: 500 }}>Blog</Link></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><span style={{ margin: '0 10px' }}>→</span> Modern Technology</li>
          </ul>
        </div>
      </div>

      <section className="blog-detail-section">
        <div className="container blog-detail-layout">
          
          <article className="blog-main-content animate-on-scroll slide-right">
            
            <header className="blog-detail-header">
              <span className="article-category">Modern Technology</span>
              <h1>How Modern Technology is Transforming Dental Care</h1>
              <div className="article-meta">
                <span>By Dr. Juma</span>
                <span>•</span>
                <span>August 15, 2026</span>
              </div>
            </header>

            <div className="blog-detail-image">
              <img src="/clinic_banner_2.png" alt="Advanced Dental Technology" />
            </div>

            <div className="blog-content">
              <p>Gone are the days when a trip to the dentist meant uncomfortable impressions, lengthy procedures, and uncertain outcomes. Today, dentistry is undergoing a digital revolution, bringing unprecedented precision, comfort, and speed to patient care. Discover how the latest advancements in dental technology are transforming your experience.</p>
              
              <h2>1. 3D Imaging and Cone Beam CT Scans</h2>
              <p>Traditional X-rays provide a flat, two-dimensional view of your teeth. While helpful, they don't always tell the whole story. Enter the Cone Beam Computed Tomography (CBCT) scan. This advanced imaging technology captures highly detailed 3D images of your teeth, soft tissues, nerve pathways, and bone in a single scan.</p>
              
              <ul>
                <li><strong>Precision Planning:</strong> Allows for exact placement of dental implants.</li>
                <li><strong>Early Detection:</strong> Helps identify issues that might be invisible on standard X-rays.</li>
                <li><strong>Safety:</strong> Uses significantly less radiation than traditional medical CT scans.</li>
              </ul>

              <h2>2. The X-Guide® Surgical System</h2>
              <p>One of the most exciting advancements in implant dentistry is dynamic 3D navigation, specifically the X-Guide® Surgical System. Think of it like a GPS for the dentist's drill. It extends the capabilities of our cone beam system for highly accurate dental implant procedures.</p>
              <p>By providing real-time, 3D guidance of the drill position and anatomy, X-Guide allows our doctors to place implants with a level of precision that was previously impossible, resulting in less invasive surgeries, faster recovery times, and aesthetically perfect results.</p>

              <h2>3. Digital Impressions</h2>
              <p>Remember the gooey, uncomfortable impression material used to make molds of your teeth? Digital scanners have made that a thing of the past. Using a small wand, we can now take highly accurate, 3D digital impressions of your mouth in just minutes. It’s comfortable, fast, and incredibly precise, ensuring your crowns, bridges, or clear aligners fit perfectly.</p>

              <h2>Conclusion</h2>
              <p>At Penn Dental and Implant Center, we are committed to investing in the best technology available because we know it translates directly to better care for you. By combining these advanced tools with our team's expertise, we ensure that your visits are comfortable, efficient, and successful.</p>
            </div>

          </article>

          <aside className="sidebar animate-on-scroll slide-left">
            
            <div className="sidebar-widget">
              <h3>Search Articles</h3>
              <div className="sidebar-search">
                <input type="text" placeholder="Search..." />
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>Categories</h3>
              <ul className="sidebar-categories">
                <li><Link to="#">Dental Health <span>(12)</span></Link></li>
                <li><Link to="#">Dental Implants <span>(8)</span></Link></li>
                <li><Link to="#">Cosmetic Dentistry <span>(15)</span></Link></li>
                <li><Link to="#">Root Canal <span>(4)</span></Link></li>
                <li><Link to="#">Orthodontics <span>(9)</span></Link></li>
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3>Recent Posts</h3>
              
              <div className="recent-post-item">
                <img src="/contact_hero.png" alt="First Visit" />
                <div className="recent-post-info">
                  <h4><Link to="#">What to Expect During Your First Dental Visit</Link></h4>
                  <span className="article-meta" style={{ marginBottom: 0, fontSize: '0.8rem' }}>Aug 10, 2026</span>
                </div>
              </div>
              
              <div className="recent-post-item">
                <img src="/clinic_banner_1.png" alt="Implants" />
                <div className="recent-post-info">
                  <h4><Link to="#">How Dental Implants Restore Your Smile</Link></h4>
                  <span className="article-meta" style={{ marginBottom: 0, fontSize: '0.8rem' }}>Aug 05, 2026</span>
                </div>
              </div>

            </div>

            <div className="sidebar-cta">
              <h3>Ready for a Checkup?</h3>
              <p>Experience our state-of-the-art technology and compassionate care firsthand.</p>
              <Link to="/contact.html" className="btn-white">Book Appointment</Link>
            </div>

          </aside>

        </div>
      </section>
    </>
  );
}

export default BlogDetail;
