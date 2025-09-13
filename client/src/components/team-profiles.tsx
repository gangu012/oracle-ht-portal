export default function TeamProfiles() {
  const teamMembers = [
    {
      name: "David Chen",
      role: "Senior Escalation Manager",
      description: "15+ years in Oracle support, specializing in database performance and critical infrastructure escalations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Sarah Rodriguez", 
      role: "Technical Lead",
      description: "Expert in cloud migrations and enterprise architecture with 12 years of escalation resolution experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Michael Thompson",
      role: "Customer Success Director", 
      description: "Relationship management specialist ensuring seamless communication during critical escalations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our seasoned professionals bring decades of experience in critical escalation management and customer success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-card rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              data-testid={`card-team-member-${index}`}
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                data-testid={`img-team-member-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid={`text-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3" data-testid={`text-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm" data-testid={`text-description-${index}`}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
