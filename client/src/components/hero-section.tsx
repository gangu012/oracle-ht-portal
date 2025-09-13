import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownload = () => {
    // Create a dummy file for download
    const element = document.createElement("a");
    const file = new Blob(
      [
        `High Touch Escalation Management Team Resources\n\n` +
        `Emergency Contacts:\n` +
        `- Hotline: +1 (800) ORACLE-1\n` +
        `- Email: ht-escalation@oracle.com\n` +
        `- Slack: #ht-escalation-team\n\n` +
        `Response Time Guarantees:\n` +
        `- Severity 1: 15 minutes\n` +
        `- Severity 2: 1 hour\n` +
        `- Severity 3: 4 hours\n\n` +
        `Team Members:\n` +
        `- David Chen - Senior Escalation Manager\n` +
        `- Sarah Rodriguez - Technical Lead\n` +
        `- Michael Thompson - Customer Success Director\n`
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "HT-Team-Resources.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/80"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Large HT Logo */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-6xl font-bold">
              HT
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          High Touch Escalation Management
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
          Oracle Support's Elite Crisis Resolution Team
        </p>
        <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
          Dedicated to resolving the most critical customer escalations with unparalleled expertise, 
          rapid response times, and comprehensive solutions that ensure business continuity.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transform hover:scale-105 shadow-lg transition-all duration-200"
            data-testid="button-download"
          >
            <Download className="mr-2" size={20} />
            Download Team Resources
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg font-semibold transition-all duration-200"
          >
            <a href="/about" data-testid="link-learn-more">
              Learn More About Our Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
