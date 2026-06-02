import { motion } from 'framer-motion'
import { Trophy, BadgeCheck, Bike, MapPin, Sandwich, ChefHat, Flag } from 'lucide-react'

const stats = [
  { value: '4.9★', label: '500+ Google Reviews', Icon: Trophy },
  { value: '100%', label: 'Halal Certified', Icon: BadgeCheck },
  { value: '30 Min', label: 'Delivery Estimate', Icon: Bike },
  { value: 'Uluwatu', label: 'Bali, Indonesia', Icon: MapPin },
]

const features = [
  {
    Icon: Sandwich,
    title: 'Authentic Crispy Wrap',
    desc: 'Flatbread pressed fresh on a hot grill — crispy on the outside, soft on the inside. No frozen shortcuts. Made to order, every time.',
    img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
  },
  {
    Icon: ChefHat,
    title: 'Loaded with Flavour',
    desc: 'Premium meat, golden fries, melted cheese & our signature sauce — all packed into one satisfying wrap. Go big or go home.',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  },
  {
    Icon: Flag,
    title: 'Born in Lyon, France',
    desc: 'French tacos originated in Lyon and took the world by storm. We bring that authentic street-food legacy straight to Uluwatu.',
    img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80',
  },
]

export default function WhySection() {
  return (
    <section id="about" className="bg-[#F5EDD6]">
      <div className="bg-[#3B1E08]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label, Icon }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#F5A623]" />
              </div>
              <div>
                <div className="text-[#F5A623] font-extrabold text-lg leading-none" style={{ fontFamily: '"Baloo 2", sans-serif' }}>{value}</div>
                <div className="text-white/60 text-xs mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-[#D4820A] uppercase">Pourquoi Nous?</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B1E08] mt-2" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
            Why Le Monde?
          </h2>
          <p className="text-[#3B1E08]/60 mt-3 max-w-xl mx-auto">
            Not just another wrap — this is the real French taco experience, right here in Bali.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {features.map(({ Icon, title, desc, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D4820A]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1E08]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 w-9 h-9 rounded-full bg-[#F5A623] flex items-center justify-center shadow-lg">
                  <Icon size={17} className="text-[#3B1E08]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-[#3B1E08] mb-2" style={{ fontFamily: '"Baloo 2", sans-serif' }}>{title}</h3>
                <p className="text-[#3B1E08]/65 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
