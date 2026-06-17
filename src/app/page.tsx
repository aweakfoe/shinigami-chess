import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import WhyChess from "@/components/WhyChess";
import MeetCoach from "@/components/MeetCoach";
import LearnTogether from "@/components/LearnTogether";
import Curriculum from "@/components/Curriculum";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import UrgencyCTA from "@/components/UrgencyCTA";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <TopNavBar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <Credentials />
        <WhyChess />
        <Features />
        <MeetCoach />
        <Curriculum />
        <Pricing />
        <Testimonials />
        <LearnTogether />
        <FAQ />
        <UrgencyCTA />
      </main>
      <Footer />
    </div>
  );
}
