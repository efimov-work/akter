import type { MetadataRoute } from 'next';
import { articlePath, articles, GUIDE_PATH, guideUrl } from '@/lib/guide';
import { absolute, NOINDEX, pageImages, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const BUILT_AT = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  if (NOINDEX) return [];

  return [
    {
      url: `${siteUrl()}/`,
      lastModified: BUILT_AT,
      changeFrequency: 'monthly',
      priority: 1,
      images: [...pageImages().map((p) => p.url), `${siteUrl()}/opengraph-image.jpg`, `${siteUrl()}/logo.png`]
    },
    { url: guideUrl(GUIDE_PATH) },
    ...articles.map((article) => ({
      url: guideUrl(articlePath(article.slug)),
      images: article.image ? [absolute(article.image.img)] : undefined
    }))
  ];
}
