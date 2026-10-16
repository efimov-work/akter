import { num } from '@/lib/format';
import { STATS } from '@/lib/content';

export default function Numbers() {
  return (
    <section className="sec light" id="numbers">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Рыночные показатели</p>
            <h2 className="disp h2 rv r2">Объект в цифрах</h2>
          </div>
          <p className="lead rv r3">Данные по вторичному рынку комплекса на сентябрь 2026 года. Дом введен в эксплуатацию, сделки проходят по ДКП.</p>
        </div>
        <div className="nums">
          {STATS.map((s) => (
            <div className="ncell rv" key={s.label}>
              <div className="v">
                <span data-count={s.value} data-digits={s.digits}>
                  {num(s.value, s.digits)}
                </span>
                <span className="u">{s.unit}</span>
              </div>
              <p>{s.label}</p>
              <small>{s.src}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
