import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Terminal,
  Zap,
  Users,
  Gift,
  Code,
  Trophy,
  Lightbulb,
  Rocket,
  Heart,
  Calendar,
  MapPin,
  Clock,
  Target,
  FileText,
  Presentation,
  AlertTriangle,
  Cpu,
  Globe,
  Wrench,
  Sparkles,
  GraduationCap,
  Mail,
} from "lucide-react";
import logo from "@/assets/logo.svg";

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="mb-8 animate-float">
            <img
              src={logo}
              alt="HackSnippet 4.0"
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-[0_0_30px_hsl(var(--primary))] animate-pulse-glow"
            />
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-primary neon-text">HackSnippet</span>
            <span className="text-foreground"> 4.0</span>
          </h1>

          <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            &gt; Initializing the ultimate hackathon experience...
            <br />
            &gt; 8 hours | All Students | 100% Free
          </p>

          <div className="mb-10">
            <CountdownTimer targetDate="2026-02-20T23:59:00" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://forms.gle/XY5DyGSMFUhqd6Wh8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="neon-glow font-mono text-lg px-8 py-6">
                <Terminal className="mr-2" />
                Register Now
              </Button>
            </a>
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="font-mono text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              >
                Learn More
              </Button>
            </a>
          </div>

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
                <h3 className="font-display text-2xl text-primary neon-text">{stat.label}</h3>
                <p className="font-mono text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Join Section
