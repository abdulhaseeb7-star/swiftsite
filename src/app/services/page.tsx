"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Website Development",
    description: "Stunning, fast, and fully custom websites built to represent your brand and turn visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
  },
  {
    number: "02",
    icon: "⊡",
    title: "Website Bot Development",
    description: "Smart AI-powered chatbots that handle enquiries, bookings, and customer support — 24/7, without lifting a finger.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80",
  },
  {
    number: "03",
    icon: "🛒",
    title: "E-Commerce Store",
    description: "Powerful online stores with smooth checkout experiences, product management, and payment integration built to sell.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  },
  {
    number: "04",
    icon: "↗",
    title: "SEO & Performance",
    description: "Get found on Google before your competitors. We optimize your site for speed, ranking, and maximum visibility.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    number: "05",
    icon: "✎",
    title: "Maintenance & Support",
    description: "We don't disappear after launch. Ongoing updates, security patches, and improvements whenever you need them.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      backgroundColor: "#F0EDE8",
      padding: "6rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        .services-section {
          padding: 6rem 4rem;
        }
        .services-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(0,0,0,0.08);
        }
        .services-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1px solid rgba(0,0,0,0.08);
          border-top: none;
          max-width: 66.66%;
          margin: 0 auto;
        }
        .services-watermark {
          display: block;
        }
        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 1.5rem !important;
          }
          .services-grid-3 {
            grid-template-columns: 1fr;
          }
          .services-grid-2 {
            grid-template-columns: 1fr;
            max-width: 100%;
            border-top: 1px solid rgba(0,0,0,0.08);
          }
          .services-watermark {
            display: none;
          }
        }
      `}</style>

      {/* SS Watermark top right */}
      <div className="services-watermark" style={{
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
      <div style={{ maxWidth: "650px", marginBottom: "4rem" }}>
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
          Our Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#1a1a1a",
            marginBottom: "1.25rem",
          }}
        >
          Thoughtful <em style={{ fontStyle: "italic" }}>Design.</em><br />
          Powerful <em style={{ fontStyle: "italic" }}>Results.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "0.875rem",
            color: "#666",
            lineHeight: 1.8,
            maxWidth: "480px",
          }}
        >
          We create high-performing websites tailored to your brand, built with precision and purpose.
        </motion.p>
      </div>

      {/* Cards — first row: 3 */}
      <div className="services-grid-3">
        {services.slice(0, 3).map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginTop: "-1.25rem" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#F0EDE8",
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                color: "#555",
              }}>
                {service.icon}
              </div>
            </div>

            <div style={{ padding: "1.5rem 1.75rem 2rem" }}>
              <div style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "rgba(0,0,0,0.15)",
                marginBottom: "0.5rem",
              }}>
                {service.number}
              </div>
              <div style={{ width: "24px", height: "1px", backgroundColor: "#1a1a1a", marginBottom: "1rem" }} />
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "0.75rem",
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: "0.8rem",
                color: "#777",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}>
                {service.description}
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
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
              >
                Learn More ↗
              </a>
            </div>

            <div style={{
              height: "200px",
              backgroundImage: `url('${service.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "auto",
            }} />
          </motion.div>
        ))}
      </div>

      {/* Cards — second row: 2 */}
      <div className="services-grid-2">
        {services.slice(3).map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              borderRight: i < 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginTop: "-1.25rem" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#F0EDE8",
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                color: "#555",
              }}>
                {service.icon}
              </div>
            </div>

            <div style={{ padding: "1.5rem 1.75rem 2rem" }}>
              <div style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "rgba(0,0,0,0.15)",
                marginBottom: "0.5rem",
              }}>
                {service.number}
              </div>
              <div style={{ width: "24px", height: "1px", backgroundColor: "#1a1a1a", marginBottom: "1rem" }} />
              <h3 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.4rem",
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: "0.75rem",
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: "0.8rem",
                color: "#777",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}>
                {service.description}
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
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                }}
              >
                Learn More ↗
              </a>
            </div>

            <div style={{
              height: "200px",
              backgroundImage: `url('${service.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "auto",
            }} />
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
          marginTop: "3rem",
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