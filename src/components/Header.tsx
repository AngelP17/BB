import { BookHeart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <BookHeart className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-semibold text-gray-900">Bright Beginnings Books</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Mission
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Impact
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Programs
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Get Involved
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('get-involved')}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                Mission
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                Impact
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                Programs
              </button>
              <button onClick={() => scrollToSection('get-involved')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                Get Involved
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('get-involved')}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-center"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