const WhyJoinSection = () => {
  const reasons = [
    { icon: Code, title: "Build Something Amazing", description: "Turn your ideas into reality. 8 hours to create, innovate, and ship." },
    { icon: Trophy, title: "Win Exciting Prizes", description: "Compete for prizes across multiple tracks and categories." },
    { icon: Users, title: "Network & Connect", description: "Meet like-minded developers, designers, and entrepreneurs." },
    { icon: Lightbulb, title: "Learn New Skills", description: "Challenge yourself, explore new technologies, and level up your tech stack." },
    { icon: Rocket, title: "Kickstart Your Journey", description: "Perfect for students ready to dive into the tech world." },
    { icon: Heart, title: "Have Fun", description: "Certificates, great company, and unforgettable memories await you." },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary neon-text">&lt;</span>
            Why Join?
            <span className="text-primary neon-text">/&gt;</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            HackSnippet 4.0 isn't just a hackathon—it's an experience that will
            transform the way you think about building technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300 group"
            >
              <reason.icon className="h-10 w-10 text-primary mb-4 group-hover:animate-pulse-glow" />
              <h3 className="font-display text-xl text-foreground mb-2">{reason.title}</h3>
              <p className="font-mono text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">About</span> HackSnippet 4.0
          </h2>
        </div>

        <div className="glass-effect rounded-lg p-8 mb-12">
          <h3 className="font-display text-2xl text-primary neon-text mb-4">What is HackSnippet?</h3>
          <p className="font-mono text-muted-foreground leading-relaxed mb-4">
            HackSnippet is a two-stage hackathon for all students of UEM and IEM where developers,
            designers, and innovators come together to build groundbreaking projects.
          </p>
          <p className="font-mono text-muted-foreground leading-relaxed">
            Now in its fourth edition, HackSnippet 4.0 brings together the brightest minds for an
            exciting journey from idea submission to a grand offline exhibition.
          </p>
        </div>

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
              Submit your innovative ideas online. Our panel will review and select the best
              submissions for the final stage.
            </p>
            <div className="font-mono text-sm text-primary">📅 4th Feb - 20th Feb, 2026</div>
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
              Selected teams showcase their projects at IIT Research Park. 8 hours of intense
              building, presenting, and competing for prizes.
            </p>
            <div className="font-mono text-sm text-primary">📅 28th Feb, 2026 • ⏱️ 8 Hours</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Calendar, title: "Final Date", content: "February 28, 2026", subtext: "Offline Exhibition Day" },
            { icon: MapPin, title: "Venue", content: "IIT Research Park", subtext: "Offline finals location" },
            { icon: Users, title: "Eligibility", content: "UEM & IEM Students", subtext: "All years (1st to 4th)" },
            { icon: Clock, title: "Duration", content: "8 Hours", subtext: "Intense offline exhibition" },
            { icon: Target, title: "Tracks", content: "4 Categories", subtext: "AI/ML, AppDev/WebDev, Hardware, UI/UX" },
            { icon: Zap, title: "Format", content: "Hybrid", subtext: "Online submission → Offline finals" },
          ].map((item, index) => (
            <div key={index} className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300">
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
              <p className="font-mono text-primary text-lg">{item.content}</p>
              <p className="font-mono text-sm text-muted-foreground">{item.subtext}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-lg p-8 mb-12">
          <h3 className="font-display text-2xl text-primary neon-text mb-4">Eligibility</h3>
          <ul className="font-mono text-muted-foreground space-y-3">
            {[
              "Open to all students of UEM and IEM (1st to 4th year)",
              "No prior hackathon experience required",
              "All skill levels welcome - beginners encouraged!",
              "Solo or teams of 2-5 members",
              "Bring your student ID for verification at the offline event",
              "100% Free - No registration fee",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-effect rounded-lg p-8 border border-yellow-500/30">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <h3 className="font-display text-2xl text-yellow-500">Rules & Regulations</h3>
          </div>
          <ol className="font-mono text-muted-foreground space-y-4 list-decimal list-inside">
            <li className="pl-2">Participation is open to registered candidates only.</li>
            <li className="pl-2">Teams must be formed according to the guidelines provided during registration.</li>
            <li className="pl-2">All solutions must be original and developed during the hackathon phase.</li>
            <li className="pl-2">Usage of open-source libraries and publicly available APIs is permitted.</li>
            <li className="pl-2">All projects must be completed and submitted within the stipulated time.</li>
            <li className="pl-2">Participants are expected to maintain discipline and professional conduct.</li>
            <li className="pl-2">Any form of misconduct will result in disqualification.</li>
            <li className="pl-2">Projects will be evaluated based on innovation, technical implementation, and presentation.</li>
            <li className="pl-2">The decision of the judges and organizers shall be final and binding.</li>
            <li className="pl-2">Participants must bring their own devices.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

// Schedule Section
const ScheduleSection = () => {
  const scheduleData = [
    { time: "08:00 AM", event: "Check-in & Registration", description: "Get your badges and swag!" },
    { time: "09:00 AM", event: "Opening Ceremony", description: "Welcome speech and hackathon kick-off" },
    { time: "10:00 AM", event: "Hacking Begins!", description: "Start building your project" },
    { time: "01:00 - 01:30 PM", event: "Lunch", description: "Refuel with delicious food" },
    { time: "06:30 PM", event: "Event Ends", description: "Participation certificates will be provided" },
    { time: "07:00 PM", event: "Prize Distribution", description: "Awards ceremony and winner announcements" },
  ];

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">Event</span> Schedule
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            One day packed with coding, learning, and fun. Here's what's in store.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 hover:neon-glow transition-all duration-300"
            >
              <div className="font-mono text-primary text-lg md:w-40 shrink-0">{item.time}</div>
              <div className="flex-1">
                <h3 className="font-display text-lg text-foreground">{item.event}</h3>
                <p className="font-mono text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Prizes Section
const PrizesSection = () => {
  const categoryPrizes = [
    { category: "Best AI/ML Project", prize: "Track Winner", icon: Cpu, description: "Most innovative use of artificial intelligence or machine learning" },
    { category: "Best AppDev/WebDev Project", prize: "Track Winner", icon: Globe, description: "Most creative web or mobile application" },
    { category: "Best Hardware Project", prize: "Track Winner", icon: Wrench, description: "Most impressive hardware or IoT solution" },
    { category: "Best UI/UX", prize: "Secret Track Winner", icon: Sparkles, description: "Outstanding user interface and experience design", isSecret: true },
  ];

  return (
    <section id="prizes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">Prizes</span> & Awards
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Exciting prizes for the best projects and track winners. All participants receive certificates!
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="glass-effect rounded-lg p-8 text-center hover:neon-glow transition-all duration-300 border border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 max-w-md w-full">
            <Trophy className="h-20 w-20 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-2">Overall Winner</h3>
            <p className="font-display text-3xl text-primary neon-text mb-4">Best Project</p>
            <ul className="font-mono text-sm text-muted-foreground space-y-2">
              {["Trophy", "Premium Swag Kit", "Certificate of Excellence"].map((extra, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <span className="text-primary">+</span> {extra}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl text-center text-primary neon-text mb-8">Track Awards</h3>
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
                      <h4 className="font-display text-lg text-foreground">{prize.category}</h4>
                      {prize.isSecret && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          🤫 Secret
                        </span>
                      )}
                    </div>
                    <p className="font-display text-xl text-primary">{prize.prize}</p>
                    <p className="font-mono text-sm text-muted-foreground mt-2">{prize.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-lg p-8 text-center">
          <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl text-primary neon-text mb-4">Everyone's a Winner</h3>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
            All participants receive certificates of participation and exclusive HackSnippet 4.0 swag!
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
            {["Certificate", "Stickers", "Goodies"].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-primary/50 text-primary">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sponsors Section
const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">Our</span> Sponsors
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            HackSnippet 4.0 is made possible by these amazing companies and organizations.
          </p>
        </div>

        <div className="glass-effect rounded-lg p-12 text-center mb-12 max-w-2xl mx-auto">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl text-primary neon-text mb-4">Sponsors Coming Soon</h3>
          <p className="font-mono text-muted-foreground">
            We're currently in talks with amazing companies. Stay tuned for announcements!
          </p>
        </div>

        <div className="glass-effect rounded-lg p-8 md:p-12 text-center neon-glow">
          <h3 className="font-display text-3xl text-primary neon-text mb-4">Become a Sponsor</h3>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto mb-6">
            Want to support the next generation of innovators? Partner with HackSnippet 4.0 and get
            your brand in front of 500+ talented developers, designers, and entrepreneurs.
          </p>
          <a href="mailto:hacksnippet@gmail.com">
            <Button size="lg" className="font-mono">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqData = [
    {
      category: "General",
      questions: [
        { q: "What is HackSnippet 4.0?", a: "HackSnippet 4.0 is a two-stage hackathon where developers, designers, and innovators come together to build amazing projects. It's our fourth edition and the biggest one yet!" },
        { q: "When and where is the event?", a: "Stage 1 (Online Idea Submission) runs from 4th Feb - 20th Feb, 2026. Stage 2 (Offline Exhibition) takes place on 28th Feb, 2026 at IIT Research Park for 8 hours." },
        { q: "Is there a registration fee?", a: "No! HackSnippet 4.0 is completely free to participate. There's no registration fee at all." },
        { q: "How does the two-stage format work?", a: "First, submit your innovative idea online during Stage 1. Our panel will review submissions and select the best ideas. Selected teams then showcase their projects at the offline exhibition on 28th Feb." },
      ],
    },
    {
      category: "Eligibility & Teams",
      questions: [
        { q: "Who can participate?", a: "All students of UEM and IEM from 1st year to 4th year are eligible to participate. All skill levels are welcome!" },
        { q: "Do I need a team to participate?", a: "You can participate solo or form a team. Teams can have 1-5 members - it's completely flexible!" },
        { q: "What if I don't have a team?", a: "No worries! You can participate solo, or find teammates through our community channels before the event." },
        { q: "Do I need prior hackathon experience?", a: "Not at all! Many first-time hackers participate and even win. Beginners are encouraged to join!" },
      ],
    },
    {
      category: "Technical",
      questions: [
        { q: "What are the tracks/categories?", a: "We have 4 tracks: AI/ML, AppDev/WebDev, Hardware, and a secret UI/UX track. Choose the one that best fits your project!" },
        { q: "Are there any restrictions on what I can build?", a: "Your project should align with one of our tracks. You can use open-source libraries and APIs. Be creative and innovative!" },
        { q: "What technologies can I use?", a: "You can use any programming language, framework, or technology stack you prefer. There are no restrictions on the tools you use." },
      ],
    },
    {
      category: "Prizes & Judging",
      questions: [
        { q: "How are projects judged?", a: "Projects are judged on innovation, technical complexity, design, and impact. Each team presents their project to our panel of judges at the offline exhibition." },
        { q: "What are the prizes?", a: "We have an Overall Winner prize (Trophy, Premium Swag Kit, Certificate of Excellence) plus Track Winner prizes for AI/ML, AppDev/WebDev, Hardware, and a secret UI/UX track!" },
        { q: "Do all participants get certificates?", a: "Yes! All participants receive certificates of participation, stickers, and goodies." },
      ],
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">Frequently</span> Asked Questions
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to
            contact us!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="glass-effect rounded-lg p-6">
              <h3 className="font-display text-xl text-primary neon-text mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${catIndex}-${index}`} className="border-border">
                    <AccordionTrigger className="font-mono text-foreground text-left hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-mono text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-mono text-muted-foreground mb-4">Still have questions?</p>
          <a href="mailto:hacksnippet@gmail.com" className="font-mono text-primary hover:underline">
            hacksnippet@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

// Organizers Section
const OrganizersSection = () => {
  const organizers = [
    {
      name: "Koustav Das",
      role: "Event Lead",
      image: "/pfppics/KoustavDas.png"
    },
    {
      name: "Parag Chowdhury",
      role: "Logistics Lead",
      image: "/pfppics/ParagChoudhury.png"
    },
    {
      name: "Parambrata Maitra",
      role: "Design Lead",
      image: "/pfppics/ParambrataMaitra.png"
    },
    {
      name: "Swapnil Roy",
      role: "Tech Lead",
      image: "/pfppics/SwapnilRoy.png"
    },
    {
      name: "Nilanjana Pal",
      role: "Event Moderator",
      image: "/pfppics/NilanjanaPal.png"
    },
    {
      name: "Snehesh Gupta",
      role: "Sponsor Lead",
      image: "/pfppics/SneheshGupta.png"
    },
    {
      name: "Diptimoyee Patra",
      role: "Event Moderator",
      image: "/pfppics/DiptimoyeePatra.png"
    },
  ];

  return (
    <section id="organizers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary neon-text">Get to Know</span> Your Organizers
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Meet the talented team behind HackSnippet 4.0 who are working tirelessly
            to make this event an unforgettable experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-6 hover:neon-glow transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="mb-4 relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-all duration-300">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 24 24' fill='none' stroke='hsl(142 76% 45%)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='8' r='5'/%3E%3Cpath d='M20 21a8 8 0 1 0-16 0'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 animate-pulse-glow"></div>
              </div>

              <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {organizer.name}
              </h3>
              <p className="font-mono text-primary text-lg mb-3">{organizer.role}</p>

              <div className="mt-2">
                <span className="inline-block h-1 w-16 bg-primary/30 group-hover:bg-primary transition-all duration-300 rounded-full"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to connect with the organizers?
            Reach out to us at{' '}
            <a href="mailto:hacksnippet@gmail.com" className="text-primary hover:underline">
              hacksnippet@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Index Page
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyJoinSection />
      <AboutSection />
      <ScheduleSection />
      <PrizesSection />
      <SponsorsSection />
      <OrganizersSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
