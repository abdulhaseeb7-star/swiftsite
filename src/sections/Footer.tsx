"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer>
      <style>{`
        .footer-cta {
          padding: 5rem 4rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2rem;
        }
        .footer-cta-right {
          display: flex;
          justify-content: center;
        }
        .footer-cta-photo {
          display: block;
        }
        .footer-grid {
          padding: 4rem;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
          gap: 2rem;
        }
        .footer-watermark {
          display: block;
        }
        .footer-built-bar {
          padding: 2rem 4rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }
        .footer-copyright {
          padding: 1.25rem 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          .footer-cta {
            padding: 4rem 1.5rem;
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-cta-right {
            justify-content: center;
          }
          .footer-cta-photo {
            display: none;
          }
          .footer-grid {
            padding: 3rem 1.5rem;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-watermark {
            display: none;
          }
          .footer-built-bar {
            padding: 2rem 1.5rem;
          }
          .footer-copyright {
            padding: 1.25rem 1.5rem;
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>

      {/* CTA Banner */}
      <div className="footer-cta" style={{
        backgroundColor: "#F0EDE8",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1.25rem",
          }}>
            Let&apos;s Build Something Exceptional
          </p>
          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1a1a1a",
          }}>
            Have a project in mind?<br />
            Let&apos;s bring <em style={{ fontStyle: "italic" }}>your vision</em> to life.
          </h2>
        </motion.div>

        {/* Center vertical line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#999" }} />
          <div style={{ width: "1px", height: "80px", backgroundColor: "rgba(0,0,0,0.15)" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#999" }} />
        </motion.div>

        {/* Right CTA */}
        <div className="footer-cta-right">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              paddingBottom: "0.5rem",
            }}
            onMouseEnter={e => e.currentTarget.style.borderBottomColor = "#1a1a1a"}
            onMouseLeave={e => e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.2)"}
          >
            Start Your Project ↗
          </motion.a>
        </div>

        {/* Right photo */}
        <div className="footer-cta-photo" style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "220px",
          backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #F0EDE8 0%, transparent 40%)",
          }} />
        </div>
      </div>

      {/* Footer grid */}
      <div className="footer-grid" style={{
        backgroundColor: "#E8E4DC",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* SS Watermark */}
        <div className="footer-watermark" style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.12,
          pointerEvents: "none",
        }}>
          <img
            src="/logo.png"
            alt=""
            style={{
              width: "180px",
              filter: "brightness(0) drop-shadow(4px 8px 16px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        {/* Brand */}
        <div>
          <img
            src="/logo.png"
            alt="SwiftSite"
            style={{ height: "60px", filter: "brightness(0)", marginBottom: "1.5rem" }}
          />
          <p style={{
            fontSize: "0.8rem",
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "2rem",
            maxWidth: "200px",
          }}>
            We design and build fast, modern websites that help brands grow with purpose and precision.
          </p>
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "0.75rem",
          }}>
            Follow Us
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {["Instagram", "LinkedIn", "Fiverr"].map((s) => (
              <a key={s} href="#" style={{
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#1a1a1a"}
                onMouseLeave={e => e.currentTarget.style.color = "#555"}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "1.5rem",
          }}>
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {["Home", "Services", "Work", "About", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#1a1a1a"}
                onMouseLeave={e => e.currentTarget.style.color = "#555"}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "1.5rem",
          }}>
            Services
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {["Web Design", "Web Development", "E-Commerce", "Bot Development", "Maintenance"].map((s) => (
              <a key={s} href="#services" style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#1a1a1a"}
                onMouseLeave={e => e.currentTarget.style.color = "#555"}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "1.5rem",
          }}>
            Information
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {["FAQs", "Process", "Pricing", "Terms & Conditions", "Privacy Policy"].map((item) => (
              <a key={item} href="#" style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#1a1a1a"}
                onMouseLeave={e => e.currentTarget.style.color = "#555"}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "1.5rem",
          }}>
            Stay Updated
          </p>
          <p style={{
            fontSize: "0.8rem",
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
          }}>
            Join our newsletter for insights, updates, and design inspiration.
          </p>
          <div style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            paddingBottom: "0.5rem",
          }}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                fontSize: "0.8rem",
                color: "#1a1a1a",
                fontFamily: "inherit",
              }}
            />
            <button
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#1a1a1a",
                border: "none",
                color: "#F0EDE8",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Built Fast | Built Right bar */}
      <div className="footer-built-bar" style={{
        backgroundColor: "#E8E4DC",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>
          Built Fast
        </span>

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}>
          <div style={{ width: "1px", height: "20px", backgroundColor: "#999" }} />
          <div style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <img src="/logo.png" alt="SS" style={{ width: "32px", filter: "brightness(0)", opacity: 0.5 }} />
          </div>
          <div style={{ width: "1px", height: "20px", backgroundColor: "#999" }} />
        </div>

        <span style={{
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#999",
          textAlign: "right",
        }}>
          Built Right
        </span>
      </div>

      {/* Copyright bar */}
      <div className="footer-copyright" style={{ backgroundColor: "#1a1a1a" }}>
        <p style={{
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}>
          © 2025 Swift Sites. All Rights Reserved.
        </p>
        <p style={{
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
        }}>
          Made With Purpose.
        </p>
      </div>

    </footer>
  );
}