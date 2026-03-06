interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-3 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`w-16 h-0.5 gold-gradient ${centered ? "mx-auto" : ""} mb-4`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
