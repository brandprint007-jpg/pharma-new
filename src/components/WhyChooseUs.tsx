import React from 'react';
import { 
  Trophy, 
  Activity, 
  MapPin, 
  Boxes, 
  PieChart, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { WhyChooseItem } from '../types';

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 'proven-track-record',
    title: 'Proven Track Record',
    description: 'Successful brand launches and accelerated business growth across diverse therapy areas and regional distributor networks.',
    badge: 'Growth Driven'
  },
  {
    id: 'result-oriented',
    title: 'Result-Oriented Professionals',
    description: 'Deep PMT & marketing expertise across Cardiology, CNS, Orthopedics, Gynecology, Anti-infectives, Gastroenterology & more.',
    badge: 'Multi-Therapy'
  },
  {
    id: 'pan-india-dynamics',
    title: 'Pan-India Market Dynamics',
    description: 'Granular understanding of regional + national IPM trends, prescriber behavioral patterns, ORG-IMS, and C-Marc data.',
    badge: 'Data-Backed'
  },
  {
    id: 'all-under-one-roof',
    title: 'All Services Under One Roof',
    description: 'Strategy formulation, PMT brand management, medical training, field coaching, international tourism, and input procurement in one seamless partner.',
    badge: '360° Solution'
  },
  {
    id: 'budget-discipline',
    title: 'Budget Discipline',
    description: 'Proven ability to maximise promotional ROI within available budgets, preventing wasted marketing expenses and dead stock.',
    badge: 'High ROI'
  },
  {
    id: 'national-level-quality',
    title: 'National-Level Quality',
    description: 'Design, scientific content, visual aids, and training rigor matching Top-40 pharma companies — delivered at an affordable regional cost structure.',
    badge: 'Top-40 Standard'
  },
];

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'proven-track-record':
        return <Trophy size={24} className="why-icon" />;
      case 'result-oriented':
        return <Activity size={24} className="why-icon" />;
      case 'pan-india-dynamics':
        return <MapPin size={24} className="why-icon" />;
      case 'all-under-one-roof':
        return <Boxes size={24} className="why-icon" />;
      case 'budget-discipline':
        return <PieChart size={24} className="why-icon" />;
      case 'national-level-quality':
        return <CheckCircle size={24} className="why-icon" />;
      default:
        return <Sparkles size={24} className="why-icon" />;
    }
  };

  return (
    <section id="why-us" className="why-us-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Strategic Advantage</span>
          <h2 className="section-title">Why Choose Pharma Excel</h2>
          <p className="section-subtitle">
            We provide the strategic firepower, medical rigor, and brand leadership that regional pharma companies need to scale reliably.
          </p>
        </div>

        {/* 6-Item Grid strictly matching requirements */}
        <div className="why-grid">
          {whyChooseData.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-card-top">
                <div className="why-icon-box">
                  {getIcon(item.id)}
                </div>
                <span className="why-badge">{item.badge}</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
