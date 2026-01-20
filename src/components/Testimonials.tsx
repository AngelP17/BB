import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Thanks to Bright Beginnings Books, my daughter now has her own collection of books. She reads every night before bed and her confidence has grown so much! The books are always in perfect condition and age-appropriate.",
      author: "Sarah Martinez",
      role: "Parent",
      location: "Harrison, AR",
      avatar: "SM",
      color: "from-sunset-orange to-sunset-coral",
      rating: 5,
    },
    {
      quote: "The book drive at our school was incredible. Every child got to choose books they were excited about. The team was so organized and made it feel like a special celebration of reading.",
      author: "Michael Chen",
      role: "Elementary School Teacher",
      location: "Little Rock, AR",
      avatar: "MC",
      color: "from-sky-blue to-ocean-teal",
      rating: 5,
    },
    {
      quote: "Volunteering with Bright Beginnings Books has been so rewarding. Seeing children's faces light up when they receive books is priceless. It's amazing what one student started!",
      author: "Emily Johnson",
      role: "Volunteer",
      location: "Fayetteville, AR",
      avatar: "EJ",
      color: "from-sunset-pink to-mountain-purple",
      rating: 5,
    },
    {
      quote: "As a librarian, I've seen firsthand how these books transform children's relationship with reading. Bright Beginnings Books is doing incredible work for literacy in our community.",
      author: "Patricia Williams",
      role: "School Librarian",
      location: "Bentonville, AR",
      avatar: "PW",
      color: "from-forest-green to-ocean-teal",
      rating: 5,
    },
    {
      quote: "We received books for our after-school program and the kids were thrilled! Many of them had never owned a book before. This organization is changing lives.",
      author: "Robert Davis",
      role: "Youth Program Director",
      location: "Hot Springs, AR",
      avatar: "RD",
      color: "from-golden-yellow to-warm-amber",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-warm-gray-900/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className={`w-12 h-12 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Quote */}
            <div className="pt-4">
              <p className="text-xl md:text-2xl text-warm-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonials[activeIndex].avatar}
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
                    <Star key={i} className="w-5 h-5 text-golden-yellow" fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
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

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-sunset-orange' : 'bg-warm-gray-300 hover:bg-warm-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === activeIndex ? 'ring-2 ring-sunset-orange' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-warm-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-xs text-warm-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-warm-gray-600 text-sm leading-relaxed line-clamp-3">
                "{testimonial.quote.slice(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
