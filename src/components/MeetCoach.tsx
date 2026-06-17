"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const coachPromises = [
  { icon: "♟️", text: "FIDE-rated & tournament-experienced coaches only" },
  { icon: "🧠", text: "Teach thinking — not just moves. Strategy, psychology & pattern recognition" },
  { icon: "📊", text: "Monthly progress reports so you always know how your child is improving" },
  { icon: "❤️", text: "Patient, encouraging style designed specifically for young learners" }
];

export default function MeetCoach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coaches" ref={ref} style={{
      padding: "6rem 0",
      backgroundColor: "var(--surface-container-lowest)",
      scrollMarginTop: "5rem"
    }}>
      <div style={{
        maxWidth: "var(--spacing-container-max)",
        margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center"
        }}>

          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              border: "1px solid rgba(237,190,82,0.2)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Background glow */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "160px", height: "160px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(237,190,82,0.12) 0%, transparent 70%)",
              pointerEvents: "none"
            }} />

            <div style={{ fontSize: "48px", marginBottom: "1.25rem" }}>♟️</div>
            <h3 style={{
              fontFamily: "var(--font-inter)", fontSize: "26px", fontWeight: 800,
              color: "white", marginBottom: "0.75rem", letterSpacing: "-0.02em"
            }}>
              World-Class Coaching.<br />
              <span style={{ color: "var(--grandmaster-gold)" }}>Accessible Prices.</span>
            </h3>
            <p style={{
              fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)", marginBottom: "2rem"
            }}>
              Private chess tutors charge ₹2,000–₹5,000 per hour. We deliver the same caliber of FIDE-rated coaching in structured group sessions — so every child gets a grandmaster-level education without the grandmaster-level price tag.
            </p>

            {/* Price comparison */}
            <div style={{
              display: "flex", gap: "1rem", flexWrap: "wrap"
            }}>
              <div style={{
                flex: 1, padding: "1rem", borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(255,100,100,0.08)",
                border: "1px solid rgba(255,100,100,0.2)", textAlign: "center"
              }}>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(255,100,100,0.7)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Private Tutor</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "22px", fontWeight: 800, color: "rgba(255,100,100,0.8)", textDecoration: "line-through" }}>₹5,000+/hr</div>
              </div>
              <div style={{
                flex: 1, padding: "1rem", borderRadius: "var(--radius-lg)",
                backgroundColor: "rgba(237,190,82,0.08)",
                border: "1px solid rgba(237,190,82,0.3)", textAlign: "center"
              }}>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "var(--grandmaster-gold)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Shinigami Chess</div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "22px", fontWeight: 800, color: "var(--grandmaster-gold)" }}>₹2,999/mo</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Coach promises */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span style={{
              display: "inline-block", padding: "0.25rem 0.9rem", marginBottom: "1.25rem",
              border: "1px solid rgba(30,41,59,0.2)", borderRadius: "999px",
              fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--deep-navy)"
            }}>Our Coaches</span>

            <h2 style={{
              fontFamily: "var(--font-inter)", fontSize: "34px", fontWeight: 800,
              color: "var(--deep-navy)", marginBottom: "1rem",
              lineHeight: 1.2, letterSpacing: "-0.02em"
            }}>
              Your child deserves a real chess education
            </h2>
            <p style={{
              fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.7,
              color: "var(--on-surface-variant)", marginBottom: "2rem"
            }}>
              Every coach on our platform is FIDE-rated, tournament-tested, and trained to work with children. No generic YouTube lessons — live, structured, personalized coaching.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {coachPromises.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "1rem",
                    padding: "1rem 1.25rem",
                    backgroundColor: "var(--paper-white)",
                    border: "1px solid var(--slate-border)",
                    borderRadius: "var(--radius-lg)"
                  }}
                >
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>{p.icon}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)", fontSize: "14px", lineHeight: 1.6,
                    color: "var(--on-surface)", fontWeight: 500
                  }}>{p.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/enrollment"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                marginTop: "2rem",
                backgroundColor: "var(--deep-navy)", color: "var(--paper-white)",
                padding: "0.9rem 2rem", borderRadius: "var(--radius-lg)",
                fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700,
                letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase"
              }}
            >
              Meet Our Coaches — Book Free Demo →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
