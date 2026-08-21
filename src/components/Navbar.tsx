import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  PhoneCall, 
  Menu, 
  X 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2" aria-label="Vizag Airport Cabs - Bhogapuram Home">
            {/* <div className="bg-brand-blue p-2 rounded-lg">
              <Car className="text-brand-yellow w-6 h-6" />
            </div> */}
            <div>
              <span className="text-base sm:text-xl font-bold text-brand-blue block leading-tight">Vizag Airport Cabs - Bhogapuram</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">A Service by Roadstar Cabs</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-blue transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-brand-blue transition-colors">About</Link>
            <Link to="/routes" className="text-sm font-medium hover:text-brand-blue transition-colors">Routes</Link>
            <Link to="/tour-packages" className="text-sm font-medium hover:text-brand-blue transition-colors">Tour Packages</Link>
            <Link to="/blog" className="text-sm font-medium hover:text-brand-blue transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-brand-blue transition-colors">Contact</Link>
            <a href="tel:+918985583355" aria-label="Call Vizag Airport Cabs at +91 8985583355" className="flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-900 transition-all shadow-md">
              <PhoneCall size={16} />
              89855 83355
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} className="p-2 text-slate-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">About</Link>
          <Link to="/routes" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Routes</Link>
          <Link to="/tour-packages" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Tour Packages</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Blog</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Contact</Link>
          <a href="tel:+918985583355" className="flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl font-bold">
            <PhoneCall size={20} />
            89855 83355
          </a>
        </motion.div>
      )}
    </nav>
  );
}
