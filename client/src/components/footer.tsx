import { Link } from "wouter";

export default function Footer() {
  const handleSlackJoin = () => {
    // Implementation for Slack channel invitation
    window.open("https://oracle.slack.com/channels/ht-escalation-team", "_blank");
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold text-xl">
                HT
              </div>
              <div className="text-lg font-semibold">
                High Touch Escalation Management
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Oracle's premier escalation management team, dedicated to resolving critical customer issues with speed, expertise, and excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/oracle"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-lg p-2 transition-colors duration-200"
                data-testid="link-linkedin"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                onClick={handleSlackJoin}
                className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-lg p-2 transition-colors duration-200"
                data-testid="link-slack"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
              </a>
              <a
                href="mailto:ht-escalation@oracle.com"
                className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-lg p-2 transition-colors duration-200"
                data-testid="link-email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.967l9.397 7.059 9.397-7.059h.967A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link href="/" className="hover:text-secondary-foreground transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-foreground transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary-foreground transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-foreground transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Slack Integration */}
          <div>
            <h4 className="font-semibold mb-4">Connect with Us</h4>
            <div className="bg-secondary-foreground/10 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
                </svg>
                <span className="font-medium">Slack Channel</span>
              </div>
              <p className="text-sm text-secondary-foreground/80 mb-3">
                Join our dedicated escalation channel for real-time updates and support.
              </p>
              <button
                onClick={handleSlackJoin}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                data-testid="button-join-slack"
              >
                Join #ht-escalation-team
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 mt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 Oracle Corporation. All rights reserved. | High Touch Escalation Management Team</p>
        </div>
      </div>
    </footer>
  );
}
