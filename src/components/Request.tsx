import { COMPLEX, CONTACTS } from '@/lib/content';
import RequestForm from './RequestForm';

export default function Request() {
  return (
    <section className="sec" id="lead">
      <div className="wrap">
        <div className="formgrid">
          <div>
            <p className="kick rv">Заявка</p>
            <h2 className="disp h2 rv r2">Получите расчет по свободным лотам</h2>
            <p className="lead rv r3" style={{ marginTop: 24 }}>
              Подборка апартаментов под бюджет, модель доходности и условия доверительного управления.
            </p>
            <dl className="contacts rv r4">
              {CONTACTS.phone ? (
                <div className="contact">
                  <dt>Телефон</dt>
                  <dd>
                    <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                  </dd>
                </div>
              ) : null}
              {CONTACTS.email ? (
                <div className="contact">
                  <dt>Почта</dt>
                  <dd>
                    <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
                  </dd>
                </div>
              ) : null}
              <div className="contact">
                <dt>Адрес</dt>
                <dd>
                  {COMPLEX.locality}, {COMPLEX.street}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rv r2">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
}
