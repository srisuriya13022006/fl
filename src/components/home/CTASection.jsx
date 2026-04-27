// src/components/home/CTASection.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./CTASection.css";

const pills = [
  "Industry-Focused Training",
  "Expert Mentorship",
  "Real-Time Projects",
  "Placement Support",
];

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* ── Label ── */}
        <p className="cta-tag">Take the Next Step</p>

        {/* ── Heading ── */}
        <h2>
          Start Your Career <span>Transformation</span> Today
        </h2>

        {/* ── Red divider ── */}
        <div className="cta-divider" />

        {/* ── Description ── */}
        <p className="cta-description">
          Join Fortune Tech Labs and move closer to your dream IT career
          with industry-focused training, expert mentorship, real-time project
          exposure, and strong placement support.
        </p>

        {/* ── Feature Pills ── */}
        <div className="cta-pills">
          {pills.map((pill, index) => (
            <span className="cta-pill" key={index}>
              <span className="cta-pill-dot" />
              {pill}
            </span>
          ))}
        </div>

        {/* ── Buttons ── */}
        <div className="cta-buttons">
          <Link to="/courses" className="cta-primary-btn">
            Join Fortune Tech Labs
          </Link>
          <Link to="/contact" className="cta-secondary-btn">
            Book Free Demo Session
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTASection;