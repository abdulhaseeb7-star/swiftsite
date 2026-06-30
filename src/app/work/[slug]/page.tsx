import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

const projects: Record<string, {
  title: string;
  category: string[];
  description: string;
  image: string;
  link: string;
  challenge: string;
  solution: string;
  results: string[];
}> = {
  quickbite: {
    title: "QuickBite",
    category: ["Restaurant", "E-Commerce"],
    description: "Fast food ordering website with full menu, cart system with payment integration.",
    image: "/work/quickbite.jpg",
    link: "https://fastfood-website-five.vercel.app/",
    challenge: "QuickBite needed a fast, mobile-friendly ordering system that could handle their full menu, cart management, and seamless checkout — all without the complexity of a heavy e-commerce platform.",
    solution: "We built a custom React-based ordering experience with real-time cart updates, an intuitive menu browsing system, and integrated payment processing — optimized for speed and conversions.",
    results: ["40% faster page load times", "Streamlined checkout flow", "Fully mobile-responsive design"],
  },
  nailaura: {
    title: "NailAura",
    category: ["Business", "E-Commerce"],
    description: "Elegant nail design brand website with animations.",
    image: "/work/nailaura.jpg",
    link: "https://nailaura-pk.vercel.app/",
    challenge: "NailAura wanted a brand presence that matched the elegance of their press-on nail products, with smooth animations and a premium feel to stand out in a crowded market.",
    solution: "We designed a four-page brand experience with refined typography, subtle animations, and a cohesive visual identity that elevates the product line.",
    results: ["Premium brand positioning", "Increased customer engagement", "Cohesive visual identity across pages"],
  },
  pafi: {
    title: "PAFI",
    category: ["Bot", "Business"],
    description: "AI-powered customer support bot for restaurants.",
    image: "/work/PAFI.jpeg",
    link: "https://paf-iast-bot.vercel.app/",
    challenge: "PAF-IAST needed an AI assistant capable of handling student queries instantly, pulling accurate information from institutional data without requiring constant human support.",
    solution: "We built a full-stack chatbot using FastAPI, LangChain, and FAISS for intelligent retrieval, paired with a clean React frontend for natural conversations.",
    results: ["24/7 automated query handling", "Accurate context-aware responses", "Reduced support team workload"],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) return notFound();

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
            {project.category.join(" / ")}
          </p>

          <h1 style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "1.5rem",
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: "1rem",
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "3rem",
            maxWidth: "600px",
          }}>
            {project.description}
          </p>

          <div style={{
            width: "100%",
            height: "400px",
            backgroundImage: `url('${project.image}')`,
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
                marginBottom: "1rem",
              }}>
                The Challenge
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.8 }}>
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.5rem",
                color: "#1a1a1a",
                marginBottom: "1rem",
              }}>
                The Solution
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.8 }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.5rem",
              color: "#1a1a1a",
              marginBottom: "1.25rem",
            }}>
              Results
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {project.results.map((r) => (
                <div key={r} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: "#1a1a1a" }}>✓</span>
                  <span style={{ fontSize: "0.9rem", color: "#444" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
            }}
          >
            Visit Live Site ↗
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}