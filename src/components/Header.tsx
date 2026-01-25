import { BookOpen, Menu, X, Heart, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const scrollY = lastScrollY;
      setScrolled(scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'mission', 'impact', 'programs', 'get-involved', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: t('ourStory') },
    { id: 'mission', label: t('mission') },
    { id: 'impact', label: t('impact') },
    { id: 'programs', label: t('programs') },
    { id: 'get-involved', label: t('getInvolved') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass shadow-lg shadow-warm-gray-900/5'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-sunset-orange/20 group-hover:shadow-xl group-hover:shadow-sunset-orange/30 transition-all duration-300 group-hover:scale-105">
                <img
                  src="/images/BrightBeginningsLogo.jpeg"
                  alt="Bright Beginnings Books Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-golden-yellow rounded-full flex items-center justify-center animate-bounce-gentle">
                <Heart className="w-2.5 h-2.5 text-warm-gray-800" fill="currentColor" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-warm-gray-900 group-hover:text-sunset-orange transition-colors">
                Bright Beginnings
              </span>
              <span className="block text-xs text-warm-gray-500 font-medium tracking-wide uppercase">
                {t('booksForEveryChild')}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === item.id
                  ? 'text-sunset-orange'
                  : 'text-warm-gray-600 hover:text-sunset-orange'
                  }`}
              >
                {item.label}
                {/* Sliding underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sunset-orange to-sunset-coral rounded-full transition-all duration-300 ease-out ${activeSection === item.id
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                    }`}
                />
              </button>
            ))}

            <div className="ml-4 flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 text-sm font-medium text-warm-gray-700 hover:text-sunset-orange transition-colors"
              >
                {t('contact')}
              </button>
              <button
                onClick={() => scrollToSection('get-involved')}
                className="group relative px-6 py-2.5 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white rounded-full font-semibold text-sm shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:shadow-sunset-orange/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {t('donateNow')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-coral to-sunset-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-warm-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block w-6 h-0.5 bg-warm-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
              <span className={`absolute left-0 top-3 block w-6 h-0.5 bg-warm-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block w-6 h-0.5 bg-warm-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center justify-between group ${activeSection === item.id
                  ? 'bg-sunset-orange/10 text-sunset-orange'
                  : 'text-warm-gray-700 hover:bg-warm-gray-100'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <ChevronDown className={`w-4 h-4 -rotate-90 transition-transform group-hover:translate-x-1 ${activeSection === item.id ? 'text-sunset-orange' : 'text-warm-gray-400'
                  }`} />
              </button>
            ))}

            <div className="pt-4 space-y-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-3 rounded-xl text-base font-medium text-warm-gray-700 hover:bg-warm-gray-100 transition-colors text-left"
              >
                {t('contactUsButton')}
              </button>
              <button
                onClick={() => scrollToSection('get-involved')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-sunset-orange/25"
              >
                <Heart className="w-5 h-5" />
                {t('makeADonationMobile')}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
