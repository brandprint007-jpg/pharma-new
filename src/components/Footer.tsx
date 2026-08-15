import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Globe, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Core Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Cost-Benefit Analysis', href: '#cost-benefit' },
    { label: 'Consultant Profile', href: '#consultant' },
    { label: 'Client Testimonials', href: '#testimonials' },
    { label: 'Book Appointment', href: '#booking' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    'Strategic Planning & Formulation',
    'PMT Brand Management & LBLs',
    'Medical Scientific Training',
    'MR / AM / RM Field Capability',
    'ORG & C-Marc Data Analytics',
    'International CME Incentive Tours'
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-col footer-col-brand">
            <Logo variant="footer" />
            <p className="footer-about-text">
              Pharma Excel is a dedicated pharmaceutical management consulting organization helping regional and emerging pharma companies in India achieve national-level market leadership through integrated strategy, PMT brand leadership, scientific training, and commercial excellence.
            </p>
            <div className="footer-cred-pill">
              <ShieldCheck size={16} />
              <span>Consultant › Trainer › Recruiter</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Consulting Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Core Services</h4>
            <ul className="footer-links-list">
              {servicesList.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="footer-nav-link"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social Placeholders */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+919552321646" className="footer-contact-item">
                  <Phone size={16} className="f-icon" />
                  <span>+91 9552321646</span>
                </a>
              </li>
              <li>
                <a href="mailto:pharmaexcelpharma@gmail.com" className="footer-contact-item">
                  <Mail size={16} className="f-icon" />
                  <span>pharmaexcelpharma@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="http://www.pharmaexcel.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <Globe size={16} className="f-icon" />
                  <span>www.pharmaexcel.co.in</span>
                </a>
              </li>
            </ul>

            <div className="footer-social-wrapper">
              <span className="social-label">Connect:</span>
              <div className="social-icons-row">
                <span className="social-icon-placeholder" title="LinkedIn" aria-label="LinkedIn">in</span>
                <span className="social-icon-placeholder" title="WhatsApp" aria-label="WhatsApp">wa</span>
                <span className="social-icon-placeholder" title="Email" aria-label="Email">@</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Pharma Excel. All rights reserved. Strategic Partner for Emerging Pharma in India.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
