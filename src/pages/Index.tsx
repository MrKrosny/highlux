import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Award, Lightbulb, Droplets, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { landscapeCategories, underwaterCategories, architecturalCategories } from "@/data/categories";

interface HeroSlide {
  image?: string;
  splitImages?: string[];
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-landscape.jpg",
    title: "Landscape Lighting",
    subtitle: "Premium outdoor LED lighting that transforms gardens, pathways, and facades into stunning nightscapes.",
    cta: "Explore Landscape",
    href: "/landscape-lighting",
  },
  {
    image: "/images/slider_uploaded_pool.jpeg",
    title: "Underwater Lighting IP68",
    subtitle: "IP68-rated submersible LED lights for pools, fountains, and water features — engineered for beauty and safety.",
    cta: "Explore Underwater",
    href: "/underwater-lighting",
  },
  {
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=1920&h=1080&fit=crop",
    title: "Architectural Lighting",
    subtitle: "From track lights to panel fixtures — precision lighting for commercial and residential interiors.",
    cta: "Explore Architectural",
    href: "/architectural-lighting",
  },
];

const features = [
  { icon: Zap, title: "Energy Efficient", desc: "Up to 80% less power consumption with premium LED technology." },
  { icon: Shield, title: "IP68 Rated", desc: "Military-grade waterproofing for outdoor and underwater applications." },
  { icon: Award, title: "Premium Quality", desc: "High-CRI LEDs with 50,000+ hour lifespan and upto 5-year warranty." },
];

const categoryPreviews = [
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    desc: "Bollard lights, tree uplighters, wall washers, and pathway highlighters for outdoor excellence.",
    href: "/landscape-lighting",
    image: landscapeCategories[0].image,
  },
  {
    icon: Droplets,
    title: "Underwater Lighting",
    desc: "Pool lights, fountain illumination, and submersible fixtures engineered for aquatic environments.",
    href: "/underwater-lighting",
    image: underwaterCategories[0].image,
  },
  {
    icon: Building2,
    title: "Architectural Lighting",
    desc: "Panel lights, track systems, COB fixtures, and spotlights for interior and exterior architecture.",
    href: "/architectural-lighting",
    image: architecturalCategories[0].image,
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Slider */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            {s.splitImages ? (
              <div className="flex w-full h-full">
                <img src={s.splitImages[0]} alt={`${s.title} Part 1`} className="w-1/2 h-full object-cover" />
                <div className="w-1 bg-gold/50 h-full z-10" />
                <img src={s.splitImages[1]} alt={`${s.title} Part 2`} className="w-1/2 h-full object-cover" />
              </div>
            ) : (
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl animate-slide-up" key={currentSlide}>
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Premium LED Lighting</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-5">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/75 mb-8 leading-relaxed">{slide.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link to={slide.href} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gold-gradient text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform shadow-lg">
                  {slide.cta} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center px-8 py-3.5 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentSlide ? "bg-gold w-8" : "bg-white/40"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Why Highlux */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Highlux?" subtitle="Engineered for excellence, designed for impact. Our lighting solutions combine cutting-edge technology with architectural aesthetics." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`text-center p-8 rounded-xl bg-background animate-slide-up stagger-${i + 1}`}>
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Previews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Collections" subtitle="Explore our comprehensive range of premium LED lighting solutions." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryPreviews.map((cat, i) => (
              <Link key={i} to={cat.href} className={`group block animate-slide-up stagger-${i + 1}`}>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] card-hover">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <cat.icon className="h-8 w-8 text-gold mb-3" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.title}</h3>
                    <p className="text-sm text-white/70 mb-4">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-secondary-foreground mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-secondary-foreground/70 mb-8">Get a personalized lighting consultation and quote from our expert team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 rounded-full gold-gradient text-primary-foreground font-semibold hover:scale-105 transition-transform shadow-lg">
              Get a Free Quote
            </Link>
            <a href="https://wa.me/918287223086" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full border border-secondary-foreground/20 text-secondary-foreground font-medium hover:bg-secondary-foreground/5 transition-all">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="Stay Illuminated" subtitle="Subscribe for lighting tips, new product launches, and exclusive offers." />
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
            <button className="px-8 py-3 rounded-full gold-gradient text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
