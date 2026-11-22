export type GuideImage = {
  img: string;
  alt: string;
  thumb?: string;
  credit?: GuideSource;
};

export type GuideSource = { href: string; label: string };

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  image?: GuideImage;
  plan?: boolean;
  sections: { title: string; paragraphs: string[] }[];
  sources?: GuideSource[];
  related: string[];
  action?: { href: string; label: string };
};

export const speech = {
  href: 'https://www.speech.su/ru/projects/mnogofunktsionalnyj-kompleks-s-apartamentami-%C2%ABakter-gelaksi%C2%BB',
  label: 'Архитектурное бюро SPEECH'
};

export const registry = {
  href: 'https://www.gosuslugi.ru/600359/1/form',
  label: 'Сведения ЕГРН на Госуслугах'
};

export const tax = {
  href: 'https://www.nalog.gov.ru/rn05/news/activities_fts/16646808/',
  label: 'ФНС о сдаче жилой и нежилой недвижимости'
};

export const resort = {
  href: 'https://acter-sochi.ru/kontakty/?lang=ru',
  label: 'Санаторий «Актёр»'
};

export const listings = { href: '/#lots', label: 'Подборка апартаментов' };
export const layouts = { href: '/#plans', label: 'Планировки на сайте' };
export const calculator = { href: '/#calc', label: 'Калькулятор аренды' };
export const location = { href: '/#location', label: 'Карта комплекса' };
export const gallery = { href: '/#gallery', label: 'Галерея комплекса' };
export const infrastructure = { href: '/#infra', label: 'Инфраструктура комплекса' };
