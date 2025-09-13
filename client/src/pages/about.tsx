import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceOfferings from "@/components/service-offerings";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our comprehensive escalation management services and capabilities that keep Oracle customers running smoothly.
          </p>
        </div>
      </section>

      <ServiceOfferings />
      
      {/* Mission Statement */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide unparalleled escalation management services that ensure critical customer issues are resolved 
                swiftly and effectively, maintaining business continuity and exceeding customer expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-muted-foreground">24/7 availability for critical escalations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Expert technical knowledge across Oracle products</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <p className="text-muted-foreground">Direct executive communication and transparency</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration and problem solving"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
