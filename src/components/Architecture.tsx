import { ARCH_FACTS, ARCH_PHOTOS, MR_GROUP_LOGO } from '@/lib/content';

export default function Architecture() {
  return (
    <section className="sec" id="arch" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="arch">
          <div>
            <p className="kick rv">Архитектура</p>
            <h2 className="disp h2 rv r2">Проект бюро SPEECH</h2>
            <p className="lead rv r3" style={{ marginTop: 24 }}>
              Каплевидный объем с каскадными террасами на верхних этажах. Внутри атриум, перекрытый стеклянной кровлей на высоте 100 м.
            </p>
            <dl className="arch-facts rv r3">
              {ARCH_FACTS.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
            <div className="devs rv r4">
              <span>Застройщик</span>
              <img src={MR_GROUP_LOGO} alt="MR Group" width={128} height={128} loading="lazy" decoding="async" />
              <span>Архитектура</span>
              <b>SPEECH</b>
            </div>
          </div>
          <div className="arch-media">
            <img className="arch-main rv" data-by-parent src={ARCH_PHOTOS.main.img} alt={ARCH_PHOTOS.main.alt} width={962} height={961} decoding="async" />
            <img className="arch-inset rv r3" src={ARCH_PHOTOS.inset.img} alt={ARCH_PHOTOS.inset.alt} width={640} height={300} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
