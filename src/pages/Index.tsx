import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Sparkles, Globe } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-santorini.jpg";
import { islands } from "@/data/islands";
import IslandCard from "@/components/IslandCard";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const [search, setSearch] = useState("");
  const featured = islands.slice(0, 4);
  const { t } = useLanguage();

  const features = [
    { icon: MapPin, title: t.features.curatedTitle, desc: t.features.curatedDesc },
    { icon: Calendar, title: t.features.smartTitle, desc: t.features.smartDesc },
    { icon: Sparkles, title: t.features.expertTitle, desc: t.features.expertDesc },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Santorini at sunset" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary mb-6">
            <Globe className="h-4 w-4" />
            {t.hero.badge}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            {t.hero.title}{" "}
            <span className="text-primary glow-text">Karellio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body">
            {t.hero.subtitle}
          </p>
          <div className="flex items-center glass rounded-xl p-2 max-w-lg mx-auto">
            <Search className="h-5 w-5 text-muted-foreground ml-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.hero.searchPlaceholder}
              className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-body"
            />
            <Link
              to="/destinations"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t.hero.explore}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="text-center rounded-xl p-6 bg-card border border-border">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{t.index.popularDestinations}</h2>
            <p className="text-muted-foreground max-w-md mx-auto">{t.index.popularDestinationsDesc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((island) => (
              <IslandCard key={island.id} island={island} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-box"
            >
              {t.index.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{t.index.popularGuides}</h2>
            <p className="text-muted-foreground max-w-md mx-auto">{t.index.popularGuidesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {t.blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">{post.category}</span>
                <h3 className="font-display text-base font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-primary/10 border border-primary/20 p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t.index.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.index.ctaDesc}</p>
            <Link
              to="/planner"
              className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors glow-box"
            >
              {t.index.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
