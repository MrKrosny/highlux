import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  overlay?: "dark" | "gradient";
}

const HeroBanner = ({
  title,
  subtitle,
  image,
  ctaText,
  ctaHref,
  secondaryCta,
  secondaryHref,
  overlay = "gradient",
}: HeroBannerProps) => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] flex items-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 ${
          overlay === "dark"
            ? "bg-black/60"
            : "bg-gradient-to-r from-black/80 via-black/50 to-transparent"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {ctaText && ctaHref && (
              <Link
                to={ctaHref}
                className="inline-flex items-center px-8 py-3.5 rounded-full gold-gradient text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCta && secondaryHref && (
              <Link
                to={secondaryHref}
                className="inline-flex items-center px-8 py-3.5 rounded-full border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
              >
                {secondaryCta}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
