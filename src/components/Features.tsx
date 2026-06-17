"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Structured Curriculum",
    description: "A phased approach from basic tactics to advanced opening prep and endgame mastery — built for kids who want to compete.",
    icon: "♟",
    color: "#4A90E2"
  },
  {
    title: "FIDE-Rated Coaches",
    description: "Learn from titled players who have walked the grandmaster path. Real insight. Real results.",
    icon: "🏆",
    color: "#EDBE52"
  },
  {
    title: "Weekly Tournaments",
    description: "Regular online arenas keep pressure real and progress measurable. Tournament experience from day one.",
    icon: "⚔️",
    color: "#50C878"
  },
  {
    title: "Progress Reports",
    description: "Detailed monthly reports show exactly where your child is improving — so parents stay informed every step.",
    icon: "📈",
    color: "#FF6B9D"
  },
  {
    title: "Small Batch Groups",
    description: "Intimate group sizes ensure every child gets personal attention and coaching, not just a seat in a lecture.",
    icon: "👥",
    color: "#A78BFA"
  },
  {
    title: "Safe Online Environment",
    description: "Private, moderated arenas on Lichess and Chess.com. No strangers, no risk — just pure chess.",
    icon: "🛡️",
    color: "#34D399"
  }
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} style={{
      padding: "6rem 0", backgroundColor: "var(--surface)", scrollMarginTop: "5rem"
    }}>
      <div style={{
        maxWidth: "var(--spacing-container-max)", margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-block", padding: "0.25rem 0.9rem", marginBottom: "1rem",
            border: "1px solid rgba(30,41,59,0.2)", borderRadius: "999px",
            fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--deep-navy)"
          }}>Why Choose Us</span>
          <h2 style={{
            fontFamily: "var(--font-inter)", fontSize: "36px", fontWeight: 700,
            color: "var(--deep-navy)", marginBottom: "1rem", letterSpacing: "-0.02em"
          }}>Everything Your Child Needs to Win</h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "17px",
            color: "var(--on-surface-variant)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.6
          }}>
            We bridge the gap between casual play and competitive mastery with a framework that actually works.
          </p>
        </motion.div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem"
        }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
              style={{
                padding: "2rem", backgroundColor: "var(--paper-white)",
                borderRadius: "var(--radius-xl)", border: "1px solid var(--slate-border)",
                cursor: "default", transition: "box-shadow 0.3s"
              }}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                backgroundColor: `${f.color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", marginBottom: "1.25rem"
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-inter)", fontSize: "18px", fontWeight: 700,
                color: "var(--deep-navy)", marginBottom: "0.6rem"
              }}>{f.title}</h3>
              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.6,
                color: "var(--on-surface-variant)"
              }}>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
