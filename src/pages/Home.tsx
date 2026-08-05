import React, { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import sedanImg from '../assets/cars/sedan.jpg';
import suvImg from '../assets/cars/suv.jpg';
import tempoImg from '../assets/cars/tempo.jpg';
import { 
  Plane, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  ChevronRight, 
  Star, 
  Car,
  Calendar,
  UserCheck,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  SITE,
  buildHomeSchema,
  buildCanonical,
} from '../utils/seo';

const HOME_FAQS = [
  {
    q: 'Which is the best cab service in Vizag?',
    a: 'Vizag Airport Cabs is widely considered the best cab service in Vizag, known for its punctuality, transparent pricing, and professional drivers.',
  },
  {
    q: 'What are Vizag airport taxi charges?',
    a: 'Vizag airport taxi charges start from as low as ₹599 for city drops. We offer fixed pricing with no hidden costs, ensuring a hassle-free experience for travelers.',
  },
  {
    q: 'Is outstation cab available in Vizag?',
    a: 'Yes, we provide premium outstation cabs in Vizag for various destinations like Araku, Rajahmundry, Vijayawada, Srikakulam, and more. Our outstation services are reliable and safe.',
  },
  {
    q: 'Vizag to Hyderabad cab price?',
    a: 'The Vizag to Hyderabad cab price starts from ₹11,999 for a one-way drop in a premium sedan. We also offer round-trip packages at competitive rates.',
  },
  {
    q: 'Vizag to Araku cab booking?',
    a: 'You can easily book a Vizag to Araku cab by calling us at +91 8985583355 or via WhatsApp for instant confirmation. We offer both one-way and round-trip options.',
  },
  {
    q: 'Do you provide 24/7 taxi service in Vizag?',
    a: 'Yes, Vizag Airport Cabs operates 24/7. Whether it\'s an early morning flight or a late-night arrival, our drivers are always ready to serve you.',
  },
  {
    q: 'Are your drivers experienced for hill station trips?',
    a: 'Absolutely! For routes like Vizag to Araku, we assign drivers who are specifically trained and experienced in navigating hilly terrains and Ghat roads safely.',
  },
];

export default function Home() {
  const [bookingType, setBookingType] = useState<'airport' | 'local' | 'outstation'>('airport');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleEnquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!pickup.trim() || !drop.trim()) {
      alert('Please enter both pickup and drop locations.');
      return;
    }

    const message = `Hello, I want to book a cab.

Pickup: ${pickup}
Drop: ${drop}
Date: ${date || 'Not specified'}
Time: ${time || 'Not specified'}

Please share price and availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918985583355?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      id: 'airport',
      title: 'Airport Transfer',
      description: 'Reliable pickup and drop-off to and from Vizag Airport. No waiting time.',
      icon: <Plane className="w-8 h-8 text-brand-blue" />,
    },
    {
      id: 'local',
      title: 'Local Rental',
      description: 'Explore Vizag with our hourly rental packages. Perfect for city tours.',
      icon: <MapPin className="w-8 h-8 text-brand-blue" />,
    },
    {
      id: 'outstation',
      title: 'Outstation',
      description: 'Comfortable long-distance travel to nearby cities with experienced drivers.',
      icon: <Car className="w-8 h-8 text-brand-blue" />,
    },
  ];

  const trustFactors = [
    {
      title: '24/7 Service',
      description: 'Round-the-clock support and availability for all your travel needs.',
      icon: <Clock className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: 'Verified Drivers',
      description: 'All our drivers undergo thorough background checks for your safety.',
      icon: <UserCheck className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: 'Fixed Pricing',
      description: 'Transparent pricing with no hidden charges or surge pricing.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-yellow" />,
    },
    {
      title: 'Premium Fleet',
      description: 'Well-maintained, clean, and comfortable vehicles for every budget.',
      icon: <Star className="w-6 h-6 text-brand-yellow" />,
    },
  ];

  const popularRoutes = [
    {
      title: 'Bhogapuram Airport Cabs',
      distance: '40 km',
      price: '₹799/-',
      link: '/bhogapuram-airport-cabs',
      description: '24/7 Bhogapuram Airport pickup & drop cabs with flight tracking and professional chauffeurs.',
      featured: true,
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
  ];

  const vehicles = [
    {
      name: 'Premium Sedan',
      tagline: 'Best for City Travel',
      price: '₹13/km',
      seats: '4+1 Seats',
      image: sedanImg,
      placeholderText: 'Maruti Suzuki Swift Dzire / Toyota Etios',
      features: ['Swift Dzire / Toyota Etios', 'AC & Music System', 'Clean & Sanitized']
    },
    {
      name: 'Luxury SUV',
      tagline: 'Best for Family Trips',
      price: '₹16/km',
      seats: '6+1 Seats',
      image: suvImg, 
      placeholderText: 'Toyota Innova Crysta / Maruti Ertiga',
      features: ['Innova Crysta / Ertiga', 'Extra Legroom', 'Carrier Available']
    },
    {
      name: 'Tempo Traveller',
      tagline: 'Best for Group Travel',
      price: '₹30/km',
      seats: '12-26 Seats',
      image: tempoImg, 
      placeholderText: 'Force Tempo Traveller (12-26 Seater)',
      features: ['12 to 26 Seater', 'Pushback Seats', 'Ample Luggage Space']
    }
  ];

  const testimonials = [
    {
      name: 'Anjali Verma',
      role: 'Business Traveler',
      content: 'I always use Vizag Airport Cabs for my airport transfers. They are always on time and the cars are spotless.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?u=anjali'
    },
    {
      name: 'Vikram Singh',
      role: 'Tourist',
      content: 'Booked a local rental for a city tour. The driver was very knowledgeable about Vizag and polite.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?u=vikram'
    },
    {
      name: 'Suresh Babu',
      role: 'Regular Customer',
      content: 'Best outstation service. We went to Araku and the journey was very comfortable. Highly recommended.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?u=suresh'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Transparent Pricing',
      description: 'What you see is what you pay. No hidden charges, no surge pricing, and no surprises.',
      icon: <ShieldCheck className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Professional Drivers',
      description: 'Our drivers are background-verified, experienced, and committed to your safety and comfort.',
      icon: <UserCheck className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Punctuality Guaranteed',
      description: 'We value your time. Our drivers arrive 15 minutes early to ensure you never miss a flight.',
      icon: <Clock className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: 'Well-Maintained Fleet',
      description: 'Our vehicles are regularly serviced and sanitized to provide a premium travel experience.',
      icon: <Car className="w-10 h-10 text-brand-blue" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-yellow selection:text-brand-blue">
      <Helmet>
        <title>Vizag Airport Cabs | 24/7 Airport Taxi & Outstation Cab Booking</title>
        <meta name="description" content="Book 24/7 Vizag Airport Cabs & Bhogapuram Airport Taxi service. Affordable AC Sedans, SUVs & Innova Crysta. Instant pickup, professional drivers, zero surge pricing." />
        <meta name="keywords" content="Vizag Airport Cabs, Visakhapatnam Airport Taxi, Airport Taxi Vizag, Airport Cab Service, Bhogapuram Airport Cabs, Vizag Airport Transfers, Airport Pickup, Airport Drop, 24/7 Airport Taxi, Outstation Taxi Vizag, Taxi in Vizag, Cab Service Visakhapatnam" />
        <link rel="canonical" href={buildCanonical('/')} />
        <meta name="author" content="Vizag Airport Cabs Editorial Team" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vizag Airport Cabs | 24/7 Airport Taxi & Outstation Cab Booking" />
        <meta property="og:description" content="Book 24/7 Vizag Airport Cabs & Bhogapuram Airport Taxi service. Affordable AC Sedans, SUVs & Innova Crysta. Instant pickup, professional drivers, zero surge pricing." />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vizag Airport Cabs — premium airport taxi & outstation cab service" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE.twitterHandle} />
        <meta name="twitter:creator" content={SITE.twitterHandle} />
        <meta name="twitter:title" content="Vizag Airport Cabs | 24/7 Airport Taxi & Outstation Cab Booking" />
        <meta name="twitter:description" content="Book 24/7 Vizag Airport Cabs & Bhogapuram Airport Taxi service. Affordable AC Sedans, SUVs & Innova Crysta." />
        <meta name="twitter:image" content="https://vizagairportcabs.in/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(buildHomeSchema({
            testimonials: [
              {
                name: 'Anjali Verma',
                role: 'Business Traveler',
                content: 'I always use Vizag Airport Cabs for my airport transfers. They are always on time and the cars are spotless.',
                rating: 5,
                date: '2026-03-10',
              },
              {
                name: 'Vikram Singh',
                role: 'Tourist',
                content: 'Booked a local rental for a city tour. The driver was very knowledgeable about Vizag and polite.',
                rating: 5,
                date: '2026-04-22',
              },
              {
                name: 'Suresh Babu',
                role: 'Regular Customer',
                content: 'Best outstation service. We went to Araku and the journey was very comfortable. Highly recommended.',
                rating: 5,
                date: '2026-05-05',
              },
            ],
            faqs: HOME_FAQS,
            popularRoutes: popularRoutes.map((r) => ({
              title: r.title,
              link: r.link,
              price: r.price,
            })),
          }))}
        </script>
      </Helmet>
      <Navbar />

      <main id="main-content">
      <section className="relative hero-compact">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
            alt="Vizag Airport Cabs hero background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            width="2070"
            height="475"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pr-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-brand-yellow/20 backdrop-blur-md border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-3 lg:mb-4"
              >
                <Star size={14} fill="currentColor" />
                #1 Rated Cab Service in Vizag
              </motion.div>
              
              <h1 className="text-white mb-3 lg:mb-4">
                Premium <br />
                <span className="text-brand-yellow">Airport Cabs</span> <br />
                <span className="text-white/90">in Vizag</span>
              </h1>
              
              <p className="text-base lg:text-lg text-white/80 mb-4 lg:mb-6 max-w-lg leading-relaxed font-medium">
                Experience the most reliable and comfortable airport transfers in Visakhapatnam. 
                A premium service by <span className="text-brand-yellow font-bold">Roadstar Cabs</span>.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6 lg:mb-8 lg:hidden">
                <motion.a
                  href="tel:8985583355"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-yellow text-brand-blue px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-xl shadow-brand-yellow/20"
                >
                  <Phone size={18} />
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/918985583355?text=Hi%20I%20want%20to%20book%20a%20cab%20in%20Vizag"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-white/20 transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Booking
                </motion.a>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-blue bg-slate-200 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="" width="40" height="40" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <div className="flex text-brand-yellow mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold">4.9/5 Rating <span className="text-white/60 font-medium ml-1">(2,500+ Happy Riders)</span></p>
                </div>
              </div>
            </motion.div>

            {/* Booking Form - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-5 lg:p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex p-1 bg-black/20 backdrop-blur-md rounded-xl mb-4 border border-white/5">
                {(['airport', 'local', 'outstation'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setBookingType(type)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                      bookingType === type 
                        ? 'bg-brand-yellow text-brand-blue shadow-lg' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              <form className="space-y-4" onSubmit={handleEnquiry}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Pickup Location</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-yellow group-focus-within:scale-110 transition-transform" size={18} />
                    <input 
                      type="text" 
                      placeholder="Enter pickup address" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:bg-white/10 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Drop Location</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-yellow group-focus-within:scale-110 transition-transform" size={18} />
                    <input 
                      type="text" 
                      placeholder="Enter destination" 
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:bg-white/10 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-yellow" size={18} />
                      <input 
                        type="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:bg-white/10 transition-all [color-scheme:dark] text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/60 uppercase tracking-widest ml-1">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-yellow" size={18} />
                      <input 
                        type="time" 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 focus:bg-white/10 transition-all [color-scheme:dark] text-sm"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand-yellow text-brand-blue py-4 rounded-xl font-bold text-xl hover:bg-yellow-400 transition-all shadow-xl shadow-brand-yellow/20 flex items-center justify-center gap-2 group mt-2">
                  Send Enquiry
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section id="services" className="section-compact bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-brand-blue mb-6">Premium Services</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="mb-8 p-5 bg-brand-blue/5 rounded-[2rem] w-fit group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-blue group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 text-lg">{service.description}</p>
                <button className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Book Service <ChevronRight size={20} className="text-brand-yellow" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section id="routes" className="section-compact bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="text-left">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
              >
                Travel in Style
              </motion.span>
              <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-brand-blue mb-4">Popular Routes</h2>
              <p className="text-slate-500 text-lg max-w-xl">Check out our most frequent outstation routes from Vizag with fixed, transparent pricing.</p>
            </div>
            <button className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-brand-blue/20">
              View All Routes
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {popularRoutes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={
                  'p-8 rounded-[2.5rem] border shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden ' +
                  (route.featured
                    ? 'bg-brand-blue text-white border-brand-blue lg:col-span-2 xl:col-span-2 ring-2 ring-brand-yellow/40'
                    : 'bg-slate-50 border-slate-100 hover:border-brand-blue/20')
                }
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={
                    'p-4 rounded-2xl shadow-sm transition-colors duration-500 ' +
                    (route.featured
                      ? 'bg-white/10 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-blue'
                      : 'bg-white text-brand-blue group-hover:bg-brand-blue group-hover:text-white')
                  }>
                    <Car className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {route.featured && (
                      <span className="text-[10px] font-black tracking-[0.2em] text-brand-blue bg-brand-yellow px-3 py-1 rounded-full uppercase">
                        Featured • New Airport
                      </span>
                    )}
                    <span className={
                      'text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ' +
                      (route.featured ? 'bg-white/15 text-white' : 'text-brand-blue bg-brand-blue/10')
                    }>
                      {route.distance}
                    </span>
                  </div>
                </div>

                <Link to={route.link}>
                  <h4 className={
                    'text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform ' +
                    (route.featured ? 'text-white group-hover:text-brand-yellow' : 'text-brand-blue hover:text-brand-yellow')
                  }>
                    {route.title}
                  </h4>
                </Link>

                <p className={
                  'text-sm mb-4 leading-relaxed ' + (route.featured ? 'text-blue-100' : 'text-slate-500')
                }>
                  {route.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className={'text-3xl font-black ' + (route.featured ? 'text-brand-yellow' : 'text-slate-900')}>
                    ₹{route.price.replace('₹', '')}
                  </span>
                  <span className={'text-sm font-bold uppercase ' + (route.featured ? 'text-white/70' : 'text-slate-400')}>
                    All Incl.
                  </span>
                </div>

                <Link
                  to={route.link}
                  className={
                    'w-full py-4 rounded-2xl font-bold text-sm shadow-sm transition-all duration-300 flex items-center justify-center gap-2 border ' +
                    (route.featured
                      ? 'bg-brand-yellow text-brand-blue hover:bg-white hover:text-brand-blue border-brand-yellow'
                      : 'bg-white text-brand-blue group-hover:bg-brand-blue group-hover:text-white border-slate-200 group-hover:border-brand-blue')
                  }
                >
                  Book Now <ChevronRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-compact bg-brand-blue relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-yellow font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
              >
                The Roadstar Advantage
              </motion.span>
              <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-8 leading-tight">Why We Are The Best In Vizag</h2>
              <p className="text-blue-100 text-xl mb-12 leading-relaxed">We combine local expertise with professional standards to give you the most reliable cab service in Visakhapatnam.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Clock />, title: "24/7 Support", desc: "Round the clock assistance for all your travel needs." },
                  { icon: <ShieldCheck />, title: "Safe & Secure", desc: "Verified drivers and well-maintained vehicles for your safety." },
                  { icon: <UserCheck />, title: "Professional Drivers", desc: "Experienced, polite, and well-trained local experts." },
                  { icon: <Calendar />, title: "Easy Booking", desc: "Instant confirmation via WhatsApp or Call." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-yellow border border-white/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl rotate-3">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional Vizag Airport Cabs service"
                  width="1000"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] shadow-2xl border border-white/20 z-20"
              >
                <div className="text-4xl font-black text-brand-blue mb-1">10k+</div>
                <div className="text-slate-600 font-bold uppercase tracking-widest text-xs">Happy Customers</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="section-compact bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Fleet
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-brand-blue mb-6">Choose Your Ride</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="h-72 overflow-hidden relative bg-slate-100">
                  {vehicle.image ? (
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      width="800"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50">
                      <Car className="w-16 h-16 text-slate-200 mb-4" />
                      <span className="text-slate-600 font-bold text-xl leading-tight">{vehicle.placeholderText}</span>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end z-10">
                    <div>
                      <span className="text-brand-yellow font-bold text-xs uppercase tracking-[0.2em] mb-1 block">{vehicle.tagline}</span>
                      <h3 className="text-2xl font-bold text-white">{vehicle.name}</h3>
                    </div>
                    <div className="bg-brand-yellow text-brand-blue px-4 py-2 rounded-xl font-black text-lg shadow-lg">
                      {vehicle.price}
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-xs border border-white/20 z-10">
                    {vehicle.seats}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <ul className="space-y-4 mb-10 flex-grow">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                        <div className="w-2 h-2 bg-brand-yellow rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a 
                    href={`https://wa.me/918985583355?text=Hi%20I%20want%20to%20book%20a%20${vehicle.name}%20in%20Vizag`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-blue text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-blue-900 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-blue/20"
                  >
                    Book Now <MessageCircle size={20} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-compact bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Happy Travelers
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-brand-blue mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative"
              >
                <div className="absolute -top-6 left-10 w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg">
                  <Star className="text-brand-blue w-6 h-6" fill="currentColor" />
                </div>
                
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-lg italic leading-relaxed mb-8">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt="" width="100" height="100" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-brand-blue text-lg">{testimonial.name}</h4>
                    <span className="text-slate-400 text-sm font-medium">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-slate-100">
            {[
              { label: "Happy Riders", value: "10k+" },
              { label: "Premium Cars", value: "50+" },
              { label: "Cities Covered", value: "15+" },
              { label: "Avg Rating", value: "4.9" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-black text-brand-blue mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-compact relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/30">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
              >
                Limited Time Offer
              </motion.span>
              <h2 className="text-4xl lg:text-7xl font-display font-extrabold text-white mb-10 leading-tight">
                Ready to Experience the <span className="text-brand-yellow italic">Premium</span> Way to Travel?
              </h2>
              <p className="text-blue-100 text-xl mb-14 leading-relaxed max-w-2xl mx-auto">
                Join 10,000+ happy travelers who trust Roadstar Cabs for their airport transfers and outstation trips in Vizag.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <motion.a 
                  href="https://wa.me/918985583355?text=Hi%20I%20want%20to%20book%20a%20cab%20now"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-brand-yellow text-brand-blue px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-brand-yellow/40 transition-all flex items-center justify-center gap-3"
                >
                  Book Now <MessageCircle size={24} />
                </motion.a>
                <motion.a 
                  href="tel:+918985583355" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-4 text-white font-bold text-xl border-2 border-white/20 px-12 py-6 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <PhoneCall size={24} className="text-brand-yellow" />
                  Call Support
                </motion.a>
              </div>
              
              <div className="mt-16 flex items-center justify-center gap-8 text-blue-200/60 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><ShieldCheck size={16} /> Secure Booking</span>
                <span className="flex items-center gap-2"><Clock size={16} /> 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-compact bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                >
                  Visit Our Office
                </motion.span>
                <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-brand-blue mb-8 leading-tight">Find Us Near Vizag Airport</h2>
                <p className="text-slate-600 text-xl leading-relaxed">
                  We are strategically located near the Visakhapatnam International Airport to provide the fastest response times for our customers. 
                  Whether you're arriving or departing, our team is just minutes away.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                  <div className="bg-brand-blue text-white p-4 rounded-2xl shadow-lg group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue text-xl mb-2">Business Address</h4>
                    <p className="text-slate-500 font-medium">Airport Area, Visakhapatnam,<br />Andhra Pradesh 530009</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                  <div className="bg-brand-blue text-white p-4 rounded-2xl shadow-lg group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors duration-500">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue text-xl mb-2">Working Hours</h4>
                    <p className="text-slate-500 font-medium">Open 24 Hours / 7 Days a Week<br />Including Public Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group"
            >
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7601.178984702823!2d83.1913650450846!3d17.716842202927015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39697239b27737%3A0x8e61df5e23da3ea!2sVizag%20Airport%20Cabs!5e0!3m2!1sen!2sin!4v1774249368053!5m2!1sen!2sin" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
              <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[2.5rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              AEO Optimized
            </motion.span>
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-brand-blue mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Which is the best cab service in Vizag?",
                a: "Vizag Airport Cabs is widely considered the best cab service in Vizag, known for its punctuality, transparent pricing, and professional drivers."
              },
              {
                q: "What are Vizag airport taxi charges?",
                a: "Vizag airport taxi charges start from as low as ₹599 for city drops. We offer fixed pricing with no hidden costs, ensuring a hassle-free experience for travelers."
              },
              {
                q: "Is outstation cab available in Vizag?",
                a: "Yes, we provide premium outstation cabs in Vizag for various destinations like Araku, Rajahmundry, Vijayawada, Srikakulam, and more. Our outstation services are reliable and safe."
              },
              {
                q: "Vizag to Hyderabad cab price?",
                a: "The Vizag to Hyderabad cab price starts from ₹11,999 for a one-way drop in a premium sedan. We also offer round-trip packages at competitive rates."
              },
              {
                q: "Vizag to Araku cab booking?",
                a: "You can easily book a Vizag to Araku cab by calling us at +91 8985583355 or via WhatsApp for instant confirmation. We offer both one-way and round-trip options."
              },
              {
                q: "Do you provide 24/7 taxi service in Vizag?",
                a: "Yes, Vizag Airport Cabs operates 24/7. Whether it's an early morning flight or a late-night arrival, our drivers are always ready to serve you."
              },
              {
                q: "Are your drivers experienced for hill station trips?",
                a: "Absolutely! For routes like Vizag to Araku, we assign drivers who are specifically trained and experienced in navigating hilly terrains and Ghat roads safely."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <h4 className="text-xl font-bold text-brand-blue mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bhogapuram Airport Network Section */}
      <section className="section-compact bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-blue text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              >
                <Plane size={14} /> Bhogapuram International Airport (GMR)
              </motion.span>
              <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-brand-blue mb-3">Bogapuram Airport Cabs Network</h2>
              <p className="text-slate-500 max-w-2xl">24/7 taxi transfers between Bhogapuram International Airport (GMR) and every major destination across Visakhapatnam, Vizianagaram & Srikakulam.</p>
            </div>
            <Link
              to="/bhogapuram-airport-cabs"
              className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-xl shadow-brand-blue/20 flex items-center gap-2"
            >
              View Bhogapuram Hub <ChevronRight size={18} className="text-brand-yellow" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Bogapuram Airport to Vizag Cabs',
                link: '/bhogapuram-airport-to-vizag-cabs',
                desc: 'Direct 40 km cab from Bhogapuram Airport to Vizag city, Siripuram & RK Beach.',
                km: '40 km',
                price: '₹799/-',
                highlight: 'Most Booked',
              },
              {
                title: 'Bogapuram Airport to Vizianagaram Cabs',
                link: '/bhogapuram-airport-to-vizianagaram-cabs',
                desc: 'Quick 20 km transfer from Bhogapuram Airport to Vizianagaram Fort & junction.',
                km: '20 km',
                price: '₹599/-',
              },
              {
                title: 'Bogapuram Airport to Srikakulam Cabs',
                link: '/bhogapuram-airport-to-srikakulam-cabs',
                desc: 'Smooth 65 km highway ride from Bhogapuram Airport to Srikakulam town.',
                km: '65 km',
                price: '₹1,499/-',
              },
              {
                title: 'Bogapuram Airport to Araku Valley Cabs',
                link: '/bhogapuram-airport-to-araku-valley-cabs',
                desc: 'Scenic 135 km hill trip from Bhogapuram Airport to Araku Valley & Borra Caves.',
                km: '135 km',
                price: '₹4,499/-',
                highlight: 'Tourist Favorite',
              },
              {
                title: 'Bogapuram Airport Pickup Service',
                link: '/bhogapuram-airport-pickup',
                desc: 'Meet-and-greet pickup with live flight tracking, name placard & 30-min free waiting.',
                km: 'All Terminals',
                price: '₹799/-',
                highlight: 'Flight Tracking',
              },
              {
                title: 'Bogapuram Airport Cabs Hub',
                link: '/bhogapuram-airport-cabs',
                desc: 'Complete hub for all Bhogapuram Airport taxi services and corporate accounts.',
                km: 'Full Network',
                price: '₹799/-',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all duration-500 group relative overflow-hidden"
              >
                {item.highlight && (
                  <span className="absolute top-4 right-4 bg-brand-yellow text-brand-blue text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full">
                    {item.highlight}
                  </span>
                )}
                <div className="bg-brand-blue/10 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mb-4">
                  <Plane size={22} />
                </div>
                <Link to={item.link} className="block">
                  <h4 className="text-lg font-bold text-brand-blue mb-2 group-hover:text-brand-yellow transition-colors pr-20">
                    {item.title}
                  </h4>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={12} className="text-brand-blue" /> {item.km}</span>
                  <span className="font-bold text-brand-blue">{item.price}</span>
                </div>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1 text-brand-blue font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Book Cab <ChevronRight size={14} className="text-brand-yellow" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Landing Pages Section */}
      <section className="section-compact bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Services
            </motion.span>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-brand-blue mb-6">Explore Our Specialized Services</h2>
            <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Cabs in Vizag", link: "/cabs-in-vizag", desc: "Reliable local cab booking in Visakhapatnam." },
              { title: "Taxi Service in Vizag", link: "/taxi-service-in-vizag", desc: "Professional taxi services for all your needs." },
              { title: "Taxi in Visakhapatnam", link: "/taxi-service-in-visakhapatnam", desc: "Best-rated taxi service in the City of Destiny." },
              { title: "Airport Cabs Vizag", link: "/airport-cabs-vizag", desc: "Punctual airport transfers available 24/7." },
              { title: "Outstation Taxi Vizag", link: "/outstation-taxi-vizag", desc: "Safe and comfortable long-distance travel." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <Link to={item.link} className="block h-full">
                  <h4 className="text-lg font-bold text-brand-blue mb-2 group-hover:text-brand-yellow transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-brand-blue text-xs font-bold">
                    Learn More <ChevronRight size={14} className="text-brand-yellow" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
