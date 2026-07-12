import { fleet } from '../data/fleet'
import { useReveal } from '../hooks/useReveal'

export default function Fleet() {
  const { ref, visible } = useReveal()

  return (
    <section className="section fleet" id="fleet">
      <div className="container">
        <div className={`section__head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="section__eyebrow">Наш флот</span>
          <h2 className="section__title">Выберите катер под своё настроение</h2>
          <p className="section__subtitle">
            Каждый катер ухожен, застрахован и готов к выходу. Не знаете, что выбрать —
            оставьте заявку, и мы подберём вариант под ваш запрос.
          </p>
        </div>

        <div className="fleet__grid">
          {fleet.map((boat, i) => (
            <FleetCard key={boat.id} boat={boat} index={i} />
          ))}
        </div>

        <p className="fleet__note">
          🪪 На катера <b>Bayliner 1851 Capri</b>, <b>Sea Ray 190 Sport</b> и{' '}
          <b>Bayliner 2355 Ciera</b> требуются права ГИМС — при их наличии сдаём катер
          без капитана. <b>Prive 4.0</b> — управление без прав ГИМС.
        </p>
      </div>
    </section>
  )
}

function FleetCard({ boat, index }: { boat: (typeof fleet)[number]; index: number }) {
  const { ref, visible } = useReveal(0.1)

  return (
    <article
      ref={ref}
      className={`card ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 90}ms` }}
    >
      <div className="card__media">
        <span className="card__placeholder" aria-hidden="true">⛴️</span>
        <img
          src={boat.image}
          alt={boat.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.visibility = 'hidden'
          }}
        />
        <span className={`card__tag ${boat.license ? 'card__tag--gims' : 'card__tag--free'}`}>
          {boat.tag}
        </span>
      </div>
      <div className="card__body">
        <span className="card__type">{boat.type}</span>
        <h3 className="card__name">{boat.name}</h3>
        <p className="card__desc">{boat.description}</p>
        <div className="card__meta">
          <span>⚙️ {boat.motor}</span>
          <span>👥 {boat.capacity}</span>
        </div>
        <a href="#request" className="card__link">
          Оставить заявку
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  )
}
