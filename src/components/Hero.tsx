import { asset } from '@/lib/asset';
import { COMPLEX, HERO_ALT, HERO_STATS, MARQUEE } from '@/lib/content';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-photo">
          <img
            src={asset('/assets/hero.webp')}
            srcSet={`${asset('/assets/hero-1200.webp')} 1200w, ${asset('/assets/hero.webp')} 1680w`}
            sizes="100vw"
            alt={HERO_ALT}
            width={1680}
            height={1118}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="glow" aria-hidden="true" />
      </div>
      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-grid">
          <div>
            <p className="kick fade">
              {COMPLEX.locality}, {COMPLEX.street}
            </p>
            <h1 className="disp h1">
              <span className="ln">
                <span>Апартаменты</span>
              </span>
              <span className="ln">
                <span>на первой линии</span>
              </span>
              <span className="ln">
                <span>
                  <em>Черного моря</em>
                </span>
              </span>
            </h1>
            <p className="lead fade d2" style={{ marginTop: 32 }}>
              Комплекс класса Deluxe на первой береговой линии с собственным пляжем и апартаментами с террасой.
            </p>
            <div className="cta-row fade d3">
              <a className="btn" href="#calc">
                Рассчитать доходность <span className="arr">→</span>
              </a>
              <a className="btn ghost" href="#plans">
                Планировки
              </a>
            </div>
          </div>
        </div>
        <dl className="hstats fade d4">
          {HERO_STATS.map((s) => (
            <div className="hstat" key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mq" aria-hidden="true">
        <div className="mq-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="mq-item" key={i}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
