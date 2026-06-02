import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation, MessageCircle, UtensilsCrossed } from 'lucide-react'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function Location() {
  return (
    <section id="location" className="py-20 px-5 sm:px-8 bg-[#F5EDD6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-[#D4820A] uppercase">Find Us</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B1E08] mt-2" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
            We're in Uluwatu
          </h2>
          <p className="text-[#3B1E08]/60 mt-3 max-w-xl mx-auto">
            The only authentic French Tacos in Bali — come visit us or order straight via WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-[#D4820A]/20 shadow-md h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.123456789!2d115.1264!3d-8.8291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2448a23cc5433%3A0x3c0d83e24b6891b2!2sUluwatu%2C%20Kuta%20Selatan%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Le Monde Uluwatu"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-2xl border border-[#D4820A]/20 p-6">
              <h3 className="font-extrabold text-[#3B1E08] text-lg mb-4" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
                Le Monde French Tacos — Uluwatu
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3 text-sm text-[#3B1E08]/70">
                  <MapPin size={16} className="text-[#D4820A] mt-0.5 shrink-0" />
                  <span>Jl. Raya Uluwatu No. 88, Pecatu, Uluwatu, South Kuta, Bali 80364</span>
                </div>
                <div className="flex gap-3 text-sm text-[#3B1E08]/70">
                  <Clock size={16} className="text-[#D4820A] mt-0.5 shrink-0" />
                  <div>
                    <div>Mon – Fri: 11:00 AM – 11:00 PM</div>
                    <div>Sat – Sun: 10:00 AM – 12:00 AM</div>
                  </div>
                </div>
                <div className="flex gap-3 text-sm text-[#3B1E08]/70">
                  <Phone size={16} className="text-[#D4820A] mt-0.5 shrink-0" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex gap-3 text-sm text-[#3B1E08]/70 items-center">
                  <span className="text-[#D4820A] shrink-0"><InstagramIcon /></span>
                  <span>@lemonde.uluwatu</span>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Uluwatu+Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-1.5 text-[#D4820A] font-bold text-sm hover:text-[#3B1E08] transition-colors"
              >
                <Navigation size={14} /> Open in Google Maps →
              </a>
            </div>

            <div className="bg-[#3B1E08]/5 border border-[#D4820A]/20 rounded-2xl p-5 flex gap-3 items-start">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623]/20 flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle size={18} className="text-[#D4820A]" />
              </div>
              <div>
                <div className="font-bold text-[#3B1E08] text-sm mb-1">Order via WhatsApp</div>
                <div className="text-[#3B1E08]/60 text-xs leading-relaxed">
                  Message us directly for take away or dine-in reservations. Fast response guaranteed!
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#3B1E08] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L30 0 L60 30 L30 60 Z' stroke='%23F5A623' stroke-width='1' fill='none'/%3E%3C/svg%3E")` }}
          />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
              Ready to Order?
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Chat us on WhatsApp to place your order, ask about the menu, or book a table at Le Monde Uluwatu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-extrabold text-lg hover:bg-[#1ebe5a] transition-all shadow-xl hover:scale-105"
              >
                <MessageCircle size={22} /> Order via WhatsApp
              </a>
              <a
                href="#menu-section"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-all"
              >
                <UtensilsCrossed size={17} /> View Full Menu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
