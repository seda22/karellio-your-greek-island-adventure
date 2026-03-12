import { islands } from "@/data/islands";
import IslandCard from "@/components/IslandCard";

const Destinations = () => {
  return (
    <div>
      <section className="py-16 bg-sand/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Greek Island Destinations</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From the iconic cliffs of Santorini to the lush hills of Corfu — find your perfect island escape.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {islands.map((island) => (
              <IslandCard key={island.id} island={island} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
