import { INFRA } from '@/lib/content';

export default function Infrastructure() {
  return (
    <section className="sec light" id="infra">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Комплекс</p>
            <h2 className="disp h2 rv r2">Инфраструктура для арендатора</h2>
          </div>
          <p className="lead rv r3">Единое здание каплевидной формы с атриумом под стеклянной кровлей на высоте 100 м.</p>
        </div>
        <ul className="infra">
          {INFRA.map((it, i) => (
            <li className="inf rv" key={it.title}>
              <span className="i">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
