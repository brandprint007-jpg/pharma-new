import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const CostBenefit: React.FC = () => {
  const inHousePoints = [
    {
      title: '2-3 Dedicated Product Managers (PMT)',
      detail: 'High monthly salaries + recruitment fees + ongoing retention challenges'
    },
    {
      title: '1 Full-time Medical & Field Trainer',
      detail: 'Fixed salary and heavy travel expenses across regional zones'
    },
    {
      title: 'Medical Affairs & Scientific Team',
      detail: 'Expensive medical writers & query consultants needed on retainer'
    },
    {
      title: 'Marketing & Purchase Manager',
      detail: 'Vendor coordination, promo input negotiation & procurement overhead'
    },
    {
      title: 'Office Infrastructure & Admin/HR Overhead',
      detail: 'Workstations, software licenses, HR management, and statutory payroll costs'
    },
  ];

  const pharmaExcelPoints = [
    {
      title: 'Full Strategic Management & Leadership',
      detail: 'Senior industry consultants guiding corporate roadmap and portfolio growth'
    },
    {
      title: 'Complete Brand Management (PMT)',
      detail: 'End-to-end concept, scientific literature, LBLs, visual aids & launch campaigns'
    },
    {
      title: 'Continuous Medical & Field-Force Training',
      detail: 'MR / AM / RM capability building, objection handling & doctor detailing drills'
    },
    {
      title: 'Data Analytics & Market Intelligence',
      detail: 'In-depth ORG-IMS, C-Marc, and primary/secondary sales audit reports'
    },
    {
      title: 'International CME & Incentive Tourism',
      detail: 'Professionally managed doctor tours (Dubai, Almaty, Europe, SE Asia)'
    },
    {
      title: '24×7 All-India Strategic Support',
      detail: 'Direct access to leadership without employee management hassle'
    },
  ];

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('booking');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cost-benefit" className="cost-benefit-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Cost & Value Comparison</span>
          <h2 className="section-title">Smart Economics for Growing Pharma</h2>
          <p className="section-subtitle">
            Compare the heavy financial burden of a fragmented in-house marketing team versus a high-impact Pharma Excel partnership.
          </p>
        </div>

        {/* Highlight Takeaway Banner strictly as requested */}
        <div className="takeaway-banner">
          <div className="takeaway-icon-box">
            <Sparkles size={24} />
          </div>
          <div className="takeaway-text">
            <strong>Key Takeaway:</strong> "One annual contract with Pharma Excel replaces an entire PMT + Training + Medical + Purchase team — at a fraction of the cost."
          </div>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="comparison-cards-grid">
          {/* In-House Card */}
          <div className="comparison-card inhouse-card">
            <div className="card-top-tag error-tag">
              <AlertTriangle size={15} />
              <span>Heavy Fixed Overhead</span>
            </div>
            <h3 className="comparison-card-title">Building In-House Team</h3>
            <p className="comparison-card-subtitle">Multiple siloed hires, high fixed payroll, and administrative friction</p>

            <div className="cost-box inhouse-cost-box">
              <span className="cost-label">Estimated Monthly Expense</span>
              <div className="cost-figure text-red">≈ ₹5 – 7 Lakh<span className="cost-period"> / month</span></div>
              <span className="cost-subtext">Plus HR friction, attrition, and office real estate costs</span>
            </div>

            <ul className="comparison-list">
              {inHousePoints.map((item, idx) => (
                <li key={idx} className="comparison-item">
                  <XCircle size={18} className="icon-cross" />
                  <div>
                    <strong className="item-title">{item.title}</strong>
                    <p className="item-detail">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="comparison-summary inhouse-summary">
              <strong>The Result:</strong> High recurring cost, frequent attrition, inconsistent deliverables, and diverted management focus.
            </div>
          </div>

          {/* Pharma Excel Partnership Card */}
          <div className="comparison-card partner-card">
            <div className="card-top-tag success-tag">
              <ShieldCheck size={15} />
              <span>Recommended Strategic Choice</span>
            </div>
            <h3 className="comparison-card-title">Pharma Excel Partnership</h3>
            <p className="comparison-card-subtitle">Senior multi-therapy experts delivering national-grade execution</p>

            <div className="cost-box partner-cost-box">
              <span className="cost-label">Predictable Retainer Model</span>
              <div className="cost-figure text-blue">Fraction of In-House Cost</div>
              <span className="cost-subtext">Zero HR overhead, immediate deployment, all services under one roof</span>
            </div>

            <ul className="comparison-list">
              {pharmaExcelPoints.map((item, idx) => (
                <li key={idx} className="comparison-item">
                  <CheckCircle2 size={18} className="icon-check" />
                  <div>
                    <strong className="item-title">{item.title}</strong>
                    <p className="item-detail">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="comparison-summary partner-summary">
              <strong>The Result:</strong> Immediate Top-40 quality, continuous field training, predictable budget, and aggressive brand growth.
            </div>

            <div className="partner-action-box">
              <a href="#booking" onClick={scrollToBooking} className="btn btn-primary btn-block">
                <span>Discuss Retainer Plans</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
