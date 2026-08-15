import React from 'react';
import { Eye, Target, Sparkles, Building2, CheckCircle2, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">About Pharma Excel</span>
          <h2 className="section-title">Enabling Emerging Pharma to Compete at National Scale</h2>
          <p className="section-subtitle">
            Bridging the capability gap for regional pharmaceutical manufacturers with enterprise-grade strategy, branding, and field execution.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="vision-mission-grid">
          {/* Vision Card */}
          <div className="vm-card vision-card">
            <div className="vm-card-header">
              <div className="vm-icon-box blue-box">
                <Eye size={26} className="vm-icon" />
              </div>
              <div>
                <span className="vm-tag">Our Vision</span>
                <h3 className="vm-title">National Competitiveness for Regional Players</h3>
              </div>
            </div>
            <p className="vm-text">
              To provide quality, comprehensive <strong>Strategic Management</strong> to regional & upcoming pharma companies — enabling them to compete at par with national and international players in the Indian market.
            </p>
            <ul className="vm-list">
              <li>
                <CheckCircle2 size={16} className="check-icon" />
                <span>Level the playing field with Top-40 Indian pharma giants</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon" />
                <span>Transform regional product portfolios into high-recall brands</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon" />
                <span>Drive sustainable market share across tier-2, tier-3, and metro hubs</span>
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="vm-card mission-card">
            <div className="vm-card-header">
              <div className="vm-icon-box red-box">
                <Target size={26} className="vm-icon red-icon" />
              </div>
              <div>
                <span className="vm-tag">Our Mission</span>
                <h3 className="vm-title">All-in-One Affordable Pharma Organization</h3>
              </div>
            </div>
            <p className="vm-text">
              To be an affordable, all-in-one pharmaceutical services organisation providing strategy, brand, medical, training, and commercial services under one roof.
            </p>
            <ul className="vm-list">
              <li>
                <CheckCircle2 size={16} className="check-icon" />
                <span>Eliminate the heavy overhead of maintaining fragmented in-house teams</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon" />
                <span>Deliver scientific credibility through continuous medical & field training</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="check-icon" />
                <span>Provide end-to-end support from brand conception to doctor recall</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Small Stat Callout strictly as requested */}
        <div className="about-stat-callout">
          <div className="stat-callout-inner">
            <div className="stat-callout-icon">
              <Building2 size={32} />
            </div>
            <div className="stat-callout-content">
              <div className="stat-callout-number">3,000+</div>
              <div className="stat-callout-desc">
                <strong>Small & budding pharma companies in India need exactly what we offer.</strong>
                <span>
                  We understand the unique commercial constraints, regional distributor networks, and doctor prescriber behavior across Indian states.
                </span>
              </div>
            </div>
            <div className="stat-callout-action">
              <a href="#services" className="btn btn-outline-white">
                <span>View Our Capabilities</span>
                <TrendingUp size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
