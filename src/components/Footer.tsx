import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Global Life Partner. Discover destinations, plan trips, and book travel services with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Explore</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/destinations" className="block hover:text-primary transition-colors">Destinations</Link>
              <Link to="/planner" className="block hover:text-primary transition-colors">Trip Planner</Link>
              <Link to="/blog" className="block hover:text-primary transition-colors">Travel Guides</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="cursor-pointer hover:text-primary transition-colors">About Karellio</p>
              <p className="cursor-pointer hover:text-primary transition-colors">Contact Us</p>
              <p className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">Get travel tips and exclusive island guides.</p>
            {subscribed ? (
              <p className="text-sm font-medium text-primary">✓ Thanks for subscribing!</p>
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
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Karellio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
