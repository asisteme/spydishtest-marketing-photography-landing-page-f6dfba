import React from 'react';

const features = [
  {
    title: 'Explore Restaurants',
    desc: 'Find spots that match preferences and location.',
    icon: '🍽️'
  },
  {
    title: 'Discover Dishes',
    desc: 'Browse featured menus and trending plates nearby.',
    icon: '🍲'
  },
  {
    title: 'Read Reviews',
    desc: 'Access rankings and sentiment insights for dishes.',
    icon: '⭐'
  }
];

const DinersSection = () => {
  return (
    <section id="diners" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">For Diners</h2>
        <p className="mx-auto mt-2 max-w-xl text-center">
          Make every dining experience memorable with personalized recommendations.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src="https://images.pexels.com/photos/5081925/pexels-photo-5081925.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750"
            alt="Chat demo"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DinersSection;
