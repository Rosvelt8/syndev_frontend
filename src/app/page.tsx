import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <FeaturesSection />
      <WhyJoinSection />
      <BlogPreviewSection />
      <NewsletterSection />
      
      {/* Final CTA could be added here if needed, but WhyJoin and Newsletter are already strong CTAs */}
    </div>
  );
}
