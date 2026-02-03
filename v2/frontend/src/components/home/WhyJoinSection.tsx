import { Code, Trophy, Users, Lightbulb, Rocket, Heart } from "lucide-react";

const reasons = [
  {
    icon: Code,
    title: "Build Something Amazing",
    description:
      "Turn your ideas into reality. 8 hours to create, innovate, and ship.",
  },
  {
    icon: Trophy,
    title: "Win Exciting Prizes",
    description:
      "Compete for prizes across multiple tracks and categories.",
  },
  {
    icon: Users,
    title: "Network & Connect",
    description:
      "Meet like-minded developers, designers, and entrepreneurs.",
  },
  {
    icon: Lightbulb,
    title: "Learn New Skills",
    description:
      "Attend workshops, get mentorship, and level up your tech stack.",
  },
  {
    icon: Rocket,
    title: "Kickstart Your Journey",
    description:
      "Perfect for 1st year students ready to dive into the tech world.",
  },
  {
    icon: Heart,
    title: "Have Fun",
    description:
      "Food, swag, certificates, and unforgettable memories await you.",
  },
];

export const WhyJoinSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary neon-text">&lt;</span>
            Why Join?
            <span className="text-primary neon-text">/&gt;</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            HackSnippet 4.0 isn't just a hackathon—it's an experience that will
            transform the way you think about building technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300 group"
            >
              <reason.icon className="h-10 w-10 text-primary mb-4 group-hover:animate-pulse-glow" />
              <h3 className="font-display text-xl text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
