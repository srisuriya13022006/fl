// src/components/layout/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo/company-logo.png";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Fortune Tech Solutions Logo" />
          </div>

          <p className="footer-description">
            Fortune Tech Solutions is dedicated to empowering students and
            professionals through industry-focused training, IT consulting,
            and career transformation programs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>

          <p>📍 Fortune Tech Solutions</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉ info@fortunetechsolutions.com</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>
          © 2026 Fortune Tech Solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;