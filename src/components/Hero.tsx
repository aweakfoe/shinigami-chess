"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }
});

export default function Hero() {
  return (
    <section style={{
      position: "relative",
      backgroundColor: "var(--ink-black)",
      color: "var(--paper-white)",
      padding: "7rem 0 5rem",
      backgroundImage: "url('/chess_kid_bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center right",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      minHeight: "680px",
      display: "flex",
      alignItems: "center"
    }}>
      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.80) 55%, rgba(5,5,5,0.15) 100%)",
        zIndex: 1
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.04) 1px, transparent 0)",
        backgroundSize: "24px 24px", zIndex: 2
      }} />

      {/* Floating trust badge */}
      <div className="float-badge" style={{
        position: "absolute", top: "2rem", right: "clamp(1rem, 6vw, 8rem)",
        zIndex: 20,
        backgroundColor: "rgba(237,190,82,0.12)",
        border: "1px solid rgba(237,190,82,0.4)",
        borderRadius: "999px",
        padding: "0.5rem 1.25rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
        backdropFilter: "blur(8px)"
      }}>
        <span style={{ fontSize: "18px" }}>♟️</span>
        <span style={{
          fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 600,
          color: "var(--grandmaster-gold)", letterSpacing: "0.02em"
        }}>100% Free Demo · No commitment</span>
      </div>

      <div style={{
        maxWidth: "var(--spacing-container-max)", margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)",
        position: "relative", zIndex: 10, width: "100%"
      }}>
        <div style={{ maxWidth: "44rem" }}>

          {/* Eyebrow */}
          <motion.span {...fadeUp(0)} style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.3rem 0.9rem", marginBottom: "1.5rem",
            border: "1px solid rgba(237, 190, 82, 0.35)",
            backgroundColor: "rgba(237,190,82,0.08)",
            color: "var(--grandmaster-gold)",
            fontFamily: "var(--font-inter)", fontSize: "12px",
            fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const,
            borderRadius: "999px"
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--grandmaster-gold)", display: "inline-block" }} />
            Shinigami Chess Academy
          </motion.span>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.12)} style={{
            fontFamily: "var(--font-inter)", fontSize: "clamp(36px, 5vw, 54px)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em",
            marginBottom: "1.25rem", color: "var(--paper-white)"
          }}>
            Turn Your Child Into a{" "}
            <span style={{
              background: "linear-gradient(90deg, #EDBE52, #f5d78a, #EDBE52)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite"
            }}>
              Chess Champion
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p {...fadeUp(0.22)} style={{
            fontFamily: "var(--font-inter)", fontSize: "18px", fontWeight: 400,
            lineHeight: 1.65, color: "rgba(224, 227, 229, 0.88)",
            marginBottom: "0.75rem", maxWidth: "38rem"
          }}>
            FIDE-rated coaches. Structured curriculum. Weekly tournaments.
            We train kids aged 5–15 to think sharper, compete harder, and win.
          </motion.p>

          {/* Trust line */}
          <motion.div {...fadeUp(0.3)} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            marginBottom: "2.5rem",
            padding: "0.65rem 1rem",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "var(--radius-lg)",
            width: "fit-content"
          }}>
            <span style={{ fontSize: "20px" }}>🏅</span>
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "14px",
              color: "rgba(255,255,255,0.75)", lineHeight: 1.4
            }}>
              <strong style={{ color: "var(--grandmaster-gold)" }}>FIDE-certified coaches</strong> at a fraction of private tutor prices
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.38)} style={{ display: "flex", flexWrap: "wrap" as const, gap: "1rem", alignItems: "center" }}>
            <motion.a
              href="/enrollment"
              className="pulse-gold"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "var(--grandmaster-gold)", color: "var(--ink-black)",
                padding: "1rem 2.25rem",
                fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 800,
                letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase" as const,
                borderRadius: "var(--radius-lg)", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(237,190,82,0.35)"
              }}>
              Book Free Demo →
            </motion.a>
            <motion.a
              href="https://wa.me/919340718544?text=Hi!%20I%20want%20to%20know%20more%20about%20Shinigami%20Chess%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(37,211,102,0.18)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                backgroundColor: "rgba(37,211,102,0.1)",
                border: "1px solid rgba(37,211,102,0.45)",
                color: "#25D366",
                padding: "1rem 1.75rem",
                fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700,
                letterSpacing: "0.03em", textDecoration: "none", textTransform: "uppercase" as const,
                borderRadius: "var(--radius-lg)", cursor: "pointer"
              }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Talk to Us
            </motion.a>
          </motion.div>

          {/* Urgency nudge */}
          <motion.p {...fadeUp(0.5)} style={{
            marginTop: "1.25rem",
            fontFamily: "var(--font-inter)", fontSize: "13px",
            color: "rgba(255,255,255,0.45)"
          }}>
            Only <strong style={{ color: "#ff9f6a" }}>3 spots</strong> remaining for July batch
          </motion.p>
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        style={{
          position: "absolute", bottom: "1.75rem", left: "50%",
          transform: "translateX(-50%)", zIndex: 20,
          color: "rgba(255,255,255,0.3)", cursor: "pointer"
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}

