import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Building, 
  Briefcase, 
  Phone, 
  Mail, 
  Layers, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { BookingFormData } from '../types';

export const BookingForm: React.FC = () => {
  const initialFormState: BookingFormData = {
    fullName: '',
    companyName: '',
    designation: '',
    phone: '',
    email: '',
    service: 'Strategic Planning',
    preferredDate: '',
    message: ''
  };

  const [formData, setFormData] = useState<BookingFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'Strategic Planning',
    'Brand Management (PMT)',
    'Medical Training & Query Resolution',
    'Training & Development (MR/AM/RM)',
    'Data Analytics (ORG / C-Marc)',
    'International CME & Incentive Tourism',
    'All-in-One Retainer Consultation'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    // Phone validation (Indian / international format: at least 10 digits)
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, '')) && formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error on change
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate instant local state processing without calling any external API
    setTimeout(() => {
      setSubmittedData({ ...formData });
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <section id="booking" className="booking-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Consultation Booking</span>
          <h2 className="section-title">Schedule a Strategic Consultation</h2>
          <p className="section-subtitle">
            Take the first step towards transforming your brand portfolio and empowering your field force.
          </p>
        </div>

        {/* Two-Column Card Layout */}
        <div className="booking-card-wrapper">
          {/* Left Column: Value Proposition & Contact Direct */}
          <div className="booking-info-col">
            <div className="booking-info-header">
              <span className="info-tag">Direct Leadership Access</span>
              <h3 className="booking-info-title">Let's Discuss Your Pharma Growth Goals</h3>
              <p className="booking-info-desc">
                Whether you are launching new therapy divisions, restructuring PMT outputs, or need specialized MR detailing workshops, our team delivers immediate clarity.
              </p>
            </div>

            <div className="booking-perks-list">
              <div className="perk-item">
                <div className="perk-icon-box">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>No-Obligation Portfolio Review</strong>
                  <p>Comprehensive assessment of your regional therapy presence and brand opportunities.</p>
                </div>
              </div>

              <div className="perk-item">
                <div className="perk-icon-box">
                  <Clock size={18} />
                </div>
                <div>
                  <strong>Prompt 24-Hour Response</strong>
                  <p>Our senior consulting team reviews your inquiry and connects within one business day.</p>
                </div>
              </div>

              <div className="perk-item">
                <div className="perk-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>Strict Confidentiality</strong>
                  <p>All brand formulations, sales data, and business plans remain 100% confidential.</p>
                </div>
              </div>
            </div>

            <div className="booking-direct-callout">
              <div className="callout-label">Prefer direct phone inquiry?</div>
              <a href="tel:+919552321646" className="callout-phone">
                <Phone size={18} />
                <span>+91 9552321646</span>
              </a>
              <span className="callout-sub">Direct Line: Mr. Asif Mansuri</span>
            </div>
          </div>

          {/* Right Column: Form or Success Confirmation */}
          <div className="booking-form-col">
            {isSuccess && submittedData ? (
              <div className="booking-success-card">
                <div className="success-icon-wrapper">
                  <CheckCircle2 size={54} className="success-icon" />
                </div>
                <h3 className="success-title">Consultation Request Received!</h3>
                <p className="success-toast-msg">
                  "Thank you! Our team will contact you within 24 hours."
                </p>

                <div className="submitted-summary-box">
                  <div className="summary-row">
                    <span className="s-label">Representative:</span>
                    <strong className="s-val">{submittedData.fullName} ({submittedData.designation})</strong>
                  </div>
                  <div className="summary-row">
                    <span className="s-label">Company:</span>
                    <strong className="s-val">{submittedData.companyName}</strong>
                  </div>
                  <div className="summary-row">
                    <span className="s-label">Service Focus:</span>
                    <strong className="s-val">{submittedData.service}</strong>
                  </div>
                  <div className="summary-row">
                    <span className="s-label">Phone & Email:</span>
                    <strong className="s-val">{submittedData.phone} | {submittedData.email}</strong>
                  </div>
                  {submittedData.preferredDate && (
                    <div className="summary-row">
                      <span className="s-label">Preferred Date:</span>
                      <strong className="s-val">{submittedData.preferredDate}</strong>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-outline btn-block mt-4"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="booking-form" noValidate>
                <div className="form-row form-row-2">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-red">*</span>
                    </label>
                    <div className="input-wrapper">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  {/* Company Name */}
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company Name <span className="text-red">*</span>
                    </label>
                    <div className="input-wrapper">
                      <Building size={18} className="input-icon" />
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Pharma Lifesciences"
                        className={`form-input ${errors.companyName ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.companyName && <span className="error-text">{errors.companyName}</span>}
                  </div>
                </div>

                <div className="form-row form-row-2">
                  {/* Designation */}
                  <div className="form-group">
                    <label htmlFor="designation" className="form-label">
                      Designation <span className="text-red">*</span>
                    </label>
                    <div className="input-wrapper">
                      <Briefcase size={18} className="input-icon" />
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Managing Director / Marketing Head"
                        className={`form-input ${errors.designation ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.designation && <span className="error-text">{errors.designation}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-red">*</span>
                    </label>
                    <div className="input-wrapper">
                      <Phone size={18} className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row form-row-2">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Work Email <span className="text-red">*</span>
                    </label>
                    <div className="input-wrapper">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@apexpharma.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  {/* Service Interested In */}
                  <div className="form-group">
                    <label htmlFor="service-select" className="form-label">
                      Service Interested In <span className="text-red">*</span>
                    </label>
                    <div className="input-wrapper select-wrapper">
                      <Layers size={18} className="input-icon" />
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`form-select ${errors.service ? 'input-error' : ''}`}
                      >
                        {servicesList.map((srv, idx) => (
                          <option key={idx} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && <span className="error-text">{errors.service}</span>}
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">
                    Preferred Consultation Date (Optional)
                  </label>
                  <div className="input-wrapper">
                    <Calendar size={18} className="input-icon" />
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message / Notes */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Specific Requirements / Message (Optional)
                  </label>
                  <div className="input-wrapper textarea-wrapper">
                    <MessageSquare size={18} className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand portfolio, field-force size, or specific consulting objectives..."
                      className="form-textarea"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block btn-submit"
                >
                  <Sparkles size={18} />
                  <span>{isSubmitting ? 'Processing Request...' : 'Confirm Appointment Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
