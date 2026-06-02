// Inline SVG fallback used when logo.webp is not yet present
export default function LogoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#F5A623] flex items-center justify-center font-extrabold text-[#3B1E08] ${className ?? 'w-12 h-12 text-lg'}`}
      style={{ fontFamily: '"Baloo 2", sans-serif' }}
    >
      LM
    </div>
  )
}
