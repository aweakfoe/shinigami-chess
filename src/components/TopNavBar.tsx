"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TopNavBar() {
  const [activeTab, setActiveTab] = useState("");
  const [isManualClick, setIsManualClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't override if we just clicked a link
      if (isManualClick) return;

      const sections = [
        { id: "features", tab: "features" },
        { id: "coaches", tab: "coaches" },
        { id: "programs", tab: "programs" },
        { id: "pricing", tab: "pricing" },
        { id: "faq", tab: "faq" }
      ];
      
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Header is 5rem (80px), so check slightly below that
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.tab;
          }
        }
      }
      
      if (window.scrollY < 100) {
        current = "";
      }

      if (current !== activeTab) {
        setActiveTab(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, isManualClick]);

  const handleNavClick = (tabName: string) => {
    setActiveTab(tabName);
    setIsManualClick(true);
    // Reset manual click after scrolling finishes
    setTimeout(() => {
      setIsManualClick(false);
    }, 1000);
  };

  const getLinkStyle = (tabName: string) => {
    const isActive = activeTab === tabName;
    return {
      color: isActive ? "var(--deep-navy)" : "var(--on-surface-variant)",
      borderBottom: isActive ? "2px solid var(--deep-navy)" : "2px solid transparent",
      paddingBottom: "4px",
      textDecoration: "none",
      fontWeight: isActive ? 600 : 400,
      transition: "all 0.2s"
    };
  };

  return (
    <nav className="top-nav" style={{
      backgroundColor: "rgba(10, 15, 28, 0.92)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(237, 190, 82, 0.15)",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25)",
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 var(--spacing-margin-edge)",
        height: "5rem",
        width: "100%",
        maxWidth: "var(--spacing-container-max)",
        margin: "0 auto"
      }}>
        <a href="/" onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }} style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.65rem"
        }}>
          <img
            src="/logo.png"
            alt="Shinigami Chess Logo"
            style={{ height: "48px", width: "auto", display: "block" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "0.02em"
            }}>Shinigami Squares</span>
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 600,
              color: "var(--grandmaster-gold)",
              letterSpacing: "0.12em",
              textTransform: "uppercase"
            }}>Chess Academy</span>
          </div>
        </a>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "var(--spacing-gutter)" }}>
          <a href="#features" onClick={() => handleNavClick("features")} style={{...getLinkStyle("features"), color: activeTab === "features" ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.65)", borderBottom: activeTab === "features" ? "2px solid var(--grandmaster-gold)" : "2px solid transparent"}}>
            Features
          </a>
          <a href="#coaches" onClick={() => handleNavClick("coaches")} style={{...getLinkStyle("coaches"), color: activeTab === "coaches" ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.65)", borderBottom: activeTab === "coaches" ? "2px solid var(--grandmaster-gold)" : "2px solid transparent"}}>
            Coaches
          </a>
          <a href="#programs" onClick={() => handleNavClick("programs")} style={{...getLinkStyle("programs"), color: activeTab === "programs" ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.65)", borderBottom: activeTab === "programs" ? "2px solid var(--grandmaster-gold)" : "2px solid transparent"}}>
            Programs
          </a>
          <a href="#pricing" onClick={() => handleNavClick("pricing")} style={{...getLinkStyle("pricing"), color: activeTab === "pricing" ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.65)", borderBottom: activeTab === "pricing" ? "2px solid var(--grandmaster-gold)" : "2px solid transparent"}}>
            Pricing
          </a>
          <a href="#faq" onClick={() => handleNavClick("faq")} style={{...getLinkStyle("faq"), color: activeTab === "faq" ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.65)", borderBottom: activeTab === "faq" ? "2px solid var(--grandmaster-gold)" : "2px solid transparent"}}>
            FAQ
          </a>
        </div>
        <motion.a 
          href="/enrollment"
          className="pulse-gold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{
            display: "inline-block",
            backgroundColor: "var(--grandmaster-gold)",
            color: "var(--ink-black)",
            padding: "0.6rem 1.5rem",
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textDecoration: "none",
            textTransform: "uppercase",
            borderRadius: "var(--radius-lg)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(237,190,82,0.35)"
          }}>
          🎯 Free Demo
        </motion.a>
      </div>
    </nav>
  );
}
