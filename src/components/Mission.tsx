import { BookOpen, Heart, Users, Sparkles, Target, Lightbulb, Globe, Rocket } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: BookOpen,
      title: 'Literacy for All',
      description: 'Every child deserves access to books that spark imagination and ignite a lifelong love of learning.',
      color: 'from-sunset-orange to-sunset-coral',
      bgColor: 'bg-sunset-orange/10',
      iconColor: 'text-sunset-orange',
    },
    {
      icon: Heart,
      title: 'Community Love',
      description: 'Building stronger communities through the transformative power of reading and shared stories.',
      color: 'from-sunset-pink to-mountain-purple',
      bgColor: 'bg-sunset-pink/10',
      iconColor: 'text-sunset-pink',
    },
    {
      icon: Users,
      title: 'Together We Grow',
      description: 'Partnering with families, schools, and volunteers to reach more children every single day.',
      color: 'from-sky-blue to-ocean-teal',
      bgColor: 'bg-sky-blue/10',
      iconColor: 'text-sky-blue',
    },
    {
      icon: Sparkles,
      title: 'Bright Futures',
      description: 'Creating opportunities for children to discover their potential through the magic of reading.',
      color: 'from-golden-yellow to-warm-amber',
      bgColor: 'bg-golden-yellow/10',
      iconColor: 'text-golden-yellow',
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Distribution',
      description: 'Getting as many new children\'s books as possible into the hands of families, teachers, and organizations.',
    },
    {
      icon: Lightbulb,
      title: 'Education',
      description: 'Teaching parents and caregivers how early reading affects brain development and school readiness.',
    },
    {
      icon: Rocket,
      title: 'Engagement',
      description: 'Creating events that show children reading is magical and fun—not just homework.',
    },
  ];

  return (
    <section id="mission" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-warm-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-warm-gray-900/5 mb-6">
            <Target className="w-4 h-4 text-sunset-orange" />
            <span className="text-sm font-semibold text-warm-gray-700">Our Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6 leading-tight">
            Spreading the{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Love of Reading</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            Everywhere
          </h2>

          <p className="text-lg sm:text-xl text-warm-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Bright Beginnings Books, we're dedicated to putting books in the hands of children who need them most.
            We believe literacy is the foundation of success, and every child deserves the opportunity to discover the joy of reading.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-warm-gray-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${value.bgColor} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-warm-gray-900 mb-3">{value.title}</h3>
                  <p className="text-warm-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Pillars */}
        <div className="bg-gradient-to-br from-warm-gray-900 via-warm-gray-800 to-warm-gray-900 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Our Three Pillars of Impact
            </h3>
            <p className="text-warm-gray-400 max-w-2xl mx-auto">
              We focus on three core areas to maximize our impact and ensure every child has access to the gift of reading.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sunset-orange/20 to-sunset-pink/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-sunset-orange" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                    </div>
                    <p className="text-warm-gray-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Globe Visualization */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-sunset-orange/20 to-sunset-pink/20 rounded-full flex items-center justify-center animate-pulse-glow">
                <Globe className="w-12 h-12 text-sunset-orange" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">50+</span>
              </div>
            </div>
          </div>
          <p className="text-center text-warm-gray-500 mt-4 text-sm">
            Reaching children in all 50 states and around the world
          </p>
        </div>
      </div>
    </section>
  );
}
