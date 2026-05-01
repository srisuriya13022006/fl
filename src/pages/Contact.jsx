// src/pages/Contact.jsx

import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /* ── Validate form inputs ── */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  /* ── Handle input change ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* ── Handle form submission ── */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      /* Reset success message after 3 seconds */
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* ── Hero Banner ── */}
        <section className="contact-hero">
          <div className="contact-hero__glow" aria-hidden="true" />
          <div className="contact-hero__content">
            <span className="label-caps">Contact Us</span>
            <h1 className="contact-hero__heading">
              Get in <span>Touch</span>
            </h1>
            <p className="contact-hero__sub">
              Let's discuss your learning or business goals
            </p>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-wrapper">
              {/* ── Contact Info ── */}
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p className="contact-info__subtitle">
                  Reach out to us for any inquiries or to book a free demo session
                </p>

                {/* Address */}
                <div className="contact-item">
                  <div className="contact-item__icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-item__content">
                    <h3>Address</h3>
                    <p>
                      Fortune Tech Labs<br />
                      No: 3, Balaji Nagar<br />
                      near Parasakthi Nagar<br />
                      Ganapathy, Coimbatore - 641006
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-item__icon">
                    <FaPhone />
                  </div>
                  <div className="contact-item__content">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+919843329804">+91 98433 29804</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-item">
                  <div className="contact-item__icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-item__content">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:info@fortunetechlabs.in">
                        info@fortunetechlabs.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Contact Form ── */}
              <div className="contact-form-wrapper">
                <h2>Send us a Message</h2>

                {submitted && (
                  <div className="contact-success-message">
                    ✓ Thank you! Your message has been received. We'll be in touch soon!
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-group form-group--full">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows="5"
                      className={errors.message ? "error" : ""}
                    />
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="submit-btn">
                    Book Free Demo Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
