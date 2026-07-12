export interface Boat {
  id: string
  name: string
  type: string
  /**
   * Путь к фото катера. Положите свои изображения в папку `public/boats/`
   * с этими именами — и они подхватятся автоматически.
   */
  image: string
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
    image: '/boats/bayliner-1851-capri.jpg',
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
    image: '/boats/sea-ray-190-sport.jpg',
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
    image: '/boats/bayliner-2355-ciera.jpg',
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
    image: '/boats/prive-4.jpg',
    motor: '9.9 л.с.',
    capacity: 'до 3 человек',
    license: false,
    tag: 'Без прав ГИМС',
    description:
      'Компактная лодка для тихой рыбалки и неспешной прогулки по воде. Управление без прав ГИМС — подойдёт каждому.',
  },
]
