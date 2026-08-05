import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { buildBlogIndexSchema, buildCanonical } from '../utils/seo';

const currentUrl = 'https://vizagairportcabs.in/blog';

export default function Blog() {
  const blogPosts = [
    {
      title: "Best Places to Visit in Vizag: A Complete Guide",
      description: "Explore the top tourist attractions in Visakhapatnam, from the serene beaches of RK Beach and Rishikonda to the historic submarine museum and the scenic Kailasagiri hills.",
      date: "March 15, 2026",
      author: "Admin",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Vizag to Araku Valley Travel Guide: Tips for a Perfect Trip",
      description: "Planning a trip to Araku Valley? Discover the best time to visit, must-see places like Borra Caves and Coffee Museum, and how to book the most comfortable taxi from Vizag.",
      date: "March 10, 2026",
      author: "Admin",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=2071&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Airport Taxi Booking Tips: How to Avoid Last-Minute Hassles",
      description: "Never miss a flight again! Learn the best practices for booking airport cabs in Vizag, including pre-booking benefits, tracking your flight, and choosing the right vehicle.",
      date: "March 5, 2026",
      author: "Admin",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Vizag Local Sightseeing Guide: Explore the City of Destiny",
      description: "A comprehensive guide to local sightseeing in Visakhapatnam. Discover hidden gems, local street food spots, and the best time to visit each attraction with our expert tips.",
      date: "February 28, 2026",
      author: "Admin",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1590523741491-345ad1f7b3b6?q=80&w=2070&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Helmet>
        <title>Travel Blog | Vizag Airport Cabs - Tips & Guides</title>
        <meta name="description" content="Explore travel tips, sightseeing guides, and taxi booking advice for Visakhapatnam and nearby destinations like Araku Valley on our blog." />
        <meta name="keywords" content="Vizag Travel Blog, Vizag Sightseeing Guide, Araku Valley Travel Tips, Airport Taxi Booking Vizag" />
        <link rel="canonical" href={buildCanonical('/blog')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Travel Blog | Vizag Airport Cabs - Tips & Guides" />
        <meta property="og:description" content="Explore travel tips, sightseeing guides, and taxi booking advice for Visakhapatnam and nearby destinations like Araku Valley on our blog." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Vizag Airport Cabs" />
        <meta property="og:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vizagairportcabs" />
        <meta name="twitter:creator" content="@vizagairportcabs" />
        <meta name="twitter:title" content="Travel Blog | Vizag Airport Cabs - Tips & Guides" />
        <meta name="twitter:description" content="Explore travel tips, sightseeing guides, and taxi booking advice for Visakhapatnam and nearby destinations like Araku Valley on our blog." />
        <meta name="twitter:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(buildBlogIndexSchema({ currentUrl, pageTitle: 'Travel Blog | Vizag Airport Cabs - Tips & Guides', description: 'Explore travel tips, sightseeing guides, and taxi booking advice for Visakhapatnam and nearby destinations like Araku Valley on our blog.', posts: blogPosts.map(p => ({ title: p.title, description: p.description, url: p.link !== '#' ? `https://vizagairportcabs.in${p.link}` : `${currentUrl}`, image: p.image, date: p.date, readTime: p.readTime })) }))}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop" 
              alt="Vizag Travel Blog" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
                Travel Tips & Cab Services in Vizag
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest travel guides, sightseeing tips, and taxi booking advice for Visakhapatnam and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Listing */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {blogPosts.map((post, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-brand-yellow text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        Travel Guide
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-brand-yellow" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-brand-yellow" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-brand-yellow transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-8 text-sm flex-grow">
                      {post.description}
                    </p>
                    <div className="pt-6 border-t border-slate-50">
                      <a 
                        href={post.link} 
                        className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-yellow transition-colors group/link"
                      >
                        Read Full Article 
                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-all shadow-sm">1</button>
                <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-bold hover:bg-brand-blue hover:text-white transition-all shadow-sm">2</button>
                <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-bold hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                  <ChevronRight size={20} />
                </button>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20 bg-brand-blue text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-8">Never Miss a <span className="text-brand-yellow">Travel Update</span></h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest travel tips, exclusive offers, and sightseeing guides directly in your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
              />
              <button className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
