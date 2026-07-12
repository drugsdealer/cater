import { useEffect, useState } from 'react'

const STORAGE_KEY = 'marea-cookie-consent'

export default function CookieBanner({
  onOpenPrivacy,
}: {
  onOpenPrivacy: () => void
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* localStorage может быть недоступен — просто скрываем баннер */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie" role="dialog" aria-label="Использование файлов cookie">
      <p className="cookie__text">
        🍪 Мы используем файлы cookie, чтобы сайт работал корректно и удобно. Продолжая
        пользоваться сайтом, вы соглашаетесь с их использованием и{' '}
        <button className="cookie__link" onClick={onOpenPrivacy}>
          Политикой конфиденциальности
        </button>
        .
      </p>
      <button className="btn btn--sm cookie__btn" onClick={accept}>
        Принять
      </button>
    </div>
  )
}
