import { useState, useEffect } from 'react';
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
import { ArrowUp, BookOpen } from 'lucide-react';

// Scroll progress indicator component
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-warm-gray-200/50">
      <div
        className="h-full bg-gradient-to-r from-sunset-orange via-sunset-coral to-sunset-pink transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Back to top button
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white rounded-full shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

// Floating book animation
function FloatingBooks() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-slow opacity-5"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + i}s`,
          }}
        >
          <BookOpen className="w-16 h-16 text-sunset-orange" />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-white relative">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Background floating books (very subtle) */}
      <FloatingBooks />

      <Header />
      <main className="relative z-10">
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

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}
