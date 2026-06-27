"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Swift Sites transformed our vision into a beautiful, high-performing website that truly represents our brand. The process was smooth from start to finish.",
    name: "Jessica Miller",
    role: "Founder, Luxora",
    avatar: null,
  },
  {
    quote: "The team at Swift Sites is incredibly talented and responsive. Our new site not only looks amazing but has also significantly improved our conversions.",
    name: "David Anderson",
    role: "Marketing Director, Northline",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote: "Professional, creative, and detail-oriented. They delivered a website that exceeded our expectations and gave our brand the online presence it deserves.",
    name: "Amelia Rogers",
    role: "Co-Founder, Aurora Studio",
    avatar: null,
  },
];

const clients = ["QuickBite", "NailAura", "GrillHouse", "BloomClinic", "SwiftStore", "ChatBot Pro"];

export default function Testimonials() {
  const [active, setActive] = useState(1);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="testimonials" style={{
      backgroundColor: "#F0EDE8",
      padding: "6rem 0 0 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Top area */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "0 4rem",
        marginBottom: "4rem",
        gap: "2rem",
      }}>
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative", paddingLeft: "1.5rem" }}
        >
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.12)",
          }} />
          <div style={{
            position: "absolute",
            left: "-3px",
            top: 0,
            width: "7px",
            height: "7px",
            borderTop: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            transform: "rotate(-45deg)",
          }} />
          <div style={{
            position: "absolute",
            left: "-3px",
            bottom: 0,
            width: "7px",
            height: "7px",
            borderBottom: "1px solid rgba(0,0,0,0.3)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            transform: "rotate(45deg)",
          }} />

          <p style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1.25rem",
          }}>
            What Clients Say
          </p>

          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1a1a1a",
            marginBottom: "1.25rem",
          }}>
            Trusted by brands.<br />
            <em style={{ fontStyle: "italic" }}>Chosen for results.</em>
          </h2>

          <p style={{
            fontSize: "0.825rem",
            color: "#777",
            lineHeight: 1.8,
            marginBottom: "2rem",
            maxWidth: "380px",
          }}>
            We build lasting partnerships through clear communication, reliable execution, and exceptional outcomes.
          </p>

          <a
            href="#contact"
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
            View All Reviews ↗
          </a>
        </motion.div>

        {/* Right SS watermark + photo */}
        <div style={{ position: "relative", minHeight: "300px" }}>
          <div style={{ opacity: 0.15, position: "absolute", right: "4rem", top: 0 }}>
            <img
              src="/logo.png"
              alt=""
              style={{
                width: "280px",
                filter: "brightness(0) drop-shadow(8px 12px 20px rgba(0,0,0,0.35))",
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "200px",
              backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to left, transparent 40%, #F0EDE8 100%)",
            }} />
          </motion.div>
        </div>
      </div>

      {/* Testimonial cards */}
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: "0 4rem",
        gap: "1.5rem",
        marginBottom: "0",
      }}>
        {/* Left arrow */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: "1rem",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.15)",
            backgroundColor: "#F0EDE8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            color: "#1a1a1a",
          }}
        >
          ←
        </button>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          width: "100%",
        }}>
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={t.name}
                onClick={() => setActive(i)}
                animate={{
                  y: isActive ? -16 : 0,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: isActive ? "#fff" : "#E8E4DC",
                  padding: "2rem",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: isActive ? "0 20px 60px rgba(0,0,0,0.1)" : "none",
                  transition: "background-color 0.3s",
                }}
              >
                {/* Avatar for active */}
                {isActive && t.avatar && (
                  <div style={{
                    position: "absolute",
                    top: "-28px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #fff",
                  }}>
                    <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} />
                  </div>
                )}

                {/* Quote mark */}
                <div style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "2rem",
                  color: "rgba(0,0,0,0.2)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  marginTop: isActive && t.avatar ? "1.5rem" : "0",
                }}>
                  &ldquo;
                </div>

                <p style={{
                  fontSize: "0.825rem",
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}>
                  {t.quote}
                </p>

                <div style={{
                  width: "24px",
                  height: "1px",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  marginBottom: "1rem",
                }} />

                <p style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#1a1a1a",
                  marginBottom: "0.25rem",
                }}>
                  {t.name}
                </p>
                <p style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#999",
                }}>
                  {t.role}
                </p>

                {/* Arrow button on active */}
                {isActive && (
                  <button
                    onClick={next}
                    style={{
                      position: "absolute",
                      bottom: "1.5rem",
                      right: "1.5rem",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#1a1a1a",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    →
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: "1rem",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.15)",
            backgroundColor: "#F0EDE8",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            color: "#1a1a1a",
          }}
        >
          →
        </button>
      </div>

      {/* Trusted by */}
      <div style={{
        marginTop: "4rem",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: "2rem 4rem",
      }}>
        <p style={{
          textAlign: "center",
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: "1.5rem",
        }}>
          Trusted By
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}>
          {clients.map((client, i) => (
            <motion.p
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: i === 2 ? "#1a1a1a" : "rgba(0,0,0,0.25)",
                fontWeight: i === 2 ? 500 : 400,
              }}
            >
              {client}
            </motion.p>
          ))}
        </div>
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