import React from 'react';
import { Quote, Star, Building, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '../types';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "Partnering with Pharma Excel transformed our regional brand launch strategy. Having seasoned PMT leadership without incurring the fixed payroll of a 4-person in-house team gave us immense financial agility and Top-40 quality promotional inputs.",
    author: "[Client Name]",
    designation: "Managing Director",
    company: "[Emerging Pharma Co. - West Bengal]",
    location: "Kolkata, India"
  },
  {
    id: 'test-2',
    quote: "Mr. Asif Mansuri's medical training and field-force coaching elevated our Medical Representatives' doctor detailing capability tremendously. Our doctor conversion rates and secondary sales grew by over 38% in the first two quarters.",
    author: "[Client Name]",
    designation: "Head of Marketing & Sales",
    company: "[Regional Healthcare Formulation Ltd.]",
    location: "Maharashtra, India"
  },
  {
    id: 'test-3',
    quote: "From ORG data analysis to fully coordinated international doctor incentive tours to Dubai, Pharma Excel handles everything under one roof. Truly the best strategic decision for any growing pharma company in India.",
    author: "[Client Name]",
    designation: "Chief Operating Officer",
    company: "[Pharma Formulations Pvt. Ltd.]",
    location: "Gujarat, India"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Client Feedback</span>
          <h2 className="section-title">Trusted by Growing Pharma Leaders</h2>
          <p className="section-subtitle">
            Hear how regional pharmaceutical enterprises achieve sustained market expansion through our integrated consulting framework.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="quote-icon-box">
                  <Quote size={20} className="quote-icon" />
                </div>
                <div className="rating-stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
              </div>

              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>

              <div className="testimonial-author-box">
                <div className="author-avatar-badge">
                  <Building size={18} />
                </div>
                <div className="author-info">
                  <div className="author-name-row">
                    <strong className="author-name">{item.author}</strong>
                    <span className="author-verified">
                      <CheckCircle2 size={13} />
                      <span>Verified Partner</span>
                    </span>
                  </div>
                  <span className="author-designation">{item.designation}</span>
                  <span className="author-company">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for user */}
        <div className="testimonial-footnote text-center">
          <p className="footnote-text">
            * Client names and regional identifiers can be customized with your verified partner references.
          </p>
        </div>
      </div>
    </section>
  );
};
