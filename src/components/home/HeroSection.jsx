// src/components/home/HeroSection.jsx

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import heroImage from "../../assets/caurosal/slide 1.png";
import slide2 from "../../assets/caurosal/slide 2.jpeg";
import slide3 from "../../assets/caurosal/realtime project_exposure.jpeg";
import slide4 from "../../assets/caurosal/placements.png";

const SLIDES = [
  {
    src: heroImage,
    tag: "Software Training",
    caption: "Hands-On Project-Based Learning",
    sub: "Java · MERN Stack · Python · SQL",
  },
  {
    src: slide2,
    tag: "IT Consulting",
    caption: "Expert Industry Mentorship",
    sub: "Work with seasoned professionals",
  },
  {
    src: slide3,  
    tag: "Career Growth",
    caption: "Real-Time Project Exposure",
    sub: "Build a portfolio employers notice",
  },
  {
    src: slide4, 
    tag: "Placement",
    caption: "95% Placement Success Rate",
    sub: "Resume · Mock Interviews · Offers",
  },
];

const STATS = [
  { value: "500+", label: "Students Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Hiring Partners" },
];

const AUTOPLAY_MS = 4500;

const HeroSection = () => {
  const [active,  setActive]  = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [prev,    setPrev]    = useState(null);

  const goTo = useCallback((idx) => {
    setPrev(active);
    setActive(idx);
  }, [active]);

  const nextSlide = useCallback(() => {
    goTo((active + 1) % SLIDES.length);
  }, [active, goTo]);

  /* Auto-play */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, nextSlide]);

  return (
    <section className="hero-section">

      {/* ══════════════════════════════════════
          LEFT — Dark content panel
      ══════════════════════════════════════ */}
      <div className="hero-left">

        {/* Grid texture */}
        <div className="hero-grid-overlay" aria-hidden="true" />

        {/* Red ambient glow */}
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-left-inner">

          {/* Eyebrow */}
          <p className="hero-tag">
            <span className="hero-tag-line" />
            Welcome to Fortune Tech Labs
          </p>

          {/* Heading */}
          <h1 className="hero-heading">
            Empowering<br />
            Careers Through<br />
            <span className="accent-word">Technology</span>
          </h1>

          {/* Sub-headline */}
          <div className="hero-sub">
            <span>Training</span>
            <span className="hero-sub-dot" aria-hidden="true" />
            <span>IT Consulting</span>
            <span className="hero-sub-dot" aria-hidden="true" />
            <span>Career Transformation</span>
          </div>

          {/* Description */}
          <p className="hero-desc">
            We help students and professionals bridge the gap between
            academic learning and industry expectations through practical
            training, expert mentoring, and career-focused solutions.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Link to="/courses" className="hero-btn-primary">
              Enroll Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                   stroke="currentColor" strokeWidth="2.5"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
            <Link to="/contact" className="hero-btn-ghost">
              Book Free Demo
            </Link>
          </div>

          {/* Stats strip */}
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <React.Fragment key={i}>
                <div className="hero-stat">
                  <span className="hero-stat-val">{s.value}</span>
                  <span className="hero-stat-lbl">{s.label}</span>
                </div>
                {i < STATS.length - 1 && (
                  <div className="hero-stat-sep" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Scroll hint */}
        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
          <span>Scroll</span>
        </div>

      </div>

      {/* ══════════════════════════════════════
          RIGHT — Full-bleed image carousel
      ══════════════════════════════════════ */}
      <div
        className="hero-right"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides — crossfade */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide${i === active ? " is-active" : ""}${i === prev ? " is-leaving" : ""}`}
            aria-hidden={i !== active}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="hero-slide-img"
              draggable={false}
            />
          </div>
        ))}

        {/* Dark gradient overlay */}
        <div className="hero-right-overlay" aria-hidden="true" />

        {/* Diagonal left edge — blends into dark panel */}
        <div className="hero-right-edge" aria-hidden="true" />

        {/* ── Live pill — top right ── */}
        <div className="hero-live-pill">
          <span className="hero-live-dot" aria-hidden="true" />
          Enrolling Now
        </div>

        {/* ── Slide tag chip — top left ── */}
        <div className="hero-slide-chip" aria-live="polite">
          {SLIDES[active].tag}
        </div>

        {/* ── Caption — bottom of image ── */}
        <div className="hero-slide-caption">
          <p className="hero-slide-cap-title">{SLIDES[active].caption}</p>
          <p className="hero-slide-cap-sub">{SLIDES[active].sub}</p>
        </div>

        {/* ── Dot indicators ── */}
        <div className="hero-dots" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
            >
              {/* Progress ring on active dot */}
              {i === active && (
                <svg className="hero-dot-ring" viewBox="0 0 28 28" aria-hidden="true">
                  <circle cx="14" cy="14" r="12"
                    fill="none"
                    stroke="rgba(204,20,20,0.25)"
                    strokeWidth="2"
                  />
                  <circle
                    className="hero-dot-ring-fill"
                    cx="14" cy="14" r="12"
                    fill="none"
                    stroke="#CC1414"
                    strokeWidth="2"
                    strokeDasharray="75.4"
                    strokeDashoffset="75.4"
                    strokeLinecap="round"
                    style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                    key={`ring-${active}`}
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* ── Slide counter ── */}
        <div className="hero-counter" aria-live="polite">
          <span className="hero-counter-cur">{String(active + 1).padStart(2, "0")}</span>
          <span className="hero-counter-sep"> / </span>
          <span className="hero-counter-tot">{String(SLIDES.length).padStart(2, "0")}</span>
        </div>

        {/* ── Experience badge — overlaps left edge ── */}
        <div className="hero-badge">
          <div className="hero-badge-icon">🏆</div>
          <div className="hero-badge-body">
            <strong>5+ Years</strong>
            <span>of Excellence</span>
          </div>
        </div>

      </div>
      {/* end hero-right */}

    </section>
  );
};

export default HeroSection;