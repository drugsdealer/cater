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
- **Отправка заявки** — форма шлёт данные в serverless-функцию `api/lead.ts`, которая отправляет заявку в Telegram (см. ниже)

## Деплой на Vercel

Vercel определяет Vite автоматически: build command `npm run build`, output directory `dist`. Функции из папки `api/` подхватываются без настройки.

## Заявки в Telegram

Форма отправляет заявку в `api/lead.ts` (serverless-функция), а та — в Telegram. Токен бота хранится только на сервере и в браузер не попадает.

Настройка:

1. **Создайте бота.** В Telegram напишите [@BotFather](https://t.me/BotFather) → `/newbot` → получите **токен** вида `123456789:AAABBB...`.
2. **Узнайте chat id.** Напишите своему боту любое сообщение, затем откройте
   `https://api.telegram.org/bot<ТОКЕН>/getUpdates` — в ответе найдите `"chat":{"id": ...}`.
   (Либо для личного id — бот [@userinfobot](https://t.me/userinfobot). Для группы добавьте
   бота в группу; её id обычно отрицательный.)
3. **Добавьте переменные в Vercel** → Project → Settings → Environment Variables:
   - `TELEGRAM_BOT_TOKEN` — токен бота
   - `TELEGRAM_CHAT_ID` — id чата
4. **Сделайте Redeploy** (переменные применяются к новой сборке).

> Локально через `npm run dev` эндпоинт `/api/lead` недоступен — он работает на Vercel
> или при запуске через `vercel dev`. Пример переменных — в `.env.example`.
