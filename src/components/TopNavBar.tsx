"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopNavBar() {
  const [activeTab, setActiveTab] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isManualClick, setIsManualClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
          if (rect.top <= 150 && rect.bottom >= 150) current = section.tab;
        }
      }
      if (window.scrollY < 100) current = "";
      if (current !== activeTab) setActiveTab(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, isManualClick]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (tabName: string) => {
    setActiveTab(tabName);
    setIsManualClick(true);
    setMenuOpen(false);
    setTimeout(() => setIsManualClick(false), 1000);
  };

  const linkColor = (tab: string) =>
    activeTab === tab ? "var(--grandmaster-gold)" : "rgba(255,255,255,0.7)";
  const linkBorder = (tab: string) =>
    activeTab === tab ? "2px solid var(--grandmaster-gold)" : "2px solid transparent";

  const navLinks = [
    { href: "#features", tab: "features", label: "Features" },
    { href: "#coaches", tab: "coaches", label: "Coaches" },
    { href: "#programs", tab: "programs", label: "Programs" },
    { href: "#pricing", tab: "pricing", label: "Pricing" },
    { href: "#faq", tab: "faq", label: "FAQ" },
  ];

  return (
    <>
      <nav style={{
        backgroundColor: "rgba(10, 15, 28, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(237,190,82,0.15)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        position: "sticky", top: 0, zIndex: 50, width: "100%"
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "0 var(--spacing-margin-edge)",
          height: "4.5rem", maxWidth: "var(--spacing-container-max)", margin: "0 auto"
        }}>
          {/* Logo */}
          <a href="/" onClick={(e) => {
            if (window.location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
          }} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img
              src="/logo.png"
              alt="Shinigami Chess Logo"
              style={{
                height: "60px", width: "60px", display: "block",
                borderRadius: "10px",
                background: "rgb(11,17,31)",
                filter: "brightness(1.2) contrast(1.05)"
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 800, color: "white", letterSpacing: "0.02em" }}>
                Tactical Knight
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "9px", fontWeight: 600, color: "var(--grandmaster-gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Chess Academy
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {navLinks.map(({ href, tab, label }) => (
              <a key={tab} href={href} onClick={() => handleNavClick(tab)} style={{
                color: linkColor(tab), borderBottom: linkBorder(tab),
                paddingBottom: "4px", textDecoration: "none",
                fontFamily: "var(--font-inter)", fontSize: "13px",
                fontWeight: activeTab === tab ? 600 : 400,
                transition: "all 0.2s", whiteSpace: "nowrap"
              }}>{label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="/enrollment"
            className="nav-desktop pulse-gold"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            style={{
              display: "inline-block", backgroundColor: "var(--grandmaster-gold)",
              color: "var(--ink-black)", padding: "0.55rem 1.25rem",
              fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 800,
              letterSpacing: "0.06em", textDecoration: "none", textTransform: "uppercase",
              borderRadius: "var(--radius-lg)", boxShadow: "0 2px 8px rgba(237,190,82,0.35)"
            }}
          >🎯 Free Demo</motion.a>

          {/* Hamburger button (mobile only) */}
          <button
            className="nav-mobile"
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.5rem", display: "flex", flexDirection: "column",
              gap: "5px", alignItems: "center"
            }}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} transition={{ duration: 0.2 }}
              style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white", borderRadius: "2px" }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }}
              style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white", borderRadius: "2px" }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} transition={{ duration: 0.2 }}
              style={{ display: "block", width: "22px", height: "2px", backgroundColor: "white", borderRadius: "2px" }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              position: "fixed", top: "4.5rem", left: 0, right: 0,
              backgroundColor: "rgba(10,15,28,0.98)",
              backdropFilter: "blur(16px)",
              zIndex: 49,
              borderBottom: "1px solid rgba(237,190,82,0.15)",
              overflow: "hidden"
            }}
          >
            <div style={{ padding: "1.25rem var(--spacing-margin-edge)", display: "flex", flexDirection: "column", gap: "0" }}>
              {navLinks.map(({ href, tab, label }) => (
                <a key={tab} href={href} onClick={() => handleNavClick(tab)} style={{
                  color: "rgba(255,255,255,0.8)", textDecoration: "none",
                  fontFamily: "var(--font-inter)", fontSize: "16px", fontWeight: 500,
                  padding: "0.9rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "block"
                }}>{label}</a>
              ))}
              <a href="/enrollment" onClick={() => setMenuOpen(false)} style={{
                marginTop: "1rem",
                display: "block", textAlign: "center",
                backgroundColor: "var(--grandmaster-gold)", color: "var(--ink-black)",
                padding: "0.85rem", borderRadius: "var(--radius-lg)",
                fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 800,
                letterSpacing: "0.04em", textDecoration: "none", textTransform: "uppercase"
              }}>🎯 Book Free Demo</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
