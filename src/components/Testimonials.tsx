"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Mere bete ki chess mein itni improvement dekh ke dil khush ho gaya. Coach bahut patient hain aur bachcho ko exactly samajhte hain.",
    quoteEn: "My son improved so much in just 3 months. The coach is incredibly patient and understands exactly how children think.",
    author: "Priya Sharma", role: "Parent of Arjun, 9 years old", avatar: "#D4731C", initials: "PS"
  },
  {
    quote: "Humne Family Plan join kiya aur ab main bhi apni beti ke saath chess seekhti hoon. Har Saturday ka wait rehta hai!",
    quoteEn: "We joined the Family Plan and now I learn chess alongside my daughter. We both look forward to every Saturday session.",
    author: "Anita Verma", role: "Parent of Kavya, 8 years old — Family Plan", avatar: "#7C3AED", initials: "AV"
  },
  {
    quote: "Free demo book kiya tha sirf try karne ke liye — ab 4 mahine ho gaye aur mera beta tournament mein khel raha hai!",
    quoteEn: "Booked the free demo just to try — 4 months later my son is competing in tournaments. Best decision I made.",
    author: "Rajesh Mehta", role: "Parent of Rohan, 11 years old", avatar: "#0891B2", initials: "RM"
  },
  {
    quote: "Itne affordable price mein FIDE coach milna amazing hai. Pehle soch raha tha expensive hoga, but yeh toh superb value hai.",
    quoteEn: "Getting a FIDE-rated coach at this price is unbelievable value. I was expecting it to be expensive — pleasantly surprised!",
    author: "Deepak Nair", role: "Parent of Aditya, 10 years old", avatar: "#059669", initials: "DN"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [showHindi, setShowHindi] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section style={{
      padding: "6rem 0",
      color: "var(--paper-white)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/testimonials_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0
      }} />
      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(5, 8, 25, 0.88)",
        zIndex: 1
      }} />
      {/* Gold line top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(237,190,82,0.5), transparent)",
        zIndex: 2
      }} />

      <div style={{
        maxWidth: "var(--spacing-container-max)", margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)", position: "relative", zIndex: 10
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            display: "inline-block", padding: "0.25rem 0.9rem", marginBottom: "1rem",
            border: "1px solid rgba(237,190,82,0.3)", borderRadius: "999px",
            fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--grandmaster-gold)"
          }}>Parent Stories</span>
          <h2 style={{
            fontFamily: "var(--font-inter)", fontSize: "36px", fontWeight: 700,
            color: "var(--paper-white)", marginBottom: "0.75rem", letterSpacing: "-0.02em"
          }}>Real Families. Real Results.</h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "16px",
            color: "rgba(255,255,255,0.5)", maxWidth: "34rem", margin: "0 auto"
          }}>From across India — parents who took a chance on a free demo.</p>
        </div>

        {/* Carousel */}
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--radius-xl)", padding: "2.5rem",
                textAlign: "center", backdropFilter: "blur(12px)"
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: "1.25rem" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "var(--grandmaster-gold)", fontSize: "20px" }}>{s}</span>
                ))}
              </div>

              {/* Toggle Hindi/English */}
              <div style={{ marginBottom: "1rem" }}>
                <button
                  onClick={() => setShowHindi(p => !p)}
                  style={{
                    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "999px", padding: "0.25rem 0.75rem",
                    fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 600,
                    color: "rgba(255,255,255,0.45)", cursor: "pointer", letterSpacing: "0.05em"
                  }}
                >
                  {showHindi ? "Read in English" : "हिंदी में पढ़ें"}
                </button>
              </div>

              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "19px", lineHeight: 1.65,
                color: "rgba(255,255,255,0.92)", fontStyle: "italic",
                marginBottom: "2rem", letterSpacing: "-0.01em"
              }}>
                &ldquo;{showHindi ? t.quote : t.quoteEn}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  backgroundColor: t.avatar,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "16px", color: "white",
                  boxShadow: `0 0 0 3px rgba(255,255,255,0.1)`
                }}>{t.initials}</div>
                <div style={{ textAlign: "left" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "16px", color: "white" }}>{t.author}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.75rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px", borderRadius: "999px",
                  backgroundColor: i === active ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.2)",
                  border: "none", cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <motion.a
            href="/enrollment"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "var(--grandmaster-gold)", color: "var(--ink-black)",
              padding: "1rem 2.5rem", borderRadius: "var(--radius-lg)",
              fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 800,
              letterSpacing: "0.05em", textDecoration: "none", textTransform: "uppercase"
            }}
          >
            Join These Families — Book Free Demo
          </motion.a>
        </div>
      </div>
    </section>
  );
}
