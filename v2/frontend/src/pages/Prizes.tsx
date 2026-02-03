import { Layout } from "@/components/layout/Layout";
import { Trophy, Medal, Award, Star, Cpu, Globe, Heart, Leaf, GraduationCap } from "lucide-react";

const mainPrizes = [
  {
    place: "1st Place",
    prize: "Best Project",
    icon: Trophy,
    extras: ["Trophy", "Premium Swag Kit", "Certificate of Excellence"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/50",
  },
  {
    place: "2nd Place",
    prize: "Runner Up",
    icon: Medal,
    extras: ["Medal", "Swag Kit", "Certificate of Achievement"],
    gradient: "from-gray-300/20 to-gray-400/20",
    borderColor: "border-gray-400/50",
  },
  {
    place: "3rd Place",
    prize: "Second Runner Up",
    icon: Award,
    extras: ["Medal", "Swag Pack", "Certificate of Merit"],
    gradient: "from-orange-600/20 to-orange-700/20",
    borderColor: "border-orange-600/50",
  },
];

const categoryPrizes = [
  {
    category: "Best AI/ML Project",
    prize: "Track Winner",
    icon: Cpu,
    description: "Most innovative use of artificial intelligence or machine learning",
  },
  {
    category: "Best Web3 Project",
    prize: "Track Winner",
    icon: Globe,
    description: "Most creative blockchain or decentralized application",
  },
  {
    category: "Best Health Tech",
    prize: "Track Winner",
    icon: Heart,
    description: "Most impactful solution for healthcare challenges",
  },
  {
    category: "Best Sustainability Hack",
    prize: "Track Winner",
    icon: Leaf,
    description: "Best project addressing environmental issues",
  },
  {
    category: "People's Choice",
    prize: "Fan Favorite",
    icon: Star,
    description: "Fan favorite voted by all participants",
  },
];

const Prizes = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">Prizes</span> & Awards
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              Exciting prizes for the best projects and track winners. All participants
              receive certificates of participation!
            </p>
          </div>

          {/* Main Prizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {mainPrizes.map((prize, index) => (
              <div
                key={index}
                className={`glass-effect rounded-lg p-8 text-center hover:neon-glow transition-all duration-300 border ${prize.borderColor} bg-gradient-to-br ${prize.gradient} ${index === 0 ? "md:order-2 md:scale-110" : index === 1 ? "md:order-1" : "md:order-3"}`}
              >
                <prize.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {prize.place}
                </h3>
                <p className="font-display text-3xl text-primary neon-text mb-4">
                  {prize.prize}
                </p>
                <ul className="font-mono text-sm text-muted-foreground space-y-2">
                  {prize.extras.map((extra, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-primary">+</span> {extra}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Category Prizes */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-center text-primary neon-text mb-8">
              Track Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPrizes.map((prize, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <prize.icon className="h-10 w-10 text-primary shrink-0" />
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {prize.category}
                      </h3>
                      <p className="font-display text-xl text-primary">
                        {prize.prize}
                      </p>
                      <p className="font-mono text-sm text-muted-foreground mt-2">
                        {prize.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="glass-effect rounded-lg p-8 text-center">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl text-primary neon-text mb-4">
              Everyone's a Winner
            </h2>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
              All participants receive certificates of participation and exclusive
              HackSnippet 4.0 swag!
            </p>
            <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
              {["Certificate", "T-Shirt", "Stickers", "Goodies", "Refreshments"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-primary/50 text-primary"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Prizes;
