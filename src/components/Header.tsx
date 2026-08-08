import { useEffect, useRef, useState } from 'react'
import { clubs } from '../data/clubs'

const links = [
  { href: '#fleet', label: 'Флот' },
  { href: '#features', label: 'Почему мы' },
  { href: '#steps', label: 'Как это работает' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [phonesOpen, setPhonesOpen] = useState(false)
  const phonesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (phonesRef.current && !phonesRef.current.contains(e.target as Node)) {
        setPhonesOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="3" />
              <line x1="12" y1="22" x2="12" y2="8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
          </span>
          <span className="logo__text">Marea</span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}

          <div className="phones" ref={phonesRef}>
            <button
              type="button"
              className="phones__toggle nav__link"
              onClick={() => setPhonesOpen((v) => !v)}
              aria-expanded={phonesOpen}
            >
              📞 Телефоны
              <span className={`phones__caret ${phonesOpen ? 'is-open' : ''}`} aria-hidden="true">▾</span>
            </button>

            <div className={`phones__menu ${phonesOpen ? 'is-open' : ''}`}>
              <span className="phones__label">Телефон по каждому яхт-клубу</span>
              {clubs.map((c) => (
                <a
                  key={c.id}
                  href={`tel:${c.phoneRaw}`}
                  className="phones__item"
                  onClick={() => {
                    setOpen(false)
                    setPhonesOpen(false)
                  }}
                >
                  <span className="phones__club">
                    {c.name}
                    {c.manager ? ` · ${c.manager}` : ''}
                  </span>
                  <span className="phones__num">{c.phone}</span>
                </a>
              ))}
            </div>
          </div>

          <a href="#request" className="btn btn--sm nav__cta" onClick={() => setOpen(false)}>
            Оставить заявку
          </a>
        </nav>

        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
