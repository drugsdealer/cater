import { OPERATOR, MARINA, type LegalDoc } from './LegalModal'

export default function Footer({
  onLegal,
}: {
  onLegal: (doc: LegalDoc) => void
}) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="logo logo--footer">
            <span className="logo__mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="3" />
                <line x1="12" y1="22" x2="12" y2="8" />
                <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
              </svg>
            </span>
            <span className="logo__text">Marea</span>
          </span>
          <p>Аренда катеров и лодок на водохранилище в Московской области. Ваш идеальный день на воде — в одной заявке.</p>
        </div>

        <div className="footer__col">
          <h4>Контакты</h4>
          <a href="tel:+79607287566">{OPERATOR.phone}</a>
          <a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>
          <span>Ежедневно, 09:00 — 21:00</span>
        </div>

        <div className="footer__col">
          <h4>Причал</h4>
          <a href={MARINA.mapUrl} target="_blank" rel="noopener noreferrer">
            {MARINA.name}
          </a>
          <span>{MARINA.address}</span>
          <a href={MARINA.mapUrl} target="_blank" rel="noopener noreferrer">
            Посмотреть на карте →
          </a>
        </div>

        <div className="footer__col">
          <h4>Документы</h4>
          <button className="footer__link-btn" onClick={() => onLegal('privacy')}>
            Политика конфиденциальности
          </button>
          <button className="footer__link-btn" onClick={() => onLegal('consent')}>
            Согласие на обработку ПДн
          </button>
          <a href="#request">Оставить заявку →</a>
        </div>
      </div>

      {/* Обязательная информация об исполнителе (ИП) */}
      <div className="container footer__req">
        <p>
          Услуги оказывает {OPERATOR.name} · ИНН {OPERATOR.inn} · ОГРНИП {OPERATOR.ogrnip}
          {' · '}
          {OPERATOR.address}
        </p>
        <p>
          Сайт носит информационный характер и не является публичной офертой. Аренда катеров,
          требующих прав ГИМС, осуществляется при наличии у арендатора действующего
          удостоверения на право управления маломерным судном.
        </p>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Marea. Все права защищены.</span>
        <span>Сделано с любовью к воде 🌊</span>
      </div>
    </footer>
  )
}
