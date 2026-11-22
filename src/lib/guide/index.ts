import type { Metadata } from 'next';
import { absolute, SITE_NAME, siteUrl } from '@/lib/seo';
import { buying } from './buying';
import { complex } from './complex';
import { formats } from './formats';
import { investment } from './investment';
import { neighborhood } from './neighborhood';
import type { GuideArticle, GuideImage } from './types';

export const GUIDE_PATH = '/guide';
export const GUIDE_TITLE = 'Гид по «Актёр Гэлакси»';
export const GUIDE_DESCRIPTION = 'Апартаменты в Сочи на Курортном проспекте. Как выбрать лот, проверить документы, оценить локацию и посчитать расходы на аренду.';

export const groups = [
  { id: 'pokupka', title: 'Покупка', articles: buying },
  { id: 'formaty', title: 'Форматы и планировки', articles: formats },
  { id: 'kompleks', title: 'Комплекс и инфраструктура', articles: complex },
  { id: 'lokatsiya', title: 'Адрес и окружение', articles: neighborhood },
  { id: 'arenda', title: 'Аренда и инвестиции', articles: investment }
];

export const articles = groups.flatMap((group) => group.articles);
const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string): GuideArticle | undefined {
  return bySlug.get(slug);
}

export function articlePath(slug: string) {
  return `${GUIDE_PATH}/${slug}`;
}

export function guideUrl(path: string) {
  return `${siteUrl()}${path}${process.env.STATIC_EXPORT === '1' ? '/' : ''}`;
}

export function guideMetadata(path: string, title: string, description: string, image: GuideImage | undefined, type: 'website' | 'article'): Metadata {
  const url = guideUrl(path);
  const previews = image ? [{ url: absolute(image.img), alt: image.alt }] : [];

  return {
    title: { absolute: title },
    description,
    keywords: [],
    alternates: { canonical: url },
    openGraph: { type, url, title, description, siteName: SITE_NAME, locale: 'ru_RU', images: previews },
    twitter: { card: 'summary_large_image', title, description, images: previews }
  };
}
