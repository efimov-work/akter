'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { BUDGETS, GOALS } from '@/lib/content';
import { INTEREST_EVENT } from '@/lib/interest';
import { useLead } from '@/lib/useLead';
import PhoneInput from './PhoneInput';

export default function RequestForm() {
  const { status, error, send } = useLead();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [goal, setGoal] = useState(GOALS[0]);
  const [website, setWebsite] = useState('');
  const [interest, setInterest] = useState('');

  useEffect(() => {
    const onInterest = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener(INTEREST_EVENT, onInterest);
    return () => window.removeEventListener(INTEREST_EVENT, onInterest);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send({ name, phone, budget, goal, interest, website });
  };

  if (status === 'success') {
    return (
      <div className="form-done" role="status">
        <b>Заявка отправлена</b>
        <p className="ok">Менеджер свяжется с вами.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-busy={status === 'sending'}>
      {interest ? (
        <p className="form-interest">
          К заявке приложено: <b>{interest}</b>
        </p>
      ) : null}
      <div className="fld">
        <label htmlFor="f-name">Имя</label>
        <input id="f-name" className="inp" type="text" name="name" placeholder="Как к вам обращаться" autoComplete="name" maxLength={200} value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="fld">
        <label htmlFor="f-tel">Телефон</label>
        <PhoneInput id="f-tel" className="inp" placeholder="+7" value={phone} onChange={setPhone} />
      </div>
      <div className="fld">
        <label htmlFor="f-bud">Бюджет</label>
        <select id="f-bud" className="inp" name="budget" value={budget} onChange={(e) => setBudget(e.target.value)}>
          {BUDGETS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="fld">
        <label htmlFor="f-goal">Цель покупки</label>
        <select id="f-goal" className="inp" name="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
          {GOALS.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-site">Сайт</label>
        <input id="f-site" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button className="btn" type="submit" disabled={status === 'sending'} style={{ marginTop: 16, width: '100%' }}>
        {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'} <span className="arr">→</span>
      </button>
      {status === 'error' && error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <span className="form-legal">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</span>
    </form>
  );
}
