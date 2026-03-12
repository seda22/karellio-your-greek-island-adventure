import { useParams, Link } from "react-router-dom";
import { islands } from "@/data/islands";
import {
  MapPin, Waves, Hotel, ArrowLeft, Plane, Ship, Car,
  Star, UtensilsCrossed, Compass, Clock, ShieldCheck,
  Thermometer, Lightbulb, CalendarDays
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const DestinationDetail = () => {
  const { id } = useParams();
  const island = islands.find((i) => i.id === id);
  const { t } = useLanguage();

  if (!island) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-2">{t.detail.islandNotFound}</h1>
          <Link to="/destinations" className="text-primary hover:underline">{t.detail.backToDestinations}</Link>
        </div>
      </div>
    );
  }

  const transportOptions = [
    { icon: Plane, label: t.detail.flights, button: t.detail.findFlights },
    { icon: Ship, label: t.detail.ferries, button: t.detail.bookFerry },
    { icon: Car, label: t.detail.carRental, button: t.detail.rentACar },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={island.image} alt={island.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="container mx-auto">
            <Link to="/destinations" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3 transition-colors">
              <ArrowLeft className="h-4 w-4" /> {t.detail.allDestinations}
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{island.name}</h1>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4 text-primary" /> {t.detail.best}: {island.bestTimeToVisit}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-primary" /> {island.recommendedDuration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">{island.description}</p>

        {/* Weather */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-primary" /> {t.detail.weatherForecast}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {island.weather.map((w) => (
              <div key={w.day} className="rounded-xl bg-card border border-border p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground mb-1">{w.day}</p>
                <p className="text-2xl mb-1">{w.icon}</p>
                <p className="text-lg font-bold">{w.temp}°C</p>
                <p className="text-xs text-muted-foreground">{w.condition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <InfoCard icon={Waves} title={t.detail.bestBeaches} items={island.beaches} />
          <InfoCard icon={MapPin} title={t.detail.thingsToDo} items={island.thingsToDo} />
          <InfoCard icon={Compass} title={t.detail.localAttractions} items={island.localAttractions} />
          <InfoCard icon={Lightbulb} title={t.detail.travelTips} items={island.travelTips} />
        </div>

        {/* Travel Requirements */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" /> {t.detail.travelRequirements}
          </h2>
          <div className="rounded-xl bg-card border border-border p-6 space-y-3">
            <p className="text-sm"><span className="font-medium text-foreground">{t.detail.passport}:</span> <span className="text-muted-foreground">{island.travelRequirements.passport}</span></p>
            <p className="text-sm"><span className="font-medium text-foreground">{t.detail.visa}:</span> <span className="text-muted-foreground">{island.travelRequirements.visa}</span></p>
            <a href={island.travelRequirements.consulateLink} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm text-primary hover:underline">
              {t.detail.consulateLink}
            </a>
          </div>
        </section>

        {/* Transportation */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <Plane className="h-5 w-5 text-primary" /> {t.detail.transportation}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {transportOptions.map((opt) => (
              <div key={opt.label} className="rounded-xl bg-card border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <opt.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-3">{opt.label}</h3>
                <button className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-box">
                  {opt.button}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Hotels */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <Hotel className="h-5 w-5 text-primary" /> {t.detail.recommendedHotels}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {island.hotels.map((hotel) => (
              <div key={hotel.name} className="rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-foreground">{hotel.name}</h3>
                  <span className="flex items-center gap-1 text-sm text-primary">
                    <Star className="h-3.5 w-3.5 fill-current" /> {hotel.rating}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{hotel.description}</p>
                <button className="w-full rounded-lg bg-primary/10 border border-primary/20 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                  {t.detail.bookHotel}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <Compass className="h-5 w-5 text-primary" /> {t.detail.activitiesTours}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {island.activities.map((activity) => (
              <div key={activity.name} className="rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">{activity.type}</span>
                <h3 className="font-display font-semibold mb-1">{activity.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                <button className="w-full rounded-lg bg-primary/10 border border-primary/20 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                  {t.detail.bookActivity}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Restaurants */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-primary" /> {t.detail.restaurants}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {island.restaurants.map((r) => (
              <div key={r.name} className="rounded-xl bg-card border border-border p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display font-semibold">{r.name}</h3>
                  <span className="flex items-center gap-1 text-sm text-primary">
                    <Star className="h-3.5 w-3.5 fill-current" /> {r.rating}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{r.cuisine}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {r.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/planner"
            className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors glow-box"
          >
            {t.detail.addToPlanner}
          </Link>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: string[] }) => (
  <div className="rounded-xl border border-border bg-card p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default DestinationDetail;
