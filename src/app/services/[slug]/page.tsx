import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/sections/Footer";

const services: Record<string, {
  title: string;
  tagline: string;
  description: string;
  process: string[];
  deliverables: string[];
  image: string;
}> = {
  "website-development": {
    title: "Website Development",
    tagline: "Custom websites built to convert.",
    description: "We build stunning, fast, and fully custom websites that represent your brand and turn visitors into loyal customers. Every site is hand-coded for performance, designed with your goals in mind, and built to scale as your business grows.",
    process: [
      "Discovery call to understand your brand and goals",
      "Custom design tailored to your business",
      "Development using modern, fast frameworks",
      "Testing across all devices and browsers",
      "Launch and post-launch support",
    ],
    deliverables: ["Fully responsive website", "SEO-optimized structure", "Fast loading speeds", "Source code ownership"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  "bot-development": {
    title: "Website Bot Development",
    tagline: "Smart AI assistants that never sleep.",
    description: "We build intelligent chatbots powered by AI that handle customer enquiries, bookings, and support around the clock — reducing your workload while improving response times for your customers.",
    process: [
      "Map out common customer questions and flows",
      "Train the bot on your business knowledge",
      "Integrate with your website or platform",
      "Test conversation flows extensively",
      "Deploy and monitor performance",
    ],
    deliverables: ["Custom-trained AI chatbot", "24/7 automated responses", "Seamless website integration", "Ongoing optimization"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  },
  "e-commerce": {
    title: "E-Commerce Store",
    tagline: "Online stores built to sell.",
    description: "We design and build powerful e-commerce stores with smooth checkout experiences, intuitive product management, and secure payment integration — everything you need to start selling online.",
    process: [
      "Product catalog and store structure planning",
      "Custom storefront design",
      "Payment gateway integration",
      "Inventory and order management setup",
      "Launch and sales optimization",
    ],
    deliverables: ["Full e-commerce platform", "Secure payment processing", "Product management system", "Mobile-optimized shopping experience"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  "seo-performance": {
    title: "SEO & Performance",
    tagline: "Get found before your competitors.",
    description: "We optimize your website for speed, search rankings, and visibility — making sure your business shows up when potential customers are searching for what you offer.",
    process: [
      "Technical SEO audit of your current site",
      "Keyword research for your industry",
      "On-page optimization and content structure",
      "Speed and performance improvements",
      "Ongoing monitoring and reporting",
    ],
    deliverables: ["Improved search rankings", "Faster page load times", "Optimized meta content", "Monthly performance reports"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    tagline: "We don't disappear after launch.",
    description: "Your website needs ongoing care to stay secure, fast, and up to date. We provide continuous maintenance, updates, and support so you never have to worry about technical issues.",
    process: [
      "Regular security and software updates",
      "Performance monitoring",
      "Content updates as needed",
      "Bug fixes and troubleshooting",
      "Priority support response",
    ],
    deliverables: ["Monthly maintenance checks", "Security patches", "Priority issue resolution", "Direct support access"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];
  if (!service) return notFound();

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F0EDE8", minHeight: "100vh", paddingTop: "8rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>

          <p style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1rem",
          }}>
            Our Services
          </p>

          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "1rem",
          }}>
            {service.title}
          </h1>

          <p style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.5rem",
            fontStyle: "italic",
            color: "#666",
            marginBottom: "2rem",
          }}>
            {service.tagline}
          </p>

          <p style={{
            fontSize: "1rem",
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "3rem",
            maxWidth: "650px",
          }}>
            {service.description}
          </p>

          <div style={{
            width: "100%",
            height: "350px",
            backgroundImage: `url('${service.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: "4rem",
            borderRadius: "4px",
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
            <div>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.5rem",
                color: "#1a1a1a",
                marginBottom: "1.25rem",
              }}>
                Our Process
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {service.process.map((step, i) => (
                  <div key={step} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.1rem",
                      color: "rgba(0,0,0,0.25)",
                      flexShrink: 0,
                    }}>
                      0{i + 1}
                    </span>
                    <span style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6, paddingTop: "0.15rem" }}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.5rem",
                color: "#1a1a1a",
                marginBottom: "1.25rem",
              }}>
                What You Get
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {service.deliverables.map((d) => (
                  <div key={d} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "#1a1a1a" }}>✓</span>
                    <span style={{ fontSize: "0.875rem", color: "#444" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
            <Link href="/#contact" style={{
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
              }}
            >
              Get Started ↗
            </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}