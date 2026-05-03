// src/components/layout/Navbar.jsx

import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/company-logo.png";

const NAV_LINKS = [
  { to: "/",             label: "Home"         },
  { to: "/about",        label: "About"        },
  { to: "/courses",      label: "Courses"      },
  { to: "/services",     label: "Services"     },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/compiler",     label: "Compiler"     },
  { to: "/contact",      label: "Contact"      },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll detection ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close on Escape ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleMenu = () => setMenuOpen((p) => !p);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Red top accent line */}
      <div className="navbar__accent-line" aria-hidden="true" />

      <div className="navbar__container">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
          aria-label="Fortune Tech Labs — Home"
        >
          <img src={logo} alt="Fortune Tech Labs" />
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="navbar__links" role="menubar" aria-label="Site navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to} role="none">
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
                role="menuitem"
              >
                {label}
                <span className="navbar__link-bar" aria-hidden="true" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA + Hamburger ── */}
        <div className="navbar__right">
          <Link
            to="/contact"
            className="navbar__cta"
            onClick={closeMenu}
          >
            <span className="navbar__cta-shimmer" aria-hidden="true" />
            Book Consultation
          </Link>

          <button
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="navbar__bar" />
            <span className="navbar__bar" />
            <span className="navbar__bar" />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links" role="menu">
          {NAV_LINKS.map(({ to, label }, i) => (
            <li
              key={to}
              role="none"
              className="navbar__mobile-item"
              style={{ "--i": i }}
            >
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
                }
                role="menuitem"
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* Mobile CTA */}
          <li
            className="navbar__mobile-item navbar__mobile-cta-wrap"
            style={{ "--i": NAV_LINKS.length }}
            role="none"
          >
            <Link
              to="/contact"
              className="navbar__cta navbar__cta--mobile"
              onClick={closeMenu}
            >
              Book Free Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;