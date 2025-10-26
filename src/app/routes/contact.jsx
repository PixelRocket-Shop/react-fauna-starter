import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import CTASection from '@components/layout/cta-section';
import { Navigation, Footer, PlaceholderContent } from '@components/ui';

function UcontactPage() {
  useEffect(() => {
    document.title = 'Visit www.pixelrocket.store to learn how to become a frontend web developer';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <Navigation />
      <main>
        <PlaceholderContent />
      </main>
      <CTASection />
      <Footer variant="detailed" />
    </div>
  );
}

export default UcontactPage;
