import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Users, Clock, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">About</span> HackSnippet 4.0
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              The biggest hackathon of the year is back, bigger and better than ever.
            </p>
          </div>

          {/* What is HackSnippet */}
          <div className="glass-effect rounded-lg p-8 mb-12">
            <h2 className="font-display text-2xl text-primary neon-text mb-4">
              What is HackSnippet?
            </h2>
            <p className="font-mono text-muted-foreground leading-relaxed mb-4">
              HackSnippet is an 8-hour hackathon exclusively for 1st year students
              where developers, designers, and innovators come together to build
              groundbreaking projects. This is your chance to push your limits,
              learn new technologies, and create something amazing.
            </p>
            <p className="font-mono text-muted-foreground leading-relaxed">
              Now in its fourth edition, HackSnippet 4.0 brings together the brightest
              freshers for an intense day of coding, collaboration, and creativity.
            </p>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Calendar,
                title: "Date",
                content: "March 14, 2026",
                subtext: "Saturday 8:30 AM - 4:30 PM",
              },
              {
                icon: MapPin,
                title: "Venue",
                content: "Tech Innovation Hub",
                subtext: "To be announced",
              },
              {
                icon: Users,
                title: "Eligibility",
                content: "1st Year Only",
                subtext: "Freshers exclusive hackathon",
              },
              {
                icon: Clock,
                title: "Duration",
                content: "8 Hours",
                subtext: "Intense hacking sprint",
              },
              {
                icon: Target,
                title: "Tracks",
                content: "5 Categories",
                subtext: "AI/ML, Web3, Health, Sustainability, Open",
              },
              {
                icon: Zap,
                title: "Format",
                content: "In-Person",
                subtext: "On-site participation",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300"
              >
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-lg text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-primary text-lg">{item.content}</p>
                <p className="font-mono text-sm text-muted-foreground">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="glass-effect rounded-lg p-8">
            <h2 className="font-display text-2xl text-primary neon-text mb-4">
              Eligibility
            </h2>
            <ul className="font-mono text-muted-foreground space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Open to 1st year students only</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>No prior hackathon experience required</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>All skill levels welcome - beginners encouraged!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Teams of 2-4 members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Bring your student ID for verification</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
