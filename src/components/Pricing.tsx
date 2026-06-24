"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const containerStyle = {
    padding: "6rem 0",
    backgroundColor: "var(--surface-container-lowest)",
    borderTop: "1px solid var(--slate-border)"
  };

  const plans = [


    {
      name: "Tournament Plan",
      target: "Intermediate",
      price: "₹2,999",
      period: "/month",
      features: [
        "2 Live Group Sessions / week",
        "Interactive Tactical Workouts",
        "Detailed Monthly Reports",
        "Post-Game Analysis",
        "Access to Video Library"
      ],
      isPopular: true
    },
    {
      name: "Elite Private",
      target: "Advanced",
      price: "₹4,999",
      period: "/month",
      features: [
        "1-on-1 Private Coaching (1hr/wk)",
        "Custom Opening Repertoire",
        "Interactive Tactical Workouts",
        "Comprehensive Analytics",
        "Priority Support"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" style={containerStyle}>
      <div style={{
        maxWidth: "var(--spacing-container-max)",
        margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-inter)",
            fontSize: "32px",
            fontWeight: 600,
            color: "var(--deep-navy)",
            marginBottom: "1rem"
          }}>Investment in Mastery</h2>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            color: "var(--on-surface-variant)",
            maxWidth: "36rem",
            margin: "0 auto"
          }}>
            Transparent pricing with no hidden fees. Choose the right level of training for your child's goals.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "stretch"
        }}>
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02, borderColor: "var(--ink-black)" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                position: "relative",
                padding: "2.5rem 2rem",
                backgroundColor: "var(--paper-white)",
                borderRadius: "var(--radius-xl)",
                border: plan.isPopular ? "2px solid var(--grandmaster-gold)" : "1px solid var(--slate-border)",
                boxShadow: plan.isPopular ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--grandmaster-gold)",
                  color: "var(--ink-black)",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase"
                }}>
                  Most Popular
                </div>
              )}
              
              <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                <h3 style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "var(--deep-navy)",
                  marginBottom: "0.25rem"
                }}>{plan.name}</h3>
                <span style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  color: "var(--on-surface-variant)",
                  display: "block",
                  marginBottom: "1rem"
                }}>For {plan.target}</span>
                
                <div>
                  <span style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "var(--deep-navy)"
                  }}>{plan.price}</span>
                  <span style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "16px",
                    color: "var(--on-surface-variant)"
                  }}>{plan.period}</span>
                </div>
              </div>

              <div style={{ flexGrow: 1 }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      fontFamily: "var(--font-inter)",
                      fontSize: "15px",
                      color: "var(--on-surface-variant)"
                    }}>
                      <span className="material-symbols-outlined" style={{ 
                        color: "var(--grandmaster-gold)", 
                        fontSize: "20px",
                        flexShrink: 0
                      }}>
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <motion.a 
                  href="/enrollment"
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: plan.isPopular ? "var(--deep-navy)" : "var(--surface-container)",
                    color: plan.isPopular ? "var(--paper-white)" : "var(--deep-navy)",
                    padding: "1rem",
                    borderRadius: "var(--radius-lg)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background-color 0.2s"
                  }}
                >
                  Book Free Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
