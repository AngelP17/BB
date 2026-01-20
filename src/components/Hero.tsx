import { useState, useEffect, useRef } from 'react';
import { Heart, BookOpen, Users, Globe, ArrowDown, Sparkles, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: BookOpen, value: 55000, suffix: '+', label: 'Books Distributed', color: 'text-sunset-orange' },
    { icon: Globe, value: 50, suffix: '+', label: 'States Reached', color: 'text-sky-blue' },
    { icon: Users, value: 13000, suffix: '+', label: 'Children Helped', color: 'text-forest-green' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="blob blob-orange w-[600px] h-[600px] -top-40 -left-40 animate-float-slow" />
        <div className="blob blob-pink w-[500px] h-[500px] top-1/2 -right-40 animate-float-slow animation-delay-200" />
        <div className="blob blob-yellow w-[400px] h-[400px] bottom-0 left-1/3 animate-float-slow animation-delay-400" />

        {/* Floating Books Decoration */}
        <div className="absolute top-32 right-[15%] animate-float animation-delay-100">
          <div className="w-16 h-20 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-lg shadow-xl rotate-12 opacity-20" />
        </div>
        <div className="absolute bottom-40 left-[10%] animate-float animation-delay-300">
          <div className="w-12 h-16 bg-gradient-to-br from-sky-blue to-ocean-teal rounded-lg shadow-xl -rotate-6 opacity-20" />
        </div>
        <div className="absolute top-1/2 left-[5%] animate-float animation-delay-500">
          <div className="w-10 h-14 bg-gradient-to-br from-golden-yellow to-warm-amber rounded-lg shadow-xl rotate-3 opacity-15" />
        </div>

        {/* Sparkle Elements */}
        <Star className="absolute top-[20%] right-[25%] w-4 h-4 text-golden-yellow animate-sparkle" fill="currentColor" />
        <Star className="absolute top-[60%] right-[10%] w-3 h-3 text-sunset-orange animate-sparkle animation-delay-200" fill="currentColor" />
        <Star className="absolute bottom-[30%] left-[20%] w-5 h-5 text-sunset-pink animate-sparkle animation-delay-400" fill="currentColor" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-sunset-orange/10 animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-green"></span>
              </span>
              <span className="text-sm font-medium text-warm-gray-700">501(c)(3) Nonprofit Organization</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 animate-fade-in-up animation-delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-gray-900 leading-[1.1]">
                Every Child Deserves the{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Magic</span>
                  <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-golden-yellow animate-sparkle" />
                </span>{' '}
                of Reading
              </h1>
              <p className="text-lg sm:text-xl text-warm-gray-600 max-w-lg leading-relaxed">
                Founded by a student with a dream, Bright Beginnings Books has distributed over{' '}
                <span className="font-semibold text-sunset-orange">55,000 books</span> to children across all 50 states and beyond.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <button
                onClick={() => scrollToSection('get-involved')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white rounded-full font-semibold text-lg shadow-xl shadow-sunset-orange/25 hover:shadow-2xl hover:shadow-sunset-orange/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Make a Donation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-coral to-sunset-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-warm-gray-800 rounded-full font-semibold text-lg border-2 border-warm-gray-200 hover:border-sunset-orange hover:text-sunset-orange shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Our Story
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up animation-delay-300">
              {stats.map((stat, index) => {
                const { count, ref } = useCountUp(stat.value, 2500);
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    ref={ref}
                    className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 ${stat.color} bg-current/10 rounded-xl mb-2`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className={`text-2xl sm:text-3xl font-bold ${stat.color} stat-number`}>
                      {count.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-xs sm:text-sm text-warm-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-fade-in-up animation-delay-400">
            {/* Main Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-warm-gray-900/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Children reading books together"
                  className="w-full h-[500px] object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-gray-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card - Impact */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-green to-ocean-teal rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warm-gray-900">50+</div>
                    <div className="text-sm text-warm-gray-500">States Reached</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Books */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-float animation-delay-200 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-warm-gray-900">55K+</div>
                    <div className="text-xs text-warm-gray-500">Books Given</div>
                  </div>
                </div>
              </div>

              {/* Decorative Ring */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-sunset-orange/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-warm-gray-500 hover:text-sunset-orange transition-colors"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
