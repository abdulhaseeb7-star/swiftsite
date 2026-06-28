"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Diamond, Headphones } from "lucide-react";

const plans = [
  {
    name: "Essential",
    tagline: "Perfect for startups and small businesses.",
    price: "$299",
    currency: "USD",
    timeline: "1–2 Weeks",
    features: [
      "Custom Website Design",
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
    ],
    popular: false,
    dark: false,
  },
  {
    name: "Growth",
    tagline: "Ideal for growing brands ready to scale.",
    price: "$599",
    currency: "USD",
    timeline: "2–3 Weeks",
    features: [
      "Custom Website Design",
      "Up to 10 Pages",
      "Responsive Design",
      "Advanced SEO Setup",
      "CMS Integration",
      "Performance Optimization",
    ],
    popular: true,
    dark: true,
  },
  {
    name: "Premium",
    tagline: "For established businesses seeking a competitive edge.",
    price: "$999",
    currency: "USD",
    timeline: "3–5 Weeks",
    features: [
      "Custom Website Design",
      "Up to 20 Pages",
      "Responsive Design",
      "Advanced SEO & Analytics",
      "CMS Integration",
      "Performance Optimization",
      "Priority Support",
    ],
    popular: false,
    dark: false,
  },
];

const sideFeatures = [
  { icon: Clock, title: "Timely Delivery", desc: "We respect your time and deadlines." },
  { icon: Diamond, title: "Premium Quality", desc: "Top-tier design and development." },
  { icon: Headphones, title: "Ongoing Support", desc: "We're here even after launch." },
];

export default function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="pricing" style={{
      backgroundColor: "#F0EDE8",
      padding: "6rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .pricing-section { padding: 6rem 4rem; }
        .pricing-layout {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          align-items: end;
        }
        .pricing-side-left { display: flex; }
        .pricing-side-right { display: flex; }
        .pricing-watermark { display: block; }
        @media (max-width: 768px) {
          .pricing-section { padding: 4rem 1.5rem !important; }
          .pricing-layout {
            grid-template-columns: 1fr;
          }
          .pricing-cards {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .pricing-side-left { display: none; }
          .pricing-side-right { display: none; }
          .pricing-watermark { display: none; }
        }
      `}</style>

      {/* SS Watermark */}
      <div className="pricing-watermark" style={{
        position: "absolute",
        top: "2rem",
        right: "3rem",
        opacity: 0.18,
        pointerEvents: "none",
      }}>
        <img
          src="/logo.png"
          alt=""
          style={{
            width: "320px",
            filter: "brightness(0) drop-shadow(8px 12px 20px rgba(0,0,0,0.35))",
          }}
        />
      </div>

      {/* Header */}
      <div style={{ maxWidth: "550px", marginBottom: "4rem" }}>
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
          Pricing Plans
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#1a1a1a",
            marginBottom: "1rem",
          }}
        >
          Flexible solutions.<br />
          Built <em style={{ fontStyle: "italic" }}>around your goals.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "0.875rem",
            color: "#777",
            lineHeight: 1.8,
          }}
        >
          Transparent pricing for high-performing websites designed to grow your brand.
        </motion.p>
      </div>

      {/* Main layout */}
      <div className="pricing-layout">

        {/* Left side quote */}
        <div className="pricing-side-left" style={{
          flexDirection: "column",
          gap: "2rem",
          alignItems: "flex-start",
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              borderLeft: "2px solid rgba(0,0,0,0.15)",
              paddingLeft: "1.25rem",
            }}
          >
            <p style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.6,
            }}>
              Great websites aren't just built. They're{" "}
              <em style={{ fontStyle: "italic" }}>crafted</em> with purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo.png"
              alt="SS"
              style={{ width: "40px", filter: "brightness(0)", opacity: 0.6 }}
            />
          </motion.div>
        </div>

        {/* Cards */}
        <div className="pricing-cards">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: hovered === i && !plan.dark
                  ? "#1a1a1a"
                  : plan.dark ? "#1a1a1a" : "#E8E4DC",
                color: hovered === i || plan.dark ? "#F0EDE8" : "#1a1a1a",
                padding: "2rem 1.75rem",
                position: "relative",
                transform: hovered === i ? "translateY(-12px)" : plan.dark ? "translateY(-8px)" : "translateY(0)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                zIndex: hovered === i ? 2 : 1,
                boxShadow: hovered === i
                  ? "0 20px 60px rgba(0,0,0,0.2)"
                  : plan.dark ? "0 8px 30px rgba(0,0,0,0.15)" : "none",
                marginBottom: "1rem",
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: "-1.5rem",
                  left: 0,
                  right: 0,
                  backgroundColor: "#1a1a1a",
                  color: "#F0EDE8",
                  textAlign: "center",
                  fontSize: "0.55rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "0.4rem",
                }}>
                  Most Popular
                </div>
              )}

              <p style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
                opacity: 0.7,
              }}>
                {plan.name}
              </p>

              <p style={{
                fontSize: "0.8rem",
                lineHeight: 1.6,
                opacity: 0.6,
                marginBottom: "1.5rem",
                minHeight: "48px",
              }}>
                {plan.tagline}
              </p>

              <div style={{
                width: "100%",
                height: "1px",
                backgroundColor: "currentColor",
                opacity: 0.15,
                marginBottom: "1.5rem",
              }} />

              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}>
                <span style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "3rem",
                  fontWeight: 300,
                  lineHeight: 1,
                }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", opacity: 0.5 }}>
                  {plan.currency}
                </span>
              </div>

              <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.78rem", opacity: 0.8 }}>
                    <span style={{ fontSize: "0.7rem" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <div style={{
                width: "100%",
                height: "1px",
                backgroundColor: "currentColor",
                opacity: 0.15,
                marginBottom: "1rem",
              }} />

              <p style={{
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.45,
                marginBottom: "1.5rem",
              }}>
                {plan.timeline}<br />
                <span style={{ opacity: 0.7 }}>Timeline</span>
              </p>

              
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1.25rem",
                  border: `1px solid ${hovered === i || plan.dark ? "rgba(240,237,232,0.3)" : "rgba(0,0,0,0.2)"}`,
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "inherit",
                  backgroundColor: hovered === i || plan.dark ? "rgba(255,255,255,0.08)" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                Get Started <span>↗</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right side features */}
        <div className="pricing-side-right" style={{
          flexDirection: "column",
          gap: "2rem",
        }}>
          {sideFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
            >
              <feature.icon size={18} color="#1a1a1a" strokeWidth={1.5} />
              <p style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#1a1a1a",
                marginTop: "0.5rem",
              }}>
                {feature.title}
              </p>
              <p style={{
                fontSize: "0.75rem",
                color: "#888",
                lineHeight: 1.6,
              }}>
                {feature.desc}
              </p>
            </motion.div>
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
          marginTop: "4rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "2.5rem",
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