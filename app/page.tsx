import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import FeaturedListings from "@/components/FeaturedListings";
import MapSection from "@/components/MapSection";
import ReviewsSection from "@/components/ReviewsSection";
import DocumentsSection from "@/components/DocumentsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <FeaturedListings />
      <MapSection />
      <ReviewsSection />
      <DocumentsSection />
    </>
  );
}
