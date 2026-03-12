import { islands } from "@/data/islands";
import IslandCard from "@/components/IslandCard";
import { useLanguage } from "@/i18n/LanguageContext";

const Destinations = () => {
  const { t } = useLanguage();
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">{t.destinations.title}</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.destinations.subtitle}</p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
