'use client';

import { useState } from 'react';
import { CALC } from '@/lib/content';
import { money, num, years } from '@/lib/format';
import { setInterest } from '@/lib/interest';

type Key = keyof typeof CALC;

const pct = (k: Key, v: number) => `${(((v - CALC[k].min) / (CALC[k].max - CALC[k].min)) * 100).toFixed(1)}%`;

export default function Calculator() {
  const [v, setV] = useState({ price: CALC.price.value, adr: CALC.adr.value, occ: CALC.occ.value, fee: CALC.fee.value });

  const revenue = (v.adr * 365 * v.occ) / 100;
  const net = revenue * (1 - v.fee / 100);
  const cost = v.price * 1e6;
  const yld = (net / cost) * 100;

  const fields: { key: Key; id: string; label: string; out: string }[] = [
    { key: 'price', id: 'c-price', label: 'Стоимость апартамента', out: `${num(v.price, 1)} млн ₽` },
    { key: 'adr', id: 'c-adr', label: 'Средняя ставка за сутки', out: `${num(v.adr)} ₽` },
    { key: 'occ', id: 'c-occ', label: 'Загрузка за год', out: `${v.occ}%` },
    { key: 'fee', id: 'c-fee', label: 'Расходы и вознаграждение УК', out: `${v.fee}% выручки` }
  ];

  const rows = [
    ['Выручка за год', money(revenue)],
    ['Чистый доход за год', money(net)],
    ['Чистый доход в месяц', money(net / 12)],
    ['Срок окупаемости', net > 0 ? years(cost / net) : '']
  ];

  const ask = () =>
    setInterest(
      `Расчет: ${fields.map((f) => `${f.label.toLowerCase()} ${f.out}`).join(', ')}; доходность ${num(yld, 1)}%`
    );

  return (
    <section className="sec light" id="calc">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Модель доходности</p>
            <h2 className="disp h2 rv r2">Рассчитайте доход от посуточной аренды</h2>
          </div>
          <p className="lead rv r3">Двигайте параметры, расчет обновляется сразу. Точную модель по конкретному лоту готовит менеджер.</p>
        </div>
        <div className="calc">
          <div className="rv">
            {fields.map((f) => (
              <div className="field" key={f.key}>
                <div className="field-top">
                  <label htmlFor={f.id}>{f.label}</label>
                  <output className="num" htmlFor={f.id}>
                    {f.out}
                  </output>
                </div>
                <input
                  id={f.id}
                  className="rng"
                  type="range"
                  min={CALC[f.key].min}
                  max={CALC[f.key].max}
                  step={CALC[f.key].step}
                  value={v[f.key]}
                  aria-valuetext={f.out}
                  onChange={(e) => setV((s) => ({ ...s, [f.key]: Number(e.target.value) }))}
                  style={{ ['--p' as string]: pct(f.key, v[f.key]) }}
                />
              </div>
            ))}
            <p className="note">
              Параметры по умолчанию условные и не являются гарантией дохода. Стоимость по умолчанию равна средней цене лота по данным ЦИАН.
            </p>
          </div>
          <div className="result rv r2" aria-live="polite">
            <div className="res-cap">Доходность годовых</div>
            <div className="res-big">{num(yld, 1)}%</div>
            <dl className="res-list">
              {rows.map(([k, val]) => (
                <div className="res-row" key={k}>
                  <dt>{k}</dt>
                  <dd>{val}</dd>
                </div>
              ))}
            </dl>
            <a className="btn" href="#lead" onClick={ask} style={{ marginTop: 28, width: '100%' }}>
              Получить расчет по лоту <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
