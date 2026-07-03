"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const filters = ["All", "Restaurant", "E-Commerce", "Business", "Bot"];

const projects = [
  {
    number: "01",
    title: "QuickBite",
    category: ["Restaurant","E-Commerce","Business"],
    description: "Fast food ordering website with full menu and cart system.",
    image: "/work/quickbite.jpg",
    dark: false,
    link: "/work/quickbite",
  },
  {
    number: "02",
    title: "NailAura",
    category: ["Business","E-Commerce"],
    description: "Elegant nail design brand website with animations.",
    image: "/work/nailaura.jpg",
    dark: true,
    link: "/work/nailaura",
  },

  {
    number: "03",
    title: "ChatBot Pro",
    category: ["Bot","Business"],
    description: "AI-powered customer support bot for restaurants.",
    image: "/work/chatbot-pro.jpg",
    dark: true,
    link: "/work/pafi",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="work" style={{
      backgroundColor: "#F0EDE8",
      padding: "6rem 0 0 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .work-top {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          padding: 0 4rem;
          margin-bottom: 3rem;
          gap: 2rem;
        }
        .work-center {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.12;
        }
        .work-right {
          display: block;
          position: relative;
          min-height: 320px;
        }
        .work-filter {
          padding: 0 4rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          overflow-x: auto;
        }
        .work-filter-inner {
          display: flex;
          gap: 2.5rem;
          min-width: max-content;
        }
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .work-built {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          padding: 2.5rem 0;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        @media (max-width: 768px) {
          .work-top {
            grid-template-columns: 1fr;
            padding: 0 1.5rem;
            margin-bottom: 2rem;
          }
          .work-center {
            display: none;
          }
          .work-right {
            display: none;
          }
          .work-filter {
            padding: 0 1.5rem;
          }
          .work-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Top area */}
      <div className="work-top">

        {/* Left text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: "1.25rem",
            }}
          >
            Our Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#1a1a1a",
              marginBottom: "1.25rem",
            }}
          >
            Building digital experiences that leave a{" "}
            <em style={{ fontStyle: "italic" }}>lasting impact.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "0.8rem",
              color: "#777",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "320px",
            }}
          >
            A selection of websites we&apos;ve designed and built for brands who value quality, clarity, and results.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              textDecoration: "none",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.5"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View All Projects ↗
          </motion.a>
        </div>

        {/* Center — SS Watermark */}
        <div className="work-center">
          <img
            src="/logo.png"
            alt=""
            style={{
              width: "100%",
              maxWidth: "300px",
              filter: "brightness(0) drop-shadow(4px 8px 16px rgba(0,0,0,0.3))",
            }}
          />
        </div>

        {/* Right — Interior photo */}
        <motion.div
          className="work-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('/work.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "2px",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to left, transparent 60%, #F0EDE8 100%)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #F0EDE8 0%, transparent 20%)",
          }} />
        </motion.div>
      </div>

      {/* Filter tabs */}
      <div className="work-filter">
        <div className="work-filter-inner">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: activeFilter === filter ? "#1a1a1a" : "#999",
                paddingBottom: "1rem",
                borderBottom: activeFilter === filter ? "1px solid #1a1a1a" : "1px solid transparent",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="work-grid">
        {filtered.map((project, i) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              position: "relative",
              height: "320px",
              overflow: "hidden",
              borderRight: (i % 3 !== 2) ? "1px solid rgba(0,0,0,0.08)" : "none",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              cursor: "pointer",
              backgroundColor: project.dark ? "#2a2a2a" : "#E8E4DC",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${project.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
            }} />

            <div style={{
              position: "absolute",
              inset: 0,
              background: project.dark
                ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)"
                : "linear-gradient(to top, rgba(240,237,232,0.9) 0%, rgba(240,237,232,0.2) 100%)",
            }} />

            <div style={{
              position: "absolute",
              inset: 0,
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div style={{
                fontSize: "0.75rem",
                fontFamily: "Cormorant Garamond, serif",
                color: project.dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.35)",
              }}>
                {project.number}
              </div>

              <div>
                <h3 style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: project.dark ? "#fff" : "#1a1a1a",
                  marginBottom: "0.25rem",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: project.dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)",
                  marginBottom: "1rem",
                }}>
                  {project.category.join(" / ")}
                </p>
                <a
                  href={project.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: project.dark ? "rgba(255,255,255,0.7)" : "#1a1a1a",
                    textDecoration: "none",
                  }}
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Built Fast | Built Right */}
      <div className="work-built">
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Built Fast</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "1px", height: "30px", backgroundColor: "#999" }} />
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#999" }} />
        </div>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Built Right</span>
      </div>
    </section>
  );
}