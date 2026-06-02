import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Flame, Star, Crown, Leaf, Wheat, Droplets } from 'lucide-react'

const categories = ['All', 'French Tacos', 'Baguette', 'Drinks']

const menuItems = [
  {
    id: 1,
    name: 'Classic Poulet',
    category: 'French Tacos',
    desc: 'Grilled chicken, golden fries, garlic sauce & melted cheddar cheese.',
    price: 45000,
    badge: 'Best Seller',
    BadgeIcon: Flame,
    badgeColor: 'bg-orange-500',
    img: 'https://images.unsplash.com/photo-1561758033-7e924f619b47?w=600&q=80',
  },
  {
    id: 2,
    name: 'Boeuf Spéciale',
    category: 'French Tacos',
    desc: 'Marinated beef strips, caramelised onions, smoky BBQ sauce & double cheese.',
    price: 52000,
    badge: "Chef's Pick",
    BadgeIcon: Star,
    badgeColor: 'bg-yellow-500',
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
  },
  {
    id: 3,
    name: 'Mixte Royale',
    category: 'French Tacos',
    desc: 'Half chicken, half beef, double fries, three sauces. The ultimate combo.',
    price: 58000,
    badge: 'Premium',
    BadgeIcon: Crown,
    badgeColor: 'bg-purple-600',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  },
  {
    id: 4,
    name: 'Vegan Delight',
    category: 'French Tacos',
    desc: 'Crispy falafel, roasted veggies, creamy hummus & fresh herb sauce.',
    price: 42000,
    badge: 'Vegan',
    BadgeIcon: Leaf,
    badgeColor: 'bg-green-600',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  },
  {
    id: 5,
    name: 'Baguette Jambon',
    category: 'Baguette',
    desc: 'Crusty French baguette, quality ham, emmental cheese & Dijon mustard.',
    price: 48000,
    badge: 'Signature',
    BadgeIcon: Wheat,
    badgeColor: 'bg-amber-600',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
  },
  {
    id: 6,
    name: 'Citron Pressé',
    category: 'Drinks',
    desc: 'Freshly squeezed lemon, a touch of honey, sparkling water. Light & refreshing.',
    price: 22000,
    badge: 'Fresh',
    BadgeIcon: Droplets,
    badgeColor: 'bg-sky-500',
    img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80',
  },
]

function formatRp(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

export default function MenuSection() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? menuItems : menuItems.filter((m) => m.category === active)

  return (
    <section id="menu-section" className="py-20 px-5 sm:px-8 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#D4820A] uppercase">La Carte</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B1E08] mt-1" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
              Our Menu
            </h2>
          </div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B1E08] text-[#F5EDD6] font-bold text-sm hover:bg-[#D4820A] transition-colors shrink-0"
          >
            <ShoppingCart size={15} /> Order via WhatsApp
          </a>
        </motion.div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                active === c
                  ? 'bg-[#3B1E08] text-[#F5EDD6] shadow-md'
                  : 'bg-white text-[#3B1E08]/60 border border-[#D4820A]/20 hover:border-[#D4820A]/60'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => {
            const { BadgeIcon } = item
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(59,30,8,0.12)' }}
                className="group bg-white rounded-2xl overflow-hidden border border-[#D4820A]/10 shadow-sm transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B1E08]/40 to-transparent" />
                  <span className={`absolute top-3 left-3 ${item.badgeColor} text-white text-xs font-extrabold px-3 py-1 rounded-full shadow flex items-center gap-1.5`}>
                    <BadgeIcon size={11} /> {item.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-[#3B1E08]" style={{ fontFamily: '"Baloo 2", sans-serif' }}>{item.name}</h3>
                  <p className="text-[#3B1E08]/60 text-sm mt-1 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4820A] font-extrabold text-xl">{formatRp(item.price)}</span>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F5A623] text-[#3B1E08] font-bold text-sm hover:bg-[#D4820A] hover:text-white transition-colors"
                    >
                      <ShoppingCart size={13} /> Order
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
