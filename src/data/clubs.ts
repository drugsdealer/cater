export interface Club {
  id: string
  name: string
  address: string
  mapUrl: string
  /** Отображаемый телефон, напр. "+7 960 728-75-66". */
  phone: string
  /** Телефон для tel: без пробелов, напр. "+79607287566". */
  phoneRaw: string
  /** Имя менеджера этого клуба (если есть). */
  manager?: string
  /** Клуб-партнёр: при звонке нужно представиться «от Marea (Мареа)». */
  sayMarea?: boolean
  /** Доп. услуги клуба (напр. «вейкборд и ватрушка»). */
  extras?: string
}

/** Найти клуб по id (для группировки флота и подстановки в заявку). */
export function getClub(id?: string): Club | undefined {
  return clubs.find((c) => c.id === id)
}

export const clubs: Club[] = [
  {
    id: 'burevestnik',
    name: 'Яхт-клуб «Буревестник»',
    address: 'Мытищи, территория Буревестник',
    mapUrl:
      'https://yandex.ru/maps/org/yakht_klub_burevestnik_by_burevestnik_group/1003202085',
    phone: '+7 960 728-75-66',
    phoneRaw: '+79607287566',
    manager: 'Павел',
    extras: 'вейкборд и ватрушка',
  },
  {
    id: 'meduza',
    name: 'Яхт-клуб «Медуза»',
    address: 'Москва, Туркменский проезд',
    mapUrl: 'https://yandex.ru/maps/org/meduza/191579375967',
    phone: '+7 930 403-27-30',
    phoneRaw: '+79304032730',
    manager: 'Даниил',
    sayMarea: true,
  },
  {
    id: 'prichal',
    name: 'Причал «Московская верфь»',
    address: 'Москва, Нагатинский Затон',
    mapUrl: 'https://yandex.ru/maps/org/prichal_moskovskaya_verf/226669362562',
    phone: '+7 926 698-49-29',
    phoneRaw: '+79266984929',
    manager: 'Светлана',
    sayMarea: true,
  },
]
