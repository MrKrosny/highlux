import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import SectionHeading from "@/components/SectionHeading";
import SEOHead from "@/components/SEOHead";
import { underwaterCategories } from "@/data/categories";

const UnderwaterLighting = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Underwater Lighting | Highlux — IP68 Pool Lights & Submersible LED Fixtures"
        description="Shop Highlux IP68-rated underwater LED lights for pools, fountains and water features. Marine-grade, RGB colour-changing, submersible fixtures trusted across India."
        keywords="Highlux underwater lighting, IP68 pool lights, submersible LED India, underwater pool lights, pond LED lights, fountain lights, Highlux IP68"
        canonicalPath="/underwater-lighting"
      />
      <Header />

      <HeroBanner
        title="Underwater Lighting"
        subtitle="IP68-rated submersible LED lights engineered for pools, fountains, and water features. Designed for safety, built for beauty."
        image="https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=1920&h=1080&fit=crop"
        ctaText="Get a Quote"
        ctaHref="/contact"
        secondaryCta="Chat on WhatsApp"
        secondaryHref="https://wa.me/918287223086"
        overlay="dark"
      />

      {/* Water effect decorative section */}
      <div className="relative py-12 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(200_60%_50%/0.3)_0%,transparent_70%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-secondary-foreground/80 text-lg leading-relaxed">
            Our underwater lighting collection features marine-grade stainless steel construction,
            advanced thermal management, and RGB color-changing capabilities. Every fixture is rigorously
            tested to exceed IP68 standards for complete submersion reliability.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Underwater Categories"
            subtitle="Professional-grade submersible lighting for every aquatic application."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {underwaterCategories.map((cat, i) => (
              <div key={cat.id} className={`animate-slide-up stagger-${Math.min(i + 1, 4)}`}>
                <CategoryCard
                  title={cat.title}
                  description={cat.description}
                  image={cat.image}
                  href={`/underwater-lighting/${cat.slug}`}
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

export default UnderwaterLighting;
