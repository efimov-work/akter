import { COMPLEX, DISTANCES, MAP_LINKS, NEARBY } from '@/lib/content';
import MapSpots from './MapSpots';

export default function Location() {
  return (
    <section className="sec" id="location">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kick rv">Расположение</p>
            <h2 className="disp h2 rv r2">Приморье, центральный Сочи</h2>
          </div>
          <p className="lead rv r3">Курортный проспект, между центром города и Мацестой. Время в пути на автомобиле.</p>
        </div>
        <MapSpots />
        <div className="loc">
          <div>
            <dl className="dist">
              {DISTANCES.map((d) => (
                <div className="drow rv" key={d.name}>
                  <dt className="nm">{d.name}</dt>
                  <dd className="bar" aria-hidden="true">
                    <i style={{ width: d.width }} />
                  </dd>
                  <dd className="t">{d.time}</dd>
                </div>
              ))}
            </dl>
            <ul className="near rv" aria-label="Рядом">
              {NEARBY.map((n) => (
                <li className="chip" key={n}>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="rv r2">
            <p className="addr-cap">Адрес</p>
            <address className="disp addr">{COMPLEX.street}</address>
            <p className="addr-cap num" style={{ margin: 0 }}>
              {COMPLEX.lat}, {COMPLEX.lng}
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <a className="btn sm" href={MAP_LINKS.yandex} target="_blank" rel="noopener">
                Яндекс Карты <span className="arr">↗</span>
              </a>
              <a className="btn sm ghost" href={MAP_LINKS.gis} target="_blank" rel="noopener">
                2ГИС <span className="arr">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
