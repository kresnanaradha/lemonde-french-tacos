import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'James T.',
    location: 'Sydney, Australia',
    stars: 5,
    quote: 'Honestly one of the best things I ate in Bali. The wrap is perfectly crispy, the fillings are generous and the sauce is addictive. Had it three times in one week. No regrets.',
    avatar: 'JT',
    color: 'bg-orange-100 text-orange-700',
    platform: 'Google Review',
  },
  {
    name: 'Sophie M.',
    location: 'Paris, France',
    stars: 5,
    quote: 'As a French person, I was skeptical — but this is the real deal. The Boeuf Spéciale tastes exactly like home. Incredible quality for the price. A hidden gem in Uluwatu!',
    avatar: 'SM',
    color: 'bg-blue-100 text-blue-700',
    platform: 'Google Review',
  },
  {
    name: 'Ryan K.',
    location: 'Los Angeles, USA',
    stars: 5,
    quote: 'Stumbled across this place after surfing and it blew my mind. Mixte Royale was massive and so flavourful. Fast service, great vibes. Already planning to come back tomorrow.',
    avatar: 'RK',
    color: 'bg-green-100 text-green-700',
    platform: 'GoFood Review',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-5 sm:px-8 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#D4820A] uppercase">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3B1E08] mt-1" style={{ fontFamily: '"Baloo 2", sans-serif' }}>
              What Our Guests Say
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#3B1E08] rounded-full px-5 py-2.5">
            <span className="text-[#F5A623]">★★★★★</span>
            <span className="text-white font-bold text-sm">4.9 from 500+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#D4820A]/15 rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-[#F5A623]">{'★'.repeat(r.stars)}</div>
                <span className="text-[#3B1E08]/30 text-xs font-semibold">{r.platform}</span>
              </div>
              <p className="text-[#3B1E08]/75 leading-relaxed flex-1 text-sm">"{r.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#D4820A]/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm ${r.color}`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#3B1E08] text-sm">{r.name}</div>
                  <div className="text-[#3B1E08]/40 text-xs">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
