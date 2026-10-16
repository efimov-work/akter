import { GALLERY } from '@/lib/content';

type Item = { img: string; caption: string; alt: string };

function Ph({ item, n, className, imgStyle }: { item: Item; n: number; className: string; imgStyle?: React.CSSProperties }) {
  return (
    <figure className={`ph ${className}`}>
      <img src={item.img} alt={item.alt} loading="lazy" decoding="async" style={imgStyle} />
      <figcaption className="cap">
        {item.caption}
        <span>{String(n).padStart(2, '0')}</span>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section className="sec" id="gallery">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Галерея</p>
            <h2 className="disp h2 rv r2">Комплекс и апартаменты</h2>
          </div>
        </div>
        <div className="gal">
          <Ph item={GALLERY.sea} n={1} className="g-a rv" />
          <div className="g-col">
            <Ph item={GALLERY.pool} n={2} className="rv r2" />
            <Ph item={GALLERY.park} n={3} className="rv r3" />
          </div>
          <Ph item={GALLERY.terraces} n={4} className="g-c rv" />
          <Ph item={GALLERY.evening} n={5} className="g-d rv r2" imgStyle={{ objectPosition: '70% 40%' }} />
        </div>
      </div>
    </section>
  );
}
