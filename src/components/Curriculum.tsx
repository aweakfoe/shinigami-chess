"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Curriculum() {
  const cardStyle = {
    backgroundColor: "var(--paper-white)",
    border: "1px solid var(--slate-border)",
    padding: "2rem",
    borderRadius: "var(--radius-lg)",
    transition: "background-color 0.3s",
    position: "relative" as "relative",
    overflow: "hidden" as "hidden"
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.15)",
    borderColor: "var(--ink-black)"
  };

  const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 20
  };

  const iconContainerStyle = {
    width: "3rem",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--surface-container)",
    borderRadius: "var(--radius-lg)",
    marginBottom: "1.5rem",
    color: "var(--deep-navy)",
    transition: "all 0.3s"
  };

  const phaseLabelStyle = {
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    backgroundColor: "var(--surface-container)",
    color: "var(--deep-navy)",
    fontFamily: "var(--font-inter)",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as "uppercase",
    borderRadius: "var(--radius-md)",
    marginBottom: "0.75rem"
  };

  return (
    <section id="programs" style={{
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
        <div style={{
          marginBottom: "4rem",
          textAlign: "center",
          maxWidth: "42rem",
          margin: "0 auto 4rem auto"
        }}>
          <h2 style={{
            fontFamily: "var(--font-inter)",
            fontSize: "32px",
            fontWeight: 600,
            color: "var(--deep-navy)",
            marginBottom: "1rem"
          }}>Structured Curriculum</h2>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            color: "var(--on-surface-variant)"
          }}>
            A methodical approach to mastery, divided into three distinct phases of development.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {/* Beginner */}
          <motion.div 
            style={cardStyle}
            whileHover={hoverEffect}
            transition={springTransition}
          >
            <div style={iconContainerStyle}>
              <span className="material-symbols-outlined">chess</span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <span style={phaseLabelStyle}>Phase I</span>
              <h3 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "24px",
                fontWeight: 600,
                color: "var(--deep-navy)",
                marginBottom: "0.5rem"
              }}>Beginner</h3>
              <h4 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--on-surface-variant)"
              }}>Foundations of Strategy</h4>
            </div>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "rgba(69, 70, 77, 0.8)",
              lineHeight: 1.5
            }}>
              Establishing the core principles of opening development, center control, and basic tactical motifs.
            </p>
          </motion.div>

          {/* Intermediate */}
          <motion.div 
            style={cardStyle}
            whileHover={hoverEffect}
            transition={springTransition}
          >
            <div style={iconContainerStyle}>
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <span style={phaseLabelStyle}>Phase II</span>
              <h3 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "24px",
                fontWeight: 600,
                color: "var(--deep-navy)",
                marginBottom: "0.5rem"
              }}>Intermediate</h3>
              <h4 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--on-surface-variant)"
              }}>Tactical Mastery</h4>
            </div>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "rgba(69, 70, 77, 0.8)",
              lineHeight: 1.5
            }}>
              Deep diving into complex combinations, calculation techniques, and middle-game planning.
            </p>
          </motion.div>

          {/* Advanced */}
          <motion.div 
            style={cardStyle}
            whileHover={hoverEffect}
            transition={springTransition}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              backgroundColor: "var(--grandmaster-gold)"
            }}></div>
            <div style={iconContainerStyle}>
              <span className="material-symbols-outlined">emoji_events</span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <span style={phaseLabelStyle}>Phase III</span>
              <h3 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "24px",
                fontWeight: 600,
                color: "var(--deep-navy)",
                marginBottom: "0.5rem"
              }}>Advanced</h3>
              <h4 style={{
                fontFamily: "var(--font-inter)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--on-surface-variant)"
              }}>Tournament Prep</h4>
            </div>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              color: "rgba(69, 70, 77, 0.8)",
              lineHeight: 1.5
            }}>
              Opening repertoire preparation, endgame technique, and psychological conditioning for competitive play.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
