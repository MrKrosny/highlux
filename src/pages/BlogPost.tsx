import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Article Not Found</h1>
          <Link to="/blogs" className="text-gold hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Convert markdown-like content to simple HTML
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-serif font-bold mt-10 mb-4">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("### ")) {
        return <h3 key={i} className="text-xl font-serif font-semibold mt-8 mb-3">{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-1.5 my-4 text-muted-foreground">
            {items.map((item, j) => <li key={j}>{item.replace("- ", "")}</li>)}
          </ul>
        );
      }
      return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="relative w-full h-[50vh]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 -mt-20 relative z-10 pb-20">
        <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
        </div>

        <div className="prose-custom">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-xl bg-card text-center">
          <h3 className="text-2xl font-serif font-bold mb-2">Need Lighting Solutions?</h3>
          <p className="text-muted-foreground mb-6">Get expert advice and a personalized quote from our team.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="px-8 py-3 rounded-full gold-gradient text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform">
              Contact Us
            </Link>
            <a href="https://wa.me/918287223086" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-border font-medium text-sm hover:bg-muted/50 transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
