// src/pages/Contact.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState({});
  const qrImage = "/images/company-brochure-qr.png";

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

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
      if (!formRef.current) {
        setSendError("Unable to submit form right now. Please try again later.");
        return;
      }

      if (SERVICE_ID === "YOUR_SERVICE_ID" || TEMPLATE_ID === "YOUR_TEMPLATE_ID" || PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
        setSendError("Email service is not configured. Please set your EmailJS keys.");
        return;
      }

      setSending(true);
      setSendError("");

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setSubmitted(true);
          setSending(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        })
        .catch((error) => {
          console.error("Email send failed", error);
          setSendError("We could not send your message at this time. Please try again later.");
          setSending(false);
        });
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
                      <a href="tel:+919443692667">+91 9443692667</a>
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
                  <>
                    <div className="contact-success-message">
                      ✓ Thank you! Your message has been received. We'll be in touch soon!
                    </div>
                    <div className="contact-qr-panel">
                      <img
                        src={qrImage}
                        alt="Scan to view company brochure details"
                        className="contact-qr-image"
                      />
                      <p className="contact-qr-caption">
                        Scan this QR code to access our company brochure and full contact details in a single image.
                      </p>
                    </div>
                  </>
                )}

                {sendError && (
                  <div className="contact-error-message">
                    {sendError}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
                  <button type="submit" className="submit-btn" disabled={sending}>
                    {sending ? "Sending..." : "Book Free Demo Session"}
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
