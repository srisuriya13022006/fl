// src/components/layout/Navbar.jsx

import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/company-logo.png";

const NAV_LINKS = [
  { to: "/",            label: "Home"         },
  { to: "/about",       label: "About"        },
  { to: "/courses",     label: "Courses"      },
  { to: "/services",    label: "Services"     },
  { to: "/testimonials",label: "Testimonials" },
  { to: "/contact",     label: "Contact"      },
];

const Navbar = () => {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  /* ── Scroll detection — adds "scrolled" class ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Prevent body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Close on Escape key ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu  = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container">

        {/* ── Logo ── */}
        <Link to="/" className="navbar-logo" onClick={closeMenu} aria-label="Fortune Tech Labs — Home">
          <img src={logo} alt="Fortune Tech Labs Logo" />
        </Link>

        {/* ── Hamburger Toggle ── */}
        <div
          className={`menu-icon${menuOpen ? " open" : ""}`}
          onClick={toggleMenu}
          role="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {/* ── Nav Links ── */}
        <ul
          className={`nav-menu${menuOpen ? " active" : ""}`}
          role="menubar"
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to} role="none">
              <NavLink
                to={to}
                end={to === "/"}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
                role="menuitem"
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* ── CTA Button ── */}
          <li role="none">
            <Link
              to="/contact"
              className="consult-btn"
              onClick={closeMenu}
              role="menuitem"
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