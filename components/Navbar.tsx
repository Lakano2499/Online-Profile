"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

// Full visual order: Home → Theme icon → About → Projects → Certificates → Contact
const navBefore: NavItem[] = [
  { label: "Home", href: "#home", id: "home" }
];

const navAfter: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Certificates", href: "#certificates", id: "certificates" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Ensure Contact becomes active at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top against sticky header threshold.
      // Unlinked sections (skills, experience, education) retain their preceding linked section ('projects')
      const activationPoint = window.scrollY + 140;

      const allSections = [
        { id: "contact", linkedId: "contact" },
        { id: "certificates", linkedId: "certificates" },
        { id: "education", linkedId: "projects" },
        { id: "experience", linkedId: "projects" },
        { id: "skills", linkedId: "projects" },
        { id: "projects", linkedId: "projects" },
        { id: "about", linkedId: "about" },
        { id: "home", linkedId: "home" }
      ];

      for (const sec of allSections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= activationPoint) {
          setActiveSection(sec.linkedId);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sketch-navbar-wrap ${isScrolled ? "is-scrolled" : ""}`}>
      <nav
        className="sketch-navbar container"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#home"
          className="sketch-navbar__brand"
          onClick={() => {
            setActiveSection("home");
            closeMenu();
          }}
        >
          <span className="brand-ink">Aeron</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="sketch-navbar__links-desktop" role="menubar">
          {navBefore.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`sketch-navbar__link ${
                activeSection === item.id ? "is-active" : ""
              }`}
              onClick={() => setActiveSection(item.id)}
              role="menuitem"
            >
              {item.label}
            </a>
          ))}

          {/* Theme toggle immediately before About */}
          <div className="nav-toggle-wrap">
            <ThemeToggle />
          </div>

          {navAfter.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`sketch-navbar__link ${
                activeSection === item.id ? "is-active" : ""
              }`}
              onClick={() => setActiveSection(item.id)}
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="sketch-navbar__mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className={`hamburger-box ${isOpen ? "is-active" : ""}`}>
            <span className="hamburger-inner" />
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`sketch-navbar__mobile-drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-drawer-inner container">
          {navBefore.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-link ${
                activeSection === item.id ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Theme toggle immediately before About */}
          <div className="mobile-toggle-item">
            <span className="mobile-toggle-label">Theme</span>
            <ThemeToggle />
          </div>

          {navAfter.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-link ${
                activeSection === item.id ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
