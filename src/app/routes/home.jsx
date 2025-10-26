import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import CTASection from '@components/layout/cta-section';
import { Navigation, Footer } from '@components/ui';
import StatsSection from '@features/home/components/stats-section';
import SolutionsSection from '@features/home/components/solutions-section';
import CommitmentSection from '@features/home/components/commitment-section';
import FAQSection from '@features/home/components/faq-section';
import TestimonialCarousel from '@features/home/components/testimonial-carousel';

function HomePage() {
  useEffect(() => {
    document.title = 'Visit www.pixelrocket.store to learn how to become a frontend web developer';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <Navigation
        variant="hero"
        backgroundImage="images/header-bg-waves.png"
        hero={{
          title: "Energizing a Green Future",
          subtitle: "Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.",
          ctaText: "See our solutions",
          ctaLink: "/#solutions"
        }}
      />
      <main>
        <StatsSection />
        <SolutionsSection />
        <CommitmentSection />
        <FAQSection />
        <TestimonialCarousel />
      </main>
      <CTASection />
      <Footer
        variant="detailed"
        backgroundImage="images/footer-waves-left-bottom.png"
        companyName="Flow"
      />
    </div>
  );
}

export default HomePage;