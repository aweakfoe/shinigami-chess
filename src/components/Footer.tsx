"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe, Video } from "lucide-react";

const links = {
  Programs: [
    { label: "Beginner (Club Plan)", href: "#programs" },
    { label: "Intermediate (Tournament)", href: "#programs" },
    { label: "Elite Private", href: "#programs" },
    { label: "Corporate Training", href: "#programs" }
  ],
  Academy: [
    { label: "About Us", href: "#" },
    { label: "Meet the Coaches", href: "#coaches" },
    { label: "Success Stories", href: "#" },
    { label: "Curriculum", href: "#programs" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact Us", href: "#" }
  ]
};

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: Video, label: "YouTube", href: "#" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer style={{
      backgroundColor: "#0a0f1c",
      borderTop: "1px solid rgba(237,190,82,0.15)",
      padding: "4.5rem 0 0",
      marginTop: "auto"
    }}>
      <div style={{
        maxWidth: "var(--spacing-container-max)",
        margin: "0 auto",
        padding: "0 var(--spacing-margin-edge)"
      }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "3rem",
          marginBottom: "3.5rem"
        }}>

          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <img src="/logo.png" alt="Shinigami Chess Logo" style={{ height: "42px", width: "42px", borderRadius: "9px", background: "rgb(10,15,28)", filter: "brightness(1.2) contrast(1.05)" }} />
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "18px", fontWeight: 800,
                color: "white", letterSpacing: "-0.01em"
              }}>
                Shinigami<span style={{ color: "var(--grandmaster-gold)" }}> Chess</span>
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-inter)", fontSize: "14px", lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)", margin: 0, maxWidth: "220px"
            }}>
              FIDE-rated online chess academy turning kids into champions, one move at a time.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, color: "#EDBE52" }}
                  style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.45)", textDecoration: "none",
                    transition: "background-color 0.2s"
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h4 style={{
                fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)", margin: "0 0 0.5rem 0"
              }}>{heading}</h4>
              {items.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 3, color: "#EDBE52" }}
                  style={{
                    fontFamily: "var(--font-inter)", fontSize: "14px",
                    color: "rgba(255,255,255,0.55)", textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h4 style={{
              fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)", margin: "0 0 0.5rem 0"
            }}>Daily Puzzle</h4>
            <p style={{
              fontFamily: "var(--font-inter)", fontSize: "14px", lineHeight: 1.6,
              color: "rgba(255,255,255,0.45)", margin: 0
            }}>
              A Grandmaster-level puzzle in your inbox every morning.
            </p>
            {subscribed ? (
              <div style={{
                padding: "0.75rem 1rem",
                backgroundColor: "rgba(80,200,120,0.12)",
                border: "1px solid rgba(80,200,120,0.3)",
                borderRadius: "var(--radius-lg)",
                fontFamily: "var(--font-inter)", fontSize: "14px",
                color: "#50C878", fontWeight: 600
              }}>
                ✓ You&apos;re subscribed!
              </div>
            ) : (
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    flex: 1, padding: "0.65rem 0.9rem",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "white",
                    fontFamily: "var(--font-inter)", fontSize: "14px",
                    outline: "none"
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => email && setSubscribed(true)}
                  style={{
                    padding: "0.65rem 0.9rem",
                    backgroundColor: "var(--grandmaster-gold)",
                    color: "var(--ink-black)",
                    border: "none", borderRadius: "var(--radius-lg)",
                    cursor: "pointer", display: "flex", alignItems: "center"
                  }}
                >
                  <Mail size={16} />
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.75rem 0",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1rem"
        }}>
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "13px",
            color: "rgba(255,255,255,0.25)", margin: 0
          }}>
            © {new Date().getFullYear()} Shinigami Chess Academy. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              backgroundColor: "#50C878", display: "inline-block",
              boxShadow: "0 0 6px #50C878"
            }} />
            <span style={{
              fontFamily: "var(--font-inter)", fontSize: "13px",
              color: "rgba(255,255,255,0.3)"
            }}>Classes running live now</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
