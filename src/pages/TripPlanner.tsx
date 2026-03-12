import { useState } from "react";
import { islands } from "@/data/islands";
import { Plus, Trash2, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface TripDay {
  label: string;
}

interface TripDestination {
  islandId: string;
  days: TripDay[];
}

const defaultItinerary: Record<string, TripDay[]> = {
  santorini: [
    { label: "Explore Fira and the caldera views" },
    { label: "Beach day at Red Beach & Perissa" },
    { label: "Sunset boat cruise around the volcano" },
  ],
  mykonos: [
    { label: "Wander through Little Venice & windmills" },
    { label: "Paradise Beach & beach club" },
    { label: "Day trip to Delos Island" },
  ],
};

const TripPlanner = () => {
  const [destinations, setDestinations] = useState<TripDestination[]>([]);
  const [selectedIsland, setSelectedIsland] = useState("");
  const { t } = useLanguage();

  const addDestination = () => {
    if (!selectedIsland || destinations.find((d) => d.islandId === selectedIsland)) return;
    const days = defaultItinerary[selectedIsland] || [
      { label: "Explore the old town" },
      { label: "Beach day" },
      { label: "Boat tour" },
    ];
    setDestinations([...destinations, { islandId: selectedIsland, days }]);
    setSelectedIsland("");
  };

  const removeDestination = (islandId: string) => {
    setDestinations(destinations.filter((d) => d.islandId !== islandId));
  };

  const addDay = (islandId: string) => {
    setDestinations(
      destinations.map((d) =>
        d.islandId === islandId
          ? { ...d, days: [...d.days, { label: t.planner.freeDay }] }
          : d
      )
    );
  };

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">{t.planner.title}</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.planner.subtitle}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Add destination */}
          <div className="rounded-xl border border-border bg-card p-6 mb-10">
            <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> {t.planner.addDestination}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedIsland}
                onChange={(e) => setSelectedIsland(e.target.value)}
                className="flex-1 rounded-lg border border-input bg-muted px-3 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">{t.planner.selectIsland}</option>
                {islands
                  .filter((i) => !destinations.find((d) => d.islandId === i.id))
                  .map((i) => (
                    <option key={i.id} value={i.id}>{i.name}</option>
                  ))}
              </select>
              <button
                onClick={addDestination}
                disabled={!selectedIsland}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1"
              >
                <Plus className="h-4 w-4" /> {t.planner.add}
              </button>
            </div>
          </div>

          {/* Itinerary */}
          {destinations.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg font-display">{t.planner.emptyTitle}</p>
              <p className="text-sm mt-1">{t.planner.emptyDesc}</p>
            </div>
          ) : (
            <div className="space-y-8">
              {destinations.map((dest) => {
                const island = islands.find((i) => i.id === dest.islandId)!;
                return (
                  <div key={dest.islandId} className="rounded-xl border border-border bg-card overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img src={island.image} alt={island.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <h3 className="font-display text-2xl font-bold text-foreground">{island.name}</h3>
                        <button
                          onClick={() => removeDestination(dest.islandId)}
                          className="rounded-lg bg-destructive/80 p-2 text-destructive-foreground hover:bg-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-4">{dest.days.length} {t.planner.daysPlanned}</p>
                      <div className="space-y-3">
                        {dest.days.map((day, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <div className="pt-1">
                              <p className="text-sm font-medium text-card-foreground">{t.planner.day} {idx + 1}</p>
                              <p className="text-sm text-muted-foreground">{day.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => addDay(dest.islandId)}
                        className="mt-4 text-sm text-primary font-medium hover:underline flex items-center gap-1"
                      >
                        <Plus className="h-4 w-4" /> {t.planner.addDay}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TripPlanner;
