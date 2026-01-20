import { useState } from 'react';
import { BookOpen, Instagram, Facebook, Mail, Heart, ArrowRight, MapPin, Send } from 'lucide-react';

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
    <footer className="relative bg-gradient-to-b from-warm-gray-900 to-warm-gray-950 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

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
              <div className="w-12 h-12 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="text-xl font-bold text-white block">Bright Beginnings</span>
                <span className="text-sm text-warm-gray-400">Books for Every Child</span>
              </div>
            </button>

            <p className="text-warm-gray-400 mb-6 leading-relaxed max-w-md">
              Spreading the love of reading all over the state and around the world by providing access and creating enthusiasm for books.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sunset-orange transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sunset-orange transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@brightbeginningsbooks.org"
                className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-sunset-orange transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-warm-gray-400 hover:text-sunset-orange transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-warm-gray-400 hover:text-sunset-orange transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Address */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3 text-warm-gray-400">
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
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Bright Beginnings Books. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-warm-gray-500 text-sm">
              <span>501(c)(3) Nonprofit</span>
              <span>|</span>
              <span>EIN: 86-2430919</span>
            </div>

            <div className="flex items-center gap-2 text-warm-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-sunset-coral" fill="currentColor" />
              <span>in Harrison, AR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
