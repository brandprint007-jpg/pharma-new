import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CostBenefit } from './components/CostBenefit';
import { ConsultantProfile } from './components/ConsultantProfile';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      {/* 1. Sticky Header with Logo, Navigation & Mobile Drawer */}
      <Header />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About / Vision & Mission */}
        <About />

        {/* 4. Services (6-Card Grid) */}
        <Services />

        {/* 5. Why Choose Pharma Excel (6-Item Grid) */}
        <WhyChooseUs />

        {/* 6. Cost-Benefit Comparison */}
        <CostBenefit />

        {/* 7. Consultant Profile (Mr. Asif Mansuri) */}
        <ConsultantProfile />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. Booking / Consultation Form */}
        <BookingForm />

        {/* 10. Direct Contact Details */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
