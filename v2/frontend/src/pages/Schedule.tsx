import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scheduleData = {
  day1: [
    { time: "08:00 AM", event: "Check-in & Registration", description: "Get your badges and swag!" },
    { time: "09:00 AM", event: "Opening Ceremony", description: "Welcome speech and hackathon kick-off" },
    { time: "10:00 AM", event: "Team Formation", description: "Find your teammates and brainstorm ideas" },
    { time: "11:00 AM", event: "Hacking Begins!", description: "Start building your project" },
    { time: "12:30 PM", event: "Lunch", description: "Refuel with delicious food" },
    { time: "02:00 PM", event: "Workshop: AI/ML Basics", description: "Learn to integrate AI in your projects" },
    { time: "04:00 PM", event: "Workshop: Web3 & Blockchain", description: "Introduction to decentralized apps" },
    { time: "06:00 PM", event: "Dinner", description: "Food and networking" },
    { time: "08:00 PM", event: "Mentor Sessions", description: "Get guidance from industry experts" },
    { time: "10:00 PM", event: "Game Night", description: "Take a break with fun activities" },
  ]
};

const Schedule = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary neon-text">Event</span> Schedule
            </h1>
            <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
              48 hours packed with coding, learning, and fun. Here's what's in store.
            </p>
          </div>

          {/* Schedule Tabs */}
          <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary">
              <TabsTrigger
                value="day1"
                className="font-mono data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Day 1 - Friday
              </TabsTrigger>
            </TabsList>

            {Object.entries(scheduleData).map(([day, events]) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {events.map((item, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-4 hover:neon-glow transition-all duration-300"
                  >
                    <div className="font-mono text-primary text-lg md:w-32 shrink-0">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-foreground">
                        {item.event}
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
