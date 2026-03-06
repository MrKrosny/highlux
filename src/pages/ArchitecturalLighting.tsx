import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import { architecturalCategories } from "@/data/categories";

const ArchitecturalLighting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroBanner
        title="Architectural Lighting"
        subtitle="Precision-engineered LED solutions for commercial and residential interiors. From track systems to panel lights, elevate every space."
        image="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=1920&h=1080&fit=crop"
        ctaText="Get a Quote"
        ctaHref="/contact"
        secondaryCta="View All Products"
        secondaryHref="/contact"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Categories"
            subtitle="Comprehensive architectural lighting solutions for every indoor and outdoor application."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {architecturalCategories.map((cat, i) => (
              <div key={cat.id} className={`animate-slide-up stagger-${Math.min(i + 1, 6)}`}>
                <CategoryCard
                  title={cat.title}
                  description={cat.description}
                  image={cat.image}
                  href={`/architectural-lighting/${cat.slug}`}
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

export default ArchitecturalLighting;
