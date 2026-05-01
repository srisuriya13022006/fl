// src/components/home/AboutPreview.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";
import aboutImage from "../../assets/images/who we are.jpeg";

const highlights = [
  "Industry-relevant curriculum",
  "Real-time project exposure",
  "Expert trainers & mentoring",
  "Strong placement support",
];

const CheckIcon = () => (
  <span className="highlight-icon">
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <polyline points="2,6 5,9 10,3" />
    </svg>
  </span>
);

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="about-preview-container">

        {/* ── Left: Image ── */}
        <div className="about-preview-image">
          <img
            src={aboutImage}
            alt="About Fortune Tech Labs — team and training environment"
          />
          {/* Experience badge */}
          <div className="about-image-badge">
            <div className="badge-num">5+</div>
            <div className="badge-text">Years of<br />Excellence</div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="about-preview-content">

          {/* Label */}
          <p className="about-tag">About Us</p>

          {/* Heading */}
          <h2>
            Who We <span>Are</span>
          </h2>

          {/* Red accent divider */}
          <div className="about-divider" />

          {/* Description */}
          <p className="about-description">
            Fortune Tech Labs is a dynamic technology training and consulting
            company dedicated to shaping future-ready professionals. We bridge
            the gap between academic learning and industry requirements through
            practical knowledge and career-focused training.
          </p>

          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div className="highlight-item" key={index}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/about" className="about-btn">
            Learn More
          </Link>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;