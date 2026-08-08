import { useState } from 'react'

// Единый консультант Marea — Павел (яхт-клуб «Буревестник»). Поможет выбрать и всё расскажет.
const PHONE = '+79607287566'
const PHONE_DISPLAY = '+7 960 728-75-66'
const WHATSAPP = 'https://wa.me/79607287566'

export default function ContactFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`fab ${open ? 'fab--open' : ''}`}>
      {open && (
        <p className="fab__note">
          📍 Телефон нужного яхт-клуба — на карточке каждого катера. А если не знаете, что
          выбрать — звоните Павлу, он подберёт и всё расскажет.
        </p>
      )}

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fab__action fab__action--wa"
        aria-label="Написать в WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.9 1 1-4.7-.3-.5c-1-1.6-1.5-3.4-1.5-5.3C4.3 9.6 9.6 4.3 16 4.3S27.7 9.6 27.7 16 22.4 24.8 16 24.8zm6.5-6.6c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.2-.8.2s-.9 1.1-1.1 1.4c-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.5-.2-.4 0-.6.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.6l-1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.8 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.7-.5z" />
        </svg>
        <span>Написать в WhatsApp</span>
      </a>

      <a href={`tel:${PHONE}`} className="fab__action fab__action--call" aria-label="Позвонить консультанту">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Консультант · Павел</span>
      </a>

      <div className="fab__bar">
        {!open && <span className="fab__label">Не знаете, что выбрать?</span>}
        <button
          type="button"
          className="fab__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть' : 'Связаться и получить помощь'}
          aria-expanded={open}
          title={`Позвонить консультанту: ${PHONE_DISPLAY}`}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
