"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      childName: formData.get("child-name"),
      childAge: formData.get("child-age"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      rating: formData.get("rating"),
      goal: formData.get("goal"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit form.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="glass-card success-message" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <div style={{ fontSize: "56px", marginBottom: "1rem" }}>🎉</div>
        <h3 style={{
          fontFamily: "var(--font-inter)", fontSize: "26px", fontWeight: 800,
          color: "var(--deep-navy)", marginBottom: "0.75rem"
        }}>
          You&apos;re all set!
        </h3>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.7,
          color: "var(--on-surface-variant)", maxWidth: "22rem", margin: "0 auto 1.5rem"
        }}>
          Our coaches will contact you within <strong>24 hours</strong> to schedule your child&apos;s free demo session. Check your WhatsApp and email!
        </p>
        <a
          href="https://wa.me/919340718544?text=Hi!%20I%20just%20submitted%20the%20demo%20form%20for%20Shinigami%20Chess%20Academy."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            backgroundColor: "#25D366", color: "white",
            padding: "0.75rem 1.5rem", borderRadius: "var(--radius-lg)",
            fontFamily: "var(--font-inter)", fontSize: "14px", fontWeight: 700,
            textDecoration: "none"
          }}
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="glass-card relative overflow-hidden">
      <div className="card-top-border"></div>

      {error && (
        <div style={{ backgroundColor: "var(--error-container)", color: "var(--on-error-container)", padding: "1rem", borderRadius: "var(--radius-lg)", marginBottom: "1.5rem", fontSize: "14px" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* Row 1: Child Name only */}
        <div className="form-field">
          <label className="label-text" htmlFor="child-name">
            Child&apos;s Name
          </label>
          <input
            className="input-field"
            id="child-name"
            name="child-name"
            placeholder="e.g. Arjun"
            required
            type="text"
          />
        </div>

        {/* Row 2: Child Age + Email */}
        <div className="form-grid">
          <div className="form-field">
            <label className="label-text" htmlFor="child-age">
              Child&apos;s Age
            </label>
            <input
              className="input-field"
              id="child-age"
              max="18"
              min="4"
              name="child-age"
              placeholder="Age (4-18)"
              required
              type="number"
            />
          </div>
          <div className="form-field">
            <label className="label-text" htmlFor="email">
              Email Address
            </label>
            <input
              autoComplete="email"
              className="input-field"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>
        </div>

        {/* Row 3: Phone */}
        <div className="form-field">
          <label className="label-text" htmlFor="phone">
            Phone Number
          </label>
          <input
            autoComplete="tel"
            className="input-field"
            id="phone"
            name="phone"
            placeholder="+91 98765 43210"
            required
            type="tel"
          />
        </div>

        {/* Row 4: Chess Rating (optional) */}
        <div className="form-field">
          <label className="label-text" htmlFor="rating">
            Current Chess Rating{" "}
            <span style={{ fontWeight: 400, color: "rgba(100,116,139,0.7)", fontSize: "12px" }}>(Optional)</span>
          </label>
          <input
            className="input-field"
            id="rating"
            name="rating"
            placeholder="e.g. Lichess 800 or complete beginner"
            type="text"
          />
        </div>

        {/* Row 5: Primary Goal (optional) */}
        <div className="form-field">
          <label className="label-text" htmlFor="goal">
            Primary Goal{" "}
            <span style={{ fontWeight: 400, color: "rgba(100,116,139,0.7)", fontSize: "12px" }}>(Optional)</span>
          </label>
          <textarea
            className="input-field textarea-field"
            id="goal"
            name="goal"
            placeholder="e.g. Improve concentration, learn tournament play, family bonding..."
            rows={3}
          ></textarea>
        </div>

        {/* Submit */}
        <div style={{ paddingTop: "1rem" }}>
          <motion.button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span>{isSubmitting ? "Submitting..." : "Book Free Demo"}</span>
            {!isSubmitting && (
              <span aria-hidden="true" className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                arrow_forward
              </span>
            )}
          </motion.button>

          <div className="secure-badge">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>lock</span>
            <span className="label-text" style={{ marginBottom: 0 }}>Directly contacts Shinigami Squares</span>
          </div>
        </div>

      </form>
    </div>
  );
}
