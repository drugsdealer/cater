import { useReveal } from '../hooks/useReveal'

const features = [
  {
    icon: '🛟',
    title: 'Безопасность прежде всего',
    text: 'Все катера застрахованы, проходят техосмотр и укомплектованы спасательными средствами.',
  },
  {
    icon: '⚓',
    title: 'Проверенный флот',
    text: 'Катера Bayliner, Sea Ray и Prive в отличном состоянии. Вы видите ровно то, что арендуете.',
  },
  {
    icon: '🪪',
    title: 'С правами и без',
    text: 'Катера сдаём без капитана — при наличии прав ГИМС. А для Prive 4.0 права не нужны.',
  },
  {
    icon: '💬',
    title: 'Ответим за минуты',
    text: 'Оставьте заявку — менеджер свяжется, уточнит детали и предложит лучший вариант.',
  },
]

export default function Features() {
  const { ref, visible } = useReveal()

  return (
    <section className="section features" id="features">
      <div className="container">
        <div className={`section__head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="section__eyebrow">Почему мы</span>
          <h2 className="section__title">Отдых на воде без единой заботы</h2>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: (typeof features)[number]; index: number }) {
  const { ref, visible } = useReveal(0.1)
  return (
    <div
      ref={ref}
      className={`feature ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="feature__icon">{feature.icon}</span>
      <h3 className="feature__title">{feature.title}</h3>
      <p className="feature__text">{feature.text}</p>
    </div>
  )
}
