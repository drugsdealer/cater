import { useEffect, useState } from 'react'

const links = [
  { href: '#fleet', label: 'Флот' },
  { href: '#features', label: 'Почему мы' },
  { href: '#steps', label: 'Как это работает' },
  { href: '#request', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
