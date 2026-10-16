import { COMPLEX } from '@/lib/content';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <span>
          <LogoMark />
          {COMPLEX.name} · {COMPLEX.locality}, {COMPLEX.street} · Застройщик {COMPLEX.developer} · Архитектура {COMPLEX.architect}
        </span>
        <p>Ценовые данные: ЦИАН, сентябрь 2026. Расчеты носят информационный характер, не являются публичной офертой и не гарантируют доход.</p>
      </div>
    </footer>
  );
}
