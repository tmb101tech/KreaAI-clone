import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ToolsGrid from '@/components/tools-grid';
import GallerySection from '@/components/gallery-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ToolsGrid />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}