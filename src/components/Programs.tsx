import { useState, useEffect, useRef } from 'react';
import { BookMarked, Home, School, Gift, TreePine, Calendar, Users, Shield, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Scroll reveal hook
function useScrollReveal(threshold: number = 0.2) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, ref };
}

export function Programs() {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [activeSpecial, setActiveSpecial] = useState(0);
  const { isVisible: headerVisible, ref: headerRef } = useScrollReveal(0.3);
  const { isVisible: programsVisible, ref: programsRef } = useScrollReveal(0.2);
  const { isVisible: specialVisible, ref: specialRef } = useScrollReveal(0.3);

  const programs = [
    {
      icon: School,
      title: 'School Book Drives',
      description: 'We partner with local schools to ensure every classroom has a diverse, engaging library that inspires young readers and supports teachers.',
      color: 'from-sky-blue to-ocean-teal',
      bgColor: 'bg-sky-blue/10',
      iconColor: 'text-sky-blue',
      features: ['Classroom libraries', 'Teacher resources', 'Reading corners'],
      impact: '200+ Schools',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
    {
      icon: Home,
      title: 'Home Libraries',
      description: 'Building personal libraries for families by providing book collections that children can call their own and treasure forever.',
      color: 'from-sunset-orange to-sunset-coral',
      bgColor: 'bg-sunset-orange/10',
      iconColor: 'text-sunset-orange',
      features: ['Family book sets', 'Age-appropriate selections', 'Reading guides'],
      impact: '5,000+ Homes',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
    {
      icon: BookMarked,
      title: 'Reading Programs',
      description: 'Interactive reading sessions and literacy programs that help children develop a lifelong love of reading through fun activities.',
      color: 'from-sunset-pink to-mountain-purple',
      bgColor: 'bg-sunset-pink/10',
      iconColor: 'text-sunset-pink',
      features: ['Reading in the Park', 'Story time events', 'Literacy workshops'],
      impact: '100+ Events',
      image: 'https://images.unsplash.com/photo-1529390079861-591f6a5c2dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
    {
      icon: Gift,
      title: 'Book Giveaways',
      description: 'Community events where children can select their own books to take home, making reading a personal and exciting experience.',
      color: 'from-forest-green to-ocean-teal',
      bgColor: 'bg-forest-green/10',
      iconColor: 'text-forest-green',
      features: ['Holiday events', 'Community fairs', 'School visits'],
      impact: '55,000+ Books',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    },
  ];

  const specialPrograms = [
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Working with Arkansas State Police to provide comfort books for children in crisis situations. These books offer solace during difficult times.',
      image: '/images/children_learning_books.png',
      stat: '1,000+',
      statLabel: 'Children comforted',
    },
    {
      icon: Calendar,
      title: 'Christmas Giveaway',
      description: 'Annual holiday events where volunteers help children select free books as special gifts. A magical experience for families in need.',
      image: '/images/kids.jpeg',
      stat: '5,000+',
      statLabel: 'Holiday books given',
    },
    {
      icon: TreePine,
      title: 'Reading in the Park',
      description: 'Partnership with Boone County Imagination Library for outdoor reading sessions. Bringing stories to life in nature.',
      image: '/images/addie&kid.jpeg',
      stat: '50+',
      statLabel: 'Outdoor events',
    },
  ];

  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden bg-warm-gray-50">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-warm-gray-900/5 mb-6">
            <BookMarked className="w-4 h-4 text-sunset-orange" />
            <span className="text-sm font-semibold text-warm-gray-700">Our Programs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
            How We <span className="text-gradient">Spread the Joy</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            We reach children through multiple initiatives designed to make books accessible and reading exciting for everyone.
          </p>
        </div>

        {/* Main Programs Grid with Images */}
        <div ref={programsRef} className="grid md:grid-cols-2 gap-6 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isHovered = hoveredProgram === index;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl shadow-lg shadow-warm-gray-900/5 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer ${programsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProgram(index)}
                onMouseLeave={() => setHoveredProgram(null)}
              >
                {/* Background Image (visible on hover) */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`}>
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color}`} />

                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${program.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold text-warm-gray-900">{program.title}</h3>
                        <span className={`px-3 py-1 bg-gradient-to-r ${program.color} text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                          {program.impact}
                        </span>
                      </div>
                      <p className="text-warm-gray-600 leading-relaxed mb-4">{program.description}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${program.bgColor} ${program.iconColor} text-sm font-medium rounded-full transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute bottom-6 right-6 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
                  <div className={`w-10 h-10 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Programs Section - Interactive Showcase */}
        <div ref={specialRef} className={`bg-white rounded-3xl shadow-lg shadow-warm-gray-900/5 overflow-hidden transition-all duration-700 ${specialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              {specialPrograms.map((program, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${activeSpecial === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                >
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-gray-900/60 to-transparent lg:bg-gradient-to-t" />
                </div>
              ))}

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-sunset-orange">{specialPrograms[activeSpecial].stat}</div>
                <div className="text-sm text-warm-gray-600">{specialPrograms[activeSpecial].statLabel}</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-sunset-orange" />
                <h3 className="text-2xl font-bold text-warm-gray-900">Special Initiatives</h3>
              </div>

              <div className="space-y-4">
                {specialPrograms.map((program, index) => {
                  const Icon = program.icon;
                  const isActive = activeSpecial === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveSpecial(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${isActive
                          ? 'bg-sunset-orange/10 border-2 border-sunset-orange'
                          : 'bg-warm-gray-50 border-2 border-transparent hover:bg-warm-gray-100'
                        }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-sunset-orange text-white' : 'bg-white text-warm-gray-400 shadow-sm'
                          }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-sunset-orange' : 'text-warm-gray-900'}`}>
                            {program.title}
                          </h4>
                          <p className={`text-sm transition-all duration-300 ${isActive ? 'text-warm-gray-700 max-h-20' : 'text-warm-gray-500 max-h-0 overflow-hidden'}`}>
                            {program.description}
                          </p>
                        </div>
                        <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${isActive ? 'text-sunset-orange rotate-90' : 'text-warm-gray-300'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Request Books CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <p className="text-warm-gray-600">
              Need books for your school or event?
            </p>
            <button
              onClick={() => document.getElementById('book-request')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white font-semibold rounded-full shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Books
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
