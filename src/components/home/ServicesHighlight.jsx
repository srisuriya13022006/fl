// src/components/home/ServicesHighlight.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./ServicesHighlight.css";
import { FaLaptopCode, FaBriefcase, FaUserTie } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Software Training",
    description:
      "Learn Java, MERN Stack, SQL, and other in-demand technologies with practical project-based training designed for real-world careers.",
    link: "/services/training",
  },
  {
    icon: <FaBriefcase />,
    title: "IT Consulting",
    description:
      "We help businesses adopt the right technologies and improve efficiency through expert IT consulting solutions tailored to your goals.",
    link: "/services/consulting",
  },
  {
    icon: <FaUserTie />,
    title: "Placement Assistance",
    description:
      "Get dedicated support including resume building, mock interviews, career guidance, and job placement preparation from day one.",
    link: "/services/placement",
  },
];

const ServicesHighlight = () => {
  return (
    <section className="services-highlight">
      <div className="services-container">

        {/* ── Section Heading ── */}
        <div className="services-heading">
          <p className="services-tag">Our Services</p>
          <h2>
            What We <span>Offer</span>
          </h2>
          <div className="services-heading-divider" />
          <p className="services-description">
            We provide industry-focused training, expert IT consulting, and
            strong placement support to help students and professionals build
            successful careers in the digital world.
          </p>
        </div>

        {/* ── Service Cards ── */}
        <div className="services-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-card-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div className="services-btn-wrapper">
          <Link to="/services" className="services-btn">
            Explore All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesHighlight;