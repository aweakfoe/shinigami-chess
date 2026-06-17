"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "🧠",
    stat: "23%",
    title: "Boosts Academic Performance",
    desc: "Studies show chess players score 23% higher in maths and reading. The game trains logical thinking that directly transfers to classroom learning.",
    color: "#A78BFA"
  },
  {
    icon: "🎯",
    stat: "2x",
    title: "Doubles Concentration Span",
    desc: "Chess demands total focus for extended periods. Children who play regularly develop the ability to concentrate — a skill that stays with them for life.",
    color: "#EDBE52"
  },
  {
    icon: "💡",
    stat: "↑IQ",
    title: "Measurably Raises IQ",
    desc: "A Venezuelan study of 4,000 students showed significant IQ gains in just 4 months of chess training. It genuinely makes kids smarter.",
    color: "#50C878"
  },
  {
    icon: "🤝",
    stat: "100%",
    title: "Teaches Emotional Resilience",
    desc: "Every loss is a lesson. Chess teaches children how to handle defeat gracefully, analyse mistakes, and come back stronger — a life skill above all.",
    color: "#F97316"
  },
  {
    icon: "⚡",
    title: "Sharpens Memory & Pattern Recognition",
    desc: "Memorising openings and recognising tactical patterns trains working memory — the same cognitive muscle used in language, science and problem-solving.",
    color: "#4A90E2"
  },
  {
    icon: "🌟",
    title: "Builds Confidence & Self-Esteem",
    desc: "Winning a tournament, solving a puzzle, or outsmarting a friend gives children a sense of real achievement that builds lasting confidence.",
    color: "#EC4899"
  },
  {
    icon: "🧩",
    title: "Develops Critical Thinking",
    desc: "Chess is essentially applied philosophy — every move requires cause-and-effect reasoning. Children learn to think 3 steps ahead in the game and in life.",
    color: "#14B8A6"
  },
  {
    icon: "📱",
    title: "A Healthy Alternative to Screens",
    desc: "Chess gives children a mentally stimulating, offline activity. It is competitive, exciting and social — everything a video game offers, but better for the brain.",
    color: "#84CC16"
  }
];

export default function WhyChess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="why-chess" style={{
      padding: "6rem 0",
      backgroundColor: "var(--background)",
      position: "relative",
      overflow: "hidden",
      scrollMarginTop: "5rem"
    }}>
      {/* Subtle background accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('/why_chess_bg.png')",
        backgroundSize: "50% auto",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        opacity: 0.04,
        pointerEvents: "none"
      }} />

      <div style={{
        maxWidth: "var(--spacing-container-max)", margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)",
        position: "relative", zIndex: 10
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-block", padding: "0.25rem 0.9rem", marginBottom: "1rem",
            border: "1px solid rgba(30,41,59,0.2)", borderRadius: "999px",
            fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--deep-navy)"
          }}>Backed by Science</span>
          <h2 style={{
            fontFamily: "var(--font-inter)", fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800, color: "var(--deep-navy)", marginBottom: "1rem",
            letterSpacing: "-0.03em", lineHeight: 1.15
          }}>
            Why Every Child Should<br />
            <span style={{ color: "var(--grandmaster-gold)" }}>Learn Chess</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "17px", lineHeight: 1.65,
            color: "var(--on-surface-variant)", maxWidth: "40rem", margin: "0 auto"
          }}>
            Chess is not just a game — it is a proven cognitive workout that builds the skills 
            children need to succeed in school, relationships, and life.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem"
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -5, boxShadow: `0 12px 32px ${r.color}20` }}
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--paper-white)",
                border: "1px solid var(--slate-border)",
                borderRadius: "var(--radius-xl)",
                transition: "box-shadow 0.3s, transform 0.3s",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Color top stripe */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                backgroundColor: r.color
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.85rem" }}>
                <div style={{
                  width: "46px", height: "46px", borderRadius: "12px", flexShrink: 0,
                  backgroundColor: `${r.color}15`,
                  border: `1px solid ${r.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px"
                }}>{r.icon}</div>
                {r.stat && (
                  <div style={{
                    fontFamily: "var(--font-inter)", fontSize: "22px", fontWeight: 800,
                    color: r.color, letterSpacing: "-0.02em", lineHeight: 1,
                    paddingTop: "0.35rem"
                  }}>{r.stat}</div>
                )}
              </div>

              <h3 style={{
                fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 700,
                color: "var(--deep-navy)", marginBottom: "0.5rem"
              }}>{r.title}</h3>
              <p style={{
                fontFamily: "var(--font-inter)", fontSize: "13px", lineHeight: 1.65,
                color: "var(--on-surface-variant)", margin: 0
              }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            marginTop: "4rem", textAlign: "center",
            padding: "3rem 2rem",
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid rgba(237,190,82,0.2)"
          }}
        >
          <div style={{ fontSize: "36px", marginBottom: "1rem" }}>♟️</div>
          <h3 style={{
            fontFamily: "var(--font-inter)", fontSize: "24px", fontWeight: 800,
            color: "white", marginBottom: "0.75rem", letterSpacing: "-0.02em"
          }}>
            Give your child the <span style={{ color: "var(--grandmaster-gold)" }}>unfair advantage</span>
          </h3>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.65,
            color: "rgba(255,255,255,0.55)", maxWidth: "32rem",
            margin: "0 auto 2rem"
          }}>
            The best time to start was yesterday. The second best time is today. 
            Book a free 45-minute demo and watch your child fall in love with chess.
          </p>
          <motion.a
            href="/enrollment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="pulse-gold"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "var(--grandmaster-gold)", color: "var(--ink-black)",
              padding: "1rem 2.5rem", borderRadius: "var(--radius-lg)",
              fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 800,
              letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(237,190,82,0.35)"
            }}
          >
            Start Your Child&apos;s Journey →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
