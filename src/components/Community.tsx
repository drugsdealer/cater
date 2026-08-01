import { useReveal } from '../hooks/useReveal'

const TELEGRAM_URL = 'https://t.me/+wLAXsxClZAIwODMy'

export default function Community() {
  const { ref, visible } = useReveal(0.15)

  return (
    <section className="section community" id="community">
      <div className="container">
        <div ref={ref} className={`community__card ${visible ? 'is-visible' : ''}`}>
          <div className="community__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.91 3.79 20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
            </svg>
          </div>

          <div className="community__body">
            <span className="community__eyebrow">Telegram-канал</span>
            <h2 className="community__title">Акции, новинки флота и прямая связь</h2>
            <p className="community__text">
              Каждый день — специальные предложения на аренду, свежие катера и яхты во флоте
              и анонсы. А ещё туда можно написать напрямую и быстро всё уточнить.
            </p>
            <ul className="community__list">
              <li>🔥 Ежедневные акции и спецпредложения</li>
              <li>🛥️ Новые катера и яхты — первыми</li>
              <li>💬 Прямая связь с нами в один клик</li>
            </ul>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--lg community__btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.91 3.79 20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
              </svg>
              Вступить в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
