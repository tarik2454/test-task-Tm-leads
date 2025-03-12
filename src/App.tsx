import Footer from './modules/footer/Footer';
import Header from './modules/header/Header';
import Hero from './modules/hero/Hero';
import PastDeals from './modules/pastDeals/pastDeals';

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="">
        <Hero />
        <PastDeals />
      </main>

      <Footer />
    </div>
  );
}
