import { motion } from 'framer-motion'
import { ClipboardList, ChefHat, Flame, PartyPopper, Bike } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Choose Your Menu',
    desc: 'Pick your favourite French Taco from our full menu — classic, special, or build your own combination.',
    Icon: ClipboardList,
  },
  {
    num: '02',
    title: 'Prepped Fresh',
    desc: 'Meat cooked to order, fries fried golden, cheese ready. Zero shortcuts. Zero frozen ingredients.',
    Icon: ChefHat,
  },
  {
    num: '03',
    title: 'Grilled to Perfection',
    desc: 'Everything folded into flatbread and pressed on the hot grill until perfectly crispy on every side.',
    Icon: Flame,
  },
  {
    num: '04',
    title: 'Ready to Enjoy',
    desc: 'Served hot straight to your hands — dine in, take away, or delivered right to your door.',
    Icon: PartyPopper,
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-5 sm:px-8 bg-[#3B1E08] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ED2939]/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest text-[#F5A623] uppercase">Notre Processus</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
            Four Steps.<br />
            <span className="text-[#F5A623]">Zero Shortcuts.</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            Every French Taco follows the exact same process — from choosing your menu to landing in your hands.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc, Icon }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 h-0.5 bg-[#F5A623]/30 z-10" />
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#F5A623]" />
                  </div>
                  <span className="text-4xl font-extrabold text-[#F5A623]/20 leading-none" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
                    {num}
                  </span>
                </div>
                <h3 className="text-white font-extrabold text-lg mb-2" style={{ fontFamily: '"Baloo 2", sans-serif' }}>{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F5A623] text-[#3B1E08] font-extrabold text-base hover:bg-white transition-all shadow-2xl shadow-[#F5A623]/20 hover:scale-105"
          >
            <Bike size={18} /> Order Now — Free Delivery within 5km
          </a>
        </motion.div>
      </div>
    </section>
  )
}
