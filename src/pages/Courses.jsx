// src/pages/Courses.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Courses.css";

const courses = [
  {
    tag: "Web Development",
    icon: "⚛️",
    title: "Full Stack Development",
    subtitle: "MERN Stack",
    description:
      "Master MongoDB, Express.js, React.js, and Node.js with real-time project development and practical implementation.",
    features: [
      "Live Projects",
      "Frontend + Backend Development",
      "Interview Preparation",
    ],
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
    features: [
      "Core Java + Advanced Java",
      "Spring Boot Projects",
      "Placement Training",
    ],
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
    features: [
      "SQL Queries & Optimization",
      "Database Design",
      "Real-Time Practice",
    ],
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
    features: [
      "Mock Interviews",
      "Resume Building",
      "Placement Guidance",
    ],
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
    features: [
      "Coding Practice",
      "Problem Solving",
      "Interview Readiness",
    ],
    badge: null,
    demoLink: "#",
  },
];

const perks = [
  { icon: "🚀", label: "Live Project Experience", desc: "Work on real client-grade projects" },
  { icon: "🎤", label: "Interview Preparation", desc: "Structured mock interview sessions" },
  { icon: "📄", label: "Resume Building Support", desc: "ATS-optimised resume guidance" },
  { icon: "🏆", label: "Placement Guidance", desc: "Direct connect to hiring partners" },
];

const Courses = () => {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <>
      <Navbar />

      <main className="courses-page">

        {/* ── Hero Banner ── */}
        <section className="courses-hero">
          <div className="courses-hero__glow" aria-hidden="true" />
          <div className="courses-hero__content">
            <span className="label-caps">Our Training Programs</span>
            <h1 className="courses-hero__heading">
              Build Skills for a{" "}
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
          </div>
        </section>

        {/* ── Course Cards ── */}
        <section className="courses-list section">
          <div className="courses-list__container">

            <div className="courses-list__header">
              <span className="label-ruled">All Courses</span>
            </div>

            <div className="courses-grid">
              {courses.map((course, index) => (
                <div className="course-card card" key={index}>

                  {/* Card top bar */}
                  <div className="course-card__top">
                    <span className="course-card__tag badge badge-red">
                      {course.tag}
                    </span>
                    {course.badge && (
                      <span className="course-card__popular badge badge-dark">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon + title */}
                  <div className="course-card__icon" aria-hidden="true">
                    {course.icon}
                  </div>

                  <h2 className="course-card__title">{course.title}</h2>
                  <p className="course-card__subtitle">{course.subtitle}</p>
                  <hr className="course-card__divider" />

                  <p className="course-card__desc">{course.description}</p>

                  {/* Features */}
                  <ul className="course-card__features">
                    {course.features.map((f, i) => (
                      <li key={i} className="course-card__feature-item">
                        <span className="course-card__check" aria-hidden="true">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={course.demoLink}
                    className="btn-primary course-card__btn"
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

        {/* ── Perks Strip ── */}
        <section className="courses-perks">
          <div className="courses-perks__inner">
            <div className="courses-perks__header">
              <span className="label-caps" style={{ color: "var(--ftl-silver-light)" }}>
                Why Our Training
              </span>
              <h2 className="courses-perks__heading">
                What You Get With <span className="accent">Every Course</span>
              </h2>
            </div>

            <div className="courses-perks__grid">
              {perks.map((p, i) => (
                <div className="courses-perks__item" key={i}>
                  <div className="courses-perks__icon" aria-hidden="true">{p.icon}</div>
                  <div>
                    <div className="courses-perks__label">{p.label}</div>
                    <div className="courses-perks__desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="courses-cta section">
          <div className="courses-cta__glow" aria-hidden="true" />
          <div className="courses-cta__container">
            <span className="label-caps" style={{ color: "var(--ftl-red-light)" }}>
              Take the Next Step
            </span>
            <h2 className="courses-cta__heading">
              Start Learning <span className="accent">Today</span>
            </h2>
            <p className="courses-cta__sub">
              Take the next step toward your dream career with practical
              training, expert mentorship, and placement-focused learning.
            </p>
            <div className="courses-cta__buttons">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/about" className="btn-secondary" style={{ borderColor: "#fff", color: "#fff" }}>
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