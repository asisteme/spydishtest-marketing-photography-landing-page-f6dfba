import React from 'react';

const tools = [
  {
    title: 'Competitor Pricing Intelligence',
    desc: 'Compare menu prices with local competitors in real time.'
  },
  {
    title: 'Dish Ranking &amp; Sentiment',
    desc: 'Understand how dishes perform and what guests think.'
  },
  {
    title: 'Diner Interest Heatmaps',
    desc: 'Visualize demand peaks by time and location.'
  },
  {
    title: 'AI Powered Campaigns',
    desc: 'Optimize promotions and smart pricing automatically.'
  },
  {
    title: 'Weekly Executive Reports',
    desc: 'Get concise insights delivered to your inbox.'
  }
];

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">For Restaurants</h2>
        <p className="mx-auto mt-2 max-w-xl text-center">
          Level up operations with data driven insights and AI automation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ul className="space-y-6">
            {tools.map((t) => (
              <li key={t.title}>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm mt-1">{t.desc}</p>
              </li>
            ))}
          </ul>

          <img
            src="https://images.pexels.com/photos/1661004/pexels-photo-1661004.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750"
            alt="Analytics dashboard"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/1234567890"
            className="rounded-lg bg-brandMid px-8 py-4 font-semibold text-white hover:scale-105 transition-transform"
          >
            Subscribe to Pro Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
