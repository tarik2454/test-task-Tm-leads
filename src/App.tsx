import About from './modules/about/About';
import Figures from './modules/figures/Figures';
import Footer from './modules/footer/Footer';
import FrequentQuestions from './modules/frequentQuestions/FrequentQuestions';
import Header from './modules/header/Header';
import Hero from './modules/hero/Hero';
// import PastDeals from './modules/pastDeals/PastDeals';
import Tariffs from './modules/tariffs/Tariffs';

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="overflow-x-hidden">
        <Hero />
        <Figures />
        {/* <PastDeals /> */}
        <About />
        <Tariffs />
        <FrequentQuestions />
      </main>

      <Footer />
    </div>
  );
}
