import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "Event Organizer",
    description: "Passionate about creating amazing hackathon experiences. John has been organizing tech events for over 5 years and loves bringing developers together.",
    initials: "JD",
  },
  {
    name: "Jane Smith",
    role: "Technical Lead",
    description: "Full-stack developer with expertise in modern web technologies. Jane ensures all technical aspects of the hackathon run smoothly.",
    initials: "JS",
  },
  {
    name: "Mike Johnson",
    role: "Community Manager",
    description: "Building and nurturing the developer community. Mike connects participants, mentors, and sponsors to create meaningful experiences.",
    initials: "MJ",
  },
  {
    name: "Sarah Williams",
    role: "Design Lead",
    description: "Creative designer focused on user experience. Sarah designs all the visual elements and ensures the hackathon looks amazing.",
    initials: "SW",
  },
  {
    name: "David Brown",
    role: "Sponsor Relations",
    description: "Connecting amazing companies with talented developers. David manages all sponsor relationships and partnerships.",
    initials: "DB",
  },
  {
    name: "Emily Davis",
    role: "Marketing & Outreach",
    description: "Spreading the word about HackSnippet. Emily handles all marketing efforts and ensures we reach the right audience.",
    initials: "ED",
  },
];

const Team = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">Our</span> Team
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              Meet the amazing people behind HackSnippet 4.0 who make this event
              possible.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="glass-effect hover:neon-glow transition-all duration-300 border-border/50"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24 border-2 border-primary">
                      {member.image ? (
                        <AvatarImage src={member.image} alt={member.name} />
                      ) : (
                        <AvatarFallback className="text-2xl font-display bg-primary/20 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </div>
                  <CardTitle className="font-display text-xl text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-primary text-sm">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join the Team CTA */}
          <div className="mt-16 glass-effect rounded-lg p-8 md:p-12 text-center neon-glow">
            <h2 className="font-display text-3xl text-primary neon-text mb-4">
              Want to Join Our Team?
            </h2>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
              We're always looking for passionate individuals to help make
              HackSnippet even better. If you're interested in joining our team,
              reach out to us!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
