'use client';

import { nextPhone } from '@/lib/contact';

type Props = {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  className?: string;
  placeholder?: string;
};

export default function PhoneInput({ value, onChange, id, className, placeholder = '+7 (___) ___-__-__' }: Props) {
  return (
    <input
      id={id}
      className={className}
      name="phone"
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      required
      maxLength={20}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(nextPhone(value, e.target.value))}
    />
  );
}
