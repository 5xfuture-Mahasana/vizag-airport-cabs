import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import arakuValleyImg from "../assets/tourImages/Vizag-To-Araku-Valley-Cabs.jpeg"
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Car,
  CheckCircle2,
  MessageCircle,
  Info,
  Star,
  Camera,
  Map
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE, buildTourSchema, buildCanonical } from '../utils/seo';

export interface TourImage {
  route: string;
  title: string;
  image: string;
}
export const tourImageMap: Record<string, TourImage> = {
  'araku-valley-1day': {
    route: '/vizag-to-araku-valley-cabs',
    title: 'Araku Valley Day Trip',
    image: arakuValleyImg,
  },
};
interface TourPageProps {
  tourKey?: string;
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroSubtitle: string;
  duration: string;
  pickup: string;
  cabOptions: string[];
  introduction: string;
  highlights: string[];
  placesCovered: { name: string; description: string }[];
  travelExperience: string;
  whyChooseItems: string[];
  faqs: { q: string; a: string }[];
  imageSeed: string;
  heroImageAlt?: string;
  heroImageUrl?: string;
}

export default function TourPage({
  tourKey = '',
  title,
  description,
  keywords,
  heroTitle,
  heroSubtitle,
  duration,
  pickup,
  cabOptions,
  introduction,
  highlights,
  placesCovered,
  travelExperience,
  whyChooseItems,
  faqs,
  imageSeed,
  heroImageAlt,
  heroImageUrl
}: TourPageProps) {
  // Get the image from our map based on the tourKey
  const tourImageData = tourKey ? tourImageMap[tourKey] : undefined;

  // Priority: 1. Manually passed URL -> 2. Map Image -> 3. Fallback Image
  const finalHeroImage = heroImageUrl || tourImageData?.image || arakuValleyImg;

  // Stable canonical URL — read once at component init, not at render time
  const currentUrl = buildCanonical(
    typeof window !== 'undefined' ? window.location.pathname : '/tour-packages'
  );

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
          {JSON.stringify(buildTourSchema({
            currentUrl,
            pageTitle: title,
            description,
            heroImage: finalHeroImage,
            heroImageAlt: heroImageAlt || heroTitle,
            heroTitle,
            faqs,
            placesCovered,
            duration,
          }))}
        </script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
<section className="relative h-[60vh] lg:h-[70vh] flex items-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-50">
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-yellow/20 backdrop-blur-md border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-6">
                <Star size={14} fill="currentColor" />
                Featured Tour Package
              </span>
              <h1 className="text-white text-4xl lg:text-6xl font-black mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                {heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+918985583355" className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg">
                  <PhoneCall size={20} /> Book This Tour
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="py-8 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</div>
                  <div className="text-sm font-bold text-brand-blue">{duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pickup</div>
                  <div className="text-sm font-bold text-brand-blue">{pickup}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  <Car size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vehicles</div>
                  <div className="text-sm font-bold text-brand-blue">{cabOptions.join(', ')}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Safety</div>
                  <div className="text-sm font-bold text-brand-blue">Verified Drivers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-16">
                {/* Introduction */}
                <div>
                  <h2 className="text-3xl font-bold text-brand-blue mb-6">Experience the Magic</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {introduction}
                  </p>
                </div>

                {/* Highlights */}
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                    <Camera className="text-brand-yellow" /> Tour Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Places Covered */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                    <Map className="text-brand-yellow" /> Places Covered in Detail
                  </h3>
                  <div className="space-y-8">
                    {placesCovered.map((place, i) => (
                      <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <h4 className="text-xl font-bold text-brand-blue mb-3 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center text-xs">{i + 1}</span>
                          {place.name}
                        </h4>
                        <p className="text-slate-600 leading-relaxed pl-11">
                          {place.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Travel Experience */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-6">The Journey Experience</h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {travelExperience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-brand-blue p-8 rounded-[2.5rem] text-white sticky top-24 shadow-2xl shadow-blue-900/20">
                  <h4 className="text-2xl font-bold mb-6">Book This Package</h4>
                  <p className="text-blue-100 text-sm mb-8">
                    Get a personalized quote for your group size and vehicle preference.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brand-yellow" size={18} />
                      Transparent Pricing
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brand-yellow" size={18} />
                      Professional Local Guides
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brand-yellow" size={18} />
                      Customizable Itinerary
                    </div>
                  </div>
                  <div className="space-y-4">
                    <a href="tel:+918985583355" className="w-full bg-brand-yellow text-brand-blue py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all">
                      <PhoneCall size={18} /> Call to Book
                    </a>
                    <a href="https://wa.me/918985583355" className="w-full bg-white/10 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                      <MessageCircle size={18} /> WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                  <h4 className="text-xl font-bold text-brand-blue mb-6">Why Choose Us?</h4>
                  <ul className="space-y-4">
                    {whyChooseItems.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-600">
                        <Info className="text-brand-blue shrink-0" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
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
              <p className="text-slate-500">Everything you need to know about this tour.</p>
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

        {/* CTA Section */}
        <section className="py-20 bg-brand-blue text-white text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">Ready for an <span className="text-brand-yellow">Unforgettable</span> Trip?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
              Book your tour package today and explore the best of Vizag and its surrounding beauty with comfort and safety.
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
