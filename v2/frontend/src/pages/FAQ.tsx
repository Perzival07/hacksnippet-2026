import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What is HackSnippet 4.0?",
        a: "HackSnippet 4.0 is a 48-hour hackathon where developers, designers, and innovators come together to build amazing projects. It's our fourth edition and the biggest one yet!",
      },
      {
        q: "When and where is the event?",
        a: "The event takes place from March 15-17, 2024 at the Tech Innovation Hub. We also offer virtual participation for those who can't attend in person.",
      },
      {
        q: "Is there a registration fee?",
        a: "No! HackSnippet 4.0 is completely free to attend. We provide food, swag, and an amazing experience at no cost to participants.",
      },
      {
        q: "Can I participate remotely?",
        a: "Yes! We offer a hybrid format. You can participate virtually and still compete for prizes, attend workshops, and connect with other hackers.",
      },
    ],
  },
  {
    category: "Eligibility & Teams",
    questions: [
      {
        q: "Who can participate?",
        a: "Anyone! Students, professionals, hobbyists – all skill levels are welcome. You must be 18+ for in-person participation, or join virtually with guardian consent if under 18.",
      },
      {
        q: "Do I need a team to participate?",
        a: "You can register individually and find a team at the event, or register with your pre-formed team. Teams can have 2-4 members.",
      },
      {
        q: "What if I don't have a team?",
        a: "No worries! We have a team formation session at the start of the event. Many great teams are formed at hackathons!",
      },
      {
        q: "Do I need prior hackathon experience?",
        a: "Not at all! Many first-time hackers participate and even win. We have workshops and mentors to help you throughout the event.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What should I bring?",
        a: "Bring your laptop, charger, and any other devices you need. We recommend bringing a sleeping bag if you plan to stay overnight. We provide food, drinks, and WiFi.",
      },
      {
        q: "Are there any restrictions on what I can build?",
        a: "Projects must be started from scratch during the hackathon. You can use open-source libraries and APIs, but your core project must be new.",
      },
      {
        q: "What technologies can I use?",
        a: "You can use any programming language, framework, or technology stack you prefer. We have category tracks like AI/ML, Web3, Health Tech, and more.",
      },
      {
        q: "Will there be WiFi and power outlets?",
        a: "Yes! We have high-speed WiFi throughout the venue and plenty of power outlets. We also have backup power in case of outages.",
      },
    ],
  },
  {
    category: "Prizes & Judging",
    questions: [
      {
        q: "How are projects judged?",
        a: "Projects are judged on innovation, technical complexity, design, and impact. Each team presents their project to a panel of judges from industry-leading companies.",
      },
      {
        q: "What are the prizes?",
        a: "We have over $10,000 in prizes! 1st place wins $5,000 + MacBook Pro, 2nd place wins $3,000 + iPad Pro, and 3rd place wins $1,500 + AirPods Pro. Plus category-specific prizes!",
      },
      {
        q: "When is the submission deadline?",
        a: "All projects must be submitted by 9:00 AM on Sunday (Day 3). Late submissions will not be accepted.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">Frequently</span> Asked
              Questions
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to contact us!
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-4xl mx-auto space-y-8">
            {faqData.map((category, catIndex) => (
              <div key={catIndex} className="glass-effect rounded-lg p-6">
                <h2 className="font-display text-xl text-primary neon-text mb-4">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="font-mono text-foreground text-left hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-mono text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="text-center mt-12">
            <p className="font-mono text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="mailto:hacksnippet@gmail.com"
              className="font-mono text-primary hover:underline"
            >
              hacksnippet@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
