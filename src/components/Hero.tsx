import { motion } from 'framer-motion'
import { Bike, UtensilsCrossed, CheckCircle2 } from 'lucide-react'

const deliveryApps = [
  { name: 'GrabFood', color: '#00B14F' },
  { name: 'GoFood', color: '#E82529' },
  { name: 'ShopeeFood', color: '#EE4D2D' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80"
          alt="French Tacos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B1E08]/92 via-[#3B1E08]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B1E08]/80 via-transparent to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F5A623]/20 border border-[#F5A623]/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              <span className="text-[#F5A623] text-sm font-bold tracking-wider uppercase">Uluwatu, Bali · 100% Halal · Open Late Night</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-5"
              style={{ fontFamily: '"Baloo 2", sans-serif' }}
            >
              The Crispiest<br />
              <span className="text-[#F5A623]">French Taco</span><br />
              in Uluwatu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg"
            >
              Grilled crispy flatbread, premium fillings, golden fries, melted cheese & signature sauce — all wrapped in one legendary bite. <em>C'est magnifique!</em>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F5A623] text-[#3B1E08] font-extrabold text-base hover:bg-white transition-all shadow-2xl shadow-[#F5A623]/30 hover:scale-105"
              >
                <Bike size={18} /> Order via WhatsApp
              </a>
              <a
                href="#menu-section"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-all"
              >
                <UtensilsCrossed size={17} /> See Our Menu
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#F5A623] text-xl">★★★★★</span>
                <div>
                  <div className="text-white font-extrabold text-sm">4.9 / 5.0</div>
                  <div className="text-white/50 text-xs">500+ Reviews</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-white font-extrabold text-sm">10,000+</div>
                <div className="text-white/50 text-xs">Happy Customers</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-white font-extrabold text-sm">Uluwatu, Bali</div>
                <div className="text-white/50 text-xs">Only One in Bali</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative bg-[#3B1E08]/90 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="text-white/50 text-xs font-semibold tracking-widest uppercase shrink-0">Available on</span>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {deliveryApps.map((app) => (
              <div key={app.name} className="flex items-center gap-2 bg-white/8 rounded-full px-4 py-1.5 border border-white/10">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: app.color }} />
                <span className="text-white font-bold text-sm">{app.name}</span>
              </div>
            ))}
          </div>
          <div className="sm:ml-auto flex items-center gap-2">
            <CheckCircle2 size={14} className="text-[#F5A623]/60" />
            <span className="text-white/40 text-xs italic">Le Goût de la Rue</span>
          </div>
        </div>
      </motion.div>

      <div className="relative flex h-1.5">
        <div className="flex-1 bg-[#002395]" />
        <div className="flex-1 bg-white/80" />
        <div className="flex-1 bg-[#ED2939]" />
      </div>
    </section>
  )
}
