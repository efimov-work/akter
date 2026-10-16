'use client';

import { useState } from 'react';
import { PLAN_SPECS, PLANS } from '@/lib/content';
import { setInterest } from '@/lib/interest';

export default function Plans() {
  const [plan, setPlan] = useState(0);
  const cur = PLANS[plan];

  return (
    <section className="sec light" id="plans">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Планировки</p>
            <h2 className="disp h2 rv r2">Апартаменты от 35 до 500 м²</h2>
          </div>
          <p className="lead rv r3">Свободная планировка, вид на море из всех апартаментов. На верхних этажах пентхаусы с террасами.</p>
        </div>
        <div className="tabs rv" role="tablist" aria-label="Планировки">
          {PLANS.map((p, i) => (
            <button
              type="button"
              key={p.label}
              id={`plan-tab-${i}`}
              className={i === plan ? 'tab on' : 'tab'}
              role="tab"
              aria-selected={i === plan}
              aria-controls="plan-panel"
              onClick={() => setPlan(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="plan rv" id="plan-panel" role="tabpanel" aria-labelledby={`plan-tab-${plan}`}>
          <figure className="plan-img">
            {PLANS.map((p, i) => (
              <img key={p.img} src={p.img} alt={p.alt} width={672} height={672} loading="lazy" decoding="async" hidden={i !== plan} />
            ))}
          </figure>
          <div>
            <div className="plan-area num" key={cur.area}>
              {cur.area}
              <small>м²</small>
            </div>
            <dl className="spec" key={`spec-${cur.area}`}>
              <div className="spec-row">
                <dt>Тип</dt>
                <dd>{cur.type}</dd>
              </div>
              {PLAN_SPECS.map(([k, v]) => (
                <div className="spec-row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <a className="btn dark" href="#lead" onClick={() => setInterest(`Планировка: ${cur.label}`)} style={{ marginTop: 32 }}>
              Запросить цену <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
