import Link from 'next/link';
import { articlePath, groups, GUIDE_DESCRIPTION, GUIDE_PATH, GUIDE_TITLE, guideMetadata } from '@/lib/guide';

export const metadata = guideMetadata(GUIDE_PATH, GUIDE_TITLE, GUIDE_DESCRIPTION, undefined, 'website');

export default function GuidePage() {
  return (
    <main className="wrap">
      <header className="guide-index-hero">
        <div>
          <h1 className="disp guide-display">{GUIDE_TITLE}</h1>
          <p className="lead">{GUIDE_DESCRIPTION}</p>
        </div>
        <nav className="guide-topics" aria-label="Темы гида">
          {groups.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
        </nav>
      </header>
      {groups.map((group) => (
        <section className="guide-group" key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
          <h2 className="disp" id={`${group.id}-title`}>{group.title}</h2>
          <div className="guide-grid">
            {group.articles.map((article) => (
              <Link className={article.image ? 'guide-card' : 'guide-card guide-card--text'} key={article.slug} href={articlePath(article.slug)}>
                {article.image && (
                  <img
                    className={article.plan ? 'guide-plan-media' : undefined}
                    src={article.image.thumb || article.image.img}
                    width={640}
                    height={360}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="guide-card-text">
                  <h3 className="disp">{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
