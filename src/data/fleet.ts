export interface Boat {
  id: string
  name: string
  type: string
  /** Одно фото (используется, если не задан images). Файлы — в public/boats. */
  image: string
  /** Несколько фото для листания (карусель). Первое — главное. */
  images?: string[]
  /** Как вписывать фото: 'cover' или 'contain' — показать целиком (с размытой подложкой). */
  fit?: 'cover' | 'contain'
  motor?: string
  capacity: string
  /** Стартовая цена, напр. "от 12 000 ₽/час". */
  price: string
  /** Можно арендовать с нашим капитаном. */
  captain?: boolean
  /** id яхт-клуба из data/clubs.ts (для группировки флота и подстановки в заявку). */
  clubId?: string
  /** Требуются ли права ГИМС для управления. */
  license: boolean
  tag: string
  description: string
}

export const fleet: Boat[] = [
  {
    id: 'sea-ray-190',
    name: 'Sea Ray 190 Sport',
    type: 'Катер',
    image: '/boats/sea-ray-190-1.jpg',
    images: [
      '/boats/sea-ray-190-1.jpg',
      '/boats/sea-ray-190-2.jpg',
      '/boats/sea-ray-190-3.jpg',
      '/boats/sea-ray-190-4.jpg',
    ],
    fit: 'contain',
    capacity: 'до 8 человек',
    price: 'от 12 000 ₽/час',
    captain: true,
    clubId: 'burevestnik',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Спортивный катер для активного дня на воде — купание, прогулки и драйв на скорости. Аренда при наличии прав ГИМС; также можем прокатить с нашим капитаном.',
  },
  {
    id: 'celebrity-220',
    name: 'Celebrity 220',
    type: 'Катер',
    image: '/boats/celebrity-220-1.jpg',
    images: [
      '/boats/celebrity-220-1.jpg',
      '/boats/celebrity-220-2.jpg',
      '/boats/celebrity-220-4.jpg',
      '/boats/celebrity-220-5.jpg',
      '/boats/celebrity-220-6.jpg',
    ],
    fit: 'contain',
    capacity: 'до 5 человек',
    price: 'от 14 000 ₽/час',
    captain: true,
    clubId: 'burevestnik',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Стильный катер для прогулок и отдыха на воде в приятной компании. Аренда при наличии прав ГИМС; есть вариант с нашим капитаном.',
  },
  {
    id: 'bayliner-2355',
    name: 'Bayliner 2355',
    type: 'Катер с каютой',
    image: '/boats/bayliner-2355-1.jpg',
    images: [
      '/boats/bayliner-2355-1.jpg',
      '/boats/bayliner-2355-2.jpg',
      '/boats/bayliner-2355-3.jpg',
      '/boats/bayliner-2355-4.jpg',
      '/boats/bayliner-2355-5.jpg',
    ],
    fit: 'contain',
    capacity: 'до 8 человек',
    price: 'от 13 000 ₽/час',
    clubId: 'burevestnik',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Просторный катер с каютой для большой компании и долгих прогулок по воде. Аренда при наличии прав ГИМС.',
  },
  {
    id: 'bayliner-275',
    name: 'Bayliner 275',
    type: 'Яхта',
    image: '/boats/bayliner-275-1.jpg',
    images: [
      '/boats/bayliner-275-1.jpg',
      '/boats/bayliner-275-2.jpg',
      '/boats/bayliner-275-3.jpg',
      '/boats/bayliner-275-4.jpg',
      '/boats/bayliner-275-5.jpg',
      '/boats/bayliner-275-6.jpg',
      '/boats/bayliner-275-7.jpg',
    ],
    capacity: 'до 9 человек',
    price: 'от 15 000 ₽/час',
    captain: true,
    clubId: 'burevestnik',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Просторная яхта с каютой для большой компании и статусного отдыха на воде. Аренда при наличии прав ГИМС или с нашим капитаном.',
  },
  {
    id: 'sea-ray-260',
    name: 'Sea Ray 260 Sundancer',
    type: 'Катер с каютой',
    image: '/boats/sea-ray-260-1.jpg',
    images: [
      '/boats/sea-ray-260-1.jpg',
      '/boats/sea-ray-260-2.jpg',
      '/boats/sea-ray-260-3.jpg',
    ],
    fit: 'contain',
    capacity: 'до 8 человек',
    price: 'от 14 000 ₽/час',
    captain: true,
    clubId: 'burevestnik',
    license: false,
    tag: 'Только с капитаном',
    description:
      'Стильный катер с каютой для ярких событий — дни рождения, девичники, праздники и любые мероприятия. Сдаётся только с нашим капитаном.',
  },
  {
    id: 'prive-4',
    name: 'Prive 4.0',
    type: 'Лодка',
    image: '/boats/prive-4-1.jpg',
    images: [
      '/boats/prive-4-1.jpg',
      '/boats/prive-4-2.jpg',
      '/boats/prive-4-3.jpg',
      '/boats/prive-4-4.jpg',
      '/boats/prive-4-5.jpg',
    ],
    fit: 'contain',
    capacity: 'до 3 человек',
    price: 'уточняйте у менеджера',
    clubId: 'meduza',
    license: false,
    tag: 'Без прав ГИМС',
    description:
      'Компактная лодка для лёгких прогулок и рыбалки. Управление без прав ГИМС и без капитана — справится каждый.',
  },
  {
    id: 'maxum-290',
    name: 'Maxum 290',
    type: 'Яхта',
    image: '/boats/maxum-290-1.jpg',
    images: [
      '/boats/maxum-290-1.jpg',
      '/boats/maxum-290-2.jpg',
      '/boats/maxum-290-3.jpg',
      '/boats/maxum-290-4.jpg',
      '/boats/maxum-290-5.jpg',
      '/boats/maxum-290-6.jpg',
    ],
    fit: 'contain',
    capacity: 'до 9 человек',
    price: 'от 14 000 ₽/час',
    captain: true,
    clubId: 'prichal',
    license: false,
    tag: 'Только с капитаном',
    description:
      'Просторная яхта для прогулок по Москве-реке и статусного отдыха на воде. Сдаётся только с нашим капитаном.',
  },
]


