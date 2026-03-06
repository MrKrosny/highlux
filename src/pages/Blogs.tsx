import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Lighting Insights & Guides | Highlux Blog — LED Lighting Tips & Trends"
        description="Explore Highlux's expert guides, tips and industry knowledge on LED lighting. Learn about landscape, underwater and architectural lighting for homes and commercial spaces."
        keywords="Highlux blog, LED lighting tips, landscape lighting guide, pool light guide, architectural LED insights, Highlux articles"
        canonicalPath="/blogs"
      />
      <Header />

      <HeroBanner
        title="Lighting Insights"
        subtitle="Expert guides, tips, and industry knowledge to help you make informed lighting decisions."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop"
        overlay="dark"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Articles" subtitle="Stay updated with the latest trends and guides in LED lighting." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={post.id} to={`/blogs/${post.slug}`} className={`group block animate-slide-up stagger-${Math.min(i + 1, 6)}`}>
                <article className="overflow-hidden rounded-xl bg-card card-hover">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
