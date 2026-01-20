import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Impact } from './components/Impact';
import { Programs } from './components/Programs';
import { GetInvolved } from './components/GetInvolved';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <Programs />
        <GetInvolved />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
