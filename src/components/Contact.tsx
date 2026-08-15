import React from 'react';
import { Phone, Mail, Globe, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Connect with Pharma Excel</h2>
          <p className="section-subtitle">
            Reach out directly for corporate consulting inquiries, PMT audits, field-force training bookings, or international tour packages.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="contact-cards-grid">
          {/* Phone Card */}
          <a href="tel:+919552321646" className="contact-card">
            <div className="contact-icon-box">
              <Phone size={24} className="contact-icon" />
            </div>
            <div className="contact-card-content">
              <span className="contact-tag">Direct Call / Inquiries</span>
              <h3 className="contact-val">+91 9552321646</h3>
              <p className="contact-sub">Available Monday – Saturday, 9:00 AM – 7:30 PM IST</p>
            </div>
            <div className="contact-action-link">
              <span>Call Now</span>
              <ArrowRight size={14} />
            </div>
          </a>

          {/* Email Card */}
          <a href="mailto:pharmaexcelpharma@gmail.com" className="contact-card">
            <div className="contact-icon-box">
              <Mail size={24} className="contact-icon" />
            </div>
            <div className="contact-card-content">
              <span className="contact-tag">Official Email</span>
              <h3 className="contact-val email-text">pharmaexcelpharma@gmail.com</h3>
              <p className="contact-sub">Send RFPs, brand briefs, or corporate training requirements</p>
            </div>
            <div className="contact-action-link">
              <span>Send Email</span>
              <ArrowRight size={14} />
            </div>
          </a>

          {/* Website Card */}
          <a href="http://www.pharmaexcel.co.in" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon-box">
              <Globe size={24} className="contact-icon" />
            </div>
            <div className="contact-card-content">
              <span className="contact-tag">Official Portal</span>
              <h3 className="contact-val">www.pharmaexcel.co.in</h3>
              <p className="contact-sub">Pharmaceutical Management Consulting & Training Organization</p>
            </div>
            <div className="contact-action-link">
              <span>Visit Website</span>
              <ArrowRight size={14} />
            </div>
          </a>
        </div>

        {/* Secondary Info Strip */}
        <div className="contact-summary-strip">
          <div className="summary-strip-item">
            <MapPin size={20} className="strip-icon" />
            <div>
              <strong>Pan-India Coverage:</strong>
              <span> On-site consulting & training across Maharashtra, Gujarat, West Bengal, Telangana, UP & all major pharma hubs.</span>
            </div>
          </div>
          <div className="summary-strip-item">
            <Clock size={20} className="strip-icon" />
            <div>
              <strong>Quick Turnaround:</strong>
              <span> Dedicated 24×7 strategic advisory support for all active retainer partners.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
