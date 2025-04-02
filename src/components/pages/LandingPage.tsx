import React from 'react';
import HeroSection from '../landing/HeroSection';
import FeaturesSection from '../landing/FeaturesSection';
import TestimonialsSection from '../landing/TestimonialsSection';
import NewsletterSection from '../landing/NewsletterSection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default LandingPage; 