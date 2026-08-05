import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { buildHubSchema, buildCanonical } from '../utils/seo';

const currentUrl = 'https://vizagairportcabs.in/contact';

export default function Contact() {
  const contactInfo = [
    {
      title: "Our Address",
      details: "D.No 32-10-41/7, Near Road No 1, Sheelanagar Post, BHPV Township, Visakhapatnam, Andhra Pradesh – 530012",
      icon: <MapPin className="w-6 h-6" />,
      link: "https://maps.google.com/?q=Sheelanagar+Visakhapatnam"
    },
    {
      title: "Phone Number",
      details: "+91 89855 83355",
      icon: <PhoneCall className="w-6 h-6" />,
      link: "tel:+918985583355"
    },
    {
      title: "Email Address",
      details: "bookings@vizagairportcabs.in",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:bookings@vizagairportcabs.in"
    },
    {
      title: "Working Hours",
      details: "24/7 Available for Bookings",
      icon: <Clock className="w-6 h-6" />,
      link: "#"
    }
  ];

  const contactFaqs = [
    {
      q: 'How do I book a cab in Vizag?',
      a: 'You can book by calling +91 8985583355, sending a WhatsApp message, or filling out our contact form. Instant confirmation available.',
    },
    {
      q: 'What is your response time?',
      a: 'We respond within minutes. Our team is available 24/7 and aims to confirm bookings instantly via WhatsApp or phone.',
    },
    {
      q: 'Do you provide airport pickup at Vizag Airport?',
      a: 'Yes, we provide 24/7 airport pickup and drop at Visakhapatnam International Airport. Our driver tracks your flight for timely pickup.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash, UPI (GPay/PhonePe/Paytm), credit cards, and debit cards for all bookings.',
    },
    {
      q: 'Can I cancel or modify my booking?',
      a: 'Yes, cancellations and modifications are allowed up to 2 hours before the scheduled pickup. Contact us on WhatsApp or phone for quick updates.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Helmet>
        <title>Contact Us | Vizag Airport Cabs - 24/7 Taxi Service</title>
        <meta name="description" content="Contact Vizag Airport Cabs for reliable airport transfers and outstation taxi services in Visakhapatnam. Call +91 89855 83355 for instant booking." />
        <meta name="keywords" content="Contact Vizag Airport Cabs, Vizag Taxi Booking Number, Visakhapatnam Cab Service Contact, Airport Taxi Vizag" />
        <link rel="canonical" href={buildCanonical('/contact')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Vizag Airport Cabs - 24/7 Taxi Service" />
        <meta property="og:description" content="Contact Vizag Airport Cabs for reliable airport transfers and outstation taxi services in Visakhapatnam. Call +91 89855 83355 for instant booking." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Vizag Airport Cabs" />
        <meta property="og:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vizagairportcabs" />
        <meta name="twitter:creator" content="@vizagairportcabs" />
        <meta name="twitter:title" content="Contact Us | Vizag Airport Cabs - 24/7 Taxi Service" />
        <meta name="twitter:description" content="Contact Vizag Airport Cabs for reliable airport transfers and outstation taxi services in Visakhapatnam. Call +91 89855 83355 for instant booking." />
        <meta name="twitter:image" content="https://vizagairportcabs.in/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(buildHubSchema({ currentUrl, pageTitle: 'Contact Us | Vizag Airport Cabs - 24/7 Taxi Service', description: 'Contact Vizag Airport Cabs for reliable airport transfers and outstation taxi services in Visakhapatnam. Call +91 89855 83355 for instant booking.', faqs: contactFaqs, pageType: 'ContactPage' }))}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
              alt="Contact Vizag Airport Cabs" 
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
                Contact Vizag Airport Cabs
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Have questions or need to book a ride? We are available 24/7 to assist you with all your travel needs in Visakhapatnam.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info & Map */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-brand-blue mb-8">Get in Touch</h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {contactInfo.map((info, i) => (
                      <a 
                        key={i} 
                        href={info.link}
                        className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all group"
                      >
                        <div className="text-brand-blue mb-4 group-hover:text-brand-yellow transition-colors">
                          {info.icon}
                        </div>
                        <h3 className="text-lg font-bold text-brand-blue mb-2">{info.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{info.details}</p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Embed */}
                <div className="h-[400px] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121634.3941785566!2d83.1491866390625!3d17.705741699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969062f84062f%3A0x9a9a9a9a9a9a9a9a!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1711111111111!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="bg-slate-50 p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm h-fit">
                <h2 className="text-3xl font-bold text-brand-blue mb-4">Enquiry Form</h2>
                <p className="text-slate-500 mb-10">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Pickup Location</label>
                      <input 
                        type="text" 
                        placeholder="Enter Pickup Location" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Drop Location</label>
                      <input 
                        type="text" 
                        placeholder="Enter Drop Location" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Travel Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Message (Optional)</label>
                    <textarea 
                      rows={4} 
                      placeholder="Any special requirements?" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2">
                    <Send size={20} /> Submit Enquiry
                  </button>
                </form>

                <div className="mt-10 pt-10 border-t border-slate-200 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <CheckCircle2 size={16} className="text-green-500" /> Instant Response
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <CheckCircle2 size={16} className="text-green-500" /> 24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-20 bg-brand-yellow text-brand-blue text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-8">Need Immediate Assistance?</h2>
            <p className="text-brand-blue/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Call us directly for instant cab booking and any travel-related queries.
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
