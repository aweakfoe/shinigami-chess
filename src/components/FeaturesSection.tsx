"use client";

import { BrainCircuit, LineChart, Target, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <BrainCircuit size={32} color="var(--grandmaster-gold)" />,
      title: "AI-Powered Analysis",
      description: "Our proprietary engine breaks down your games, identifying systemic weaknesses and suggesting targeted training exercises."
    },
    {
      icon: <Target size={32} color="var(--grandmaster-gold)" />,
      title: "Personalized Curriculum",
      description: "No cookie-cutter courses. Your learning path automatically adapts based on your rating, playing style, and opening choices."
    },
    {
      icon: <LineChart size={32} color="var(--grandmaster-gold)" />,
      title: "Smart Progress Tracking",
      description: "Visualize your growth with detailed analytics. Track your tactical vision, opening accuracy, and endgame precision over time."
    },
    {
      icon: <Zap size={32} color="var(--grandmaster-gold)" />,
      title: "High-Intensity Drills",
      description: "Sharpen your board awareness with time-pressured tactical drills designed to simulate real tournament conditions."
    }
  ];

  return (
    <section id="features" style={{ padding: "6rem 0", backgroundColor: "var(--surface)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          
          <div className="mobile-full-width">
            <h2 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0", color: "var(--paper-white)" }}>
              The Shinigami <span style={{ color: "var(--grandmaster-gold)" }}>Advantage</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--on-surface-variant)", marginBottom: "3rem", lineHeight: 1.6 }}>
              We combine elite Grandmaster knowledge with cutting-edge technology to accelerate your chess development faster than traditional methods.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
              {features.map((feature, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ 
                    backgroundColor: "var(--surface-container-lowest)", 
                    padding: "1rem", 
                    borderRadius: "12px",
                    border: "1px solid var(--slate-border)"
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.3rem", color: "var(--paper-white)" }}>{feature.title}</h3>
                    <p style={{ margin: 0, color: "var(--on-surface-variant)", lineHeight: 1.5 }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mobile-hide" style={{ position: "relative", height: "100%", minHeight: "500px", borderRadius: "16px", overflow: "hidden" }}>
            {/* A decorative placeholder for an app/dashboard screenshot */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, var(--surface-bright) 0%, var(--surface-container-lowest) 100%)",
              border: "1px solid var(--slate-border)",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              padding: "2rem"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
                <div style={{ width: "40%", height: "20px", backgroundColor: "var(--surface-container-low)", borderRadius: "4px" }}></div>
                <div style={{ width: "20%", height: "20px", backgroundColor: "var(--grandmaster-gold)", borderRadius: "4px", opacity: 0.8 }}></div>
              </div>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ flex: 1, height: "100px", backgroundColor: "var(--surface-container-low)", borderRadius: "8px" }}></div>
                <div style={{ flex: 1, height: "100px", backgroundColor: "var(--surface-container-low)", borderRadius: "8px" }}></div>
                <div style={{ flex: 1, height: "100px", backgroundColor: "var(--surface-container-low)", borderRadius: "8px" }}></div>
              </div>
              <div style={{ flex: 1, backgroundColor: "var(--surface-container-low)", borderRadius: "8px", position: "relative", overflow: "hidden" }}>
                 <div style={{ position: "absolute", bottom: 0, left: "10%", width: "10%", height: "40%", backgroundColor: "var(--grandmaster-gold)", opacity: 0.5, borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}></div>
                 <div style={{ position: "absolute", bottom: 0, left: "25%", width: "10%", height: "60%", backgroundColor: "var(--grandmaster-gold)", opacity: 0.7, borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}></div>
                 <div style={{ position: "absolute", bottom: 0, left: "40%", width: "10%", height: "30%", backgroundColor: "var(--grandmaster-gold)", opacity: 0.4, borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}></div>
                 <div style={{ position: "absolute", bottom: 0, left: "55%", width: "10%", height: "80%", backgroundColor: "var(--grandmaster-gold)", opacity: 0.9, borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}></div>
                 <div style={{ position: "absolute", bottom: 0, left: "70%", width: "10%", height: "95%", backgroundColor: "var(--grandmaster-gold)", opacity: 1, borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .mobile-full-width { grid-column: 1 / -1; }
          .mobile-hide { display: none !important; }
        }
      `}} />
    </section>
  );
}
