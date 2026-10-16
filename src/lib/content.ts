import { asset } from './asset';

export const CONTACTS = {
  phone: '',
  phoneHref: '',
  email: ''
};

export const COMPLEX = {
  name: 'Актер Гэлакси',
  nameEn: 'Akter Galaxy',
  street: 'Курортный проспект, 105',
  locality: 'Сочи',
  district: 'Хостинский район',
  region: 'Краснодарский край',
  country: 'RU',
  lat: 43.550312,
  lng: 39.778236,
  developer: 'MR Group',
  architect: 'SPEECH'
};

export const MAP_LINKS = {
  yandex: `https://yandex.ru/maps/?pt=${COMPLEX.lng},${COMPLEX.lat}&z=16&l=map`,
  gis: `https://2gis.ru/sochi?m=${COMPLEX.lng}%2C${COMPLEX.lat}%2F17`
};

export const NAV = [
  { href: '#numbers', label: 'Цифры' },
  { href: '#why', label: 'Объект' },
  { href: '#calc', label: 'Доходность' },
  { href: '#location', label: 'Локация' },
  { href: '#plans', label: 'Планировки' }
];

export const HERO_ALT = 'Апартаменты «Актер Гэлакси» на первой линии моря в Сочи вечером';

export const HERO_STATS = [
  { value: '200 м', label: 'до моря' },
  { value: '6 га', label: 'территория комплекса' },
  { value: '3,2 м', label: 'высота потолков' },
  { value: '4 уровня', label: 'подземный паркинг' }
];

export const MARQUEE = [
  'Дом сдан',
  'Собственный пляж 200 м',
  'Атриум под стеклянной кровлей',
  'SPA и фитнес-центр',
  'Охрана 24/7',
  'Подземный паркинг 4 уровня',
  'Аэропорт 25 минут'
];

export const STATS = [
  { value: 273842, digits: 0, unit: '₽', label: 'средняя цена 1 м²', src: 'ЦИАН, сентябрь 2026' },
  { value: 25.2, digits: 1, unit: 'млн ₽', label: 'средняя стоимость апартамента', src: 'ЦИАН, сентябрь 2026' },
  { value: 100, digits: 0, unit: 'м', label: 'высота стеклянного перекрытия атриума', src: 'Данные застройщика' },
  { value: 500, digits: 0, unit: 'м²', label: 'максимальная площадь лота, от 35 м²', src: 'Данные застройщика' }
];

export const REASONS = [
  {
    title: 'Объект сдан',
    text: 'Дом введен в эксплуатацию. Нет строительного риска и ожидания ключей, доход с первого месяца владения.'
  },
  {
    title: 'Первая береговая линия',
    text: '200 м до моря и собственный пляж протяженностью 200 м. Окна и балконы части апартаментов выходят на закатную сторону.'
  },
  {
    title: 'Сервис внутри периметра',
    text: 'SPA, фитнес-центр, бассейн, два ресторана, кафе, продуктовый магазин, детский сад. Охрана и консьерж круглосуточно.'
  },
  {
    title: 'Доверительное управление',
    text: 'Передача апартамента управляющей компании: поиск гостей, уборка, обслуживание, ежемесячная отчетность.'
  }
];

export const ARCH_FACTS = [
  { value: '1', label: 'корпус' },
  { value: '6 га', label: 'территория' },
  { value: '100 м', label: 'высота атриума' }
];

export const ARCH_PHOTOS = {
  main: { img: asset('/assets/arch-dome.webp'), alt: 'Визуализация комплекса «Актер Гэлакси» с куполом атриума, вечер' },
  inset: { img: asset('/assets/arch-facade.webp'), alt: 'Каскадные террасы фасада «Актер Гэлакси», вид снизу вверх' }
};

export const MR_GROUP_LOGO = asset('/assets/mr-group.png');

export const DISTANCES = [
  { name: 'Море', time: '1 мин', width: '4%' },
  { name: 'Вокзал Сочи', time: '10 мин', width: '25%' },
  { name: 'Аэропорт', time: '25 мин', width: '62%' },
  { name: 'Красная Поляна', time: '40 мин', width: '100%' }
];

