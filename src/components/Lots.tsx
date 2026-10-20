'use client';

import { useState } from 'react';
import { num } from '@/lib/format';
import { LOTS } from '@/lib/content';
import { setInterest } from '@/lib/interest';

type Lot = (typeof LOTS)[number];

function LotCard({ lot, featured }: { lot: Lot; featured?: boolean }) {
  const [cur, setCur] = useState(0);
  const perMeter = Math.round((lot.price * 1000) / lot.area);
  const name = `${lot.title}, ${lot.area} м²`;

  return (
    <article className={`lot rv${featured ? ' lot-day' : ''}`}>
      <div className="lot-ph">
        {lot.photos.map((p, i) => (
          <img key={p.img} src={p.img} alt={p.alt} width={1000} height={667} loading="lazy" decoding="async" hidden={i !== cur} />
        ))}
        {featured && (
          <div className="lot-badges">
            <span className="lot-badge">Предложение дня</span>
            <span className="lot-badge hot">Цена ниже рынка</span>
          </div>
        )}
        <div className="lot-thumbs" role="group" aria-label={`Фото: ${name}`}>
          {lot.photos.map((p, i) => (
            <button type="button" key={p.thumb} className={i === cur ? 'on' : ''} onClick={() => setCur(i)} aria-label={p.alt} aria-pressed={i === cur}>
              <img src={p.thumb} alt="" width={360} height={240} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>
      <div className="lot-body">
        <h3 className="disp lot-title">{lot.title}</h3>
        <div className="lot-price num">
          {lot.price}
          <small> млн ₽</small>
        </div>
        <dl className="lot-spec">
          <div>
            <dt>Площадь</dt>
            <dd>{lot.area} м²</dd>
          </div>
          <div>
            <dt>Этаж</dt>
            <dd>{lot.floor}</dd>
          </div>
          <div>
            <dt>За м²</dt>
            <dd>{num(perMeter)} тыс. ₽</dd>
          </div>
          <div>
            <dt>Планировка</dt>
            <dd>{lot.rooms}</dd>
          </div>
        </dl>
        <p className="lot-text">{lot.text}</p>
        <ul className="lot-tags">
          {lot.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a className="btn" href="#lead" onClick={() => setInterest(`Лот: ${name}, ${lot.price} млн ₽`)}>
          Записаться на показ <span className="arr">→</span>
        </a>
      </div>
    </article>
  );
}

export default function Lots() {
  const [day, ...rest] = LOTS;
  return (
    <section className="sec" id="lots">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">В продаже сейчас</p>
            <h2 className="disp h2 rv r2">Апартаменты с ремонтом и видом на море</h2>
          </div>
          <p className="lead rv r3">Готовые лоты с дизайнерской отделкой и мебелью. Можно заехать или сдавать сразу после сделки.</p>
        </div>
        <LotCard lot={day} featured />
        <div className="lots">
          {rest.map((l) => (
            <LotCard lot={l} key={l.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
