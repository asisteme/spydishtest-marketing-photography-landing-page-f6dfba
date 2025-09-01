import React from 'react';

const testimonials = [
  {
    name: 'Alice Chen',
    role: 'Foodie &amp; Blogger',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=200&amp;w=200',
    quote:
      'SpyDishTest showed me the best dishes in town, saving hours of scrolling and searching.'
  },
  {
    name: 'Carlos Ramirez',
    role: 'Restaurant Owner',
    img: 'https://images.pexels.com/photos/3771830/pexels-photo-3771830.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=200&amp;w=200',
    quote:
      'The competitor pricing insights helped us adjust our menu and boost revenue by 15 percent in a month.'
  },
  {
    name: 'Sofia Martinez',
    role: 'Marketing Manager',
    img: 'https://images.pexels.com/photos/4239617/pexels-photo-4239617.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=200&amp;w=200',
    quote:
      'AI driven campaigns brought a surge of new diners during off peak hours, maximizing table occupancy.'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-soft py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">What People Say</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition"
            >
              <p className="text-sm">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-brandMid">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
