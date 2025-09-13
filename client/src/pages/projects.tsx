import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectShowcase from "@/components/project-showcase";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent escalation resolutions and see how we've helped enterprise clients overcome their most critical challenges.
          </p>
        </div>
      </section>

      <ProjectShowcase />
      
      {/* Additional Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">More Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing ERP Crisis",
                description: "Resolved critical ERP system failure affecting global manufacturing operations within 6 hours.",
                severity: "Severity 1",
                duration: "6 hours"
              },
              {
                title: "Financial Services Outage",
                description: "Restored trading platform availability during market hours with zero data loss.",
                severity: "Severity 1", 
                duration: "2.5 hours"
              },
              {
                title: "Retail Chain Integration",
                description: "Successfully integrated point-of-sale systems across 500+ retail locations.",
                severity: "Severity 2",
                duration: "3 days"
              }
            ].map((project, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg p-6" data-testid={`card-additional-project-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.severity}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3" data-testid={`text-additional-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-additional-description-${index}`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
