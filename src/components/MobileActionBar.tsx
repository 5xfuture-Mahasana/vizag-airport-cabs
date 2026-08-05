import { Phone, MessageCircle } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.08)] z-[999] p-[10px] flex gap-2">
      <a 
        href="tel:+918985583355" 
        className="flex-1 bg-brand-yellow text-brand-blue py-3 rounded-md font-bold flex items-center justify-center gap-2 text-sm active:opacity-80 transition-opacity"
      >
        <Phone size={18} />
        Call Now
      </a>
      <a 
        href="https://wa.me/918985583355" 
        className="flex-1 bg-[#25D366] text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 text-sm active:opacity-80 transition-opacity"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
