import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="HackSnippet 4.0"
              className="h-10 w-auto drop-shadow-[0_0_10px_hsl(var(--primary))] animate-pulse-glow"
            />
            <span className="font-display text-xl font-bold text-primary neon-text hidden sm:block">
              HackSnippet 4.0
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-mono transition-all duration-300 hover:text-primary cursor-pointer ${activeSection === link.href.substring(1)
                    ? "text-primary neon-text"
                    : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://forms.gle/XY5DyGSMFUhqd6Wh8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="neon-glow font-mono">Register Now</Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-mono transition-all duration-300 hover:text-primary cursor-pointer ${activeSection === link.href.substring(1)
                      ? "text-primary neon-text"
                      : "text-muted-foreground"
                    }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://forms.gle/XY5DyGSMFUhqd6Wh8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full neon-glow font-mono">Register Now</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
