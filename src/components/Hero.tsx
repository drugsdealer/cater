import { useEffect, useState } from 'react'
import Waves from './Waves'
import { clubs } from '../data/clubs'

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const onScroll = () => setOffset(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="top">
      {/* Параллакс-фон */}
      <div
        className="hero__bg"
        style={{ transform: `translateY(${offset * 0.35}px) scale(1.1)` }}
      />
      <div className="hero__overlay" />

      {/* Плавающие пузырьки */}
      <div className="bubbles" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={`bubble bubble--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow reveal-up">⚓ Аренда катеров и лодок · Москва и Подмосковье</span>
        <h1 className="hero__title reveal-up reveal-up--d1">
          Отдых на воде начинается <br /> с одного <span className="accent">решения</span>
        </h1>
        <p className="hero__lead reveal-up reveal-up--d2">
          Наши катера и яхты — в яхт-клубах Москвы и Подмосковья. Подберём судно под ваш повод —
          от тихой рыбалки вдвоём до большой компании на воде.
        </p>
        <div className="hero__actions reveal-up reveal-up--d3">
          <a href="#request" className="btn btn--lg">
            Оставить заявку
          </a>
          <a href="#fleet" className="btn btn--ghost btn--lg">
            Смотреть флот
          </a>
        </div>

        <div className="hero__locations reveal-up reveal-up--d4">
          <span className="hero__locations-label">📍 Наши локации:</span>
          <div className="hero__locations-list">
            {clubs.map((c) => (
              <a
                key={c.id}
                href={c.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__loc"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Waves className="hero__waves" />
    </section>
  )
}
