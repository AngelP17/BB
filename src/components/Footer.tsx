import { useState } from 'react';
import { Instagram, Facebook, Mail, Heart, ArrowRight, MapPin, Send } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const quickLinks = [
    { label: 'Our Story', id: 'about' },
    { label: 'Mission', id: 'mission' },
    { label: 'Programs', id: 'programs' },
    { label: 'Impact', id: 'impact' },
    { label: 'Get Involved', id: 'get-involved' },
    { label: 'Request Books', id: 'book-request' },
  ];

  const supportLinks = [
    { label: 'Donate', id: 'get-involved' },
    { label: 'Volunteer', id: 'get-involved' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-warm-gray-800 to-warm-gray-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sunset-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sunset-coral/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-golden-yellow/5 rounded-full blur-3xl" />

      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-sunset-orange via-sunset-coral to-sunset-pink rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Stay Connected
                </h3>
                <p className="text-white/90">
                  Get updates on our book drives, events, and impact stories delivered to your inbox.
                </p>
              </div>

              <div>
                {subscribed ? (
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <p className="text-white font-semibold">Thanks for subscribing!</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-4 bg-white text-sunset-orange rounded-xl font-semibold hover:bg-golden-yellow hover:text-warm-gray-900 transition-all duration-300 flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span className="hidden sm:inline">Subscribe</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform border-2 border-sunset-orange/30">
                <img
                  src="/images/BrightBeginningsLogo.jpeg"
                  alt="Bright Beginnings Books Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-xl font-bold text-white block">Bright Beginnings</span>
                <span className="text-sm text-sunset-orange/80">Books for Every Child</span>
              </div>
            </button>

            <p className="text-warm-gray-300 mb-6 leading-relaxed max-w-md">
              Spreading the love of reading all over the state and around the world by providing access and creating enthusiasm for books.
            </p>

            {/* Social Links & Mascot */}
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-11 h-11 bg-sunset-orange/20 rounded-xl flex items-center justify-center hover:bg-sunset-orange transition-all duration-300 border border-sunset-orange/30"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 bg-sunset-orange/20 rounded-xl flex items-center justify-center hover:bg-sunset-orange transition-all duration-300 border border-sunset-orange/30"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@brightbeginningsbooks.org"
                  className="w-11 h-11 bg-sunset-orange/20 rounded-xl flex items-center justify-center hover:bg-sunset-orange transition-all duration-300 border border-sunset-orange/30"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Mascot */}
              <div className="ml-4 flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-golden-yellow shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <img
                    src="/images/mascot.JPG"
                    alt="Bright Beginnings Books Mascot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-golden-yellow font-medium hidden sm:block">Our Mascot!</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sunset-orange mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-warm-gray-300 hover:text-golden-yellow transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-sunset-orange" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sunset-orange mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-warm-gray-300 hover:text-golden-yellow transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-sunset-orange" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Address */}
            <div className="mt-8 pt-6 border-t border-sunset-orange/20">
              <div className="flex items-start gap-3 text-warm-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-sunset-orange" />
                <div className="text-sm">
                  <p>505 Yorkshire Cove</p>
                  <p>Harrison, AR 72601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-sunset-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Bright Beginnings Books. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-warm-gray-400 text-sm">
              <span className="text-sunset-orange font-medium">501(c)(3) Nonprofit</span>
              <span className="text-sunset-orange/50">|</span>
              <span>EIN: 86-2430919</span>
            </div>

            <div className="flex items-center gap-2 text-warm-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-sunset-coral animate-pulse" fill="currentColor" />
              <span>in Harrison, AR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
