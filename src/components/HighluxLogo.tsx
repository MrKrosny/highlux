const HighluxLogo = ({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) => {
  const sizeMap = {
    small: "h-6",
    default: "h-8",
    large: "h-12",
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg
        className={sizeMap[size]}
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow effect */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(42, 90%, 40%)" />
            <stop offset="50%" stopColor="hsl(42, 80%, 55%)" />
            <stop offset="100%" stopColor="hsl(42, 70%, 65%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* HIGHLUX text */}
        <text
          x="0"
          y="28"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize="30"
          letterSpacing="6"
          fill="currentColor"
        >
          HIGHLUX
        </text>


        {/* Light beam accent */}
        <line
          x1="0"
          y1="35"
          x2="100"
          y2="35"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          opacity="0.8"
        />
        <line
          x1="100"
          y1="35"
          x2="140"
          y2="35"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default HighluxLogo;
