import { Layout } from "@/components/layout/Layout";
import { Trophy, Cpu, Globe, Wrench, Sparkles, GraduationCap } from "lucide-react";

const mainPrize = {
  place: "Overall Winner",
  prize: "Best Project",
  icon: Trophy,
  extras: ["Trophy", "Premium Swag Kit", "Certificate of Excellence"],
  gradient: "from-yellow-500/20 to-orange-500/20",
  borderColor: "border-yellow-500/50",
};

const categoryPrizes = [
  {
    category: "Best AI/ML Project",
    prize: "Track Winner",
    icon: Cpu,
    description: "Most innovative use of artificial intelligence or machine learning",
  },
  {
    category: "Best AppDev/WebDev Project",
    prize: "Track Winner",
    icon: Globe,
    description: "Most creative web or mobile application",
  },
  {
    category: "Best Hardware Project",
    prize: "Track Winner",
    icon: Wrench,
    description: "Most impressive hardware or IoT solution",
  },
  {
    category: "Best UI/UX",
    prize: "Secret Track Winner",
    icon: Sparkles,
    description: "Outstanding user interface and experience design",
    isSecret: true,
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

          {/* Main Prize */}
          <div className="flex justify-center mb-16">
            <div
              className={`glass-effect rounded-lg p-8 text-center hover:neon-glow transition-all duration-300 border ${mainPrize.borderColor} bg-gradient-to-br ${mainPrize.gradient} max-w-md w-full`}
            >
              <mainPrize.icon className="h-20 w-20 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl text-foreground mb-2">
                {mainPrize.place}
              </h3>
              <p className="font-display text-3xl text-primary neon-text mb-4">
                {mainPrize.prize}
              </p>
              <ul className="font-mono text-sm text-muted-foreground space-y-2">
                {mainPrize.extras.map((extra, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-primary">+</span> {extra}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Category Prizes */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-center text-primary neon-text mb-8">
              Track Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {categoryPrizes.map((prize, index) => (
                <div
                  key={index}
                  className={`glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300 ${prize.isSecret ? "border border-dashed border-primary/50" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <prize.icon className="h-10 w-10 text-primary shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg text-foreground">
                          {prize.category}
                        </h3>
                        {prize.isSecret && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                            🤫 Secret
                          </span>
                        )}
                      </div>
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
              {["Certificate", "Stickers", "Goodies"].map(
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
