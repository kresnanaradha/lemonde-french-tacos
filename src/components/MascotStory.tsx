import { motion } from 'framer-motion'
import { BadgeCheck, Zap, Star, CalendarDays, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const gridStats = [
  { v: '100%', l: 'Halal Certified', Icon: BadgeCheck },
  { v: 'Fresh', l: 'Zero Frozen', Icon: Zap },
  { v: '4.9★', l: '500+ Reviews', Icon: Star },
  { v: 'Daily', l: 'Freshly Made', Icon: CalendarDays },
]

export default function MascotStory() {
  return (
    <section id="about-brand" className="py-20 px-5 sm:px-8 bg-[#F5EDD6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Restaurant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-36">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="rounded-2xl overflow-hidden h-36">
                  <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" alt="Cooking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden h-52">
                  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Food" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#3B1E08] rounded-2xl px-5 py-3 flex items-center gap-3 shadow-xl whitespace-nowrap">
              <Logo className="h-8 w-8 object-cover" />
              <div>
                <div className="text-[#F5A623] font-extrabold text-sm leading-none">Since 2020</div>
                <div className="text-white/60 text-xs mt-0.5">Serving Happiness</div>
              </div>
              <div className="flex gap-0.5 ml-2">
                <div className="w-3 h-5 bg-[#002395] rounded-sm" />
                <div className="w-3 h-5 bg-white rounded-sm" />
                <div className="w-3 h-5 bg-[#ED2939] rounded-sm" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-6 pt-6 lg:pt-0"
          >
            <span className="text-xs font-bold tracking-widest text-[#D4820A] uppercase">Our Story</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B1E08] mt-2 mb-5 leading-tight" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
              From Lyon<br />
              <span className="text-[#D4820A]">to Your Plate</span>
            </h2>
            <p className="text-[#3B1E08]/70 text-lg leading-relaxed mb-4">
              French tacos were born on the streets of Lyon, France — the bold, crispy, loaded street food that took the world by storm. Now it's here in Uluwatu, Bali.
            </p>
            <p className="text-[#3B1E08]/70 leading-relaxed mb-8">
              At Le Monde, we believe great street food should never be compromised. Every ingredient is chosen with care, every wrap pressed with intention — because you deserve the best bite in Bali.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {gridStats.map(({ v, l, Icon }) => (
                <div key={l} className="bg-white rounded-xl p-4 border border-[#D4820A]/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#D4820A]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#D4820A] text-base leading-none" style={{ fontFamily: '"Baloo 2", sans-serif' }}>{v}</div>
                    <div className="text-[#3B1E08]/60 text-xs mt-0.5">{l}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#menu-section"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#D4820A] text-white font-extrabold text-sm hover:bg-[#3B1E08] transition-colors shadow-lg"
            >
              View Full Menu <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
