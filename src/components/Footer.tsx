import { Compass } from "lucide-react";
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
    <footer className="bg-aegean-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <Compass className="h-6 w-6" />
              Karellio
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your gateway to the most beautiful Greek islands. Plan, discover, and experience Greece like never before.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <div className="space-y-2 text-sm opacity-80">
              <Link to="/destinations" className="block hover:opacity-100 transition-opacity">Destinations</Link>
              <Link to="/planner" className="block hover:opacity-100 transition-opacity">Trip Planner</Link>
              <Link to="/blog" className="block hover:opacity-100 transition-opacity">Travel Blog</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>About Karellio</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-4">Newsletter</h4>
            <p className="text-sm opacity-80 mb-3">Get travel tips and exclusive island guides.</p>
            {subscribed ? (
              <p className="text-sm font-medium">✓ Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-primary-foreground/20 px-4 py-2 text-sm font-medium hover:bg-primary-foreground/30 transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-60">
          © 2026 Karellio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
