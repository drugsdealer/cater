/**
 * Serverless-функция Vercel: принимает заявку с сайта и шлёт её в Telegram.
 *
 * Требуются переменные окружения (Vercel → Project → Settings → Environment Variables):
 *   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
 *   TELEGRAM_CHAT_ID   — id чата/пользователя/группы, куда слать заявки
 *
 * Токен живёт только на сервере и в браузер не попадает.
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return res.status(500).json({ error: 'not_configured' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {}
  const name = String(body.name ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const type = String(body.type ?? '').trim()
  const comment = String(body.comment ?? '').trim()

  // Базовая валидация — та же, что и на клиенте.
  if (name.length < 2 || phone.replace(/\D/g, '').length < 10) {
    return res.status(400).json({ error: 'invalid' })
  }

  const lines = [
    '🚤 <b>Новая заявка с сайта</b>',
    '',
    `👤 <b>Имя:</b> ${esc(name)}`,
    `📞 <b>Телефон:</b> ${esc(phone)}`,
  ]
  if (type) lines.push(`⚓ <b>Катер:</b> ${esc(type)}`)
  if (comment) lines.push(`💬 <b>Комментарий:</b> ${esc(comment)}`)

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    if (!tg.ok) {
      const detail = await tg.text()
      console.error('Telegram sendMessage failed', tg.status, detail)
      return res.status(502).json({ error: 'telegram_failed' })
    }
  } catch (e) {
    console.error('Telegram request error', e)
    return res.status(502).json({ error: 'telegram_unreachable' })
  }

  return res.status(200).json({ ok: true })
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function safeParse(s: string) {
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
