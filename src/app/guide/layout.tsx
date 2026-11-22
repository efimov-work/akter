import Link from 'next/link';
import Footer from '@/components/Footer';
import LogoMark from '@/components/LogoMark';
import { GUIDE_PATH } from '@/lib/guide';
import './guide.css';

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lp guide">
      <header className="guide-header">
        <div className="wrap guide-header-inner">
          <Link className="logo" href="/">
            <LogoMark width={45} height={24} />
            Актер Гэлакси
          </Link>
          <nav aria-label="Навигация по сайту">
            <Link href="/">На главную</Link>
            <Link href={GUIDE_PATH}>Гид</Link>
          </nav>
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}
