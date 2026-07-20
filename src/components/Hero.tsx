import { useEffect, useState } from 'react'
import Waves from './Waves'

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
        <span className="hero__eyebrow reveal-up">⚓ Катера и лодки · Яхт-клуб «Буревестник», Мытищи</span>
        <h1 className="hero__title reveal-up reveal-up--d1">
          Отдых на воде начинается <br /> с одного <span className="accent">решения</span>
        </h1>
        <p className="hero__lead reveal-up reveal-up--d2">
          Наша база — Яхт-клуб «Буревестник» в Мытищах, на водохранилище в Подмосковье. Подберём
          катер под ваш повод — от тихой рыбалки вдвоём до большой компании на воде.
        </p>
        <div className="hero__actions reveal-up reveal-up--d3">
          <a href="#request" className="btn btn--lg">
            Оставить заявку
          </a>
          <a href="#fleet" className="btn btn--ghost btn--lg">
            Смотреть флот
          </a>
        </div>

        <div className="hero__stats reveal-up reveal-up--d4">
          <div className="stat">
            <span className="stat__num">4</span>
            <span className="stat__label">катера в аренду</span>
          </div>
          <div className="stat">
            <span className="stat__num">до 10</span>
            <span className="stat__label">гостей на борту</span>
          </div>
          <div className="stat">
            <span className="stat__num">24/7</span>
            <span className="stat__label">на связи</span>
          </div>
        </div>
      </div>

      <Waves className="hero__waves" />
    </section>
  )
}
