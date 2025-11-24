// app/page.tsx
import { CategoryShowcase, FeaturedProducts, HeroSection, NewsLettersSignup, SpecialOffers, Testimonials, TopSellers } from "@/components/home";

export default function Home() {

  return (
    <main className="min-h-screen">
      <HeroSection />
      <TopSellers />
      <FeaturedProducts />
      <CategoryShowcase />
      <SpecialOffers />
      <Testimonials />
      <NewsLettersSignup />
    </main>
  );
}