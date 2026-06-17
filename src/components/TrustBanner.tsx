"use client";

import { Trophy, Users, Star, Target } from "lucide-react";

export default function TrustBanner() {
  const stats = [
    { icon: <Trophy className="trust-icon" />, title: "10,000+", subtitle: "Games Analyzed" },
    { icon: <Star className="trust-icon" />, title: "100+", subtitle: "Masters Created" },
    { icon: <Users className="trust-icon" />, title: "5,000+", subtitle: "Active Students" },
    { icon: <Target className="trust-icon" />, title: "100%", subtitle: "Grandmaster Led" },
  ];

  return (
    <section style={{
      backgroundColor: "var(--surface-container-low)",
      borderTop: "1px solid var(--slate-border)",
      borderBottom: "1px solid var(--slate-border)",
      padding: "2rem 0",
      marginTop: "-1px"
    }}>
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
        textAlign: "center"
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ color: "var(--grandmaster-gold)", marginBottom: "0.5rem" }}>
              {stat.icon}
            </div>
            <h3 style={{ margin: 0, fontSize: "1.75rem", color: "var(--paper-white)" }}>{stat.title}</h3>
            <p style={{ margin: 0, color: "var(--on-surface-variant)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
