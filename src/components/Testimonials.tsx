import { useState, useRef, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MessageCircle, Play, Pause } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Auto-advance hook
function useAutoAdvance(
  callback: () => void,
  interval: number,
  isPaused: boolean
) {
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(callback, interval);
    return () => clearInterval(timer);
  }, [callback, interval, isPaused]);
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Thanks to Bright Beginnings Books, my daughter now has her own collection of books. She reads every night before bed and her confidence has grown so much! The books are always in perfect condition and age-appropriate.",
      author: "Sarah Martinez",
      role: "Parent",
      location: "Harrison, AR",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      color: "from-sunset-orange to-sunset-coral",
      rating: 5,
    },
    {
      quote: "The book drive at our school was incredible. Every child got to choose books they were excited about. The team was so organized and made it feel like a special celebration of reading.",
      author: "Michael Chen",
      role: "Elementary School Teacher",
      location: "Little Rock, AR",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      color: "from-sky-blue to-ocean-teal",
      rating: 5,
    },
    {
      quote: "Volunteering with Bright Beginnings Books has been so rewarding. Seeing children's faces light up when they receive books is priceless. It's amazing what one student started!",
      author: "Emily Johnson",
      role: "Volunteer",
      location: "Fayetteville, AR",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      color: "from-sunset-pink to-mountain-purple",
      rating: 5,
    },
    {
      quote: "As a librarian, I've seen firsthand how these books transform children's relationship with reading. Bright Beginnings Books is doing incredible work for literacy in our community.",
      author: "Patricia Williams",
      role: "School Librarian",
      location: "Bentonville, AR",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      color: "from-forest-green to-ocean-teal",
      rating: 5,
    },
    {
      quote: "We received books for our after-school program and the kids were thrilled! Many of them had never owned a book before. This organization is changing lives.",
      author: "Robert Davis",
      role: "Youth Program Director",
      location: "Hot Springs, AR",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150",
      color: "from-golden-yellow to-warm-amber",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance every 6 seconds
  useAutoAdvance(nextTestimonial, 6000, isPaused);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-warm-gray-50">
      {/* Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-warm-gray-900/5 mb-6">
            <MessageCircle className="w-4 h-4 text-sunset-orange" />
            <span className="text-sm font-semibold text-warm-gray-700">Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
            Stories from Our{' '}
            <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Hear from the families, educators, and volunteers who are part of our mission to spread the love of reading.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className="max-w-4xl mx-auto mb-16"
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-warm-gray-900/10 overflow-hidden">
            {/* Animated Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className={`w-14 h-14 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 ${isAnimating ? 'scale-90 rotate-12' : 'scale-100 rotate-0'}`}>
                <Quote className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${testimonials[activeIndex].color} opacity-5 rounded-full blur-3xl transition-all duration-1000`} />

            {/* Quote */}
            <div className="pt-6 relative">
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <p className="text-xl md:text-2xl text-warm-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  {/* Author with Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-full blur-sm opacity-50`} />
                      <ImageWithFallback
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].author}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-warm-gray-900">{testimonials[activeIndex].author}</div>
                      <div className="text-sm text-warm-gray-500">{testimonials[activeIndex].role}</div>
                      <div className="text-sm text-warm-gray-400">{testimonials[activeIndex].location}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-golden-yellow transition-all duration-300"
                        fill="currentColor"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              {/* Play/Pause button */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-10 h-10 bg-warm-gray-100 rounded-full flex items-center justify-center hover:bg-warm-gray-200 transition-all duration-300"
                aria-label={isPaused ? 'Play' : 'Pause'}
              >
                {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-warm-gray-100 rounded-full flex items-center justify-center hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-warm-gray-100 rounded-full flex items-center justify-center hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Dots with animation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: index === activeIndex ? '32px' : '8px' }}
                >
                  <div className={`absolute inset-0 ${index === activeIndex ? 'bg-sunset-orange' : 'bg-warm-gray-300 hover:bg-warm-gray-400'}`} />
                  {index === activeIndex && !isPaused && (
                    <div
                      className="absolute inset-0 bg-sunset-coral origin-left"
                      style={{
                        animation: 'progress 6s linear infinite',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mini Cards with Avatars */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`bg-white rounded-2xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === activeIndex ? 'ring-2 ring-sunset-orange scale-105' : ''
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-warm-gray-900 text-sm truncate">{testimonial.author}</div>
                  <div className="text-xs text-warm-gray-500 truncate">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-golden-yellow" fill="currentColor" />
                ))}
              </div>
              <p className="text-warm-gray-600 text-xs leading-relaxed line-clamp-2">
                "{testimonial.quote.slice(0, 60)}..."
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
