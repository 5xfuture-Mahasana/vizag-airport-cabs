import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Car,
  CheckCircle2,
  MessageCircle,
  Info,
  ChevronRight,
  Plane,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { routeImageMap } from '../data/routeImages';
import { SITE, buildCanonical, buildRouteSchema } from '../utils/seo';

export interface RelatedRoute {
  title: string;
  link: string;
  description: string;
  distance?: string;
  price?: string;
  highlight?: string;
}

interface RoutePageProps {
  routeKey?: string; // Optional route key to look up image
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroSubtitle: string;
  distance: string;
  travelTime: string;
  startingFare: string;
  contentTitle: string;
  contentParagraphs: string[];
  whyChooseItems: string[];
  mustVisitPlaces?: { name: string; description: string }[];
  fareTable: { type: string; capacity: string; price: string }[];
  faqs: { q: string; a: string }[];
  travelTips: string[];
  heroImageAlt?: string;
  heroImageUrl?: string;
  canonicalUrl?: string;
  customSchema?: object;
  relatedRoutesTitle?: string;
  relatedRoutesSubtitle?: string;
  relatedRoutes?: RelatedRoute[];
}

export default function RoutePage({
  routeKey = '',
  title,
  description,
  keywords,
  heroTitle,
  heroSubtitle,
  distance,
  travelTime,
  startingFare,
  contentTitle,
  contentParagraphs,
  whyChooseItems,
  mustVisitPlaces,
  fareTable,
  faqs,
  travelTips,
  heroImageAlt,
  heroImageUrl,
  canonicalUrl,
  customSchema,
  relatedRoutesTitle = 'Popular Bhogapuram Airport Routes',
  relatedRoutesSubtitle = 'Explore our airport cab services from Bhogapuram International Airport to your favourite destinations.',
  relatedRoutes,
}: RoutePageProps) {
  
  // Look up the local image with safe fallback
  const finalHeroImage = heroImageUrl || (routeKey ? routeImageMap[routeKey] : undefined) || routeImageMap["bhogapuram-airport"];
  const currentUrl = canonicalUrl || buildCanonical(
    typeof window !== 'undefined' ? window.location.pathname : '/routes'
  );

  // Build schema graph via shared helper. customSchema prop still honored for backwards compat.
  const schemaGraph = customSchema || buildRouteSchema({
    currentUrl,
    pageTitle: title,
    description,
    heroImage: finalHeroImage,
    heroImageAlt: heroImageAlt || heroTitle,
    heroTitle,
    faqs,
    fareTable,
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={currentUrl} />
        <meta name="author" content="Vizag Airport Cabs Editorial Team" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={SITE.name} />
        {finalHeroImage && <meta property="og:image" content={finalHeroImage} />}
        {finalHeroImage && <meta property="og:image:alt" content={heroImageAlt || heroTitle} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.twitterHandle} />
        <meta name="twitter:creator" content={SITE.twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {finalHeroImage && <meta name="twitter:image" content={finalHeroImage} />}

        <script type="application/ld+json">
          {JSON.stringify(schemaGraph)}
        </script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="relative hero-compact bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={finalHeroImage} 
              alt={heroImageAlt || heroTitle} 
              className="w-full h-full object-cover"
              loading="eager" 
              decoding="async"
              fetchPriority="high"
              width="1200"
              height="675"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4">
                Popular Route
              </span>
              <h1 className="text-white mb-6">
                {heroTitle}
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4 lg:hidden">
                <a href="tel:+918985583355" className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                  <PhoneCall size={20} /> Call Now
                </a>
                <a href="https://wa.me/918985583355" className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                  <MessageCircle size={20} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Route Info Cards */}
        <section className="py-12 -mt-10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Distance</div>
                  <div className="text-xl font-bold text-brand-blue">{distance}</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="bg-yellow-50 p-4 rounded-2xl text-brand-yellow">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Travel Time</div>
                  <div className="text-xl font-bold text-brand-blue">{travelTime}</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Starting Fare</div>
                  <div className="text-xl font-bold text-brand-blue">{startingFare}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long Content Section */}
        <section className="section-compact bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-12">
                <div className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-brand-blue mb-6">{contentTitle}</h2>
                  {contentParagraphs.map((p, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}

                  <h3 className="text-2xl font-bold text-brand-blue mt-12 mb-4">Why Choose Vizag Airport Cabs for this Route?</h3>
                  <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                    {whyChooseItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>

                  {mustVisitPlaces && mustVisitPlaces.length > 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-brand-blue mt-12 mb-4">Places to Visit Along the Way</h3>
                      <div className="space-y-6">
                        {mustVisitPlaces.map((place, i) => (
                          <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-brand-blue mb-2">{i + 1}. {place.name}</h4>
                            <p className="text-sm text-slate-600">{place.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <h3 className="text-2xl font-bold text-brand-blue mt-12 mb-4">Taxi Fare Details</h3>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 mb-8">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th scope="col" className="p-4 font-bold text-brand-blue border-b border-slate-200">Vehicle Type</th>
                          <th scope="col" className="p-4 font-bold text-brand-blue border-b border-slate-200">Capacity</th>
                          <th scope="col" className="p-4 font-bold text-brand-blue border-b border-slate-200">Starting Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fareTable.map((row, i) => (
                          <tr key={i}>
                            <td className="p-4 border-b border-slate-100">{row.type}</td>
                            <td className="p-4 border-b border-slate-100">{row.capacity}</td>
                            <td className="p-4 border-b border-slate-100">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-brand-blue p-8 rounded-[2rem] text-white sticky top-24">
                  <h4 className="text-2xl font-bold mb-6">Book Your Trip</h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-yellow" size={20} />
                      <span className="text-sm">Instant Confirmation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-yellow" size={20} />
                      <span className="text-sm">No Advance Payment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-yellow" size={20} />
                      <span className="text-sm">Verified Drivers</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href="tel:+918985583355" className="w-full bg-brand-yellow text-brand-blue py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all">
                      <PhoneCall size={18} /> Call to Book
                    </a>
                    <a href="https://wa.me/918985583355" className="w-full bg-white/10 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                      <MessageCircle size={18} /> WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <h4 className="text-xl font-bold text-brand-blue mb-6">Travel Tips</h4>
                  <ul className="space-y-4 text-sm text-slate-600">
                    {travelTips.map((tip, i) => (
                      <li key={i} className="flex gap-3">
                        <Info className="text-brand-blue shrink-0" size={18} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Routes Section */}
        {relatedRoutes && relatedRoutes.length > 0 && (
          <section className="section-compact bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4">
                  <Plane size={14} className="inline mr-1" /> Airport Transfer Network
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-blue mb-4">{relatedRoutesTitle}</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">{relatedRoutesSubtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedRoutes.map((route, i) => (
                  <Link
                    key={i}
                    to={route.link}
                    className="group bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                        <Plane size={22} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-brand-blue mb-2 group-hover:text-brand-yellow transition-colors">{route.title}</h4>
                        <p className="text-sm text-slate-500 mb-3 line-clamp-2">{route.description}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                          {route.distance && (
                            <span className="flex items-center gap-1"><MapPin size={12} /> {route.distance}</span>
                          )}
                          {route.price && (
                            <span className="flex items-center gap-1"><ShieldCheck size={12} /> {route.price}</span>
                          )}
                          {route.highlight && (
                            <span className="bg-brand-yellow/20 text-brand-blue px-2 py-0.5 rounded-full font-bold">{route.highlight}</span>
                          )}
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-brand-yellow transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="section-compact bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-brand-blue mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500">Everything you need to know about your journey.</p>
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
        <section className="section-compact bg-brand-blue text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8">Plan Your Trip <span className="text-brand-yellow">Today</span></h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Don't wait! Book your cab now and enjoy a hassle-free journey with the best taxi service in Visakhapatnam.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918985583355" className="w-full sm:w-auto bg-brand-yellow text-brand-blue px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                Call +91 89855 83355
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
