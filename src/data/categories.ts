export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const landscapeCategories: Category[] = [
  {
    id: "bollard",
    title: "Bollard Lights",
    description: "Elegant pathway illumination with durable, weather-resistant bollard fixtures for gardens and walkways.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
    slug: "bollard-lights",
  },
  {
    id: "tree-uplighter",
    title: "Tree Uplighter",
    description: "Dramatic uplighting to highlight tree canopies, creating stunning nighttime landscape focal points.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=450&fit=crop",
    slug: "tree-uplighter",
  },
  {
    id: "ground-burial",
    title: "Ground Burial Lights",
    description: "Flush-mounted in-ground fixtures for seamless pathway and driveway illumination.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop",
    slug: "ground-burial-lights",
  },
  {
    id: "pathway",
    title: "Pathway Highlighter",
    description: "Low-profile pathway markers that guide and illuminate walkways with energy-efficient LED technology.",
    image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=600&h=450&fit=crop",
    slug: "pathway-highlighter",
  },
  {
    id: "wall-lights",
    title: "Wall Lights",
    description: "Architectural wall-mounted fixtures for facade lighting, entrances, and perimeter illumination.",
    image: "https://images.unsplash.com/photo-1565814329452-e1432c9bce15?w=600&h=450&fit=crop",
    slug: "wall-lights",
  },
  {
    id: "wall-washer",
    title: "Wall Washer Lights",
    description: "Linear and flood-style wall washers for even, dramatic illumination of building exteriors and walls.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop",
    slug: "wall-washer-lights",
  },
];

export const underwaterCategories: Category[] = [
  {
    id: "pool-surface",
    title: "Swimming Pool Surface Mounted LED Lights",
    description: "High-performance surface-mounted LED pool lights with IP68 rating for crystal-clear underwater illumination.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=600&h=450&fit=crop",
    slug: "pool-surface-mounted",
  },
  {
    id: "ground-recessed",
    title: "Ground & Wall Recessed IP68 LED Lights",
    description: "Fully submersible recessed lights for pools, fountains, and water features with superior waterproofing.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=450&fit=crop",
    slug: "ground-wall-recessed",
  },
  {
    id: "fountain-nozzle",
    title: "Fountain Nozzle Mounted LED Lights",
    description: "Precision-engineered lights designed to integrate with fountain nozzles for spectacular water displays.",
    image: "https://images.unsplash.com/photo-1504973960431-1c1c6e586a15?w=600&h=450&fit=crop",
    slug: "fountain-nozzle-mounted",
  },
  {
    id: "stand-mounted",
    title: "Stand Mounted Adjustable Lights",
    description: "Versatile adjustable stand-mounted fixtures for fountains, enabling flexible beam direction and effects.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=450&fit=crop",
    slug: "stand-mounted-adjustable",
  },
];

export const architecturalCategories: Category[] = [
  {
    id: "panel",
    title: "Panel Lights",
    description: "Ultra-slim LED panel lights for uniform, glare-free illumination in commercial and residential spaces.",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=450&fit=crop",
    slug: "panel-lights",
  },
  {
    id: "concealed-cob",
    title: "Concealed & COB Lights",
    description: "Recessed COB downlights delivering focused, high-CRI illumination for accent and task lighting.",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=450&fit=crop",
    slug: "concealed-cob-lights",
  },
  {
    id: "smps",
    title: "SMPS Drivers & Power Supplies",
    description: "Reliable switched-mode power supplies and LED drivers for consistent, flicker-free performance.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=450&fit=crop",
    slug: "smps-drivers",
  },
  {
    id: "wall-washer-indoor",
    title: "Wall Washer Lights (Indoor)",
    description: "Linear indoor wall washers for creating ambient atmospheres in lobbies, galleries, and retail spaces.",
    image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=600&h=450&fit=crop",
    slug: "wall-washer-indoor",
  },
  {
    id: "track",
    title: "Track Lights",
    description: "Adjustable track-mounted spotlights for retail displays, galleries, and flexible commercial lighting.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop",
    slug: "track-lights",
  },
  {
    id: "magnetic-track",
    title: "Magnetic Track Lights",
    description: "Modern magnetic track systems for effortless installation and repositioning of light modules.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=450&fit=crop",
    slug: "magnetic-track-lights",
  },
  {
    id: "surface-indoor",
    title: "Surface Mounted LED Lights (Indoor)",
    description: "Versatile surface-mounted fixtures for ceilings and walls in commercial and residential interiors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop",
    slug: "surface-mounted-indoor",
  },
  {
    id: "street-flood",
    title: "Street Lights & Flood Lights",
    description: "High-lumen outdoor fixtures for street illumination, parking lots, and large-area flood lighting.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=450&fit=crop",
    slug: "street-flood-lights",
  },
  {
    id: "spot",
    title: "Spot Lights",
    description: "Focused beam spotlights for accent lighting, artwork illumination, and architectural highlighting.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=450&fit=crop",
    slug: "spot-lights",
  },
];
