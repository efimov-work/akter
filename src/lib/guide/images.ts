import { asset } from '@/lib/asset';
import { speech, type GuideImage } from './types';

export const guideImages = {
  'kupit-apartamenty': {
    img: asset('/assets/guide/kupit-apartamenty.webp'),
    thumb: asset('/assets/guide/kupit-apartamenty-sm.webp'),
    alt: "Гостиная с панорамным остеклением в апартаментах «Актёр Гэлакси»",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'osmotr': {
    img: asset('/assets/guide/osmotr.webp'),
    thumb: asset('/assets/guide/osmotr-sm.webp'),
    alt: "Балкон с панорамным остеклением в апартаментах «Актёр Гэлакси»",
    credit: { href: "https://akter-galaxy.ru/apartments/93-m2-8-floor-new-renovation-sea-view", label: "Фотография из карточки апартамента" }
  },
  's-dvumya-spalnyami': {
    img: asset('/assets/guide/s-dvumya-spalnyami.webp'),
    thumb: asset('/assets/guide/s-dvumya-spalnyami-sm.webp'),
    alt: "Гостиная апартаментов с двумя спальнями в «Актёр Гэлакси»",
    credit: { href: "https://akter-galaxy.ru/apartments/112-m2-20-floor", label: "Фотография из карточки апартамента" }
  },
  's-remontom': {
    img: asset('/assets/guide/s-remontom.webp'),
    thumb: asset('/assets/guide/s-remontom-sm.webp'),
    alt: "Мастер-спальня апартаментов с готовым ремонтом",
    credit: { href: "https://akter-galaxy.ru/apartments/93-m2-8-floor-new-renovation-sea-view", label: "Фотография из карточки апартамента" }
  },
  'terrasa': {
    img: asset('/assets/guide/terrasa.webp'),
    thumb: asset('/assets/guide/terrasa-sm.webp'),
    alt: "Открытая площадка с мебелью и видом на море",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'vid-na-more': {
    img: asset('/assets/guide/vid-na-more.webp'),
    thumb: asset('/assets/guide/vid-na-more-sm.webp'),
    alt: "Вид на Чёрное море и зелёный склон с апартаментов",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'arhitektura': {
    img: asset('/assets/guide/arhitektura.webp'),
    thumb: asset('/assets/guide/arhitektura-sm.webp'),
    alt: "Волнообразный фасад «Актёр Гэлакси» со стороны побережья",
    credit: { href: speech.href, label: 'Фотографии SPEECH и Алексея Народицкого' }
  },
  'atrium': {
    img: asset('/assets/guide/atrium.webp'),
    thumb: asset('/assets/guide/atrium-sm.webp'),
    alt: "Перекрытие атриума и галереи «Актёр Гэлакси»",
    credit: { href: speech.href, label: 'Фотографии SPEECH и Алексея Народицкого' }
  },
  'infrastruktura': {
    img: asset('/assets/guide/infrastruktura.webp'),
    thumb: asset('/assets/guide/infrastruktura-sm.webp'),
    alt: "Детская площадка рядом с корпусом «Актёр Гэлакси»",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'plyazh': {
    img: asset('/assets/guide/plyazh.webp'),
    thumb: asset('/assets/guide/plyazh-sm.webp'),
    alt: "Вид с моря на побережье перед комплексом «Актёр Гэлакси»",
    credit: { href: speech.href, label: 'Фотографии SPEECH и Алексея Народицкого' }
  },
  'basseyn-spa': {
    img: asset('/assets/guide/basseyn-spa.webp'),
    thumb: asset('/assets/guide/basseyn-spa-sm.webp'),
    alt: "Открытый бассейн комплекса в вечерней подсветке",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'adres': {
    img: asset('/assets/guide/adres.webp'),
    thumb: asset('/assets/guide/adres-sm.webp'),
    alt: "Комплекс «Актёр Гэлакси» и Курортный проспект с высоты",
    credit: { href: speech.href, label: 'Фотографии SPEECH и Алексея Народицкого' }
  },
  'primorye': {
    img: asset('/assets/guide/primorye.webp'),
    thumb: asset('/assets/guide/primorye-sm.webp'),
    alt: "Жилые здания и зелёные склоны Приморья",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'kak-dobratsya': {
    img: asset('/assets/guide/kak-dobratsya.webp'),
    thumb: asset('/assets/guide/kak-dobratsya-sm.webp'),
    alt: "Расположение комплекса по отношению к берегу и въездам",
    credit: { href: speech.href, label: 'Фотографии SPEECH и Алексея Народицкого' }
  },
  'pod-sdachu': {
    img: asset('/assets/guide/pod-sdachu.webp'),
    thumb: asset('/assets/guide/pod-sdachu-sm.webp'),
    alt: "Интерьер меблированного апартамента в «Актёр Гэлакси»",
    credit: { href: "https://akter-galaxy.ru/apartments/43-m2-4-floor-city-view", label: "Фотография из карточки апартамента" }
  },
  'posutochno': {
    img: asset('/assets/guide/posutochno.webp'),
    thumb: asset('/assets/guide/posutochno-sm.webp'),
    alt: "Открытая терраса апартамента на закате",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  },
  'dlitelno': {
    img: asset('/assets/guide/dlitelno.webp'),
    thumb: asset('/assets/guide/dlitelno-sm.webp'),
    alt: "Полноразмерная кухня с островом для длительного проживания",
    credit: { href: "https://akter-galaxy.ru/apartments/112-m2-20-floor", label: "Фотография из карточки апартамента" }
  },
  'dlya-sebya-i-arendy': {
    img: asset('/assets/guide/dlya-sebya-i-arendy.webp'),
    thumb: asset('/assets/guide/dlya-sebya-i-arendy-sm.webp'),
    alt: "Обеденная зона на остеклённом балконе апартаментов",
    credit: { href: "https://akter-galaxy.ru/gallery", label: "Галерея akter-galaxy.ru" }
  }
} satisfies Record<string, GuideImage>;
