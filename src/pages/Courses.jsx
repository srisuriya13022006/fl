// src/pages/Courses.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StatCounter from "../components/common/StatCounter";
import specialCourseImage from "../assets/images/short-time-special-course.png";
import "./Courses.css";

/* ── Data ── */
const courses = [
  {
    tag: "Web Development",
    icon: "⚛️",
    title: "Full Stack Development",
    subtitle: "MERN Stack",
    description:
      "Master MongoDB, Express.js, React.js, and Node.js with real-time project development and practical implementation.",
    features: ["Live Projects", "Frontend + Backend", "Interview Prep"],
    badge: "Most Popular",
    demoLink: "#",
  },
  {
    tag: "Backend",
    icon: "☕",
    title: "Java & Spring Boot",
    subtitle: "Enterprise Development",
    description:
      "Learn Java programming, OOP concepts, backend development, and enterprise application building using Spring Boot.",
    features: ["Core + Advanced Java", "Spring Boot Projects", "Placement Training"],
    badge: null,
    demoLink: "#",
  },
  {
    tag: "Database",
    icon: "🗄️",
    title: "SQL & Database Management",
    subtitle: "DBMS Fundamentals",
    description:
      "Build strong database fundamentals with SQL queries, optimization, normalization, and real-world DBMS concepts.",
    features: ["SQL Queries & Optimization", "Database Design", "Real-Time Practice"],
    badge: null,
    demoLink: "#",
  },
  {
    tag: "Career",
    icon: "🎯",
    title: "Aptitude & Placement Training",
    subtitle: "Placement Readiness",
    description:
      "Prepare for placements with aptitude training, logical reasoning, communication skills, and interview practice.",
    features: ["Mock Interviews", "Resume Building", "Placement Guidance"],
    badge: "High Demand",
    demoLink: "#",
  },
  {
    tag: "Computer Science",
    icon: "🧠",
    title: "Data Structures & Algorithms",
    subtitle: "Problem Solving",
    description:
      "Strengthen problem-solving skills with DSA concepts, coding practice, and technical interview preparation.",
    features: ["Coding Practice", "Problem Solving", "Interview Readiness"],
    badge: null,
    demoLink: "#",
  },
];

const perks = [
  { icon: "🚀", label: "Live Project Experience",  desc: "Work on real client-grade projects from day one"      },
  { icon: "🎤", label: "Interview Preparation",    desc: "Structured mock rounds with real-world questions"     },
  { icon: "📄", label: "Resume Building Support",  desc: "ATS-optimised resume & LinkedIn profile review"       },
  { icon: "🏆", label: "Placement Guidance",       desc: "Direct connect to our hiring partner network"         },
];

const stats = [
  { value: "500+", label: "Students Placed"  },
  { value: "95%",  label: "Placement Rate"   },
  { value: "30+",  label: "Live Projects"    },
  { value: "10+",  label: "Expert Mentors"   },
];

/* ── Intersection Observer — adds is-visible when element enters viewport ── */
function useScrollReveal() {
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right", ".stagger-child"];
    const allEls = document.querySelectorAll(selectors.join(","));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10 }
    );

    allEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Component ── */
