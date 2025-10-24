"use client";

import "./Navigation.css";
import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/context";
import { availableLocales } from "@/i18n/locales";

export function Navigation() {
  const { t, locale, setLocale } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#expertise", label: t.nav.expertise },
    { href: "#services", label: t.nav.services },
    { href: "#experience", label: t.nav.experience },
    { href: "#my-works", label: t.nav.works },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#home" onClick={handleLinkClick}>
            <span className="brand-name">Slordef</span>
            <span className="brand-title">CTO & CISO</span>
          </a>
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-language-switcher">
          {availableLocales.map((lang) => (
            <button
              key={lang}
              onClick={() => setLocale(lang)}
              className={`lang-btn ${mounted && locale === lang ? "active" : ""}`}
              aria-label={`Switch to ${lang.toUpperCase()}`}
              disabled={!mounted}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
