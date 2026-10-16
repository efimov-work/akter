'use client';

import { useEffect, useState } from 'react';
import { NAV } from '@/lib/content';
import LogoMark from './LogoMark';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' sc' : ''}`}>
      <div className="wrap nav-in">
        <a className="logo" href="#top" aria-label="Актер Гэлакси, в начало страницы">
          <LogoMark width={45} height={24} />
          Актер Гэлакси
        </a>
        <nav className="links" aria-label="Разделы">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn sm" href="#lead">
          Запросить расчёт
        </a>
      </div>
    </header>
  );
}
