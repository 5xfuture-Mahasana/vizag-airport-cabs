import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  ChevronRight, 
  Star,
  Clock,
  MapPin,
  Camera,
  Mountain,
  CloudSun,
  Map
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { buildHubSchema, buildCanonical } from '../utils/seo';

const currentUrl = 'https://vizagairportcabs.in/tour-packages';

const tours = [
  {
    title: "Vizag City Sightseeing",
    path: "/vizag-sightseeing-tour",
    description: "Explore the best of the 'City of Destiny' including RK Beach, Kailasagiri, and Submarine Museum.",
    duration: "Full Day",
    image: "vizag-city",
    icon: <Camera className="text-brand-yellow" />
  },
  {
    title: "Vizag to Araku Valley",
    path: "/vizag-to-araku-valley-tour",
    description: "A scenic journey to the 'Ooty of Andhra' featuring Borra Caves and coffee plantations.",
    duration: "1-2 Days",
    image: "araku-valley",
    icon: <Mountain className="text-brand-yellow" />
  },
  {
    title: "Vizag to Lambasingi",
    path: "/vizag-to-lambasingi-tour",
    description: "Visit the 'Kashmir of Andhra Pradesh' for its misty hills and near-zero temperatures.",
    duration: "1-2 Days",
    image: "lambasingi-hills",
    icon: <CloudSun className="text-brand-yellow" />
  },
  {
    title: "Vizag to Vanjangi Hills",
    path: "/vizag-to-vanjangi-tour",
    description: "Witness the magical 'Sea of Clouds' and breathtaking sunrise from the hilltop.",
    duration: "1-2 Days",
    image: "vanjangi-hills",
    icon: <Map className="text-brand-yellow" />
  }
];

export default function TourPackages() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Helmet>
        <title>Best Vizag Tour Packages | Sightseeing & Outstation Tours</title>
        <meta name="description" content="Explore premium Vizag tour packages. From city sightseeing to Araku Valley, Lambasingi, and Vanjangi Hills. Book your cab today for a comfortable journey." />
        <meta name="keywords" content="Vizag Tour Packages, Vizag Sightseeing, Araku Valley Tour, Lambasingi Tour, Vanjangi Hills Tour, Visakhapatnam Tour Packages" />
        <link rel="canonical" href={buildCanonical('/tour-packages')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Vizag Tour Packages | Sightseeing & Outstation Tours" />
        <meta property="og:description" content="Explore premium Vizag tour packages. From city sightseeing to Araku Valley, Lambasingi, and Vanjangi Hills. Book your cab today for a comfortable journey." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Vizag Airport Cabs" />
        <meta property="og:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vizagairportcabs" />
        <meta name="twitter:creator" content="@vizagairportcabs" />
        <meta name="twitter:title" content="Best Vizag Tour Packages | Sightseeing & Outstation Tours" />
        <meta name="twitter:description" content="Explore premium Vizag tour packages. From city sightseeing to Araku Valley, Lambasingi, and Vanjangi Hills. Book your cab today for a comfortable journey." />
        <meta name="twitter:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(buildHubSchema({ currentUrl, pageTitle: 'Best Vizag Tour Packages | Sightseeing & Outstation Tours', description: 'Explore premium Vizag tour packages. From city sightseeing to Araku Valley, Lambasingi, and Vanjangi Hills. Book your cab today for a comfortable journey.', pageType: 'CollectionPage', collectionName: 'Vizag Tour Packages', collectionItems: tours.map(t => ({ name: t.title, url: `https://vizagairportcabs.in${t.path}`, description: t.description })) }))}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-brand-blue text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://picsum.photos/seed/travel-vizag/1920/1080" 
              alt="Travel Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl lg:text-7xl font-black mb-6">
                Premium <span className="text-brand-yellow">Tour Packages</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Discover the hidden gems of Andhra Pradesh with our curated tour packages. 
                Comfortable cabs, professional drivers, and unforgettable memories.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {tours.map((tour, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${tour.image}/800/600`} 
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-brand-blue font-bold text-sm shadow-lg">
                        <Clock size={16} className="text-brand-yellow" />
                        {tour.duration}
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-4">
                      {tour.icon}
                      <h3 className="text-2xl font-bold text-brand-blue">{tour.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {tour.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                        <MapPin size={16} />
                        Pickup from Vizag
                      </div>
                      <Link 
                        to={tour.path}
                        className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all"
                      >
                        View Details <ChevronRight size={20} className="text-brand-yellow" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book With Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-brand-blue mb-4">Why Book Your Tour With Us?</h2>
              <p className="text-slate-500">We prioritize your comfort and safety above all else.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Local Drivers",
                  desc: "Our drivers are well-versed with the hilly terrains and local shortcuts.",
                  icon: <Star className="text-brand-yellow" size={32} />
                },
                {
                  title: "Clean & Safe Cabs",
                  desc: "All our vehicles are regularly sanitized and maintained for peak performance.",
                  icon: <Star className="text-brand-yellow" size={32} />
                },
                {
                  title: "24/7 Support",
                  desc: "We are always available to assist you during your journey.",
                  icon: <Star className="text-brand-yellow" size={32} />
                }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-blue mb-4">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-yellow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-brand-blue mb-8">Ready to Start Your Adventure?</h2>
            <p className="text-brand-blue/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Call us now to get a customized quote for your group. 
              We offer the best prices for all tour packages from Vizag.
            </p>
            <a href="tel:+918985583355" className="inline-flex items-center gap-3 bg-brand-blue text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl">
              <PhoneCall size={24} /> Call +91 89855 83355
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
