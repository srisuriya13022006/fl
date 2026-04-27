// src/pages/Services.jsx

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Services.css";
import { FaLaptopCode, FaBriefcase, FaUserTie } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "IT Consulting",
    description:
      "We provide expert IT consulting services to help businesses adopt the right technologies and improve efficiency.",
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Training",
    description:
      "Customized training programs for companies to upskill their workforce.",
  },
  {
    icon: <FaUserTie />,
    title: "Placement Support",
    description:
      "Dedicated support to help students secure jobs in top companies.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      <main className="services-page">
        {/* ── Hero Banner ── */}
        <section className="services-hero">
          <div className="services-hero__glow" aria-hidden="true" />
          <div className="services-hero__content">
            <span className="label-caps">Our Services</span>
            <h1 className="services-hero__heading">
              What We <span>Offer</span>
            </h1>
            <p className="services-hero__sub">
              Comprehensive solutions to drive your success
            </p>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-card__icon">{service.icon}</div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">
                    {service.description}
                  </p>
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

export default Services;
