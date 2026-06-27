"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import Pricing from "@/sections/Pricing";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}