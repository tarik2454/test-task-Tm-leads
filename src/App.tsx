import Footer from './modules/footer/Footer';
import Header from './modules/header/Header';

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="h-screen">
        <h2>Добро пожаловать!</h2>
      </main>

      <Footer />
    </div>
  );
}
