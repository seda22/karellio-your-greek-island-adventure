import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-santorini.jpg";
import { islands } from "@/data/islands";
import IslandCard from "@/components/IslandCard";

const Index = () => {
  const [search, setSearch] = useState("");
  const featured = islands.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Santorini at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            Discover Greek Islands with Karellio
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 font-body">
            Plan unforgettable journeys across Greece
          </p>
          {/* Search */}
          <div className="flex items-center bg-card/95 backdrop-blur rounded-xl p-2 max-w-lg mx-auto shadow-xl">
            <Search className="h-5 w-5 text-muted-foreground ml-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations..."
              className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-body"
            />
            <Link
              to="/destinations"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-sand/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: "Curated Destinations", desc: "Handpicked islands with local insights" },
              { icon: Calendar, title: "Smart Trip Planning", desc: "Build your perfect itinerary in minutes" },
              { icon: Sparkles, title: "Expert Guides", desc: "Travel tips from Greece enthusiasts" },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Islands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Explore the most beloved Greek islands, each with its own unique character and charm.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((island) => (
              <IslandCard key={island.id} island={island} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to explore Greece?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Start building your dream trip with our easy-to-use planner.
          </p>
          <Link
            to="/planner"
            className="inline-flex rounded-xl bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition-colors"
          >
            Start Planning Your Trip
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
