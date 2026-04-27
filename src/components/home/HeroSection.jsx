// src/components/home/HeroSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import heroImage from "../../assets/images/about.jpg";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "95%",  label: "Placement Rate"   },
  { value: "50+",  label: "Hiring Partners"  },
];

const HeroSection = () => {
  return (
    <section className="hero-section">

      {/* ── Decorative layers ── */}
      <div className="hero-grid-overlay" />
      <div className="hero-slash" />

      <div className="hero-container">

        {/* ══════════════════════════════
            LEFT — Content
        ══════════════════════════════ */}
        <div className="hero-content">

          {/* Eyebrow label */}
          <p className="hero-tag">Welcome to Fortune Tech Labs</p>

          {/* Main heading — Outfit 800, well-spaced */}
          <h1 className="hero-heading">
            Empowering Careers Through{" "}
            <span className="accent-word">Technology</span>
          </h1>

          {/* Sub-headline with dot separators */}
          <div className="hero-sub">
            <span>Training</span>
            <span className="hero-sub-dot" />
            <span>IT Consulting</span>
            <span className="hero-sub-dot" />
            <span>Career Transformation</span>
          </div>

          {/* Body description */}
          <p className="hero-desc-text">
            We help students and professionals bridge the gap between
            academic learning and industry expectations through practical
            training, expert mentoring, and career-focused solutions.
          </p>

          {/* Stats row */}
          <div className="hero-stats">
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
                {i < stats.length - 1 && (
                  <div className="hero-stat-divider" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link to="/courses" className="primary-btn">
              Enroll Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
            <Link to="/contact" className="secondary-btn">
              Book Free Consultation
            </Link>
          </div>

        </div>

        {/* ══════════════════════════════
            RIGHT — Image Card
        ══════════════════════════════ */}
        <div className="hero-image-wrap">
          <div className="hero-image-float">

            {/* Live batch pill */}
            <div className="hero-image-tag">
              <span className="hero-image-tag-dot" />
              Enrolling Now
            </div>

            {/* Image card */}
            <div className="hero-image-card">
              <img
                src={heroImage}
                alt="Students training at Fortune Tech Labs"
              />
            </div>

            {/* Experience badge */}
            <div className="hero-badge">
              <span className="hero-badge-icon">🏆</span>
              <div className="hero-badge-text">
                <strong>5+ Years</strong>
                <span>of Excellence</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>

    </section>
  );
};

export default HeroSection;