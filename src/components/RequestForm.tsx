import { useState, type FormEvent } from 'react'
import Waves from './Waves'
import { useReveal } from '../hooks/useReveal'
import { fleet } from '../data/fleet'
import type { LegalDoc } from './LegalModal'

const boatOptions = [...fleet.map((b) => b.name), 'Ещё не решил(а)']

export default function RequestForm({
  onLegal,
}: {
  onLegal: (doc: LegalDoc) => void
}) {
  const { ref, visible } = useReveal(0.1)
  const [sent, setSent] = useState(false)
  const [type, setType] = useState(boatOptions[0])
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const comment = String(data.get('comment') || '').trim()

    if (name.length < 2) return setError('Пожалуйста, укажите имя')
    if (phone.replace(/\D/g, '').length < 10) return setError('Проверьте номер телефона')
    if (!consent) return setError('Отметьте согласие на обработку персональных данных')

    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, phone, type, comment }),
      })
      if (!res.ok) throw new Error('request_failed')
      form.reset()
      setConsent(false)
      setType(boatOptions[0])
      setSent(true)
    } catch {
      setError('Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section request" id="request">
      <Waves className="request__waves" flip />
      <div className="container">
        <div className={`request__card ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="request__intro">
            <span className="section__eyebrow section__eyebrow--light">Заявка</span>
            <h2 className="request__title">Оставьте заявку — остальное сделаем мы</h2>
            <p className="request__text">
              Никаких обязательств и предоплат. Заполните форму, и менеджер свяжется с вами,
              чтобы подобрать катер и рассчитать индивидуальное предложение.
            </p>
            <ul className="request__list">
              <li>✔ Ответим в течение 15 минут</li>
              <li>✔ Подберём катер под вашу компанию</li>
              <li>✔ Подскажем по правам ГИМС и условиям</li>
            </ul>
          </div>

          <div className="request__form-wrap">
            {sent ? (
              <div className="request__success" role="status">
                <div className="request__success-icon">⚓</div>
                <h3>Заявка отправлена!</h3>
                <p>Спасибо! Мы уже готовим для вас лучшие варианты и скоро свяжемся.</p>
                <button className="btn btn--ghost" onClick={() => setSent(false)}>
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Как к вам обращаться</label>
                  <input id="name" name="name" type="text" placeholder="Ваше имя" autoComplete="name" />
                </div>

                <div className="field">
                  <label htmlFor="phone">Телефон</label>
                  <input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" autoComplete="tel" />
                </div>

                <div className="field">
                  <span className="field__label">Какой катер интересует</span>
                  <div className="chips">
                    {boatOptions.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`chip ${type === t ? 'chip--active' : ''}`}
                        onClick={() => setType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="type" value={type} />
                </div>

                <div className="field">
                  <label htmlFor="comment">Комментарий (необязательно)</label>
                  <textarea id="comment" name="comment" rows={3} placeholder="Дата, количество гостей, повод…" />
                </div>

                <label className="consent">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span>
                    Я согласен(а) на{' '}
                    <button type="button" className="consent__link" onClick={() => onLegal('consent')}>
                      обработку персональных данных
                    </button>{' '}
                    и принимаю{' '}
                    <button type="button" className="consent__link" onClick={() => onLegal('privacy')}>
                      Политику конфиденциальности
                    </button>
                    .
                  </span>
                </label>

                {error && <p className="form__error">{error}</p>}

                <button type="submit" className="btn btn--lg btn--full" disabled={loading}>
                  {loading ? 'Отправляем…' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
