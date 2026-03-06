import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const CategoryCard = ({ title, description, image, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="group block">
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] card-hover">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-1.5">
            {title}
          </h3>
          <p className="text-sm text-white/70 mb-3 line-clamp-2">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-2.5 transition-all duration-300">
            View Products <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
