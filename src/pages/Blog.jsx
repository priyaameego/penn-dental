import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import '../blog.css';

function Blog() {
  useScrollAnimation();

  return (
    <>
      <section className="blog-hero">
        <div className="container animate-on-scroll fade-up">
          <span className="blog-label">Dental Insights</span>
          <h1>Expert Dental Care & Insights</h1>
          <p>Explore helpful information, treatment guides, and practical advice for maintaining a healthy, confident smile.</p>
        </div>
      </section>

      <section className="featured-article-section">
        <div className="container">
          <div className="featured-article animate-on-scroll fade-up">
            <div className="featured-image">
              <img src="/clinic_banner_2.png" alt="Advanced Dental Technology" />
            </div>
            <div className="featured-content">
              <span className="article-category">Modern Technology</span>
              <h2>How Modern Technology is Transforming Dental Care</h2>
              <div className="article-meta">
                <span>By Dr. Juma</span>
                <span>•</span>
                <span>August 15, 2026</span>
              </div>
              <p>Discover how the latest advancements in dental technology, including 3D imaging and X-Guide® Surgical Systems, are making treatments faster, more comfortable, and incredibly precise.</p>
              <Link to="/blog-detail.html" className="btn-read-more">
                Read Article <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            
            <article className="blog-card animate-on-scroll fade-up">
              <div className="blog-card-image">
                <img src="/contact_hero.png" alt="First Dental Visit" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Dental Health</span>
                <h3>What to Expect During Your First Dental Visit</h3>
                <p>A complete guide to preparing for your initial consultation, what happens during the exam, and how to ease dental anxiety.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Aug 10, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="blog-card-image">
                <img src="/clinic_banner_1.png" alt="Dental Implants" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Dental Implants</span>
                <h3>How Dental Implants Restore Your Smile</h3>
                <p>Missing teeth can affect more than just your confidence. Learn how dental implants offer a permanent, natural-looking solution.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Aug 05, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="blog-card-image">
                <img src="/spec_ortho.png" alt="Root Canal Treatment" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Root Canal</span>
                <h3>What You Should Know About Root Canal Treatment</h3>
                <p>Root canals have a bad reputation, but they are actually painless procedures that save your natural teeth from extraction.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Jul 28, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up">
              <div className="blog-card-image">
                <img src="/spec_pediatric.png" alt="Oral Health Habits" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Oral Care</span>
                <h3>Simple Habits for Better Oral Health</h3>
                <p>Brushing and flossing are just the beginning. Discover five simple daily habits that can significantly improve your oral hygiene.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Jul 22, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="blog-card-image">
                <img src="/video_thumb.png" alt="Maintaining Your Smile" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Dental Health</span>
                <h3>How to Maintain Your Smile Between Dental Visits</h3>
                <p>Professional cleanings are essential, but what you do at home matters most. Expert tips for maintaining a bright smile year-round.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Jul 15, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="blog-card-image">
                <img src="/spec_cosmetic.png" alt="Cosmetic Dentistry" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Cosmetic Dentistry</span>
                <h3>Understanding Cosmetic Dentistry Options</h3>
                <p>From veneers to professional whitening, explore the various cosmetic procedures available to give you the perfect smile.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Jul 08, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up">
              <div className="blog-card-image">
                <img src="/dr_juma.png" alt="Dental Checkup" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Dental Health</span>
                <h3>When Should You Schedule a Dental Checkup?</h3>
                <p>Are you ignoring the warning signs? Learn the key indicators that mean it's time to schedule your next dental appointment immediately.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Jun 30, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

            <article className="blog-card animate-on-scroll fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="blog-card-image">
                <img src="/clinic_banner_1.png" alt="Orthodontics" />
              </div>
              <div className="blog-card-content">
                <span className="article-category">Orthodontics</span>
                <h3>Invisalign vs. Traditional Braces: Which is Right for You?</h3>
                <p>Compare the pros and cons of modern clear aligners versus traditional metal braces to make an informed decision for your orthodontic care.</p>
                <div className="article-meta" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <span>Jun 22, 2026</span>
                </div>
                <Link to="/blog-detail.html" className="btn-read-more">Read More <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
