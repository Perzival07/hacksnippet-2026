import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { Terminal, Zap, Users, Gift } from "lucide-react";
import logo from "@/assets/logo.svg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 font-mono text-xs animate-matrix-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {Math.random() > 0.5 ? "01010101" : "10101010"}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <img
              src={logo}
              alt="HackSnippet 4.0"
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-[0_0_30px_hsl(var(--primary))] animate-pulse-glow"
            />
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-primary neon-text">HackSnippet</span>
            <span className="text-foreground"> 4.0</span>
          </h1>

          {/* Tagline */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            &gt; Initializing the ultimate hackathon experience...
            <br />
            &gt; 8 hours | All Students | 100% Free
          </p>

          {/* Countdown */}
          <div className="mb-10">
            <CountdownTimer targetDate="2026-02-20T23:59:00" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://forms.gle/XY5DyGSMFUhqd6Wh8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="neon-glow font-mono text-lg px-8 py-6"
              >
                <Terminal className="mr-2" />
                Register Now
              </Button>
            </a>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Terminal, label: "8 Hours", desc: "Intense hacking" },
              { icon: Users, label: "All Years", desc: "1st to 4th year" },
              { icon: Gift, label: "100% Free", desc: "No registration fee" },
              { icon: Zap, label: "Prizes", desc: "For all tracks" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-display text-2xl text-primary neon-text">
                  {stat.label}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
