"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@swiftsites.com" },
  { icon: Phone, label: "Phone", value: "+92 300 0000000" },
  { icon: MapPin, label: "Location", value: "Remote Worldwide" },
];

const socials = ["Instagram", "LinkedIn", "Fiverr"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  return (
    <section id="contact" style={{
      backgroundColor: "#F0EDE8",
      padding: "6rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-right {
          display: block;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-right {
            display: none;
          }
        }
      `}</style>

      <div className="contact-grid">

        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1.25rem",
          }}>
            Let&apos;s Build Something Exceptional
          </p>

          <h2 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1a1a1a",
            marginBottom: "1.25rem",
          }}>
            We&apos;d love to hear about{" "}
            <em style={{ fontStyle: "italic" }}>your project.</em>
          </h2>

          <p style={{
            fontSize: "0.825rem",
            color: "#777",
            lineHeight: 1.8,
            marginBottom: "3rem",
          }}>
            Have a project in mind or just want to say hello? Fill out the form or reach out directly.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
            {contactInfo.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <item.icon size={15} color="#555" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#aaa",
                    marginBottom: "0.2rem",
                  }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#1a1a1a" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: "32px", height: "1px", backgroundColor: "rgba(0,0,0,0.15)", marginBottom: "1.5rem" }} />

          {/* Socials */}
          <p style={{
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "0.75rem",
          }}>
            Follow Us
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontSize: "0.65rem",
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
        </motion.div>

        {/* Center — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          {[
            { key: "name", label: "Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
            { key: "company", label: "Company (Optional)", type: "text" },
          ].map((field) => (
            <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#aaa",
              }}>
                {field.label}
              </label>
              <input
                type={field.type}
                value={form[field.key as keyof typeof form]}
                onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.2)",
                  padding: "0.5rem 0",
                  fontSize: "0.875rem",
                  color: "#1a1a1a",
                  outline: "none",
                  width: "100%",
                }}
                onFocus={e => e.target.style.borderBottomColor = "#1a1a1a"}
                onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.2)"}
              />
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label style={{
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#aaa",
            }}>
              Tell Us About Your Project
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(0,0,0,0.2)",
                padding: "0.5rem 0",
                fontSize: "0.875rem",
                color: "#1a1a1a",
                outline: "none",
                resize: "none",
                width: "100%",
                fontFamily: "inherit",
              }}
              onFocus={e => e.target.style.borderBottomColor = "#1a1a1a"}
              onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.2)"}
            />
          </div>

          <motion.button
            whileHover={{ backgroundColor: "#333" }}
            whileTap={{ scale: 0.98 }}
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
              border: "none",
              cursor: "pointer",
              width: "fit-content",
              transition: "background-color 0.2s",
            }}
          >
            Send Message ↗
          </motion.button>
        </motion.div>

        {/* Right — SS watermark + photo */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ position: "relative", minHeight: "500px" }}
        >
          <div style={{ opacity: 0.15, marginBottom: "2rem" }}>
            <img
              src="/logo.png"
              alt=""
              style={{
                width: "100%",
                maxWidth: "280px",
                filter: "brightness(0) drop-shadow(8px 12px 20px rgba(0,0,0,0.35))",
              }}
            />
          </div>

          <div style={{
            position: "absolute",
            right: "-4rem",
            top: "4rem",
            bottom: "-6rem",
            width: "260px",
            backgroundImage: `url('https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to left, transparent 50%, #F0EDE8 100%)",
            }} />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, #F0EDE8 0%, transparent 20%)",
            }} />
          </div>
        </motion.div>
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
          marginTop: "5rem",
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