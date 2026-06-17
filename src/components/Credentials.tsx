"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const valueProps = [
  {
    icon: "🏆",
    headline: "FIDE-Certified Coaches",
    sub: "Learn from titled, rated chess professionals — not hobbyists",
    color: "#EDBE52"
  },
  {
    icon: "💸",
    headline: "Affordable Pricing",
    sub: "Elite coaching starting at just ₹2,999/month — less than a single private lesson",
    color: "#50C878"
  },
  {
    icon: "📅",
    headline: "Flexible Scheduling",
    sub: "Weekend & weekday batches. Fits around school, no stress",
    color: "#4A90E2"
  },
  {
    icon: "🎯",
    headline: "Results-Driven Method",
    sub: "Structured phases — from beginner to tournament-ready, step by step",
    color: "#A78BFA"
  }
];

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{
      backgroundColor: "#0F172A",
      padding: "3.5rem 0",
      borderBottom: "1px solid rgba(237,190,82,0.12)"
    }}>
      <div style={{
        maxWidth: "var(--spacing-container-max)",
        margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0"
        }}>
          {valueProps.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem 1.5rem",
                borderRight: i < valueProps.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}
            >
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                backgroundColor: `${v.color}18`,
                border: `1px solid ${v.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", marginBottom: "1rem"
              }}>
                {v.icon}
              </div>
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 700,
                color: "white", marginBottom: "0.4rem", letterSpacing: "-0.01em"
              }}>{v.headline}</span>
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "13px",
                color: "rgba(255,255,255,0.45)", lineHeight: 1.55
              }}>{v.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
