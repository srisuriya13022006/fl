// src/pages/Testimonials.jsx

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Fortune Tech Solutions helped me gain confidence and land my first job in IT. The practical training and mentorship made all the difference!",
    author: "Arjun Kumar",
    role: "Software Developer",
  },
  {
    id: 2,
    quote:
      "The training was practical and industry-focused. Highly recommended! I went from zero coding knowledge to working as a full-stack developer.",
    author: "Priya Sharma",
    role: "Full Stack Engineer",
  },
];

const Testimonials = () => {
  return (
    <>
      <Navbar />

      <main className="testimonials-page">
        {/* ── Hero Banner ── */}
        <section className="testimonials-hero">
          <div className="testimonials-hero__glow" aria-hidden="true" />
          <div className="testimonials-hero__content">
            <span className="label-caps">Success Stories</span>
            <h1 className="testimonials-hero__heading">
              What Our <span>Students Say</span>
            </h1>
            <p className="testimonials-hero__sub">
              Real results from real people who transformed their careers
            </p>
          </div>
        </section>

        {/* ── Testimonials Section ── */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="testimonial-card__quote-icon" aria-hidden="true">
                    "
                  </div>
                  <p className="testimonial-card__text">
                    {testimonial.quote}
                  </p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar" />
                    <div className="testimonial-card__author-info">
                      <p className="testimonial-card__author-name">
                        {testimonial.author}
                      </p>
                      <p className="testimonial-card__author-role">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Testimonials;
