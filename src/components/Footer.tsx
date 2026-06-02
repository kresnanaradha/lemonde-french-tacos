import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Logo from './Logo'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  )
}

const navLinks = [
  { label: 'Menu', href: '#menu-section' },
  { label: 'How It Works', href: '#process' },
  { label: 'Our Story', href: '#about-brand' },
  { label: 'Find Us', href: '#location' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2A1205] text-[#F5EDD6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12 w-12 object-cover" />
              <div>
                <div className="font-extrabold text-lg leading-tight" style={{ fontFamily: '"Baloo 2", sans-serif' }}>Le Monde French Tacos</div>
                <div className="text-[#F5A623] text-xs italic mt-0.5">Le Goût de la Rue, Le Charme de la France</div>
              </div>
            </div>
            <p className="text-[#F5EDD6]/50 text-sm leading-relaxed max-w-xs">
              Authentic French tacos from Lyon, now in Uluwatu, Bali. Crispy, loaded, and full of French soul.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#F5A623] flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#F5A623] flex items-center justify-center transition-colors">
                <TikTokIcon />
              </a>
              <a href="https://wa.me/6281234567890" className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#25D366] flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-extrabold text-[#F5A623] mb-4 text-sm tracking-wide uppercase" style={{ fontFamily: '"Baloo 2", sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#F5EDD6]/55 hover:text-[#F5A623] transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-[#F5A623] mb-4 text-sm tracking-wide uppercase" style={{ fontFamily: '"Baloo 2", sans-serif' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-[#F5EDD6]/55">
                <Phone size={14} className="text-[#F5A623]/60 shrink-0" />
                +62 812-3456-7890
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F5EDD6]/55">
                <Mail size={14} className="text-[#F5A623]/60 shrink-0" />
                hello@lemonde.id
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F5EDD6]/55">
                <MapPin size={14} className="text-[#F5A623]/60 shrink-0" />
                Jl. Raya Uluwatu No. 88, Bali
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F5EDD6]/55">
                <Clock size={14} className="text-[#F5A623]/60 shrink-0" />
                Open daily, 11:00 AM – midnight
              </div>
            </div>
            <div className="mt-5 flex gap-2 flex-wrap">
              {['GrabFood', 'GoFood', 'ShopeeFood'].map((app) => (
                <span key={app} className="text-xs bg-white/8 border border-white/10 rounded-full px-3 py-1 text-white/50">{app}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#F5EDD6]/30 text-xs">
          <span>© 2025 Le Monde French Tacos Uluwatu. All rights reserved.</span>
          <div className="flex gap-0.5 rounded overflow-hidden">
            <div className="w-5 h-3 bg-[#002395]" />
            <div className="w-5 h-3 bg-white/60" />
            <div className="w-5 h-3 bg-[#ED2939]" />
          </div>
        </div>
      </div>

      <div className="flex h-1.5">
        <div className="flex-1 bg-[#002395]" />
        <div className="flex-1 bg-white/70" />
        <div className="flex-1 bg-[#ED2939]" />
      </div>
    </footer>
  )
}
