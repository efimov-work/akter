import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articlePath, articles, getArticle, GUIDE_PATH, guideMetadata, guideUrl } from '@/lib/guide';
import { absolute, siteUrl } from '@/lib/seo';

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return guideMetadata(articlePath(slug), article.title, article.description, article.image, 'article');
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const canonical = guideUrl(articlePath(slug));
  const { image } = article;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: `${siteUrl()}/` },
          { '@type': 'ListItem', position: 2, name: 'Гид', item: guideUrl(GUIDE_PATH) },
          { '@type': 'ListItem', position: 3, name: article.title, item: canonical }
        ]
      },
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        headline: article.title,
        description: article.description,
        image: image ? absolute(image.img) : undefined,
        inLanguage: 'ru-RU',
        mainEntityOfPage: canonical,
        isPartOf: { '@id': `${siteUrl()}/#website` },
        about: { '@id': `${siteUrl()}/#complex` }
      }
    ]
  };

  return (
    <main className="wrap guide-article-main">
      <nav className="guide-crumbs" aria-label="Путь по сайту">
        <Link href="/">Главная</Link>
        <Link href={GUIDE_PATH}>Гид</Link>
        <span aria-current="page">{article.title}</span>
      </nav>
      <article>
        <header className={image ? 'guide-article-hero' : 'guide-article-hero guide-article-hero--text'}>
          <div className="guide-article-title">
            <h1 className="disp guide-display">{article.title}</h1>
            <p className="lead">{article.description}</p>
          </div>
          {image && (
            <figure className="guide-cover">
              <img
                className={article.plan ? 'guide-plan-media' : undefined}
                src={image.img}
                alt={image.alt}
                fetchPriority="high"
                width={960}
                height={600}
              />
              {image.credit ? (
                <figcaption><a href={image.credit.href}>{image.credit.label}</a></figcaption>
              ) : article.plan && <figcaption>Пример схемы из подборки проекта</figcaption>}
            </figure>
          )}
        </header>
        <div className="guide-prose">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2 className="disp">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          {article.sources && (
            <div className="guide-sources">
              <h2 className="disp">Источники</h2>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.href}>
                    {source.href.startsWith('/')
                      ? <Link href={source.href}>{source.label}</Link>
                      : <a href={source.href}>{source.label}</a>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <aside className="guide-article-actions" aria-label="Действия">
            {article.action && <Link className="btn ghost" href={article.action.href}>{article.action.label}</Link>}
            <Link className="btn" href="/#lead">Обсудить апартаменты</Link>
          </aside>
        </div>
      </article>
      <section className="guide-related" aria-labelledby="guide-related-title">
        <h2 className="disp" id="guide-related-title">По теме</h2>
        <ul>
          {article.related.map((relatedSlug) => {
            const related = getArticle(relatedSlug);
            return related && <li key={relatedSlug}><Link href={articlePath(relatedSlug)}>{related.title}</Link></li>;
          })}
        </ul>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </main>
  );
}
