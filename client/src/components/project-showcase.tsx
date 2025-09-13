import { Clock, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectShowcase() {
  const handleViewCaseStudy = () => {
    alert("Case study details would be displayed in a modal or new page");
  };

  const handleViewProject = (projectName: string) => {
    alert(`${projectName} details would be displayed`);
  };

  const metrics = {
    avgResolution: "2.3 hrs",
    satisfaction: "99.8%",
    escalations: "500+"
  };

  const projects = [
    {
      title: "E-commerce Platform Migration",
      description: "Seamless migration of high-traffic e-commerce platform to Oracle Cloud with zero downtime.",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      title: "Healthcare Data Breach Response", 
      description: "Rapid containment and remediation of security incident affecting patient data systems.",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Recent Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest escalation resolutions and discover how we've helped enterprise clients overcome critical challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Case Study Card */}
          <div className="lg:col-span-2 bg-card rounded-xl shadow-lg overflow-hidden" data-testid="card-featured-case">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Complex enterprise network infrastructure case study" 
              className="w-full h-64 object-cover"
              data-testid="img-featured-case"
            />
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Database
                </span>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3" data-testid="text-featured-title">
                Global Bank Database Recovery
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-featured-description">
                Successfully recovered critical financial database for a Fortune 500 bank within 4 hours, preventing millions in potential losses during peak trading hours.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Clock className="mr-1" size={16} /> 4 hours resolution
                  </span>
                  <span className="flex items-center">
                    <Shield className="mr-1" size={16} /> Zero data loss
                  </span>
                </div>
                <Button
                  variant="ghost"
                  onClick={handleViewCaseStudy}
                  className="text-primary hover:text-primary/80 font-medium p-0 h-auto"
                  data-testid="button-view-case-study"
                >
                  View Details <ExternalLink className="ml-1" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Stats Card */}
          <div className="bg-card rounded-xl shadow-lg p-8" data-testid="card-metrics">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="text-avg-resolution">
                    {metrics.avgResolution}
                  </div>
                  <div className="text-sm text-muted-foreground">Average Resolution Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary" data-testid="text-satisfaction">
                    {metrics.satisfaction}
                  </div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary" data-testid="text-escalations">
                    {metrics.escalations}
                  </div>
                  <div className="text-sm text-muted-foreground">Escalations Resolved</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Standard Project Cards */}
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card rounded-xl shadow-lg overflow-hidden"
              data-testid={`card-project-${index}`}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => handleViewProject(project.title)}
                  className="text-primary hover:text-primary/80 font-medium text-sm p-0 h-auto"
                  data-testid={`button-view-project-${index}`}
                >
                  Learn More <ExternalLink className="ml-1" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
