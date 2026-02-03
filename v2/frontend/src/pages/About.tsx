import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Users, Clock, Target, Zap, FileText, Presentation } from "lucide-react";

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
              HackSnippet is a two-stage hackathon for all students of UEM and IEM
              where developers, designers, and innovators come together to build
              groundbreaking projects. This is your chance to push your limits,
              learn new technologies, and create something amazing.
            </p>
            <p className="font-mono text-muted-foreground leading-relaxed">
              Now in its fourth edition, HackSnippet 4.0 brings together the brightest
              minds for an exciting journey from idea submission to a grand offline exhibition.
            </p>
          </div>

          {/* Two Stages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass-effect rounded-lg p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-display text-xl text-primary neon-text">Stage 1</h3>
                  <p className="font-mono text-sm text-muted-foreground">Online Phase</p>
                </div>
              </div>
              <p className="font-mono text-foreground text-lg mb-2">Idea Submission</p>
              <p className="font-mono text-muted-foreground mb-4">
                Submit your innovative ideas online. Our panel will review and select the best submissions for the final stage.
              </p>
              <div className="font-mono text-sm text-primary">
                📅 4th Feb - 20th Feb, 2026
              </div>
            </div>

            <div className="glass-effect rounded-lg p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <Presentation className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-display text-xl text-primary neon-text">Stage 2</h3>
                  <p className="font-mono text-sm text-muted-foreground">Offline Phase</p>
                </div>
              </div>
              <p className="font-mono text-foreground text-lg mb-2">Exhibition & Finals</p>
              <p className="font-mono text-muted-foreground mb-4">
                Selected teams showcase their projects at IIT Research Park. 8 hours of intense building, presenting, and competing for prizes.
              </p>
              <div className="font-mono text-sm text-primary">
                📅 28th Feb, 2026 • ⏱️ 8 Hours
              </div>
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Calendar,
                title: "Final Date",
                content: "February 28, 2026",
                subtext: "Offline Exhibition Day",
              },
              {
                icon: MapPin,
                title: "Venue",
                content: "IIT Research Park",
                subtext: "Offline finals location",
              },
              {
                icon: Users,
                title: "Eligibility",
                content: "UEM & IEM Students",
                subtext: "All years (1st to 4th)",
              },
              {
                icon: Clock,
                title: "Duration",
                content: "8 Hours",
                subtext: "Intense offline exhibition",
              },
              {
                icon: Target,
                title: "Tracks",
                content: "4 Categories",
                subtext: "AI/ML, AppDev/WebDev, Hardware, UI/UX",
              },
              {
                icon: Zap,
                title: "Format",
                content: "Hybrid",
                subtext: "Online submission → Offline finals",
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
                <span>Open to all students of UEM and IEM (1st to 4th year)</span>
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
                <span>Solo or teams of 2-5 members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Bring your student ID for verification at the offline event</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>100% Free - No registration fee</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
