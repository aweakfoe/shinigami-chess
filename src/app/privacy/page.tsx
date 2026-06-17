import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <TopNavBar />
      <main style={{ 
        flexGrow: 1, 
        backgroundColor: "var(--background)",
        padding: "4rem var(--spacing-margin-edge)" 
      }}>
        <div style={{
          maxWidth: "48rem",
          margin: "0 auto",
          backgroundColor: "var(--surface-container-lowest)",
          padding: "3rem",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--slate-border)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
        }}>
          <h1 style={{
            fontFamily: "var(--font-inter)",
            fontSize: "36px",
            fontWeight: 700,
            color: "var(--deep-navy)",
            marginBottom: "2rem"
          }}>Privacy Policy</h1>
          
          <div style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "var(--on-surface-variant)"
          }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>1. Information We Collect</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              At Shinigami Squares, we collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. This includes your name, email address, and phone number.
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>To facilitate account creation and logon process.</li>
              <li style={{ marginBottom: "0.5rem" }}>To send administrative information to you regarding our curriculum and schedules.</li>
              <li style={{ marginBottom: "0.5rem" }}>To fulfill and manage your evaluation bookings and course enrollments.</li>
            </ul>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>3. Data Security</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>4. Contact Us</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              If you have questions or comments about this notice, you may email us at arindamyapps@gmail.com or by post to:
              <br /><br />
              Shinigami Squares<br />
              India
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
