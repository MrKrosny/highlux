import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

// Product Interface
interface ProductSpec {
  power: string;
  lumen: string;
  beamAngle: string;
  cct: string;
  cri: string;
  cutOut: string;
}

interface Product {
  id: string;
  model: string;
  title: string;
  shortDescription: string;
  image: string;
  variations: {
    "7W": ProductSpec;
    "12W": ProductSpec;
    "18W": ProductSpec;
  };
}

// Product Data
const products: Product[] = [
  {
    id: "cob-1",
    model: "AL-COB-TL-WH",
    title: "Trimless Recessed COB Downlight – Plaster-In Architectural Spot",
    shortDescription: "Seamless trimless design for plaster-in installation. Disappears into the ceiling for a clean, modern architectural finish with superior thermal management.",
    image: "/images/products/cob/cob-1.png",
    variations: {
      "7W": { power: "7W", lumen: "620-720lm", beamAngle: "24°/36°", cct: "3000K/4000K/6500K", cri: "&gt;90", cutOut: "75mm" },
      "12W": { power: "12W", lumen: "1050-1250lm", beamAngle: "24°/36°", cct: "3000K/4000K/6500K", cri: "&gt;90", cutOut: "100mm" },
      "18W": { power: "18W", lumen: "1650-1850lm", beamAngle: "24°/36°", cct: "3000K/4000K/6500K", cri: "&gt;90", cutOut: "125mm" },
    },
  },
  {
    id: "cob-2",
    model: "AL-COB-HM-GD",
    title: "Honeycomb Gold Reflector COB Downlight – Anti-Glare LED Spot",
    shortDescription: "Premium gold honeycomb reflector eliminates glare while delivering warm, inviting illumination. Ideal for luxury hospitality and residential interiors.",
    image: "/images/products/cob/cob-2.png",
    variations: {
      "7W": { power: "7W", lumen: "580-680lm", beamAngle: "36°", cct: "2700K/3000K/4000K", cri: "&gt;95", cutOut: "75mm" },
      "12W": { power: "12W", lumen: "980-1180lm", beamAngle: "36°", cct: "2700K/3000K/4000K", cri: "&gt;95", cutOut: "100mm" },
      "18W": { power: "18W", lumen: "1550-1750lm", beamAngle: "36°", cct: "2700K/3000K/4000K", cri: "&gt;95", cutOut: "125mm" },
    },
  },
  {
    id: "cob-3",
    model: "AL-COB-PRO-BRS",
    title: "ProBeam Brass Series COB Spot – Premium Recessed Ceiling Light",
    shortDescription: "Full brass construction with spring-clip mounting system. Statement architectural fixture combining luxury aesthetics with high-performance COB LED technology.",
    image: "/images/products/cob/cob-3.png",
    variations: {
      "7W": { power: "7W", lumen: "600-700lm", beamAngle: "24°/30°", cct: "2700K/3000K", cri: "&gt;90", cutOut: "68mm" },
      "12W": { power: "12W", lumen: "1000-1200lm", beamAngle: "24°/30°", cct: "2700K/3000K", cri: "&gt;90", cutOut: "90mm" },
      "18W": { power: "18W", lumen: "1600-1800lm", beamAngle: "24°/30°", cct: "2700K/3000K", cri: "&gt;90", cutOut: "115mm" },
    },
  },
  {
    id: "cob-4",
    model: "AL-COB-DR-AG",
    title: "Deep Recessed Anti-Glare COB Downlight – Energy Efficient LED",
    shortDescription: "Deep recessed optic with dark reflector for maximum visual comfort. Die-cast aluminum heatsink ensures long lifespan in commercial lighting applications.",
    image: "/images/products/cob/cob-4.png",
    variations: {
      "7W": { power: "7W", lumen: "650-750lm", beamAngle: "15°/24°", cct: "3000K/4000K/6500K", cri: "&gt;90", cutOut: "80mm" },
      "12W": { power: "12W", lumen: "1100-1300lm", beamAngle: "15°/24°", cct: "3000K/4000K/6500K", cri: "&gt;90", cutOut: "105mm" },
      "18W": { power: "18W", lumen: "1700-1900lm", beamAngle: "15°/24°", cct: "3000K/4000K/6500K", cri: "&gt;90", cutOut: "130mm" },
    },
  },
  {
    id: "cob-5",
    model: "AL-COB-ELB-ADJ",
    title: "Elbow Adjustable COB Spot Light – Directional Recessed Downlighter",
    shortDescription: "90° elbow-arm design with full directional adjustment. Perfect for accent lighting art, signage, and architectural features in commercial spaces.",
    image: "/images/products/cob/cob-5.png",
    variations: {
      "7W": { power: "7W", lumen: "600-700lm", beamAngle: "15°/24°/36°", cct: "3000K/4000K", cri: "&gt;85", cutOut: "85mm" },
      "12W": { power: "12W", lumen: "1000-1200lm", beamAngle: "15°/24°/36°", cct: "3000K/4000K", cri: "&gt;85", cutOut: "110mm" },
      "18W": { power: "18W", lumen: "1600-1800lm", beamAngle: "15°/24°/36°", cct: "3000K/4000K", cri: "&gt;85", cutOut: "135mm" },
    },
  },
  {
    id: "cob-6",
    model: "AL-COB-CYL-SS",
    title: "Cylindrical Stainless Steel COB Downlight – Recessed Ceiling Spot",
    shortDescription: "Polished stainless steel cylindrical body available in multiple depths. Precision-focused optics deliver clean beam patterns for retail and gallery lighting.",
    image: "/images/products/cob/cob-6.png",
    variations: {
      "7W": { power: "7W", lumen: "680-780lm", beamAngle: "12°/24°", cct: "3000K/4000K/5000K", cri: "&gt;90", cutOut: "55mm" },
      "12W": { power: "12W", lumen: "1150-1350lm", beamAngle: "12°/24°", cct: "3000K/4000K/5000K", cri: "&gt;90", cutOut: "75mm" },
      "18W": { power: "18W", lumen: "1750-1950lm", beamAngle: "12°/24°", cct: "3000K/4000K/5000K", cri: "&gt;90", cutOut: "95mm" },
    },
  },
  {
    id: "cob-7",
    model: "AL-COB-DL-BLK",
    title: "Darklight Matte Black COB Spot – Architectural Recessed LED Downlight",
    shortDescription: "True darklight technology in an all-black finish. Light source invisible from normal viewing angles, delivering dramatic accent illumination without glare.",
    image: "/images/products/cob/cob-7.png",
    variations: {
      "7W": { power: "7W", lumen: "550-650lm", beamAngle: "24°/36°", cct: "2700K/3000K/4000K", cri: "&gt;90", cutOut: "70mm" },
      "12W": { power: "12W", lumen: "920-1100lm", beamAngle: "24°/36°", cct: "2700K/3000K/4000K", cri: "&gt;90", cutOut: "90mm" },
      "18W": { power: "18W", lumen: "1450-1650lm", beamAngle: "24°/36°", cct: "2700K/3000K/4000K", cri: "&gt;90", cutOut: "115mm" },
    },
  },
  {
    id: "cob-8",
    model: "AL-COB-HX-CPR",
    title: "Hammered Copper Reflector COB Downlight – Designer LED Ceiling Light",
    shortDescription: "Hand-hammered copper reflector with matte black housing creates a stunning visual texture. Ultra-warm light output ideal for boutique and heritage interiors.",
    image: "/images/products/cob/cob-8.png",
    variations: {
      "7W": { power: "7W", lumen: "570-670lm", beamAngle: "36°/45°", cct: "2700K/3000K", cri: "&gt;95", cutOut: "75mm" },
      "12W": { power: "12W", lumen: "950-1150lm", beamAngle: "36°/45°", cct: "2700K/3000K", cri: "&gt;95", cutOut: "100mm" },
      "18W": { power: "18W", lumen: "1500-1700lm", beamAngle: "36°/45°", cct: "2700K/3000K", cri: "&gt;95", cutOut: "125mm" },
    },
  },
  {
    id: "cob-9",
    model: "AL-COB-RG-PREM",
    title: "Rose Gold Premium COB Spot Light – Luxury Recessed Downlighter",
    shortDescription: "Brushed rose gold finish with precision-cut reflector. High-CRI output ensures true color rendering for premium residential and hospitality environments.",
    image: "/images/products/cob/cob-9.png",
    variations: {
      "7W": { power: "7W", lumen: "600-700lm", beamAngle: "24°/36°", cct: "2700K/3000K", cri: "&gt;95", cutOut: "68mm" },
      "12W": { power: "12W", lumen: "1000-1200lm", beamAngle: "24°/36°", cct: "2700K/3000K", cri: "&gt;95", cutOut: "90mm" },
      "18W": { power: "18W", lumen: "1600-1800lm", beamAngle: "24°/36°", cct: "2700K/3000K", cri: "&gt;95", cutOut: "115mm" },
    },
  },
  {
    id: "cob-10",
    model: "AL-COB-PIN-WH",
    title: "Pinhole Mini COB Downlight – Compact Recessed LED Spot Light",
    shortDescription: "Ultra-compact pinhole aperture design for subtle, focused illumination. Perfect for corridors, stairways, and detail accent lighting in modern interiors.",
    image: "/images/products/cob/cob-10.png",
    variations: {
      "7W": { power: "7W", lumen: "500-600lm", beamAngle: "15°/24°", cct: "3000K/4000K/6500K", cri: "&gt;80", cutOut: "45mm" },
      "12W": { power: "12W", lumen: "850-1050lm", beamAngle: "15°/24°", cct: "3000K/4000K/6500K", cri: "&gt;80", cutOut: "60mm" },
      "18W": { power: "18W", lumen: "1350-1550lm", beamAngle: "15°/24°", cct: "3000K/4000K/6500K", cri: "&gt;80", cutOut: "75mm" },
    },
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedWattage, setSelectedWattage] = useState<"7W" | "12W" | "18W">("12W");
  const specs = product.variations[selectedWattage];

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": product.title,
          "image": `https://highlux.lovable.app${product.image}`,
          "description": product.shortDescription,
          "brand": {
            "@type": "Brand",
            "name": "Highlux"
          },
          "model": product.model,
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>

      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={`${product.title} - ${selectedWattage}`}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-gold text-gold-dark font-mono">
            {product.model}
          </Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gold-dark transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>

        {/* Wattage Selector */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Select Wattage</label>
          <div className="flex flex-wrap gap-2">
            {(["7W", "12W", "18W"] as const).map((watt) => (
              <button
                key={watt}
                onClick={() => setSelectedWattage(watt)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 border ${
                  selectedWattage === watt 
                    ? "bg-gray-900 text-white border-gray-900 shadow-md" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-gold hover:text-gold-dark"
                }`}
              >
                {watt}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-gray-50 rounded-lg p-3 mb-5 text-xs space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-gray-500">Lumen Output</span>
            <span className="font-semibold text-gray-900">{specs.lumen}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-gray-500">Cut-out</span>
            <span className="font-semibold text-gray-900">{specs.cutOut}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-gray-500">Beam Angle</span>
            <span className="font-semibold text-gray-900">{specs.beamAngle}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">CCT</span>
            <span className="font-semibold text-gray-900">{specs.cct}</span>
          </div>
        </div>

        <Link to="/contact">
          <Button className="w-full bg-gold hover:bg-gold-dark text-white group-hover:shadow-lg transition-all duration-300">
            Request Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const CobSpotLights = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>COB LED Downlight 7W/12W/18W | Architectural Recessed Spot Lights</title>
          <meta name="description" content="Buy premium COB LED downlights for architectural and commercial lighting. Available in 7W, 12W, and 18W. Energy-efficient, high lumen output, modern recessed ceiling spot lights." />
          <meta name="keywords" content="COB LED Downlight, Architectural Spot Light, Recessed Ceiling Light, Energy Efficient LED Downlighter, Commercial Lighting Solutions" />
        </Helmet>
        
        <Header />

        {/* Hero Section */}
        <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1920&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
              Architectural Series
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              COB Spot Lights & Downlighters
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Precision-engineered COB LED technology delivering superior color rendering and uniform illumination. 
              The ultimate solution for high-end residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white min-w-[180px]">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/architectural-lighting">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white min-w-[180px]">
                  View All Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
              <div className="p-4 md:p-8 text-center">
                <div className="text-gold font-bold text-2xl md:text-3xl mb-1">CRI &gt;90</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">True Color Rendering</div>
              </div>
              <div className="p-4 md:p-8 text-center">
                <div className="text-gold font-bold text-2xl md:text-3xl mb-1">50k+</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Hours Lifespan</div>
              </div>
              <div className="p-4 md:p-8 text-center">
                <div className="text-gold font-bold text-2xl md:text-3xl mb-1">3-5 Yr</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Warranty Options</div>
              </div>
              <div className="p-4 md:p-8 text-center">
                <div className="text-gold font-bold text-2xl md:text-3xl mb-1">IP20/54</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Protection Ratings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
                Premium Collection
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our range of architectural COB downlights, designed for performance, efficiency, and aesthetic appeal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Why Choose COB Technology?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="mt-1 bg-gold/10 p-2 rounded-lg h-fit">
                        <Check className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Uniform Light Distribution</h4>
                        <p className="text-gray-600">COB (Chip on Board) technology eliminates the multiple shadow effect common with traditional LED arrays, providing a clean, single-source light beam.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 bg-gold/10 p-2 rounded-lg h-fit">
                        <Check className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Superior Thermal Management</h4>
                        <p className="text-gray-600">Direct bonding to the substrate ensures better heat dissipation, leading to improved stability and longer lifespan.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 bg-gold/10 p-2 rounded-lg h-fit">
                        <Check className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Higher Lumen Density</h4>
                        <p className="text-gray-600">Achieve higher light output from a smaller surface area, allowing for more compact and aesthetically pleasing fixture designs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1513506003013-680c38598a95?w=1200&q=80" 
                    alt="Architectural Lighting Application" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default CobSpotLights;
