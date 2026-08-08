import { useState } from 'react'

// Единый консультант Marea — Павел (яхт-клуб «Буревестник»). Поможет выбрать и всё расскажет.
const PHONE = '+79607287566'
const PHONE_DISPLAY = '+7 960 728-75-66'

export default function ContactFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`fab ${open ? 'fab--open' : ''}`}>
      {open && (
        <p className="fab__note">
          📍 Телефон нужного яхт-клуба — на карточке каждого катера. Не знаете, что выбрать —
          звоните консультанту, подберём и всё расскажем.
        </p>
      )}

      <a href={`tel:${PHONE}`} className="fab__action fab__action--call" aria-label="Позвонить консультанту">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Консультант · Павел</span>
      </a>

      {open && <p className="fab__hours">🕘 Звонки принимаем с 9:00 до 21:00</p>}

      <div className="fab__bar">
        {!open && <span className="fab__label">Не знаете, что выбрать?</span>}
        <button
          type="button"
          className="fab__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть' : 'Позвонить консультанту'}
          aria-expanded={open}
          title={`Позвонить консультанту: ${PHONE_DISPLAY} (9:00–21:00)`}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
