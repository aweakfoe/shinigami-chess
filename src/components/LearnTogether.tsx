"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    icon: "❤️",
    title: "Quality Time, Every Week",
    desc: "Chess becomes your shared language. A guaranteed 1-hour window every week where phones are down and the board is up."
  },
  {
    icon: "🧠",
    title: "Both Minds Grow",
    desc: "Adults benefit too — chess sharpens memory, focus and patience. You progress together at your own pace."
  },
  {
    icon: "🏆",
    title: "Friendly Family Rivalry",
    desc: "Challenge each other at home. As your child improves, so do you — and the healthy competition keeps it exciting."
  },
  {
    icon: "💬",
    title: "A New Conversation Starter",
    desc: "Chess gives you things to talk about — openings, blunders, tactics. It deepens your bond beyond the chessboard."
  },
  {
    icon: "🎯",
    title: "Shared Goals & Milestones",
    desc: "Celebrate your child's first checkmate together. Track progress side by side. Every win feels twice as good."
  },
  {
    icon: "🕊️",
    title: "Screen-Free Together Time",
    desc: "Replace passive screen time with active, engaging play that builds real cognitive skills for both of you."
  }
];

export default function LearnTogether() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{
      position: "relative",
      overflow: "hidden",
      padding: "7rem 0"
    }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/parent_child_chess.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0
      }} />
      {/* Overlay — heavy on left for text, lighter on right to show image */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(5,10,25,0.97) 0%, rgba(5,10,25,0.92) 45%, rgba(5,10,25,0.55) 75%, rgba(5,10,25,0.25) 100%)",
        zIndex: 1
      }} />
      {/* Gold shimmer top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent 0%, var(--grandmaster-gold) 50%, transparent 100%)",
        zIndex: 2
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
          transition={{ duration: 0.65 }}
          style={{ maxWidth: "600px", marginBottom: "4rem" }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.3rem 0.9rem", marginBottom: "1.25rem",
            border: "1px solid rgba(237,190,82,0.35)",
            backgroundColor: "rgba(237,190,82,0.08)",
            borderRadius: "999px"
          }}>
            <span style={{ fontSize: "14px" }}>👨‍👩‍👧</span>
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 700,
              color: "var(--grandmaster-gold)", letterSpacing: "0.1em", textTransform: "uppercase"
            }}>New — Family Plan</span>
          </span>

          <h2 style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "white", marginBottom: "1.25rem"
          }}>
            Learn Chess<br />
            <span style={{ color: "var(--grandmaster-gold)" }}>With Your Child</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "17px", lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)", maxWidth: "480px"
          }}>
            Our Family Plan lets parents and kids learn together in the same live session. 
            Same coach, same lesson — a shared experience that builds your bond as much as it builds your chess.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
          maxWidth: "820px"
        }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
              style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                padding: "1.25rem",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-xl)",
                backdropFilter: "blur(8px)",
                transition: "background-color 0.25s, transform 0.25s"
              }}
            >
              <span style={{
                fontSize: "24px", flexShrink: 0,
                width: "44px", height: "44px",
                backgroundColor: "rgba(237,190,82,0.1)",
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>{b.icon}</span>
              <div>
                <div style={{
                  fontFamily: "var(--font-inter)", fontSize: "15px", fontWeight: 700,
                  color: "white", marginBottom: "0.35rem"
                }}>{b.title}</div>
                <div style={{
                  fontFamily: "var(--font-inter)", fontSize: "13px", lineHeight: 1.6,
                  color: "rgba(255,255,255,0.5)"
                }}>{b.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
        >
          <motion.a
            href="/enrollment"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="pulse-gold"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "var(--grandmaster-gold)", color: "var(--ink-black)",
              padding: "1rem 2.25rem", borderRadius: "var(--radius-lg)",
              fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 800,
              letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(237,190,82,0.35)"
            }}
          >
            Book Family Demo →
          </motion.a>
          <a
            href="https://wa.me/919340718544?text=Hi!%20I%27m%20interested%20in%20the%20Family%20Plan%20where%20I%20can%20learn%20chess%20with%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              color: "#25D366", fontFamily: "var(--font-inter)", fontSize: "14px",
              fontWeight: 600, textDecoration: "none"
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
