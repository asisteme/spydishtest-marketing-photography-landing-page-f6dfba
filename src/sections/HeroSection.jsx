import React from 'react';

const HeroSection = () => {
  return (
    <header className="relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=1080&amp;w=1920"
        alt="Delicious dishes"
        className="absolute inset-0 h-full w-full object-cover object-center -z-10"
      />
      <div className="absolute inset-0 bg-brandDark/60 -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-32 text-center text-soft">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-soft">SpyDishTest</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl">
          An intelligent WhatsApp bot connecting diners with restaurants while optimizing restaurant management.
        </p>
        <a
          href="https://wa.me/1234567890"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-4 font-semibold text-brandDark shadow hover:scale-105 transition-transform"
        >
          Start Now
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
