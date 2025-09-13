import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import TeamProfiles from "@/components/team-profiles";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TeamProfiles />
      <Footer />
    </div>
  );
}
