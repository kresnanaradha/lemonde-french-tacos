import { useState } from 'react'

interface Props {
  className?: string
  alt?: string
}

export default function Logo({ className = 'h-12 w-12 object-cover', alt = 'Le Monde' }: Props) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        className="rounded-full bg-[#F5A623] flex items-center justify-center font-extrabold text-[#3B1E08] shrink-0"
        style={{ fontFamily: '"Baloo 2", sans-serif', width: 44, height: 44, fontSize: 13 }}
      >
        LM
      </div>
    )
  }

  return (
    <img
      src="/src/assets/logo.webp"
      alt={alt}
      className={`rounded-full object-cover shrink-0 ${className}`}
      onError={() => setErrored(true)}
    />
  )
}
