import { BASE_PATH } from './asset';
import { ARCH_PHOTOS, COMPLEX, CONTACTS, GALLERY, HERO_ALT, INFRA, LOCATION_PHOTO, MAP_LINKS, PLANS } from './content';

export const DEFAULT_SITE_URL = 'http://localhost:3000';

export const SITE_NAME = 'Актер Гэлакси';

export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION || undefined;
export const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || undefined;

export const NOINDEX = process.env.SITE_NOINDEX === '1';

export const TITLE = 'Апартаменты «Актер Гэлакси» в Сочи у моря для инвестиций';
export const DESCRIPTION =
  'Сданный комплекс бизнес-класса от MR Group на первой линии в Сочи: 200 м до моря, свой пляж, SPA, паркинг. Расчет доходности от посуточной аренды.';

export const KEYWORDS = [
  'Актер Гэлакси',
  'Актер Гэлакси Сочи',
  'Akter Galaxy',
  'апартаменты в Сочи у моря',
  'апартаменты на первой линии в Сочи',
  'купить апартаменты в Сочи',
  'апартаменты в Сочи для инвестиций',
  'апартаменты для посуточной аренды Сочи',
  'доходная недвижимость Сочи',
  'MR Group Сочи',
  'Курортный проспект 105'
];

export const CLEAN_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'yclid',
  'ysclid',
  'gclid',
  'fbclid',
  'from',
  'etext'
];

export function siteOrigin(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function siteUrl(): string {
  return `${siteOrigin()}${BASE_PATH}`;
}

export function absolute(path: string): string {
  return `${siteOrigin()}${path}`;
}

export function pageImages(): { url: string; caption: string }[] {
  return [
    { img: GALLERY.evening.img, alt: HERO_ALT },
    ...Object.values(ARCH_PHOTOS),
    LOCATION_PHOTO,
    ...Object.values(GALLERY).filter((g) => g !== GALLERY.evening),
    ...PLANS
  ].map((p) => ({ url: absolute(p.img), caption: p.alt }));
}

export function buildJsonLd(): Record<string, unknown> {
  const url = siteUrl();
  const site = `${url}/#website`;
  const page = `${url}/#webpage`;
  const complex = `${url}/#complex`;
  const telephone = CONTACTS.phoneHref.replace('tel:', '') || undefined;
  const address = {
    '@type': 'PostalAddress',
    addressCountry: COMPLEX.country,
    addressRegion: COMPLEX.region,
    addressLocality: COMPLEX.locality,
    streetAddress: COMPLEX.street
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': site,
        url,
        name: SITE_NAME,
        alternateName: COMPLEX.nameEn,
        inLanguage: 'ru-RU'
      },
      {
        '@type': 'WebPage',
        '@id': page,
        url,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'ru-RU',
        isPartOf: { '@id': site },
        about: { '@id': complex },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${url}/opengraph-image.jpg` }
      },
      {
        '@type': 'ApartmentComplex',
        '@id': complex,
        name: COMPLEX.name,
        alternateName: COMPLEX.nameEn,
        description: DESCRIPTION,
        url,
        telephone,
        email: CONTACTS.email || undefined,
        logo: { '@type': 'ImageObject', '@id': `${url}/#logo`, url: `${url}/logo.png`, contentUrl: `${url}/logo.png`, width: 1000, height: 1000, caption: SITE_NAME },
        image: [
          `${url}/opengraph-image.jpg`,
          ...pageImages().map((p) => ({ '@type': 'ImageObject', url: p.url, contentUrl: p.url, caption: p.caption }))
        ],
        address,
        geo: { '@type': 'GeoCoordinates', latitude: COMPLEX.lat, longitude: COMPLEX.lng },
        hasMap: MAP_LINKS.yandex,
        containedInPlace: { '@type': 'City', name: COMPLEX.locality },
        contactPoint: telephone
          ? { '@type': 'ContactPoint', telephone, contactType: 'sales', areaServed: 'RU', availableLanguage: 'ru' }
          : undefined,
        amenityFeature: ['Собственный пляж 200 м', 'Атриум под стеклянной кровлей', ...INFRA.map((i) => i.title)].map((name) => ({
          '@type': 'LocationFeatureSpecification',
          name,
          value: true
        }))
      }
    ]
  };
}
