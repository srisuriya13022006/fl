// src/components/home/WhyChooseUs.jsx

import React from "react";
import { Link } from "react-router-dom";
import StatCounter from "../common/StatCounter";
import "./WhyChooseUs.css";
import {
  FaBookOpen,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBookOpen />,
    title: "Industry-Relevant Curriculum",
    description:
      "Our courses are designed based on current industry demands and real job market requirements — always up to date.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-Time Project Exposure",
    description:
      "Learn through live projects and hands-on implementation instead of only theory-based training.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Trainers",
    description:
      "Get mentored by experienced professionals who understand both teaching and industry expectations at depth.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Strong Placement Support",
    description:
      "Resume building, mock interviews, and career guidance help students confidently secure their dream opportunities.",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Hiring Partners" },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-container">

        {/* ── Section Heading ── */}
        <div className="why-heading">
          <p className="why-tag">Why Choose Us</p>
          <h2>
            Why Students &amp; Professionals <span>Trust Us</span>
          </h2>
          <div className="why-heading-divider" />
          <p className="why-description">
            We focus on practical learning, real-world experience, and strong
            career support to help learners become job-ready and confident in
            today's competitive IT industry.
          </p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="why-cards">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              {/* Background number watermark */}
              <span className="why-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        {/* ── Stats Row ── */}
        <div className="why-stats">
          {stats.map((stat, index) => (
            <div className="why-stat-item" key={index}>
              <StatCounter value={stat.value} label={stat.label} />
              <div className="why-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div className="why-btn-wrapper">
          <Link to="/contact" className="why-btn">
            Start Learning Today
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;