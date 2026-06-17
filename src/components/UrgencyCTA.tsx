"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UrgencyCTA() {
  return (
    <section style={{
      padding: "5rem 2rem",
      background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
      position: "relative", overflow: "hidden",
      borderTop: "1px solid rgba(237,190,82,0.15)"
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse, rgba(237,190,82,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{
        maxWidth: "var(--spacing-container-max)", margin: "0 auto",
        textAlign: "center", position: "relative", zIndex: 10
      }}>
        {/* Urgency pill */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "rgba(255,100,60,0.15)",
            border: "1px solid rgba(255,100,60,0.4)",
            borderRadius: "999px", padding: "0.4rem 1rem",
            marginBottom: "1.75rem"
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ff6c3c", display: "inline-block", boxShadow: "0 0 6px #ff6c3c" }} />
          <span style={{
            fontFamily: "var(--font-inter)", fontSize: "13px", fontWeight: 700,
            color: "#ff9f6a", letterSpacing: "0.05em", textTransform: "uppercase"
          }}>Only 3 spots left for July 2026</span>
        </motion.div>

        <h2 style={{
          fontFamily: "var(--font-inter)", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800, color: "white", marginBottom: "1rem",
          letterSpacing: "-0.03em", lineHeight: 1.15
        }}>
          Your Child&apos;s Chess Journey<br />
          <span style={{ color: "var(--grandmaster-gold)" }}>Starts With One Free Demo</span>
        </h2>

        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "18px", lineHeight: 1.65,
          color: "rgba(255,255,255,0.6)", maxWidth: "480px",
          margin: "0 auto 2.5rem"
        }}>
          No credit card. No commitment. Just 45 minutes that could change your child&apos;s life.
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
          <motion.a
            href="/enrollment"
            className="pulse-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              backgroundColor: "var(--grandmaster-gold)", color: "var(--ink-black)",
              padding: "1.1rem 2.75rem",
              fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 800,
              letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase",
              borderRadius: "var(--radius-lg)", boxShadow: "0 6px 24px rgba(237,190,82,0.4)"
            }}
          >
            Book Free Demo Now →
          </motion.a>
        </div>

        {/* Trust badges */}
        <div style={{
          display: "flex", justifyContent: "center", flexWrap: "wrap",
          gap: "1.5rem", marginTop: "2rem"
        }}>
          {[
            "✓ 100% Free, no credit card",
            "✓ FIDE-certified coaches",
            "✓ Cancel anytime"
          ].map((b, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-inter)", fontSize: "13px",
              color: "rgba(255,255,255,0.45)", fontWeight: 500
            }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

