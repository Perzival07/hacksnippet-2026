import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Schedule", path: "/schedule" },
  { name: "Prizes", path: "/prizes" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "FAQ", path: "/faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="HackSnippet 4.0" className="h-10 w-auto drop-shadow-[0_0_10px_hsl(var(--primary))] animate-pulse-glow" />
            <span className="font-display text-xl font-bold text-primary neon-text hidden sm:block">
              HackSnippet 4.0
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-mono transition-all duration-300 hover:text-primary ${location.pathname === link.path
                    ? "text-primary neon-text"
                    : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register">
              <Button className="neon-glow font-mono">Register Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-mono transition-all duration-300 hover:text-primary ${location.pathname === link.path
                      ? "text-primary neon-text"
                      : "text-muted-foreground"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full neon-glow font-mono">Register Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
