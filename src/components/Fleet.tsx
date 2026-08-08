import { useState } from 'react'
import { fleet, type Boat } from '../data/fleet'
import { clubs, getClub, type Club } from '../data/clubs'
import { useReveal } from '../hooks/useReveal'

export default function Fleet({ onSelect }: { onSelect: (boat: Boat) => void }) {
  const { ref, visible } = useReveal()

  // Группируем флот по яхт-клубам (в порядке из data/clubs.ts).
  const groups: { club: Club | null; boats: Boat[] }[] = []
  for (const c of clubs) {
    const boats = fleet.filter((b) => b.clubId === c.id)
    if (boats.length) groups.push({ club: c, boats })
  }
  const rest = fleet.filter((b) => !getClub(b.clubId))
  if (rest.length) groups.push({ club: null, boats: rest })

  return (
    <section className="section fleet" id="fleet">
      <div className="container">
        <div className={`section__head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="section__eyebrow">Наш флот</span>
          <h2 className="section__title">Флот по яхт-клубам</h2>
          <p className="section__subtitle">
            Каждое судно ухожено, застраховано и готово к выходу. Цены — <b>от 12 000 ₽/час</b>;
            итоговая стоимость зависит от дня недели, длительности и сезона — актуальную
            подскажет менеджер клуба.
          </p>
        </div>

        {groups.map(({ club, boats }, gi) => (
          <div className="clubgroup" key={club ? club.id : 'other'}>
            <div className="clubgroup__head">
              <span className="clubgroup__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="3" />
                  <line x1="12" y1="22" x2="12" y2="8" />
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                </svg>
                Яхт-клуб
              </span>
              <div className="clubgroup__main">
                <h3 className="clubgroup__name">{club ? club.name : 'Другие локации'}</h3>
                {club && <p className="clubgroup__addr">{club.address}</p>}
              </div>
              {club && (
                <div className="clubgroup__contacts">
                  <a href={club.mapUrl} target="_blank" rel="noopener noreferrer" className="clubgroup__link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    На карте
                  </a>
                  <a href={`tel:${club.phoneRaw}`} className="clubgroup__phone">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {club.phone}
                    {club.manager ? ` · ${club.manager}` : ''}
                  </a>
                </div>
              )}
              {club?.extras && (
                <p className="clubgroup__extras">🏄 Доп. услуги: {club.extras}</p>
              )}
              {club?.sayMarea && (
                <p className="clubgroup__hint">
                  ☝ При звонке скажите, что вы от <b>Marea&nbsp;(Мареа)</b>
                </p>
              )}
            </div>

            <div className="fleet__grid">
              {boats.map((boat, i) => (
                <FleetCard key={boat.id} boat={boat} index={i} onSelect={onSelect} eager={gi === 0} />
              ))}
            </div>
          </div>
        ))}

        <p className="fleet__note">
          🪪 На каждой карточке отмечено, нужны ли права ГИМС и сдаётся судно с капитаном или
          без — выбирайте под себя.
        </p>
      </div>
    </section>
  )
}

function FleetCard({
  boat,
  index,
  onSelect,
  eager,
}: {
  boat: Boat
  index: number
  onSelect: (boat: Boat) => void
  eager?: boolean
}) {
  const { ref, visible } = useReveal(0.1)
  const images = boat.images && boat.images.length > 0 ? boat.images : [boat.image]
  const [slide, setSlide] = useState(0)
  const many = images.length > 1
  const idx = Math.min(slide, images.length - 1)
  const current = images[idx]
  const go = (dir: number) => setSlide((s) => (s + dir + images.length) % images.length)

  return (
    <article
      ref={ref}
      className={`card ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 90}ms` }}
    >
      <div className="card__media">
        {boat.fit === 'contain' && (
          <div
            className="card__media-fill"
            style={{ backgroundImage: `url("${current}")` }}
            aria-hidden="true"
          />
        )}
        {images.map((src, i) => (
          <img
            key={src}
            className={`card__img ${i === idx ? 'is-active' : ''}`}
            src={src}
            alt={boat.name}
            loading={eager && i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            draggable={false}
            style={{ objectFit: boat.fit ?? 'cover' }}
            onError={(e) => {
              e.currentTarget.style.visibility = 'hidden'
            }}
          />
        ))}
        <span className={`card__tag ${boat.license ? 'card__tag--gims' : 'card__tag--free'}`}>
          {boat.tag}
        </span>

        {many && (
          <>
            <button
              type="button"
              className="card__nav card__nav--prev"
              onClick={() => go(-1)}
              aria-label="Предыдущее фото"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="card__nav card__nav--next"
              onClick={() => go(1)}
              aria-label="Следующее фото"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <div className="card__dots">
              {images.map((_, di) => (
                <button
                  key={di}
                  type="button"
                  className={`card__dot ${di === idx ? 'is-active' : ''}`}
                  onClick={() => setSlide(di)}
                  aria-label={`Фото ${di + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="card__body">
        <span className="card__type">{boat.type}</span>
        <h3 className="card__name">{boat.name}</h3>
        <p className="card__desc">{boat.description}</p>
        <div className="card__meta">
          {boat.motor && <span>⚙️ {boat.motor}</span>}
          <span>👥 {boat.capacity}</span>
          {boat.captain && boat.license && <span>🧭 можно с капитаном</span>}
        </div>
        <div className="card__price">
          <b>{boat.price}</b>
          {boat.price.includes('₽') && <span>цена динамичная — уточните</span>}
        </div>
        <a href="#request" className="card__link" onClick={() => onSelect(boat)}>
          Оставить заявку на этот катер
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  )
}
