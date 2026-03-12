export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "best-greek-islands-first-time",
    title: "Best Greek Islands for First-Time Visitors",
    excerpt: "Not sure where to start? Here's our guide to the most welcoming and accessible Greek islands for your first Mediterranean adventure.",
    date: "March 5, 2026",
    readTime: "6 min read",
    category: "Travel Guide",
  },
  {
    id: "top-hidden-beaches",
    title: "Top Hidden Beaches in Greece",
    excerpt: "Escape the crowds and discover secluded coves, turquoise lagoons, and pristine shores that most tourists never find.",
    date: "February 20, 2026",
    readTime: "8 min read",
    category: "Beaches",
  },
  {
    id: "greece-on-a-budget",
    title: "How to Travel Greece on a Budget",
    excerpt: "From affordable island-hopping to budget-friendly dining, learn how to experience the best of Greece without breaking the bank.",
    date: "February 10, 2026",
    readTime: "7 min read",
    category: "Budget Travel",
  },
  {
    id: "santorini-sunset-guide",
    title: "The Ultimate Santorini Sunset Guide",
    excerpt: "Where to watch, what to bring, and the secret spots locals love — your complete guide to Santorini's legendary sunsets.",
    date: "January 28, 2026",
    readTime: "5 min read",
    category: "Santorini",
  },
  {
    id: "greek-island-food",
    title: "A Food Lover's Guide to the Greek Islands",
    excerpt: "From fresh seafood tavernas to traditional meze, discover the culinary treasures waiting on every Greek island.",
    date: "January 15, 2026",
    readTime: "9 min read",
    category: "Food & Drink",
  },
];
