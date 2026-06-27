"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Globe, Check } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Projects Completed" },
  { icon: Rocket, value: "2+", label: "Years of Experience" },
  { icon: Globe, value: "30+", label: "Happy Clients" },
  { icon: Check, value: "100%", label: "Commitment to Quality" },
];

export default function About() {
  return (
    <section id="about" style={{
      backgroundColor: "#F0EDE8",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          min-height: 600px;
        }
        .about-center {
          display: block;
        }
        .about-right {
          display: block;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-center {
            display: none;
          }
          .about-right {
            display: none;
          }
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="about-grid">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: "6rem 3rem 4rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "2.5rem",
            top: "6rem",
            bottom: "4rem",
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.12)",
          }} />
          <div style={{
            position: "absolute",
            left: "calc(2.5rem - 3px)",
            top: "6rem",
            width: "7px",
            height: "7px",
            borderTop: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            transform: "rotate(-45deg)",
          }} />

          <p style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1.5rem",
          }}>
            Who We Are
          </p>

          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1a1a1a",
            marginBottom: "2rem",
          }}>
            We design and build websites that are built{" "}
            <em style={{ fontStyle: "italic" }}>fast</em> and built{" "}
            <em style={{ fontStyle: "italic" }}>right.</em>
          </h2>

          <p style={{
            fontSize: "0.825rem",
            color: "#666",
            lineHeight: 1.9,
            marginBottom: "1.25rem",
          }}>
            At Swift Sites, we combine thoughtful design with clean development to create websites that not only look exceptional but perform at their best.
          </p>

          <p style={{
            fontSize: "0.825rem",
            color: "#666",
            lineHeight: 1.9,
            marginBottom: "2.5rem",
          }}>
            We partner with businesses and brands to bring their ideas to life online — efficiently, transparently, and with purpose.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ backgroundColor: "#333" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              backgroundColor: "#1a1a1a",
              color: "#F0EDE8",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              width: "fit-content",
              transition: "background-color 0.2s",
            }}
          >
            Our Approach ↗
          </motion.a>
        </motion.div>

        {/* Center — Tall photo */}
        <motion.div
          className="about-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            position: "relative",
            padding: "3rem 1.5rem",
          }}
        >
          <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('/about.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "2px",
          }} />
          <div style={{
            position: "absolute",
            bottom: "3rem",
            left: "1.5rem",
            right: "1.5rem",
            height: "120px",
            background: "linear-gradient(to bottom, transparent, #F0EDE8)",
          }} />
          <div style={{
            position: "absolute",
            top: "3rem",
            left: "1.5rem",
            right: "1.5rem",
            height: "80px",
            background: "linear-gradient(to top, transparent, #F0EDE8)",
          }} />
        </motion.div>

        {/* Right — SS watermark + taglines */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: "6rem 4rem 4rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ opacity: 0.15, marginBottom: "3rem" }}>
            <img
              src="/logo.png"
              alt=""
              style={{
                width: "100%",
                maxWidth: "260px",
                filter: "brightness(0) drop-shadow(6px 10px 18px rgba(0,0,0,0.3))",
              }}
            />
          </div>

          {["Thoughtful Design.", "Clean Development.", "Measurable Results."].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.35)",
                marginBottom: "1.5rem",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                paddingBottom: "1.5rem",
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="stats-grid" style={{
        backgroundColor: "#E8E4DC",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
              borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
            }}
          >
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <stat.icon size={18} color="#555" strokeWidth={1.5} />
            </div>
            <div style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#1a1a1a",
              lineHeight: 1,
            }}>
              {stat.value}
            </div>
            <p style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#888",
              textAlign: "center",
            }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Built Fast | Built Right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          padding: "2.5rem 0",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Built Fast</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "1px", height: "30px", backgroundColor: "#999" }} />
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#999" }} />
        </div>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Built Right</span>
      </motion.div>

    </section>
  );
}