import React from 'react';
import { 
  Compass, 
  Layers, 
  Stethoscope, 
  GraduationCap, 
  BarChart3, 
  Plane,
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    category: 'Corporate Strategy',
    shortDesc: 'Corporate, business & functional strategy formulation and execution.',
    iconName: 'Compass',
    deliverables: [
      'Long-term corporate growth roadmap & portfolio prioritization',
      'Therapy segment entry & gap analysis',
      'Go-to-market execution plans for regional markets'
    ]
  },
  {
    id: 'brand-management',
    title: 'Brand Management',
    category: 'Product Management Team (PMT)',
    shortDesc: 'Concept, content, design, launch & field execution of brands.',
    iconName: 'Layers',
    deliverables: [
      'Brand positioning, scientific literature & visual aid (LBL/VA) design',
      'New product launch campaigns & doctor engagement strategies',
      'Cycle promotional inputs, digital reminders & brand tracking'
    ]
  },
  {
    id: 'medical-training',
    title: 'Medical Training',
    category: 'Scientific Excellence',
    shortDesc: 'Product training, query resolution, scientific support for field teams.',
    iconName: 'Stethoscope',
    deliverables: [
      'Molecule mechanism of action (MOA) & clinical trial dossiers',
      'Prescriber objection handling & doctor query resolution',
      'Continuous medical updates on standard-of-care therapies'
    ]
  },
  {
    id: 'training-development',
    title: 'Training & Development',
    category: 'Field-Force Competency',
    shortDesc: 'MR/AM/RM development programs for national-level competency.',
    iconName: 'GraduationCap',
    deliverables: [
      'Induction & refresher workshops for Medical Representatives',
      'Area Manager & Regional Manager leadership coaching',
      'Doctor detailing skills, joint-working audits & RCPA training'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Market Intelligence',
    shortDesc: 'ORG, C-Marc, primary/secondary sales analysis and insights.',
    iconName: 'BarChart3',
    deliverables: [
      'ORG-IMS (IQVIA) & C-Marc IPM data interpretation',
      'Primary vs. Secondary sales ratio auditing & stockist analysis',
      'Doctor prescription audit & micro-market share benchmarking'
    ]
  },
  {
    id: 'international-tourism',
    title: 'International Tourism',
    category: 'Pharma Hospitality & CME',
    shortDesc: 'Fully managed incentive tours across Europe and Asia.',
    iconName: 'Plane',
    deliverables: [
      'Doctor & stockist incentive tours (Dubai, Kazakhstan, Europe, SE Asia)',
      'Hassle-free international flight, visa, luxury stay & gala dinners',
      'CME event coordination, sightseeing itineraries & delegate care'
    ]
  },
];

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass size={28} className="service-icon" />;
      case 'Layers':
        return <Layers size={28} className="service-icon" />;
      case 'Stethoscope':
        return <Stethoscope size={28} className="service-icon" />;
      case 'GraduationCap':
        return <GraduationCap size={28} className="service-icon" />;
      case 'BarChart3':
        return <BarChart3 size={28} className="service-icon" />;
      case 'Plane':
        return <Plane size={28} className="service-icon" />;
      default:
        return <Layers size={28} className="service-icon" />;
    }
  };

  const scrollToBooking = (serviceName: string) => {
    const el = document.getElementById('booking');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Also set the select value if possible
      const select = document.getElementById('service-select') as HTMLSelectElement;
      if (select) {
        select.value = serviceName;
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Comprehensive Expertise</span>
          <h2 className="section-title">End-to-End Pharmaceutical Consulting Services</h2>
          <p className="section-subtitle">
            Six specialized pillars engineered to deliver national-level excellence at sustainable regional costs.
          </p>
        </div>

        {/* 6-Card Grid strictly matching requirements */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {getIcon(service.iconName)}
                </div>
                <span className="service-number">0{index + 1}</span>
              </div>

              <div className="service-category">{service.category}</div>
              <h3 className="service-title">{service.title}</h3>
              
              {/* 1-sentence description as specified */}
              <p className="service-desc">{service.shortDesc}</p>

              {/* Key Deliverables Bullet Points */}
              <div className="service-deliverables">
                {service.deliverables.map((item, dIndex) => (
                  <div key={dIndex} className="deliverable-item">
                    <Check size={14} className="deliverable-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="service-card-footer">
                <button
                  type="button"
                  onClick={() => scrollToBooking(service.title)}
                  className="service-cta-link"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
