import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FounderStory } from './components/FounderStory';
import { Mission } from './components/Mission';
import { Impact } from './components/Impact';
import { Programs } from './components/Programs';
import { BookRequest } from './components/BookRequest';
import { GetInvolved } from './components/GetInvolved';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-white">
      <Header />
      <main>
        <Hero />
        <FounderStory />
        <Mission />
        <Impact />
        <Programs />
        <BookRequest />
        <Testimonials />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
