import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, Calendar, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlighting
      const sections = ['hero', 'about', 'services', 'why-us', 'cost-benefit', 'consultant', 'testimonials', 'booking', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Cost-Benefit', href: '#cost-benefit', id: 'cost-benefit' },
    { label: 'Consultant', href: '#consultant', id: 'consultant' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Quick Bar */}
      <div className="header-top-bar">
        <div className="site-container top-bar-inner">
          <div className="top-bar-notice">
            <span className="top-pill">Pan-India Support</span>
            <span className="top-text">Empowering Regional & Emerging Pharma Companies Across India</span>
          </div>
          <div className="top-bar-contact">
            <a href="tel:+919552321646" className="top-phone-link">
              <Phone size={13} className="top-icon" />
              <span>+91 9552321646</span>
            </a>
            <span className="top-divider">|</span>
            <a href="mailto:pharmaexcelpharma@gmail.com" className="top-email-link">
              <span>pharmaexcelpharma@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="header-main-nav">
        <div className="site-container nav-container">
          <Logo variant="header" />

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action Button */}
          <div className="header-actions">
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="btn btn-primary btn-header"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Logo variant="compact" />
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="mobile-nav-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-footer">
          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, '#booking')}
            className="btn btn-primary btn-block"
          >
            <Calendar size={18} />
            <span>Book a Consultation</span>
          </a>

          <div className="drawer-contact-info">
            <p className="drawer-contact-label">Quick Contact:</p>
            <a href="tel:+919552321646" className="drawer-phone">
              <Phone size={15} />
              <span>+91 9552321646</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
