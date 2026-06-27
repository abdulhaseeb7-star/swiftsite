"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "text" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2500);
    const t3 = setTimeout(() => onComplete(), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#F0EDE8",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo */}
          <motion.img
            src="/logo.png"
            alt="SwiftSite"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "180px",
              filter: "brightness(0)",
              marginBottom: "2rem",
            }}
          />

          {/* Tagline */}
          <AnimatePresence>
            {phase === "text" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  color: "rgba(0,0,0,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                <span style={{ width: "30px", height: "1px", backgroundColor: "rgba(0,0,0,0.2)", display: "inline-block" }} />
                Built Fast. Built Right.
                <span style={{ width: "30px", height: "1px", backgroundColor: "rgba(0,0,0,0.2)", display: "inline-block" }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading bar */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              backgroundColor: "#1a1a1a",
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}