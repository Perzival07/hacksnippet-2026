import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const sponsorTiers = {
  platinum: {
    title: "Platinum Sponsors",
    color: "text-cyan-400",
    sponsors: [
      { name: "TechCorp", logo: "TC" },
      { name: "InnovateLabs", logo: "IL" },
    ],
  },
  gold: {
    title: "Gold Sponsors",
    color: "text-yellow-400",
    sponsors: [
      { name: "CloudStack", logo: "CS" },
      { name: "DevTools Inc", logo: "DT" },
      { name: "DataFlow", logo: "DF" },
    ],
  },
  silver: {
    title: "Silver Sponsors",
    color: "text-gray-300",
    sponsors: [
      { name: "CodeBase", logo: "CB" },
      { name: "APIHub", logo: "AH" },
      { name: "SecureNet", logo: "SN" },
      { name: "AppForge", logo: "AF" },
    ],
  },
  bronze: {
    title: "Bronze Sponsors",
    color: "text-orange-400",
    sponsors: [
      { name: "StartupXYZ", logo: "SX" },
      { name: "TechMentor", logo: "TM" },
      { name: "CodeCamp", logo: "CC" },
      { name: "DevCommunity", logo: "DC" },
      { name: "HackersHub", logo: "HH" },
    ],
  },
};

const Sponsors = () => {
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

          {/* Sponsor Tiers */}
          {Object.entries(sponsorTiers).map(([tier, data]) => (
            <div key={tier} className="mb-12">
              <h2 className={`font-display text-2xl text-center ${data.color} mb-8`}>
                {data.title}
              </h2>
              <div
                className={`grid gap-6 justify-center ${
                  tier === "platinum"
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
                    className={`glass-effect rounded-lg flex items-center justify-center hover:neon-glow transition-all duration-300 ${
                      tier === "platinum"
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
                        className={`font-display ${data.color} ${
                          tier === "platinum"
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
                        className={`font-mono text-muted-foreground mt-2 ${
                          tier === "bronze" ? "text-xs" : "text-sm"
                        }`}
                      >
                        {sponsor.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

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
              <Button size="lg" className="font-mono">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="font-mono">
                Download Sponsorship Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
