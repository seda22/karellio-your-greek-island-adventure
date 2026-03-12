import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logoImg from "@/assets/karellio-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/destinations", label: t.nav.destinations },
    { to: "/planner", label: t.nav.tripPlanner },
    { to: "/blog", label: t.nav.travelGuides },
  ];

  const toggleLang = () => setLang(lang === "en" ? "tr" : "en");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold text-foreground">
          <img src={logoImg} alt="Karellio" className="h-9 w-auto" />
          Karellio
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === "en" ? "TR" : "EN"}
          </button>
          <Link
            to="/planner"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors glow-box"
          >
            {t.nav.startPlanning}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === "en" ? "Türkçe" : "English"}
          </button>
          <Link
            to="/planner"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            {t.nav.startPlanning}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
