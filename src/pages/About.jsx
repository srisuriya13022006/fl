// src/pages/About.jsx

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./About.css";
import aboutImage from "../assets/images/about.jpg";

const trainingPoints = [
  {
    icon: "⚙️",
    title: "Hands-on Practical Learning",
    desc: "Real tools, real environments — not just slides.",
  },
  {
    icon: "🚀",
    title: "Live Project Implementation",
    desc: "Build portfolio-ready projects alongside mentors.",
  },
  {
    icon: "📄",
    title: "Resume Building & Mock Interviews",
    desc: "Walk into interviews prepared and confident.",
  },
  {
    icon: "🎯",
    title: "Personalized Mentoring & Career Guidance",
    desc: "One-on-one support tailored to your growth path.",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "30+", label: "Industry Projects" },
  { value: "10+", label: "Expert Mentors" },
];

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* ── Hero Banner ── */}
        <section className="about-hero">
          <div className="about-hero__glow" aria-hidden="true" />
          <div className="about-hero__content">
            <span className="label-caps">About Us</span>
            <h1 className="about-hero__heading">
              About <span className="accent">Fortune Tech</span> Solutions
            </h1>
            <p className="about-hero__sub">
              Empowering individuals with practical, industry-focused skills
              for career success and professional growth.
            </p>
          </div>
          <div className="about-hero__scroll-hint" aria-hidden="true">
            <span />
          </div>
        </section>

        {/* ── Company Intro ── */}
        <section className="about-intro section">
          <div className="about-intro__container">

            <div className="about-intro__image-wrap">
              <img
                src={aboutImage}
                alt="Fortune Tech Solutions team at work"
                className="about-intro__image"
              />
              <div className="about-intro__image-badge">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>

            <div className="about-intro__body">
              <span className="label-caps">Who We Are</span>
              <div className="divider-red" />
              <h2 className="about-intro__heading">
                Building <span className="accent">Future-Ready</span>{" "}
                Professionals
              </h2>

              <p>
                Fortune Tech Solutions was founded with a vision to empower
                students and professionals through practical, industry-focused
                training and expert IT consulting services.
              </p>
              <p>
                We bridge the gap between academic learning and real-world
                industry requirements — combining strong theoretical knowledge
                with hands-on project experience.
              </p>
              <p>
                Our mission is to help learners become job-ready from day one
                and support businesses with the right technology solutions for
                sustainable growth.
              </p>

              <div className="about-intro__cta-row">
                <Link to="/courses" className="btn-primary">
                  View Courses
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <div className="about-stats">
          {stats.map((s) => (
            <div className="stat-block about-stats__item" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Mission & Vision ── */}
        <section className="about-mv section section-alt">
          <div className="about-mv__container">
            <span className="label-ruled">Our Foundation</span>
            <h2 className="section-title" style={{ marginTop: "var(--space-6)" }}>
              Mission &amp; <span>Vision</span>
            </h2>
            <p className="section-subtitle">
              Two pillars that shape every course, every mentor interaction,
              and every career milestone we celebrate.
            </p>

            <div className="about-mv__grid">
              <div className="about-mv__card card card-accent">
                <div className="about-mv__card-icon" aria-hidden="true">🎯</div>
                <h3 className="about-mv__card-title">Our Mission</h3>
                <p>
                  To deliver practical, career-focused training and consulting
                  services that help individuals and organizations grow with
                  confidence in the digital era.
                </p>
              </div>

              <div className="about-mv__card card card-accent">
                <div className="about-mv__card-icon" aria-hidden="true">🔭</div>
                <h3 className="about-mv__card-title">Our Vision</h3>
                <p>
                  To create future-ready professionals equipped with the right
                  skills, mindset, and opportunities to succeed in today's
                  competitive technology landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Our Training Works ── */}
        <section className="about-training section">
          <div className="about-training__container">
            <div className="about-training__header">
              <span className="label-caps">Why Our Training Works</span>
              <div className="divider-red" />
              <h2>
                Learning <span className="accent">Beyond</span> Theory
              </h2>
              <p className="section-subtitle" style={{ margin: "var(--space-4) 0 0" }}>
                Our curriculum is built around outcomes — not just content.
              </p>
            </div>

            <div className="about-training__grid">
              {trainingPoints.map((point, i) => (
                <div className="about-training__card card" key={i}>
                  <div className="about-training__icon" aria-hidden="true">
                    {point.icon}
                  </div>
                  <h4 className="about-training__card-title">{point.title}</h4>
                  <p className="about-training__card-desc">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="about-cta section-dark">
          <div className="about-cta__glow" aria-hidden="true" />
          <div className="about-cta__container">
            <span className="label-caps" style={{ color: "var(--ftl-silver-light)" }}>
              Take the Next Step
            </span>
            <h2 className="about-cta__heading">
              Ready to Build <span className="accent">Your Career?</span>
            </h2>
            <p className="about-cta__sub">
              Join Fortune Tech Solutions and take the next step toward your
              professional success with expert guidance and industry-ready
              training.
            </p>
            <div className="about-cta__buttons">
              <Link to="/courses" className="btn-primary">
                Explore Courses
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ borderColor: "#fff", color: "#fff" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;