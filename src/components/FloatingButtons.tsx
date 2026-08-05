import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] flex gap-3 hidden">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918985583355?text=Hi%20I%20want%20to%20book%20a%20cab%20in%20Vizag"
        target="_blank"
        rel="noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-bold text-sm"
      >
        <MessageCircle size={20} />
        WhatsApp
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:8985583355"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="flex-1 bg-brand-blue text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-2 font-bold text-sm"
      >
        <Phone size={20} />
        Call
      </motion.a>
    </div>
  );
}
