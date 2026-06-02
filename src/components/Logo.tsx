import logoSrc from '../assets/logo.webp'

interface Props {
  className?: string
  alt?: string
}

export default function Logo({ className = 'h-12 w-12 object-cover', alt = 'Le Monde' }: Props) {
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`rounded-full object-cover shrink-0 ${className}`}
    />
  )
}
