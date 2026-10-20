import Architecture from '@/components/Architecture';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Infrastructure from '@/components/Infrastructure';
import Location from '@/components/Location';
import Lots from '@/components/Lots';
import Motion from '@/components/Motion';
import Numbers from '@/components/Numbers';
import Plans from '@/components/Plans';
import Reasons from '@/components/Reasons';
import Request from '@/components/Request';

export default function Page() {
  return (
    <div className="lp">
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Reasons />
        <Lots />
        <Architecture />
        <Calculator />
        <Location />
        <Infrastructure />
        <Gallery />
        <Plans />
        <Request />
      </main>
      <Footer />
      <Motion />
    </div>
  );
}
