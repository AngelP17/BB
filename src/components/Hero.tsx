import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Every Child Deserves the Magic of Reading
            </h1>
            <p className="text-xl text-gray-600">
              Distributing as many books as possible to children everywhere so that they can learn to love to read! 🤍
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('get-involved')}
                className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors text-lg font-medium"
              >
                Make a Donation
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-lg font-medium border-2 border-purple-600"
              >
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-purple-600">191</div>
                <div className="text-sm text-gray-600">Stories Shared</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">218</div>
                <div className="text-sm text-gray-600">Supporters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Books Donated</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592106680408-e7e63efbc7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rc3xlbnwxfHx8fDE3Njc2NTEwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Children reading books together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Community Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
