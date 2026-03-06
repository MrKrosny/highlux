import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import { landscapeCategories } from "@/data/categories";

const LandscapeLighting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroBanner
        title="Landscape Lighting"
        subtitle="Transform your outdoor spaces with premium LED landscape lighting. From garden pathways to architectural facades, illuminate every corner with elegance."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=1080&fit=crop"
        ctaText="Get a Quote"
        ctaHref="/contact"
        secondaryCta="Chat on WhatsApp"
        secondaryHref="https://wa.me/918287223086"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore Categories"
            subtitle="Browse our comprehensive range of landscape lighting solutions designed for durability, efficiency, and visual impact."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {landscapeCategories.map((cat, i) => (
              <div key={cat.id} className={`animate-slide-up stagger-${Math.min(i + 1, 6)}`}>
                <CategoryCard
                  title={cat.title}
                  description={cat.description}
                  image={cat.image}
                  href={`/landscape-lighting/${cat.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandscapeLighting;
