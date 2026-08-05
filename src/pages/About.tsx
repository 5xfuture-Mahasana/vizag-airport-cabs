import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Car, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle,
  Target,
  Eye
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { buildHubSchema, buildCanonical, buildCommonMetaTags } from '../utils/seo';

const currentUrl = 'https://vizagairportcabs.in/about';

export default function About() {
  const faqs = [
    {
      q: "How can I book a cab with Vizag Airport Cabs?",
      a: "Booking a cab is easy! You can call us directly at +91 89855 83355 or send us a message on WhatsApp. We provide instant confirmation for all bookings."
    },
    {
      q: "Do you provide 24/7 airport pickup and drop services in Vizag?",
      a: "Yes, we operate 24/7. Whether you have an early morning flight or a late-night arrival, our drivers will be there to pick you up or drop you off at Vizag Airport."
    },
    {
      q: "Are your drivers verified and professional?",
      a: "Absolutely. All our drivers undergo thorough background checks and are trained to provide professional, safe, and courteous service to our customers."
    },
    {
      q: "What types of vehicles are available for outstation trips?",
      a: "We have a diverse fleet including Premium Sedans (Swift Dzire, Toyota Etios), Luxury SUVs (Innova Crysta, Ertiga), and Tempo Travellers for larger groups."
    },
    {
      q: "Is there any hidden charge in your pricing?",
      a: "No, we believe in transparent pricing. The fare we quote is what you pay. There are no hidden charges or unexpected surge pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Helmet>
        <title>About Vizag Airport Cabs | Best Taxi Service in Vizag</title>
        <meta name="description" content="Learn about Vizag Airport Cabs, your trusted partner for airport transfers, local rentals, and outstation trips in Visakhapatnam. 24/7 reliable service." />
        <meta name="keywords" content="Vizag Airport Cabs, About Vizag Airport Cabs, Taxi Service Vizag, Visakhapatnam Cabs, Roadstar Cabs" />
        <link rel="canonical" href={buildCanonical('/about')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Vizag Airport Cabs | Best Taxi Service in Vizag" />
        <meta property="og:description" content="Learn about Vizag Airport Cabs, your trusted partner for airport transfers, local rentals, and outstation trips in Visakhapatnam. 24/7 reliable service." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Vizag Airport Cabs" />
        <meta property="og:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vizagairportcabs" />
        <meta name="twitter:creator" content="@vizagairportcabs" />
        <meta name="twitter:title" content="About Vizag Airport Cabs | Best Taxi Service in Vizag" />
        <meta name="twitter:description" content="Learn about Vizag Airport Cabs, your trusted partner for airport transfers, local rentals, and outstation trips in Visakhapatnam. 24/7 reliable service." />
        <meta name="twitter:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(buildHubSchema({ currentUrl, pageTitle: 'About Vizag Airport Cabs | Best Taxi Service in Vizag', description: 'Learn about Vizag Airport Cabs, your trusted partner for airport transfers, local rentals, and outstation trips in Visakhapatnam. 24/7 reliable service.', datePublished: '2026-01-01', faqs, pageType: 'AboutPage' }))}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
              <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
              alt=""
              width="2070"
              height="1100"
              loading="eager"
              decoding="async"
              fetchPriority="high"
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
                About Vizag Airport Cabs
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Your premier choice for reliable, safe, and comfortable taxi services in Visakhapatnam. 
                A dedicated service by <span className="text-brand-yellow font-bold">Roadstar Cabs</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-6">Trusted Travel Partner in Visakhapatnam</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Vizag Airport Cabs has established itself as a leader in the local transportation industry. We specialize in providing seamless airport transfers, flexible local rentals, and safe outstation journeys for both business and leisure travelers.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our commitment to excellence is reflected in our well-maintained fleet and our team of professional drivers who prioritize your safety and punctuality above all else. When you choose us, you're choosing peace of mind.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                  <div className="text-4xl font-black text-brand-blue mb-2">10k+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Happy Clients</div>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                  <div className="text-4xl font-black text-brand-blue mb-2">50+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Expert Drivers</div>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                  <div className="text-4xl font-black text-brand-blue mb-2">24/7</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Support</div>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                  <div className="text-4xl font-black text-brand-blue mb-2">100%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Safe Travel</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-blue mb-4">Why Choose Us</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">We go the extra mile to ensure your journey is perfect.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Professional Drivers', desc: 'Experienced, background-verified, and courteous drivers.', icon: <Users className="w-8 h-8" /> },
                { title: 'Affordable Pricing', desc: 'Transparent rates with no hidden costs or surge pricing.', icon: <ShieldCheck className="w-8 h-8" /> },
                { title: '24/7 Availability', desc: 'Round-the-clock service for early flights and late arrivals.', icon: <Clock className="w-8 h-8" /> },
                { title: 'Clean AC Vehicles', desc: 'Regularly sanitized and well-maintained premium fleet.', icon: <Car className="w-8 h-8" /> }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                  <div className="text-brand-blue mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-blue mb-4">Our Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comprehensive travel solutions for every need.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              {[
                { title: 'Airport Transfers', desc: 'Punctual pickup and drop services to and from Visakhapatnam Airport. We track your flight to ensure we are always on time.' },
                { title: 'Local Rentals', desc: 'Flexible hourly and daily rental packages for city sightseeing, business meetings, or shopping trips within Vizag.' },
                { title: 'Outstation Trips', desc: 'Comfortable long-distance travel to destinations like Araku Valley, Rajahmundry, Vijayawada, and more with expert drivers.' }
              ].map((service, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="text-brand-yellow mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex gap-6">
                <div className="bg-brand-yellow/20 p-4 rounded-2xl h-fit">
                  <Target className="text-brand-yellow w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To provide safe, reliable, and affordable transportation solutions that exceed customer expectations through professional service and a commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-brand-yellow/20 p-4 rounded-2xl h-fit">
                  <Eye className="text-brand-yellow w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To be the most trusted and preferred cab service provider in Visakhapatnam, known for our integrity, punctuality, and premium travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-blue mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500">Quick answers to common queries about our services.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-bold text-brand-blue mb-3">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-brand-yellow text-brand-blue text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8">Ready to Book Your Ride?</h2>
            <p className="text-brand-blue/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Experience the best taxi service in Vizag today. Safe, comfortable, and always on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918985583355" className="w-full sm:w-auto bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
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
