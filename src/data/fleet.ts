export interface Boat {
  id: string
  name: string
  type: string
  /** Ссылка на фото катера (CDN ImageKit). */
  image: string
  /** Как вписывать фото: 'cover' (по умолчанию) или 'contain' — показать целиком. */
  fit?: 'cover' | 'contain'
  motor: string
  capacity: string
  /** Требуются ли права ГИМС для управления. */
  license: boolean
  tag: string
  description: string
}

export const fleet: Boat[] = [
  {
    id: 'bayliner-1851',
    name: 'Bayliner 1851 Capri',
    type: 'Катер',
    image: 'https://ik.imagekit.io/qowmy92ny/2026-07-12%2016.03.43.jpg',
    fit: 'contain',
    motor: '4.3 л · 190 л/с',
    capacity: 'до 5 человек',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Манёвренный катер для активного дня на воде — прогулки, купание и лёгкий драйв на скорости.',
  },
  {
    id: 'sea-ray-190',
    name: 'Sea Ray 190 Sport',
    type: 'Катер',
    image: 'https://ik.imagekit.io/qowmy92ny/a44c01845602.webp',
    motor: '4.3 л · 220 л/с',
    capacity: 'до 8 человек',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Просторный спортивный катер для компании — динамика, комфорт и место для целой команды.',
  },
  {
    id: 'bayliner-2355',
    name: 'Bayliner 2355 Ciera',
    type: 'Катер с каютой',
    image: 'https://ik.imagekit.io/qowmy92ny/2026-07-12%2016.05.25.jpg',
    fit: 'contain',
    motor: '5.0 л · 250 л/с',
    capacity: 'до 10 человек',
    license: true,
    tag: 'Права ГИМС',
    description:
      'Крейсерский катер с каютой для большой компании и долгих прогулок — мощь и простор на борту.',
  },
  {
    id: 'prive-4',
    name: 'Prive 4.0',
    type: 'Лодка',
    image: 'https://ik.imagekit.io/qowmy92ny/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%C2%A0_%202026-07-12%20%D0%B2%C2%A016.06.06.png',
    motor: '9.9 л.с.',
    capacity: 'до 3 человек',
    license: false,
    tag: 'Без прав ГИМС',
    description:
      'Компактная лодка для тихой рыбалки и неспешной прогулки по воде. Управление без прав ГИМС — подойдёт каждому.',
  },
]
