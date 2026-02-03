import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="HackSnippet 4.0" className="h-10 w-auto" />
              <span className="font-display text-xl font-bold text-primary neon-text">
                HackSnippet 4.0
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-mono max-w-md">
              Join the ultimate coding experience. Build, innovate, and compete
              with the brightest minds in tech. 8 hours of non-stop hacking awaits!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Schedule", "Prizes", "Sponsors", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-primary mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:hacksnippet@gmail.com"
                className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                hacksnippet@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <Phone size={16} />
                <span>Koustav Das: +91 91239 24645</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <Phone size={16} />
                <span>Parag Chowdhury: +91 62896 52052</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm font-mono text-muted-foreground">
            © 2026 HackSnippet 4.0. All rights reserved. Built with 💚 by the
            HackSnippet Team.
          </p>
        </div>
      </div>
    </footer>
  );
};
