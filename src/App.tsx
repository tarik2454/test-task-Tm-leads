import Footer from './modules/footer/Footer';
import Header from './modules/header/Header';
import Hero from './modules/hero/Hero';

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="h-screen">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
