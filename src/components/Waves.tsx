interface WavesProps {
  className?: string
  /** Инвертировать по вертикали (для волн сверху секции) */
  flip?: boolean
}

/**
 * Многослойные анимированные волны. Слои плывут с разной скоростью,
 * создавая ощущение живой воды на стыке секций.
 */
export default function Waves({ className = '', flip = false }: WavesProps) {
  return (
    <div className={`waves ${flip ? 'waves--flip' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave-parallax">
          <use href="#wave-path" x="48" y="0" className="wave-layer wave-layer--1" />
          <use href="#wave-path" x="48" y="3" className="wave-layer wave-layer--2" />
          <use href="#wave-path" x="48" y="5" className="wave-layer wave-layer--3" />
          <use href="#wave-path" x="48" y="7" className="wave-layer wave-layer--4" />
        </g>
      </svg>
    </div>
  )
}
