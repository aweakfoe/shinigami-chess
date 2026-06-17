"use client";

import { ChevronRight, Shield, Swords, Crown } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Pawn's Path",
      level: "Beginner",
      icon: <Shield size={40} color="var(--on-surface-variant)" />,
      description: "Master the fundamentals. Learn opening principles, basic tactics, and board vision to stop blundering pieces.",
      features: ["Live Group Sessions", "Tactics Trainer Access", "Monthly Tournament"],
      price: "$49/mo"
    },
    {
      title: "Knight's Vanguard",
      level: "Intermediate",
      icon: <Swords size={40} color="var(--grandmaster-gold)" />,
      description: "Elevate your game. Dive deep into positional understanding, endgame techniques, and calculation training.",
      features: ["Small Group Coaching", "AI Game Analysis", "Opening Repertoire Building"],
      price: "$99/mo",
      featured: true
    },
    {
      title: "Grandmaster Elite",
      level: "Advanced",
      icon: <Crown size={40} color="var(--paper-white)" />,
      description: "Play like a pro. Personalized 1-on-1 coaching with titled players to completely dismantle your opponents.",
      features: ["1-on-1 Grandmaster Coaching", "Custom Training Plan", "Psychological Prep"],
      price: "$299/mo"
    }
  ];

  return (
    <section id="programs" style={{ padding: "6rem 0", backgroundColor: "var(--background)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0", color: "var(--paper-white)" }}>Training Programs</h2>
          <p style={{ fontSize: "1.2rem", color: "var(--on-surface-variant)", maxWidth: "600px", margin: "0 auto" }}>
            Whether you are just starting your journey or pushing for a title, we have a curriculum designed for your success.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "stretch"
        }}>
          {programs.map((prog, i) => (
            <div key={i} style={{
              backgroundColor: "var(--surface-container-lowest)",
              border: prog.featured ? "2px solid var(--grandmaster-gold)" : "1px solid var(--slate-border)",
              borderRadius: "16px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              boxShadow: prog.featured ? "0 8px 32px rgba(201, 160, 92, 0.15)" : "none"
            }}>
              {prog.featured && (
                <div style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "-2rem",
                  backgroundColor: "var(--grandmaster-gold)",
                  color: "#000",
                  padding: "0.25rem 3rem",
                  transform: "rotate(45deg)",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  letterSpacing: "1px"
                }}>
                  POPULAR
                </div>
              )}
              
              <div style={{ marginBottom: "1.5rem" }}>{prog.icon}</div>
              <div style={{ fontSize: "0.9rem", color: "var(--grandmaster-gold)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>
                {prog.level}
              </div>
              <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.8rem", color: "var(--paper-white)" }}>{prog.title}</h3>
              <p style={{ color: "var(--on-surface-variant)", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>
                {prog.description}
              </p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {prog.features.map((feature, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--paper-white)" }}>
                    <ChevronRight size={16} color="var(--grandmaster-gold)" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--paper-white)" }}>{prog.price}</span>
              </div>
              
              <button style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: prog.featured ? "var(--grandmaster-gold)" : "transparent",
                color: prog.featured ? "#000" : "var(--paper-white)",
                border: prog.featured ? "none" : "1px solid var(--slate-border)",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              onMouseOver={(e) => {
                if (!prog.featured) e.currentTarget.style.backgroundColor = "var(--surface-bright)";
              }}
              onMouseOut={(e) => {
                if (!prog.featured) e.currentTarget.style.backgroundColor = "transparent";
              }}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
