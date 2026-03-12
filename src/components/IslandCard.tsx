import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Island } from "@/data/islands";

const IslandCard = ({ island }: { island: Island }) => {
  return (
    <Link
      to={`/destinations/${island.id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:glow-box transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={island.image}
          alt={island.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{island.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{island.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Explore Island <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default IslandCard;
