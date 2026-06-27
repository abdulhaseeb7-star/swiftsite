"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "none",
        padding: "0 2.5rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <motion.a href="#" whileHover={{ scale: 1.03 }}>
        <img
          src="/logo.png"
          alt="SwiftSite"
          style={{ height: "36px", width: "auto", filter: "brightness(0)" }}
        />
      </motion.a>

      {/* Desktop Links */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: "1px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#1a1a1a";
                e.currentTarget.style.borderBottomColor = "#1a1a1a";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#555";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* CTA */}
      {!isMobile && (
        <motion.a
          href="#contact"
          whileHover={{ backgroundColor: "#333" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1.25rem",
            backgroundColor: "#1a1a1a",
            color: "#F0EDE8",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Start a Project ↗
        </motion.a>
      )}

      {/* Mobile toggle */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1a1a" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            right: 0,
            backgroundColor: "#F0EDE8",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              backgroundColor: "#1a1a1a",
              color: "#F0EDE8",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            Start a Project ↗
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}