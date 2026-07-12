# Marea — аренда яхт, катеров и лодок

Одностраничный сайт на **React + TypeScript (Vite)** в морской тематике, с водными анимациями. Без цен — только заявка, после которой менеджер связывается с клиентом.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
```

## Сборка

```bash
npm run build    # проверка типов + продакшн-сборка в dist/
npm run preview  # предпросмотр собранной версии
```

## Структура

- `src/components/` — секции: `Header`, `Hero`, `Fleet`, `Features`, `Steps`, `RequestForm`, `Footer`, `Waves`
- `src/hooks/useReveal.ts` — плавное появление секций при скролле (IntersectionObserver)
- `src/data/fleet.ts` — карточки флота (легко редактировать)
- `src/index.css` — все стили и анимации

## Что настроить под себя

- **Реквизиты ИП** — объект `OPERATOR` в `src/components/LegalModal.tsx` (ФИО, ИНН, ОГРНИП, адрес, e-mail, телефон); оттуда данные подставляются в документы и футер
- **Контакты** — телефон/e-mail в `src/components/Footer.tsx`
- **Флот** — тексты в `src/data/fleet.ts`
- **Фото катеров** — ссылки в поле `image` в `src/data/fleet.ts` (сейчас — CDN ImageKit)
- **Отправка заявки** — в `src/components/RequestForm.tsx` (`handleSubmit`) сейчас заглушка; сюда подключается ваша CRM / e-mail / Telegram-бот

## Деплой на Vercel

Vercel определяет Vite автоматически: build command `npm run build`, output directory `dist`. Дополнительная настройка не требуется.