export const NEARBY = ['Мацеста', 'Санаторий «Актёр»', 'Radisson Лазурная', 'Санаторий «Юность»', 'СОК «Спутник»', 'Морской порт'];

export const LOCATION_PHOTO = {
  img: asset('/assets/location-aerial.webp'),
  alt: 'Аэрофото побережья Сочи от комплекса «Актер Гэлакси» в сторону центра города'
};

export const SPOTS = [
  { name: 'Актер Гэлакси', meta: 'Курортный проспект, 105', x: '86%', y: '60%', side: 'r', main: true },
  { name: 'Центр Сочи и морской порт', meta: 'около 10 минут на автомобиле', x: '40%', y: '24%', side: '', main: false },
  { name: 'Черное море', meta: '200 м, собственный пляж', x: '17%', y: '45%', side: 'l', main: false },
  { name: 'Парковая зона Приморья', meta: 'санатории и парки', x: '52%', y: '74%', side: '', main: false }
];

export const INFRA = [
  { title: 'Собственный пляж', text: 'Протяженность 200 м' },
  { title: 'Бассейн и SPA', text: 'SPA-центр и бассейн на территории' },
  { title: 'Фитнес-центр', text: 'Площадка workout, спортивные площадки' },
  { title: 'Два ресторана', text: 'Кафе, кондитерская, продуктовый магазин' },
  { title: 'Атриум', text: 'Закрытая внутренняя территория' },
  { title: 'Паркинг', text: 'Подземный, 4 уровня, плюс наземные места' },
  { title: 'Безопасность', text: 'Периметр, пропуска, видеонаблюдение, охрана 24/7' },
  { title: 'Консьерж и ресепшен', text: 'На первом этаже здания' },
  { title: 'Детский сад', text: 'Детские и игровые площадки' }
];

export const GALLERY = {
  sea: { img: asset('/assets/gallery-sea.webp'), caption: 'Комплекс и море', alt: 'Комплекс «Актер Гэлакси» с высоты, за ним Черное море' },
  pool: { img: asset('/assets/gallery-pool.webp'), caption: 'Бассейн', alt: 'Бассейн с шезлонгами на территории «Актер Гэлакси»' },
  park: { img: asset('/assets/gallery-park.webp'), caption: 'Парковое окружение', alt: 'Здание «Актер Гэлакси» среди парков Приморья' },
  terraces: { img: asset('/assets/gallery-terraces.webp'), caption: 'Террасы с видом на море', alt: 'Террасы фасада «Актер Гэлакси» с видом на море' },
  evening: { img: asset('/assets/hero.webp'), caption: 'Фасад вечером', alt: 'Фасад «Актер Гэлакси» вечером' }
};

export const PLANS = [
  { label: '2 комнаты · 71 м²', area: 71, type: '2-комнатный апартамент', img: asset('/assets/plan-71.webp') },
  { label: '2 комнаты · 93 м²', area: 93, type: '2-комнатный апартамент', img: asset('/assets/plan-93.webp') },
  { label: '2 комнаты · 101 м²', area: 101, type: '2-комнатный апартамент', img: asset('/assets/plan-101.webp') },
  { label: '3 комнаты · 112 м²', area: 112, type: '3-комнатный апартамент', img: asset('/assets/plan-112.webp') }
].map((p) => ({ ...p, alt: `Планировка: ${p.type} ${p.area} м² в «Актер Гэлакси»` }));

export const PLAN_SPECS = [
  ['Высота потолков', '3,2 м'],
  ['Отделка', 'черновая или под ключ'],
  ['Остекление', 'витражное'],
  ['Стоимость', 'по запросу']
];

export const BUDGETS = ['до 25 млн ₽', 'от 25 до 50 млн ₽', 'от 50 млн ₽'];

export const GOALS = ['Сдача в аренду', 'Перепродажа', 'Для себя и аренда'];

export const CALC = {
  price: { min: 10, max: 80, step: 0.5, value: 25.2 },
  adr: { min: 5000, max: 60000, step: 500, value: 18000 },
  occ: { min: 30, max: 90, step: 1, value: 55 },
  fee: { min: 15, max: 45, step: 1, value: 35 }
};
