import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, TrendingUp, Sparkles, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-pattern" aria-hidden="true">
        {/* SVG Decorative Molecule / Network Graph Grid */}
        <svg className="hero-svg-bg" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1250" cy="180" r="280" stroke="#1A4F9C" strokeOpacity="0.05" strokeWidth="2" />
          <circle cx="1250" cy="180" r="190" stroke="#1A4F9C" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="1250" cy="180" r="100" stroke="#E63946" strokeOpacity="0.08" strokeWidth="1.5" />
          <path d="M900 120 L1100 240 L1300 150 L1400 320" stroke="#1A4F9C" strokeOpacity="0.06" strokeWidth="2" />
        </svg>
      </div>

      <div className="site-container hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Pharma Management & PMT Consulting</span>
          </div>

          {/* Headlines strictly matching requirements */}
          <h1 className="hero-headline">
            Your Strategic Growth Partner in <span className="highlight-blue">Pharma Excellence</span>
          </h1>

          <p className="hero-subheadline">
            Strategic Growth Partner for Emerging Pharmaceutical Companies
          </p>

          <p className="hero-supporting-text">
            Complete strategy, brand, medical, training, and commercial services under one roof for growing pharma companies across India.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="btn btn-primary btn-lg"
            >
              <Calendar size={20} />
              <span>Book a Consultation</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>

            <a
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="btn btn-outline btn-lg"
            >
              <span>Explore Services</span>
            </a>
          </div>

          {/* Trust Value Points */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <span>Complete PMT & Strategy</span>
            </div>
            <div className="trust-item">
              <TrendingUp size={18} className="trust-icon" />
              <span>Fraction of In-House Cost</span>
            </div>
            <div className="trust-item">
              <Award size={18} className="trust-icon" />
              <span>National-Level Execution</span>
            </div>
          </div>
        </div>

        {/* Hero Graphic / Interactive Strategic Framework Card */}
        <div className="hero-visual">
          <div className="hero-card-frame">
            <div className="hero-card-header">
              <div className="card-header-tag">
                <Sparkles size={14} className="tag-icon" />
                <span>Integrated Pharma Growth Engine</span>
              </div>
              <span className="card-header-status">Pan-India</span>
            </div>

            {/* Visual Strategic Matrix */}
            <div className="strategic-matrix-grid">
              <div className="matrix-pill">
                <div className="pill-dot blue"></div>
                <div className="pill-content">
                  <span className="pill-title">Strategic Planning</span>
                  <span className="pill-sub">Vision to Field Execution</span>
                </div>
              </div>

              <div className="matrix-pill">
                <div className="pill-dot red"></div>
                <div className="pill-content">
                  <span className="pill-title">PMT Brand Management</span>
                  <span className="pill-sub">Concept, Launch & VA Design</span>
                </div>
              </div>

              <div className="matrix-pill">
                <div className="pill-dot blue"></div>
                <div className="pill-content">
                  <span className="pill-title">Medical Training</span>
                  <span className="pill-sub">Scientific Knowledge & Support</span>
                </div>
              </div>

              <div className="matrix-pill">
                <div className="pill-dot blue"></div>
                <div className="pill-content">
                  <span className="pill-title">Field-Force Competency</span>
                  <span className="pill-sub">MR / AM / RM Development</span>
                </div>
              </div>

              <div className="matrix-pill">
                <div className="pill-dot blue"></div>
                <div className="pill-content">
                  <span className="pill-title">Data & ORG / C-Marc</span>
                  <span className="pill-sub">Sales Analytics & Market Share</span>
                </div>
              </div>

              <div className="matrix-pill">
                <div className="pill-dot red"></div>
                <div className="pill-content">
                  <span className="pill-title">International CME Tours</span>
                  <span className="pill-sub">Incentive Travel in Europe & Asia</span>
                </div>
              </div>
            </div>

            {/* Bottom Stat Card within visual */}
            <div className="hero-stat-card">
              <div className="stat-number">3,000+</div>
              <div className="stat-label">
                <strong>Regional & Budding Pharma Companies in India</strong>
                <p>Empowering local leaders to compete at par with top national brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
