import {
  Car,
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col gap-1" aria-label="Vizag Airport Cabs Home">
              <div className="flex items-center gap-2">
                <div className="bg-brand-yellow p-2 rounded-lg">
                  <Car className="text-brand-blue w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tighter">VIZAG AIRPORT <span className="text-brand-yellow">CABS</span></span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-12">A Service by Roadstar Cabs</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium airport taxi and outstation cab services in Visakhapatnam. 
              Reliable, safe, and affordable travel solutions for every journey.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/vizagairportcabs" target="_blank" rel="noopener noreferrer" aria-label="Visit Vizag Airport Cabs on Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/vizagairportcabs" target="_blank" rel="noopener noreferrer" aria-label="Visit Vizag Airport Cabs on Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/vizagairportcabs" target="_blank" rel="noopener noreferrer" aria-label="Visit Vizag Airport Cabs on Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-blue transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/routes" className="text-slate-400 hover:text-white transition-colors">Popular Routes</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-yellow">Top Routes</h4>
            <ul className="space-y-4">
              <li><Link to="/vizag-to-araku-valley-cabs" className="text-slate-400 hover:text-white transition-colors">Vizag to Araku Valley</Link></li>
              <li><Link to="/vizag-to-rajahmundry-cabs" className="text-slate-400 hover:text-white transition-colors">Vizag to Rajahmundry</Link></li>
              <li><Link to="/vizag-to-vijayawada-cabs" className="text-slate-400 hover:text-white transition-colors">Vizag to Vijayawada</Link></li>
              <li><Link to="/vizag-to-hyderabad-cabs" className="text-slate-400 hover:text-white transition-colors">Vizag to Hyderabad</Link></li>
              <li><Link to="/vizag-to-kakinada-cabs" className="text-slate-400 hover:text-white transition-colors">Vizag to Kakinada</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-yellow">Contact Us</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={16} className="text-brand-yellow" />
                  Address
                </h5>
                <p className="text-slate-400 text-sm leading-relaxed ml-6">
                  D.No 32-10-41/7<br />
                  Near Road No 1, Sheelanagar Post<br />
                  BHPV Township, Visakhapatnam<br />
                  Andhra Pradesh - 530012
                </p>
              </div>

              <div>
                <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <PhoneCall size={16} className="text-brand-yellow" />
                  Phone
                </h5>
                <div className="ml-6">
                  <a href="tel:+918985583355" className="text-slate-400 hover:text-white transition-colors font-bold text-lg">+91 89855 83355</a>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Mail size={16} className="text-brand-yellow" />
                  Email
                </h5>
                <div className="ml-6">
                  <a href="mailto:bookings@vizagairportcabs.in" className="text-slate-400 hover:text-white transition-colors text-sm">bookings@vizagairportcabs.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords & Copyright */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <Link to="/cabs-in-vizag" className="hover:text-brand-yellow transition-colors">Cabs in Vizag</Link>
              <Link to="/taxi-service-in-vizag" className="hover:text-brand-yellow transition-colors">Taxi Service in Vizag</Link>
              <Link to="/taxi-service-in-visakhapatnam" className="hover:text-brand-yellow transition-colors">Taxi Service in Visakhapatnam</Link>
              <Link to="/airport-cabs-vizag" className="hover:text-brand-yellow transition-colors">Airport Cabs Vizag</Link>
              <Link to="/bhogapuram-airport-cabs" className="hover:text-brand-yellow transition-colors">Bhogapuram Airport Cabs</Link>
              <Link to="/outstation-taxi-vizag" className="hover:text-brand-yellow transition-colors">Outstation Taxi Vizag</Link>
            </div>
            <p className="text-slate-500 text-xs">
              © 2026 Vizag Airport Cabs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
