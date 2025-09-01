import React from 'react';
import HeroSection from '../sections/HeroSection';
import DinersSection from '../sections/DinersSection';
import RestaurantsSection from '../sections/RestaurantsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FooterSection from '../sections/FooterSection';

const App = () => {
  return (
    <main className="font-body text-brandDark">
      <HeroSection />
      <DinersSection />
      <RestaurantsSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
};

export default App;