const Courses = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main className="courses-page">

        {/* ════════════════════════════════════
            HERO
        ════════════════════════════════════ */}
        <section className="courses-hero">
          <div className="courses-hero__blob courses-hero__blob--1" aria-hidden="true" />
          <div className="courses-hero__blob courses-hero__blob--2" aria-hidden="true" />
          <div className="courses-hero__blob courses-hero__blob--3" aria-hidden="true" />
          <div className="courses-hero__grid"                        aria-hidden="true" />
          <div className="courses-hero__glow"                        aria-hidden="true" />

          <div className="courses-hero__content">
            <span className="label-caps courses-hero__eyebrow">Our Training Programs</span>

            <h1 className="courses-hero__heading">
              Build Skills for a
              <br />
              <span className="accent">Successful IT Career</span>
            </h1>

            <p className="courses-hero__sub">
              Professional training programs designed to help students and
              professionals gain practical knowledge, confidence, and strong
              placement opportunities.
            </p>

            <div className="courses-hero__meta">
              <span className="badge badge-red">5 Programs</span>
              <span className="badge badge-silver">Placement Focused</span>
              <span className="badge badge-silver">Industry Mentors</span>
            </div>

            <div className="courses-hero__ctas">
              <Link to="/contact" className="btn-primary">Enroll Now</Link>
              <a href="#courses-grid" className="btn-ghost courses-hero__ghost">
                View Courses ↓
              </a>
            </div>
          </div>

          {/* scroll-bounce indicator */}
          <div className="courses-hero__scroll-hint" aria-hidden="true">
            <span className="courses-hero__scroll-dot" />
          </div>
        </section>

        {/* ════════════════════════════════════
            SPECIAL COURSE PROMO
        ════════════════════════════════════ */}
        <section className="courses-promo reveal-right">
          <div className="courses-promo__image">
            <img
              src={specialCourseImage}
              alt="Short time special course"
              loading="eager"
            />
          </div>
          <div className="courses-promo__content">
            <span className="label-caps courses-promo__eyebrow">Limited-Time Special</span>
            <h2 className="courses-promo__title">Short-Time Special Course</h2>
            <p className="courses-promo__text">
              Join our current short-time batch and accelerate your IT career with focused training, live projects, and placement-ready guidance.
            </p>
            <div className="courses-promo__actions">
              <Link to="/contact" className="btn-primary">Book Your Seat</Link>
              <a href="#courses-grid" className="btn-ghost">View Courses</a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            STATS STRIP
        ════════════════════════════════════ */}
        <div className="courses-stats reveal">
          {stats.map((s) => (
            <div className="courses-stats__item" key={s.label}>
              <StatCounter value={s.value} label={s.label} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════
            COURSE CARDS
        ════════════════════════════════════ */}
        <section className="courses-list section" id="courses-grid">
          <div className="courses-list__container">

            {/* Section header */}
            <div className="courses-list__header reveal">
              <span className="label-caps">Explore Programs</span>
              <div className="divider-red" style={{ margin: "var(--space-3) auto var(--space-5)" }} />
              <h2 className="section-title" style={{ marginBottom: "var(--space-3)" }}>
                All <span>Courses</span>
              </h2>
              <p className="section-subtitle">
                Every program is built around real outcomes — not just theory.
              </p>
            </div>

            {/* Grid */}
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div
                  className="course-card stagger-child"
                  key={index}
                  style={{ "--delay": `${index * 0.09}s` }}
                >
                  {/* Hover glow ring */}
                  <div className="course-card__glow-ring" aria-hidden="true" />

                  {/* Top badges */}
                  <div className="course-card__top">
                    <span className="badge badge-red course-card__tag">{course.tag}</span>
                    {course.badge && (
                      <span className="course-card__hot">
                        🔥 {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="course-card__icon" aria-hidden="true">
                    {course.icon}
                  </div>

                  {/* Text */}
                  <h2 className="course-card__title">{course.title}</h2>
                  <p className="course-card__subtitle">{course.subtitle}</p>
                  <hr className="course-card__hr" />
                  <p className="course-card__desc">{course.description}</p>

                  {/* Features */}
                  <ul className="course-card__features">
                    {course.features.map((f, i) => (
                      <li key={i} className="course-card__feature">
                        <span className="course-card__check" aria-hidden="true">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={course.demoLink}
                    className="course-card__btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▶ Watch Demo
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            PERKS DARK BAND
        ════════════════════════════════════ */}
        <section className="courses-perks">
          <div className="courses-perks__inner">

            <div className="courses-perks__header reveal-left">
              <span className="label-caps" style={{ color: "var(--ftl-red-light)" }}>
                Why Our Training
              </span>
              <div className="divider-red" style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-5)" }} />
              <h2 className="courses-perks__heading">
                What You Get With{" "}
                <span className="accent">Every Course</span>
              </h2>
              <p className="courses-perks__sub">
                More than a course — a full career launchpad.
              </p>
            </div>

            <div className="courses-perks__grid reveal-right">
              {perks.map((p, i) => (
                <div
                  className="courses-perks__item"
                  key={i}
                  style={{ "--delay": `${i * 0.08}s` }}
                >
                  <div className="courses-perks__icon">{p.icon}</div>
                  <div>
                    <p className="courses-perks__label">{p.label}</p>
                    <p className="courses-perks__desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════ */}
        <section className="courses-cta">
          <div className="courses-cta__blob courses-cta__blob--1" aria-hidden="true" />
          <div className="courses-cta__blob courses-cta__blob--2" aria-hidden="true" />
          <div className="courses-cta__glow"                       aria-hidden="true" />

          <div className="courses-cta__inner reveal">
            <span className="label-caps" style={{ color: "var(--ftl-red-light)" }}>
              Take the Next Step
            </span>
            <div className="divider-red" style={{ margin: "var(--space-3) auto var(--space-5)" }} />
            <h2 className="courses-cta__heading">
              Start Learning <span className="accent">Today</span>
            </h2>
            <p className="courses-cta__sub">
              Take the next step toward your dream career with practical training,
              expert mentorship, and placement-focused learning.
            </p>
            <div className="courses-cta__buttons">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link
                to="/about"
                className="btn-secondary courses-cta__outline"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Courses;