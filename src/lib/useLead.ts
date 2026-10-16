'use client';

import { useCallback, useState } from 'react';
import { asset } from './asset';
import { isPhone } from './contact';
import { CONTACTS } from './content';
import { reachGoal } from './metrika';

function callUs(): string {
  return CONTACTS.phone ? ` Позвоните нам: ${CONTACTS.phone}` : ' Попробуйте еще раз чуть позже.';
}

export type LeadStatus = 'idle' | 'sending' | 'success' | 'error';

export type LeadFields = {
  phone: string;
  name?: string;
  budget?: string;
  goal?: string;
  interest?: string;
  website?: string;
};

export function useLead() {
  const [status, setStatus] = useState<LeadStatus>('idle');
  const [error, setError] = useState('');

  const send = useCallback(
    async (fields: LeadFields): Promise<boolean> => {
      if (status === 'sending') return false;

      if (!isPhone(fields.phone)) {
        setError('Укажите номер телефона полностью');
        setStatus('error');
        return false;
      }

      setError('');
      setStatus('sending');
      try {
        const res = await fetch(asset('/api/lead'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields)
        });
        if (res.status === 429) {
          setError(`Слишком много заявок с этого номера.${callUs()}`);
          setStatus('error');
          return false;
        }
        if (!res.ok) throw new Error('request failed');
        setStatus('success');
        reachGoal('lead');
        return true;
      } catch {
        setError(`Не удалось отправить заявку.${callUs()}`);
        setStatus('error');
        return false;
      }
    },
    [status]
  );

  return { status, error, send };
}
