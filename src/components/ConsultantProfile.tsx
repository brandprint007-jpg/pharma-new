import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle2, Phone, Mail, UserCheck } from 'lucide-react';

export const ConsultantProfile: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="consultant" className="consultant-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Leadership & Expertise</span>
          <h2 className="section-title">Principal Consultant Profile</h2>
          <p className="section-subtitle">
            Decades of proven pharmaceutical leadership dedicated to accelerating regional brand competitiveness.
          </p>
        </div>

        {/* Profile Card */}
        <div className="consultant-card">
          <div className="consultant-grid">
            {/* Photo Column */}
            <div className="consultant-photo-col">
              <div className="consultant-photo-frame">
                {!imgError ? (
                  <img
                    src="/images/Picture11.jpg"
                    alt="Mr. Asif Mansuri - Consultant, Trainer & Recruiter"
                    className="consultant-photo-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="consultant-photo-fallback">
                    <div className="avatar-circle">
                      <span className="avatar-initials">AM</span>
                    </div>
                    <div className="avatar-badge">
                      <UserCheck size={16} />
                    </div>
                  </div>
                )}
              </div>
              <div className="consultant-name-badge">
                <h3 className="consultant-name">Mr. Asif Mansuri</h3>
                <p className="consultant-title-text">Consultant, Trainer & Recruiter</p>
              </div>

              <div className="consultant-quick-contact">
                <a href="tel:+919552321646" className="consultant-contact-btn">
                  <Phone size={14} />
                  <span>+91 9552321646</span>
                </a>
                <a href="mailto:pharmaexcelpharma@gmail.com" className="consultant-contact-btn">
                  <Mail size={14} />
                  <span>Direct Inquiry</span>
                </a>
              </div>
            </div>

            {/* Bio & Credentials Column */}
            <div className="consultant-details-col">
              <div className="consultant-bio-header">
                <span className="consultant-exp-pill">Decades of Pharma PMT Leadership</span>
                <h3 className="consultant-full-name">Mr. Asif Mansuri</h3>
                <p className="consultant-designation">Consultant, Trainer & Recruiter</p>
              </div>

              {/* Bio strictly matching requirements */}
              <p className="consultant-bio-text">
                Mr. Asif Mansuri is a veteran pharmaceutical consultant and seasoned field-force coach with deep domain expertise in strategic management, PMT brand lifecycle execution, and commercial capability building for emerging and regional pharma companies across India. Having guided brand launches across major therapy segments including Cardiology, CNS, Orthopedics, and Gynecology, he works directly with company promoters and marketing leaders to turn regional portfolios into highly profitable, doctor-prescribed national contenders.
              </p>

              <div className="consultant-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Strategic PMT Management</h4>
                    <p className="pillar-desc">Formulates actionable brand plans, promotional inputs, and sales targets tailored to regional market realities.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Field Competency & Detailing</h4>
                    <p className="pillar-desc">Conducts intensive classroom and on-field training for Medical Representatives and Area Managers to master RCPA and doctor detailing.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Recruitment & Talent Sourcing</h4>
                    <p className="pillar-desc">Helps pharma organizations identify, interview, and onboard high-performing sales professionals and field managers.</p>
                  </div>
                </div>
              </div>

              <div className="consultant-highlights-row">
                <div className="ch-point">
                  <CheckCircle2 size={16} className="ch-icon" />
                  <span>Pan-India On-Site Training Workshops</span>
                </div>
                <div className="ch-point">
                  <CheckCircle2 size={16} className="ch-icon" />
                  <span>Executive Promoters & Board Advisory</span>
                </div>
                <div className="ch-point">
                  <CheckCircle2 size={16} className="ch-icon" />
                  <span>24×7 Strategic Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
