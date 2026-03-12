import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 font-display text-xl font-bold mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold glow-box">
                K
              </span>
              Karellio
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">{t.footer.explore}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/destinations" className="block hover:text-primary transition-colors">{t.nav.destinations}</Link>
              <Link to="/planner" className="block hover:text-primary transition-colors">{t.nav.tripPlanner}</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">{t.nav.travelGuides}</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">{t.footer.company}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="cursor-pointer hover:text-primary transition-colors">{t.footer.aboutKarellio}</p>
              <p className="cursor-pointer hover:text-primary transition-colors">{t.footer.contactUs}</p>
              <p className="cursor-pointer hover:text-primary transition-colors">{t.footer.privacyPolicy}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">{t.footer.newsletter}</h4>
            <p className="text-sm text-muted-foreground mb-3">{t.footer.newsletterDesc}</p>
            {subscribed ? (
              <p className="text-sm font-medium text-primary">{t.footer.thanksSubscribing}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg bg-muted border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {t.footer.join}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
