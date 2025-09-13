import { AlertTriangle, Users, Settings, TrendingUp } from "lucide-react";

export default function ServiceOfferings() {
  const services = [
    {
      icon: AlertTriangle,
      title: "Critical Escalation Response",
      description: "24/7 monitoring and immediate response to Severity 1 incidents with guaranteed resolution timelines.",
      bgColor: "bg-primary"
    },
    {
      icon: Users,
      title: "Executive Engagement", 
      description: "Direct liaison with C-level executives and stakeholders for transparent communication throughout resolution.",
      bgColor: "bg-secondary"
    },
    {
      icon: Settings,
      title: "Technical Deep Dives",
      description: "Expert analysis and custom solutions for complex technical challenges requiring specialized intervention.",
      bgColor: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "Post-Incident Analysis",
      description: "Comprehensive root cause analysis and preventive measures to avoid future escalations.",
      bgColor: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Service Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive escalation management services designed to resolve critical issues and maintain business continuity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced monitoring and escalation management systems" 
              className="rounded-xl shadow-2xl"
              data-testid="img-service-overview"
            />
          </div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={service.title} className="flex items-start space-x-4" data-testid={`service-item-${index}`}>
                <div className={`${service.bgColor} text-white rounded-lg p-3 flex-shrink-0`}>
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
