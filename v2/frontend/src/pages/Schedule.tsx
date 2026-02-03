import { Layout } from "@/components/layout/Layout";


const scheduleData = {
  day1: [
    { time: "08:00 AM", event: "Check-in & Registration", description: "Get your badges and swag!" },
    { time: "09:00 AM", event: "Opening Ceremony", description: "Welcome speech and hackathon kick-off" },
    { time: "10:00 AM", event: "Hacking Begins!", description: "Start building your project" },
    { time: "01:00 - 01:30 PM", event: "Lunch", description: "Refuel with delicious food" },
    { time: "06:30 PM", event: "Event Ends", description: "Participation certificates will be provided" },
    { time: "07:00 PM", event: "Prize Distribution", description: "Awards ceremony and winner announcements" },
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
              One day packed with coding, learning, and fun. Here's what's in store.
            </p>
          </div>

          {/* Schedule */}
          <div className="max-w-4xl mx-auto space-y-4">
            {scheduleData.day1.map((item, index) => (
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
