"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function EnrollmentPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#0a0f1c",
      color: "var(--paper-white)",
      position: "relative",
      overflow: "hidden",
      padding: "4rem 1rem",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url('/enrollment_bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>

      {/* Dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(5,5,20,0.88) 0%, rgba(5,5,20,0.82) 100%)",
        zIndex: 0
      }} />

      {/* Dot grid texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)",
        backgroundSize: "28px 28px",
        zIndex: 1,
        pointerEvents: "none"
      }} />

      <div style={{
        width: "100%",
        maxWidth: "44rem",
        position: "relative",
        zIndex: 10
      }}>
        {/* Back link */}
        <div style={{ marginBottom: "2rem" }}>
          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            fontFamily: "var(--font-inter)", fontSize: "13px",
            color: "rgba(255,255,255,0.4)", textDecoration: "none"
          }}>
            Back to home
          </a>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.3rem 1rem", marginBottom: "1.25rem",
            border: "1px solid rgba(237,190,82,0.35)",
            backgroundColor: "rgba(237,190,82,0.08)",
            borderRadius: "999px"
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#50C878", display: "inline-block", boxShadow: "0 0 6px #50C878" }} />
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700,
              color: "var(--grandmaster-gold)", letterSpacing: "0.08em", textTransform: "uppercase"
            }}>Free Demo — No Payment Required</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "white",
            marginBottom: "0.9rem"
          }}>
            Book Your Child&apos;s Free Demo Session
          </h1>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.65,
            color: "rgba(255,255,255,0.55)", maxWidth: "30rem", margin: "0 auto"
          }}>
            45 minutes with a FIDE-rated coach. We will assess your child and show you exactly what structured chess training looks like.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ContactForm />
        </motion.div>

        {/* WhatsApp alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "14px",
            color: "rgba(255,255,255,0.35)", marginBottom: "0.75rem"
          }}>
            Prefer to chat directly?
          </p>
          <a
            href="https://wa.me/919340718544?text=Hi!%20I%27d%20like%20to%20book%20a%20free%20demo%20for%20my%20child%20at%20Shinigami%20Chess%20Academy."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              padding: "0.75rem 1.75rem",
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "var(--radius-lg)",
              fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700,
              textDecoration: "none", letterSpacing: "0.02em"
            }}
          >
            Message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </main>
  );
}
