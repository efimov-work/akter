export function num(n: number, digits = 0): string {
  return n.toLocaleString('ru-RU', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function money(n: number): string {
  return n >= 1e6 ? `${num(n / 1e6, 2)} млн ₽` : `${num(Math.round(n / 1000) * 1000)} ₽`;
}

export function years(v: number): string {
  const n = Math.round(v * 10) / 10;
  if (n % 1) return `${num(n, 1)} года`;
  const h = n % 100;
  const m = n % 10;
  return `${n} ${h > 10 && h < 20 ? 'лет' : m === 1 ? 'год' : m > 1 && m < 5 ? 'года' : 'лет'}`;
}
