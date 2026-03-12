import { useParams, Link } from "react-router-dom";
import { islands } from "@/data/islands";
import { MapPin, Waves, Hotel, Activity, ArrowLeft } from "lucide-react";

const DestinationDetail = () => {
  const { id } = useParams();
  const island = islands.find((i) => i.id === id);

  if (!island) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-2">Island not found</h1>
          <Link to="/destinations" className="text-primary hover:underline">← Back to destinations</Link>
        </div>
      </div>
    );
  }

  const sections = [
    { icon: Waves, title: "Best Beaches", items: island.beaches },
    { icon: MapPin, title: "Things to Do", items: island.thingsToDo },
    { icon: Hotel, title: "Recommended Hotels", items: island.hotels },
    { icon: Activity, title: "Top Activities", items: island.activities },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={island.image} alt={island.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="container mx-auto">
            <Link to="/destinations" className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-3 transition-colors">
              <ArrowLeft className="h-4 w-4" /> All Destinations
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{island.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">{island.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/planner"
            className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Add to Trip Planner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
