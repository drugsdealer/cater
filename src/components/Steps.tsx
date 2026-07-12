import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Оставляете заявку',
    text: 'Коротко расскажите о поводе, дате и числе гостей. Это займёт меньше минуты.',
  },
  {
    num: '02',
    title: 'Мы связываемся с вами',
    text: 'Уточняем детали, подбираем судно и маршрут, отвечаем на все вопросы.',
  },
  {
    num: '03',
    title: 'Выходите в море',
    text: 'Приезжаете к причалу — судно готово. Остаётся только наслаждаться водой.',
  },
]

export default function Steps() {
  const { ref, visible } = useReveal()

  return (
    <section className="section steps" id="steps">
      <div className="container">
        <div className={`section__head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="section__eyebrow">Как это работает</span>
          <h2 className="section__title">Три шага до отдыха на воде</h2>
        </div>

        <div className="steps__grid">
          {steps.map((s, i) => (
            <StepCard key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, visible } = useReveal(0.2)
  return (
    <div
      ref={ref}
      className={`step ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="step__num">{step.num}</span>
      <h3 className="step__title">{step.title}</h3>
      <p className="step__text">{step.text}</p>
    </div>
  )
}
