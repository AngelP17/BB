import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FounderStory } from './components/FounderStory';
import { Mission } from './components/Mission';
import { Impact } from './components/Impact';
import { Programs } from './components/Programs';
import { Events } from './components/Events';
import { BookRequest } from './components/BookRequest';
import { GetInvolved } from './components/GetInvolved';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp, BookOpen } from 'lucide-react';
import { useLanguage } from './i18n';

// Skip to content link for accessibility
function SkipToContent() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-sunset-orange focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sunset-coral focus:ring-offset-2 transition-all"
    >
      {t('skipToMainContent')}
    </a>
  );
}

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

  const { t } = useLanguage();

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white rounded-full shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      aria-label={t('backToTop')}
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

// Speech bubble component for mascot
function SpeechBubble({ isWaving }: { isWaving: boolean }) {
  const { t } = useLanguage();
  return (
    <div className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-lg whitespace-nowrap transition-all duration-300 ${isWaving ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}>
      <span className="text-sm font-medium text-warm-gray-700">{t('keepReading')}</span>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rotate-45" />
    </div>
  );
}

// Mascot component - appears after scrolling
function Mascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Periodic wave animation
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1000);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed bottom-24 left-6 z-30 transition-all duration-500 hidden lg:block ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
    >
      <div className="relative group cursor-pointer" onClick={() => setIsWaving(true)}>
        {/* Speech bubble */}
        <SpeechBubble isWaving={isWaving} />

        {/* Mascot image */}
        <div className={`w-20 h-20 rounded-full overflow-hidden shadow-xl border-4 border-white transition-transform duration-300 hover:scale-110 ${isWaving ? 'animate-bounce-gentle' : ''
          }`}>
          <img
            src="/images/mascot.JPG"
            alt="Bright Beginnings Books Mascot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-sunset-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-white relative">
      {/* Accessibility: Skip to content link */}
      <SkipToContent />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Background floating books (very subtle) */}
      <FloatingBooks />

      <Header />
      <main id="main-content" className="relative z-10" role="main">
        <Hero />
        <FounderStory />
        <Mission />
        <Impact />
        <Programs />
        <Events />
        <BookRequest />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />

      {/* Back to top button */}
      <BackToTop />

      {/* Mascot - friendly floating character */}
      <Mascot />
    </div>
  );
}
