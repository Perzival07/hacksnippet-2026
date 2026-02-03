import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyJoinSection } from "@/components/home/WhyJoinSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyJoinSection />
    </Layout>
  );
};

export default Index;
