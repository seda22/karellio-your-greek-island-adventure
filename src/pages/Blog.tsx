import { blogPosts } from "@/data/blog";
import { Clock, Tag } from "lucide-react";

const Blog = () => {
  return (
    <div>
      <section className="py-16 bg-sand/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Travel Blog</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Expert guides, travel tips, and inspiration for your Greek island adventures.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold text-card-foreground mb-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-sm font-medium text-primary cursor-pointer hover:underline">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
