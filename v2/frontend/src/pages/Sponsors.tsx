import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";

interface Sponsor {
  name: string;
  logo: string;
}

interface TierData {
  title: string;
  color: string;
  sponsors: Sponsor[];
}

const sponsorTiers: Record<string, TierData> = {
  // Add sponsors here when available, e.g.:
  // platinum: {
  //   title: "Platinum Sponsors",
  //   color: "text-cyan-400",
  //   sponsors: [{ name: "Company Name", logo: "🏢" }],
  // },
};

const Sponsors = () => {
  const hasSponsors = Object.keys(sponsorTiers).length > 0;

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">Our</span> Sponsors
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              HackSnippet 4.0 is made possible by these amazing companies and
              organizations.
            </p>
          </div>

          {/* Sponsor Tiers or Coming Soon */}
          {hasSponsors ? (
            Object.entries(sponsorTiers).map(([tier, data]) => (
              <div key={tier} className="mb-12">
                <h2 className={`font-display text-2xl text-center ${data.color} mb-8`}>
                  {data.title}
                </h2>
                <div
                  className={`grid gap-6 justify-center ${tier === "platinum"
                      ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                      : tier === "gold"
                        ? "grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto"
                        : tier === "silver"
                          ? "grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto"
                          : "grid-cols-3 md:grid-cols-5 max-w-5xl mx-auto"
                    }`}
                >
                  {data.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className={`glass-effect rounded-lg flex items-center justify-center hover:neon-glow transition-all duration-300 ${tier === "platinum"
                          ? "p-12 aspect-video"
                          : tier === "gold"
                            ? "p-8 aspect-video"
                            : tier === "silver"
                              ? "p-6 aspect-square"
                              : "p-4 aspect-square"
                        }`}
                    >
                      <div className="text-center">
                        <div
                          className={`font-display ${data.color} ${tier === "platinum"
                              ? "text-5xl"
                              : tier === "gold"
                                ? "text-4xl"
                                : tier === "silver"
                                  ? "text-2xl"
                                  : "text-xl"
                            }`}
                        >
                          {sponsor.logo}
                        </div>
                        <p
                          className={`font-mono text-muted-foreground mt-2 ${tier === "bronze" ? "text-xs" : "text-sm"
                            }`}
                        >
                          {sponsor.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="glass-effect rounded-lg p-12 text-center mb-12 max-w-2xl mx-auto">
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl text-primary neon-text mb-4">
                Sponsors Coming Soon
              </h2>
              <p className="font-mono text-muted-foreground">
                We're currently in talks with amazing companies. Stay tuned for announcements!
              </p>
            </div>
          )}

          {/* Become a Sponsor CTA */}
          <div className="glass-effect rounded-lg p-8 md:p-12 text-center neon-glow">
            <h2 className="font-display text-3xl text-primary neon-text mb-4">
              Become a Sponsor
            </h2>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
              Want to support the next generation of innovators? Partner with
              HackSnippet 4.0 and get your brand in front of 500+ talented
              developers, designers, and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hacksnippet@gmail.com">
                <Button size="lg" className="font-mono">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
