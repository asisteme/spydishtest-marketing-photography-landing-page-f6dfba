import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-brandDark text-soft py-12">
      <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-2xl font-bold">SpyDishTest</h3>
          <p className="mt-2 text-sm">
            Empowering eateries and diners with data and intelligence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#diners" className="hover:underline">For Diners</a></li>
            <li><a href="#restaurants" className="hover:underline">For Restaurants</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact Us</h4>
          <form
            action="mailto:dasdas@gmail.com"
            method="post"
            encType="text/plain"
            className="mt-4 flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="rounded px-3 py-2 text-brandDark"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded px-3 py-2 text-brandDark"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Message"
              required
              className="rounded px-3 py-2 text-brandDark"
            />
            <button
              type="submit"
              className="rounded bg-accent px-4 py-2 font-semibold text-brandDark hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center text-xs">
        © {new Date().getFullYear()} SpyDishTest. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
