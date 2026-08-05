import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ChevronRight, 
  Car, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { buildHubSchema, buildCanonical } from '../utils/seo';

const currentUrl = 'https://vizagairportcabs.in/routes';

export default function Routes() {
  const popularRoutes = [
    { 
      title: 'Bhogapuram Airport Cabs', 
      distance: '40 km', 
      price: '₹799/-', 
      link: '/bhogapuram-airport-cabs',
      description: '24/7 Bhogapuram Airport cabs with AC, professional drivers, and flight tracking.'
    },
    { 
      title: 'Vizag to Araku Valley Cabs', 
      distance: '115 km', 
      price: '₹3,900/-', 
      link: '/vizag-to-araku-valley-cabs',
      description: 'Affordable Vizag to Araku Valley cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Rajahmundry Cabs', 
      distance: '190 km', 
      price: '₹4,500/-', 
      link: '/vizag-to-rajahmundry-cabs',
      description: 'Affordable Vizag to Rajahmundry cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Vijayawada Cabs', 
      distance: '350 km', 
      price: '₹7,900/-', 
      link: '/vizag-to-vijayawada-cabs',
      description: 'Affordable Vizag to Vijayawada cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Hyderabad Cabs', 
      distance: '620 km', 
      price: '₹15,000/-', 
      link: '/vizag-to-hyderabad-cabs',
      description: 'Affordable Vizag to Hyderabad cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Srikakulam Cabs', 
      distance: '110 km', 
      price: '₹3,200/-', 
      link: '/vizag-to-srikakulam-cabs',
      description: 'Affordable Vizag to Srikakulam cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Kakinada Cabs', 
      distance: '160 km', 
      price: '₹3,900/-', 
      link: '/vizag-to-kakinada-cabs',
      description: 'Affordable Vizag to Kakinada cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Narsipatnam Cabs', 
      distance: '80 km', 
      price: '₹3,000/-', 
      link: '/vizag-to-narsipatnam-cabs',
      description: 'Affordable Vizag to Narsipatnam cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Vizianagaram Cabs', 
      distance: '60 km', 
      price: '₹2,100/-', 
      link: '/vizag-to-vizianagaram-cabs',
      description: 'Affordable Vizag to Vizianagaram cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Bobbili Cabs', 
      distance: '120 km', 
      price: '₹3,600/-', 
      link: '/vizag-to-bobbili-cabs',
      description: 'Affordable Vizag to Bobbili cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Palasa Cabs', 
      distance: '140 km', 
      price: '₹5,500/-', 
      link: '/vizag-to-palasa-cabs',
      description: 'Affordable Vizag to Palasa cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Annavaram Cabs', 
      distance: '120 km', 
      price: '₹3,800/-', 
      link: '/vizag-to-annavaram-cabs',
      description: 'Affordable Vizag to Annavaram cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Tuni Cabs', 
      distance: '90 km', 
      price: '₹3,000/-', 
      link: '/vizag-to-tuni-cabs',
      description: 'Affordable Vizag to Tuni cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Amalapuram Cabs', 
      distance: '200 km', 
      price: '₹6,500/-', 
      link: '/vizag-to-amalapuram-cabs',
      description: 'Affordable Vizag to Amalapuram cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Jagdalpur Cabs', 
      distance: '300 km', 
      price: '₹9,000/-', 
      link: '/vizag-to-jagdalpur-cabs',
      description: 'Affordable Vizag to Jagdalpur cabs with AC, professional drivers, and best price.'
    },
    { 
      title: 'Vizag to Bhadrachalam Cabs', 
      distance: '400 km', 
      price: '₹11,500/-', 
      link: '/vizag-to-bhadrachalam-cabs',
      description: 'Affordable Vizag to Bhadrachalam cabs with AC, professional drivers, and best price.'
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Helmet>
        <title>Popular Outstation Taxi Routes from Vizag | Vizag Airport Cabs</title>
        <meta name="description" content="Explore our most popular outstation taxi routes from Visakhapatnam. Affordable cabs to Araku, Rajahmundry, Vijayawada, Hyderabad, and more." />
        <meta name="keywords" content="Vizag Outstation Routes, Taxi from Vizag to Araku, Vizag to Vijayawada Cabs, Visakhapatnam Taxi Routes" />
        <link rel="canonical" href={buildCanonical('/routes')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Popular Outstation Taxi Routes from Vizag | Vizag Airport Cabs" />
        <meta property="og:description" content="Explore our most popular outstation taxi routes from Visakhapatnam. Affordable cabs to Araku, Rajahmundry, Vijayawada, Hyderabad, and more." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Vizag Airport Cabs" />
        <meta property="og:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vizagairportcabs" />
        <meta name="twitter:creator" content="@vizagairportcabs" />
        <meta name="twitter:title" content="Popular Outstation Taxi Routes from Vizag | Vizag Airport Cabs" />
        <meta name="twitter:description" content="Explore our most popular outstation taxi routes from Visakhapatnam. Affordable cabs to Araku, Rajahmundry, Vijayawada, Hyderabad, and more." />
        <meta name="twitter:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(buildHubSchema({ currentUrl, pageTitle: 'Popular Outstation Taxi Routes from Vizag', description: 'Explore our most popular outstation taxi routes from Visakhapatnam. Affordable cabs to Araku, Rajahmundry, Vijayawada, Hyderabad, and more.', pageType: 'CollectionPage', collectionName: 'Popular Outstation Taxi Routes from Vizag', collectionItems: popularRoutes.map(r => ({ name: r.title, url: `https://vizagairportcabs.in${r.link}`, description: r.description })) }))}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
              alt="Popular Taxi Routes from Vizag" 
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
                Popular Outstation Routes
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Explore our most requested outstation destinations from Visakhapatnam. Comfortable journeys at the best prices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Routes Listing */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularRoutes.map((route, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-yellow transition-colors">{route.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {route.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starting from</div>
                      <div className="text-lg font-black text-brand-blue">{route.price}</div>
                    </div>
                    <Link 
                      to={route.link} 
                      className="bg-slate-900 text-white p-3 rounded-xl hover:bg-brand-yellow hover:text-brand-blue transition-all"
                    >
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-brand-blue text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-8">Can't Find Your <span className="text-brand-yellow">Destination?</span></h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              We provide taxi services to many more locations. Call us for a custom quote for your specific journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918985583355" className="w-full sm:w-auto bg-brand-yellow text-brand-blue px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <PhoneCall size={24} /> Call +91 89855 83355
              </a>
              <a href="https://wa.me/918985583355" className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={24} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
