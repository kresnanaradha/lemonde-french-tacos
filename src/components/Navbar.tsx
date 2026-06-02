import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bike } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Menu', href: '#menu-section' },
  { label: 'How It Works', href: '#process' },
  { label: 'Our Story', href: '#about-brand' },
  { label: 'Find Us', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#3B1E08]/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2.5">
          <Logo className="h-10 w-10 object-cover" />
          <div className="leading-tight">
            <div className="font-extrabold text-white text-base" style={{ fontFamily: '"Baloo 2", sans-serif' }}>Le Monde</div>
            <div className="text-[#F5A623] text-[11px] font-semibold tracking-wide">FRENCH TACOS · ULUWATU</div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-white/80 font-semibold text-sm hover:text-[#F5A623] transition-colors tracking-wide">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5A623] text-[#3B1E08] font-extrabold text-sm hover:bg-white transition-colors shadow-lg"
        >
          <Bike size={15} /> Order Now
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#3B1E08] border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white font-semibold text-base hover:text-[#F5A623] transition-colors" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5A623] text-[#3B1E08] font-extrabold text-sm"
                  onClick={() => setOpen(false)}
                >
                  <Bike size={15} /> Order Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
