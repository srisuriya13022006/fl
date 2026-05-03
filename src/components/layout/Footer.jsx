// src/components/layout/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo/company-logo.png";
import { FaLinkedin, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { to: "/",             label: "Home"          },
  { to: "/about",        label: "About"         },
  { to: "/courses",      label: "Courses"       },
  { to: "/services",     label: "Services"      },
  { to: "/testimonials", label: "Testimonials"  },
  { to: "/contact",      label: "Contact"       },
  { to: "/compiler",     label: "Compiler"      },
];

const courses = [
  { to: "/courses", label: "Full Stack — MERN"           },
  { to: "/courses", label: "Java & Spring Boot"          },
  { to: "/courses", label: "SQL & Database Management"   },
  { to: "/courses", label: "DSA & Problem Solving"       },
  { to: "/courses", label: "Aptitude & Placement Prep"   },
];

const socials = [
  { icon: <FaLinkedin />,  href: "/", label: "LinkedIn"  },
  { icon: <FaInstagram />, href: "/", label: "Instagram" },
  { icon: <FaFacebookF />, href: "/", label: "Facebook"  },
  { icon: <FaYoutube />,   href: "/", label: "YouTube"   },
];

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">

      {/* ── Decorative top line ── */}
      <div className="footer__accent-line" aria-hidden="true" />

      {/* ── Red glow ── */}
      <div className="footer__glow" aria-hidden="true" />

      {/* ══════════════════════════════════
          MAIN GRID
      ══════════════════════════════════ */}
      <div className="footer__container">

        {/* Col 1 — Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link" aria-label="Fortune Tech Labs — Home">
            <img src={logo} alt="Fortune Tech Labs" className="footer__logo" />
          </Link>

          <p className="footer__tagline">
            Empowering students and professionals through industry-focused
            training, IT consulting, and career transformation programs.
          </p>

          {/* Social icons */}
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social-btn"
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* CTA pill */}
          <Link to="/contact" className="footer__cta">
            Book Free Consultation →
          </Link>
        </div>

        {/* Col 2 — Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__link-list">
            {quickLinks.map((l) => (
              <li key={l.to + l.label}>
                <Link to={l.to} className="footer__link">
                  <span className="footer__link-arrow" aria-hidden="true">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Courses */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Courses</h4>
          <ul className="footer__link-list">
            {courses.map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="footer__link">
                  <span className="footer__link-arrow" aria-hidden="true">›</span>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>

          <ul className="footer__contact-list">
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">📍</span>
              <span>Fortune Tech Labs, Coimbatore, Tamil Nadu</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">📞</span>
              <a href="tel:+919443692667" className="footer__contact-link">
                +91 9443692667
              </a>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon" aria-hidden="true">✉</span>
              <a href="mailto:info@fortunetechlabs.in" className="footer__contact-link">
                info@fortunetechlabs.in
              </a>
            </li>
          </ul>

          {/* Badge */}
          <div className="footer__trust-badge">
            <span className="footer__trust-dot" aria-hidden="true" />
            Trusted by 500+ students
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════ */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Fortune Tech Labs. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <span className="footer__bottom-sep" aria-hidden="true">·</span>
            <a href="#" className="footer__bottom-link">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;