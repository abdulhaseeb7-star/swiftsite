"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#F0EDE8",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          min-height: 100vh;
        }
        .hero-right {
          display: block;
        }
        .hero-center {
          display: flex;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-right {
            display: none;
          }
          .hero-center {
            display: none;
          }
        }
      `}</style>

      <div className="hero-grid">
        {/* Left — Text */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 3rem 4rem 4rem",
        }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: "2rem",
            }}
          >
            Welcome to Swift Sites
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#1a1a1a",
              marginBottom: "1.5rem",
            }}
          >
            Websites<br />
            Built <em style={{ fontStyle: "italic" }}>Fast.</em><br />
            Built <em style={{ fontStyle: "italic" }}>Right.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "0.875rem",
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "280px",
            }}
          >
            We design and build high-performing websites that elevate brands and drive real results.
          </motion.p>

          <motion.a
            href="#work"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            whileHover={{ backgroundColor: "#333" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.75rem",
              backgroundColor: "#1a1a1a",
              color: "#F0EDE8",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            Explore Our Work
            <span style={{ fontSize: "1rem" }}>↗</span>
          </motion.a>
        </div>

        {/* Center — Logo */}
        <div className="hero-center" style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "6rem 0",
        }}>
          <motion.img
            src="/logo.png"
            alt="Swift Sites"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{
              width: "100%",
              maxWidth: "320px",
              filter: "brightness(0)",
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: "flex", gap: "3rem", marginTop: "2rem" }}
          >
            {["Built Fast", "Built Right"].map((t) => (
              <span key={t} style={{
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#999",
              }}>{t}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              position: "absolute",
              bottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: "1.2rem", color: "#999" }}
            >
              ↓
            </motion.span>
            <span style={{
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#aaa",
            }}>
              Scroll to Discover
            </span>
          </motion.div>
        </div>

        {/* Right — Interior photo */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ position: "relative" }}
        >
          <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('/interior.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #F0EDE8 0%, transparent 35%)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #F0EDE8 0%, transparent 20%)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #F0EDE8 0%, transparent 20%)",
          }} />
        </motion.div>
      </div>
    </section>
  );
}