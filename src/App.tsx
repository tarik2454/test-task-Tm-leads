import Figures from './modules/figures/Figures';
import Footer from './modules/footer/Footer';
import FrequentQuestions from './modules/frequentQuestions/FrequentQuestions';
import Header from './modules/header/Header';
import Hero from './modules/hero/Hero';
import PastDeals from './modules/pastDeals/PastDeals';

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="">
        <Hero />
        <Figures />
        <PastDeals />
        <FrequentQuestions />
      </main>

      <Footer />
    </div>
  );
}
