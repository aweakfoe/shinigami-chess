import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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
          }}>Terms of Service</h1>
          
          <div style={{
            fontFamily: "var(--font-inter)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "var(--on-surface-variant)"
          }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>1. Agreement to Terms</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Tactical Knight Academy ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, or mobile application related, linked, or otherwise connected thereto.
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>2. Enrollment and Classes</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              By enrolling in our academy, you agree to adhere to the schedule provided. All classes are conducted online. You are responsible for ensuring that you have an adequate internet connection and the necessary hardware to participate. Missed classes may not always be eligible for makeup sessions, subject to the coach's discretion.
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>3. Fair Play and Code of Conduct</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We strictly enforce a fair play policy during our online tournaments. The use of chess engines, outside assistance, or any form of cheating is strictly prohibited and will result in immediate termination of the student's enrollment without a refund.
            </p>

            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>4. Subscriptions and Payments</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Subscriptions are billed on a monthly basis. You may cancel your subscription at any time; however, there are no refunds for partially used billing periods. All fees are clearly stated during the enrollment process.
            </p>
            
            <h2 style={{ fontSize: "20px", color: "var(--deep-navy)", marginTop: "2rem", marginBottom: "1rem" }}>5. Contact Us</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              <br /><br />
              Email: arindamyapps@gmail.com<br />
              Phone: +91 9340718544
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
