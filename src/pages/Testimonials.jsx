// src/pages/Testimonials.jsx

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Testimonials.css";

// LOCAL IMAGES
import person1 from "../assets/testimonials/image.png";
import person2 from "../assets/testimonials/image2.png";

const testimonials = [
  {
    id: 1,
    quote:
      "Fortune Tech Solutions helped me gain confidence . The practical training and mentorship made all the difference!",
    author: "Arjun Kumar",
    role: "Software Developer",
    image: person1,
  },
  {
    id: 2,
    quote:
      "The training was practical and industry-focused. Highly recommended! I went from zero coding knowledge to working as a full-stack developer.",
    author: "kishore paarveen",
    role: "Full Stack Engineer",
    image: person2,
  },
];

const Testimonials = () => {
  return (
    <>
      <Navbar />

      <main className="testimonials-page">

        {/* HERO */}
        <section className="testimonials-hero">
          <div className="testimonials-hero__glow" />
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

        {/* 🔥 STATS SECTION */}
        <section className="testimonials-stats">
          <div className="stats-container">

            <div className="stat-card">
              <h2>2000+</h2>
              <p>Happy Students</p>
            </div>

            <div className="stat-card">
              <h2>1500+</h2>
              <p>Successful Placements</p>
            </div>

            <div className="stat-card">
              <h2>4.9⭐</h2>
              <p>Average Rating</p>
            </div>

            <div className="stat-card">
              <h2>100+</h2>
              <p>Projects Completed</p>
            </div>

          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-grid">

              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.id}>

                  <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>

                  <p className="testimonial-card__text">
                    "{t.quote}"
                  </p>

                  <div className="testimonial-card__author">

                    <img
                      src={t.image}
                      alt={t.author}
                      className="testimonial-card__avatar"
                    />

                    <div className="testimonial-card__author-info">
                      <p className="testimonial-card__author-name">
                        {t.author}
                      </p>
                      <p className="testimonial-card__author-role">
                        {t.role}
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