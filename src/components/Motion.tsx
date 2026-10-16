'use client';

import { useEffect } from 'react';
import { num } from '@/lib/format';

function count(el: HTMLElement) {
  const end = Number(el.dataset.count);
  const digits = Number(el.dataset.digits) || 0;
  const t0 = performance.now();
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / 2200);
    el.textContent = num(end * (1 - Math.pow(1 - k, 4)), digits);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.lp');
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const vh = window.innerHeight;
    const below = (el: Element) => el.getBoundingClientRect().top >= vh;

    const waiting = new Map<Element, (() => void)[]>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          waiting.get(e.target)?.forEach((fn) => fn());
          waiting.delete(e.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    const wait = (target: Element, fn: () => void) => {
      const list = waiting.get(target);
      if (list) list.push(fn);
      else {
        waiting.set(target, [fn]);
        io.observe(target);
      }
    };

    root.querySelectorAll<HTMLElement>('.rv').forEach((el) => {
      const target = el.hasAttribute('data-by-parent') ? el.parentElement! : el;
      if (below(target)) wait(target, () => el.classList.add('in'));
      else el.classList.add('in');
    });
    root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      if (!below(el)) return;
      el.textContent = num(0, Number(el.dataset.digits) || 0);
      wait(el, () => count(el));
    });
    root.classList.add('ready');

    const html = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y < 1400) html.style.setProperty('--sy', String(Math.round(y)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      root.classList.remove('ready');
    };
  }, []);

  return null;
}
