"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    question: "What age range do you accept?",
    answer: "We primarily train students between 5 and 15 years old. We evaluate each child based on their curiosity and passion for the game rather than strict age limits."
  },
  {
    question: "Do you offer offline or in-person coaching?",
    answer: "All classes are held online via live video sessions. This lets us connect your child with top FIDE-rated coaches regardless of where you are in the world."
  },
  {
    question: "Does my child need prior chess experience?",
    answer: "Not at all! Our beginner curriculum is built from the ground up for absolute newcomers — we start with the very basics and build confidence step by step."
  },
  {
    question: "How do the weekly tournaments work?",
    answer: "Tournaments are hosted on private, coach-monitored Lichess/Chess.com arenas exclusively for our students. Safe, competitive, and fun."
  },
  {
    question: "Can we cancel or pause our subscription?",
    answer: "Yes — pause or cancel anytime with no hidden fees, no penalties, no questions asked."
  },
  {
    question: "What happens in the free demo?",
    answer: "Your child gets a live 45-minute session with one of our FIDE-rated coaches. We assess their level, show them what real structured coaching feels like, and you decide if it is right for you."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" ref={ref} style={{
      padding: "6rem 0",
      backgroundColor: "var(--background)",
      borderTop: "1px solid var(--slate-border)",
      scrollMarginTop: "5rem"
    }}>
      <div style={{
        maxWidth: "var(--spacing-container-max)",
        margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)"
      }}>
        {/* Header */}
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
          }}>FAQ</span>
          <h2 style={{
            fontFamily: "var(--font-inter)", fontSize: "36px", fontWeight: 700,
            color: "var(--deep-navy)", marginBottom: "1rem", letterSpacing: "-0.02em"
          }}>
            Questions Parents Ask
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "17px",
            color: "var(--on-surface-variant)", maxWidth: "36rem",
            margin: "0 auto", lineHeight: 1.6
          }}>
            Everything you need to know before booking your child&apos;s first session.
          </p>
        </motion.div>

        {/* Accordion */}
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                style={{
                  marginBottom: "0.75rem",
                  border: `1px solid ${isOpen ? "var(--grandmaster-gold)" : "var(--slate-border)"}`,
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: "var(--paper-white)",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease",
                  boxShadow: isOpen ? "0 4px 24px rgba(237,190,82,0.10)" : "none"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: "100%", padding: "1.4rem 1.5rem",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    backgroundColor: "transparent", border: "none",
                    cursor: "pointer", textAlign: "left", gap: "1rem"
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 600,
                    color: isOpen ? "var(--deep-navy)" : "var(--on-surface)",
                    flex: 1
                  }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                      backgroundColor: isOpen ? "var(--grandmaster-gold)" : "var(--surface-container)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background-color 0.25s"
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <line x1="7" y1="2" x2="7" y2="12" stroke={isOpen ? "#0F172A" : "#64748b"} strokeWidth="2" strokeLinecap="round" />
                      <line x1="2" y1="7" x2="12" y2="7" stroke={isOpen ? "#0F172A" : "#64748b"} strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                    >
                      <div style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        fontFamily: "var(--font-inter)", fontSize: "15px",
                        lineHeight: 1.7, color: "var(--on-surface-variant)",
                        borderTop: "1px solid rgba(237,190,82,0.15)"
                      }}>
                        <div style={{ paddingTop: "1rem" }}>
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "16px",
            color: "var(--on-surface-variant)", marginBottom: "1.25rem"
          }}>
            Still have questions? Just book the free demo — our coaches will answer everything live.
          </p>
          <motion.a
            href="/enrollment"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "var(--deep-navy)", color: "var(--paper-white)",
              padding: "0.9rem 2.25rem", borderRadius: "var(--radius-lg)",
              fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700,
              letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase"
            }}
          >
            Book Free Demo →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
