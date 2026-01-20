import { BookHeart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookHeart className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-semibold">Bright Beginnings Books</span>
            </div>
            <p className="text-gray-400 mb-4">
              Distributing as many books as possible to children everywhere so that they can learn to love to read! 🤍
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('mission')} className="hover:text-white transition-colors">
                  Mission
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('impact')} className="hover:text-white transition-colors">
                  Impact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('get-involved')} className="hover:text-white transition-colors">
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@brightbeginningsbooks.org</li>
              <li>(555) 123-4567</li>
              <li className="pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Send us a message →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bright Beginnings Books. All rights reserved. | Nonprofit Organization</p>
        </div>
      </div>
    </footer>
  );
}
