"use client";

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex M.",
      rating: 2150,
      role: "FIDE Master Candidate",
      text: "Tactical Knight Academy completely changed how I look at the board. The 1-on-1 Grandmaster coaching helped me identify systemic weaknesses in my middlegame planning. I gained 150 ELO in 3 months."
    },
    {
      name: "Sarah T.",
      rating: 1600,
      role: "Tournament Player",
      text: "The AI analysis is brutal but incredibly effective. It doesn't just show you where you blundered, it forces you to play out the correct lines until it becomes second nature."
    },
    {
      name: "David K.",
      rating: 1200,
      role: "Amateur",
      text: "I was stuck at 1000 for years. The Pawn's Path program broke down opening principles so clearly that I finally understand *why* I'm moving pieces, not just memorizing lines."
    }
  ];

  return (
    <section id="testimonials" style={{ padding: "6rem 0", backgroundColor: "var(--background)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0", color: "var(--paper-white)" }}>Wall of Proof</h2>
          <p style={{ fontSize: "1.2rem", color: "var(--on-surface-variant)", maxWidth: "600px", margin: "0 auto" }}>
            Don't just take our word for it. See what our students have to say about their rating climbs.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} style={{
              backgroundColor: "var(--surface-container-lowest)",
              border: "1px solid var(--slate-border)",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={20} color="var(--grandmaster-gold)" fill="var(--grandmaster-gold)" />
                ))}
              </div>
              <p style={{ 
                color: "var(--paper-white)", 
                fontStyle: "italic", 
                lineHeight: 1.6,
                flexGrow: 1,
                margin: 0
              }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span style={{ fontWeight: "bold", color: "var(--paper-white)", fontSize: "1.1rem" }}>{testimonial.name}</span>
                <span style={{ color: "var(--grandmaster-gold)", fontSize: "0.9rem" }}>{testimonial.role} • {testimonial.rating} ELO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
