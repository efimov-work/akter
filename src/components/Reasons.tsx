import { REASONS } from '@/lib/content';

export default function Reasons() {
  return (
    <section className="sec" id="why">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Инвестиционные аргументы</p>
            <h2 className="disp h2 rv r2">Что получает инвестор</h2>
          </div>
          <p className="lead rv r3">Готовый дом на первой линии с сервисом внутри периметра. Апартамент можно сдавать сразу после сделки.</p>
        </div>
        <div className="reasons">
          {REASONS.map((r, i) => (
            <article className={`reason rv${i ? ` r${i + 1}` : ''}`} key={r.title}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
