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
        a: "HackSnippet 4.0 is a two-stage hackathon where developers, designers, and innovators come together to build amazing projects. It's our fourth edition and the biggest one yet!",
      },
      {
        q: "When and where is the event?",
        a: "Stage 1 (Online Idea Submission) runs from 4th Feb - 20th Feb, 2026. Stage 2 (Offline Exhibition) takes place on 28th Feb, 2026 at IIT Research Park for 8 hours.",
      },
      {
        q: "Is there a registration fee?",
        a: "No! HackSnippet 4.0 is completely free to participate. There's no registration fee at all.",
      },
      {
        q: "How does the two-stage format work?",
        a: "First, submit your innovative idea online during Stage 1. Our panel will review submissions and select the best ideas. Selected teams then showcase their projects at the offline exhibition on 28th Feb.",
      },
    ],
  },
  {
    category: "Eligibility & Teams",
    questions: [
      {
        q: "Who can participate?",
        a: "All students of UEM and IEM from 1st year to 4th year are eligible to participate. All skill levels are welcome!",
      },
      {
        q: "Do I need a team to participate?",
        a: "You can participate solo or form a team. Teams can have 1-5 members - it's completely flexible!",
      },
      {
        q: "What if I don't have a team?",
        a: "No worries! You can participate solo, or find teammates through our community channels before the event.",
      },
      {
        q: "Do I need prior hackathon experience?",
        a: "Not at all! Many first-time hackers participate and even win. Beginners are encouraged to join!",
      },
      {
        q: "What should I bring to the offline event?",
        a: "Bring your laptop, charger, student ID for verification, and any other devices you need for your project.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What are the tracks/categories?",
        a: "We have 4 tracks: AI/ML, AppDev/WebDev, Hardware, and a secret UI/UX track. Choose the one that best fits your project!",
      },
      {
        q: "Are there any restrictions on what I can build?",
        a: "Your project should align with one of our tracks. You can use open-source libraries and APIs. Be creative and innovative!",
      },
      {
        q: "What technologies can I use?",
        a: "You can use any programming language, framework, or technology stack you prefer. There are no restrictions on the tools you use.",
      },
      {
        q: "What should my idea submission include?",
        a: "Your submission should clearly explain your idea, the problem it solves, your proposed solution, and which track it falls under.",
      },
    ],
  },
  {
    category: "Prizes & Judging",
    questions: [
      {
        q: "How are projects judged?",
        a: "Projects are judged on innovation, technical complexity, design, and impact. Each team presents their project to our panel of judges at the offline exhibition.",
      },
      {
        q: "What are the prizes?",
        a: "We have an Overall Winner prize (Trophy, Premium Swag Kit, Certificate of Excellence) plus Track Winner prizes for AI/ML, AppDev/WebDev, Hardware, and a secret UI/UX track!",
      },
      {
        q: "Do all participants get certificates?",
        a: "Yes! All participants receive certificates of participation, stickers, and goodies.",
      },
      {
        q: "When will results be announced?",
        a: "Prize distribution happens on the same day as the offline exhibition (28th Feb, 2026) after the judging is complete.",
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
