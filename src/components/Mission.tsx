import { useState, useEffect, useRef } from 'react';
import { BookOpen, Heart, Users, Sparkles, Target, Lightbulb, Globe, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../i18n';

// Scroll-triggered animation hook
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

export function Mission() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const { isVisible: headerVisible, ref: headerRef } = useScrollReveal(0.3);
  const { isVisible: valuesVisible, ref: valuesRef } = useScrollReveal(0.2);
  const { isVisible: pillarsVisible, ref: pillarsRef } = useScrollReveal(0.3);
  const { t } = useLanguage();

  const values = [
    {
      icon: BookOpen,
      title: t('literacyForAll'),
      description: t('literacyForAllDesc'),
      color: 'from-sunset-orange to-sunset-coral',
      bgColor: 'bg-sunset-orange/10',
      iconColor: 'text-sunset-orange',
      stats: t('booksDistributedStat'),
    },
    {
      icon: Heart,
      title: t('communityLove'),
      description: t('communityLoveDesc'),
      color: 'from-sunset-pink to-mountain-purple',
      bgColor: 'bg-sunset-pink/10',
      iconColor: 'text-sunset-pink',
      stats: t('communityEvents'),
    },
    {
      icon: Users,
      title: t('togetherWeGrow'),
      description: t('togetherWeGrowDesc'),
      color: 'from-sky-blue to-ocean-teal',
      bgColor: 'bg-sky-blue/10',
      iconColor: 'text-sky-blue',
      stats: t('volunteers'),
    },
    {
      icon: Sparkles,
      title: t('brightFutures'),
      description: t('brightFuturesDesc'),
      color: 'from-golden-yellow to-warm-amber',
      bgColor: 'bg-golden-yellow/10',
      iconColor: 'text-golden-yellow',
      stats: t('childrenHelpedStat'),
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: t('distribution'),
      description: t('distributionDesc'),
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      highlights: [t('brandNewBooks'), t('ageAppropriate'), t('freeToAll')],
    },
    {
      icon: Lightbulb,
      title: t('education'),
      description: t('educationDesc'),
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      highlights: [t('parentResources'), t('readingGuides'), t('developmentTips')],
    },
    {
      icon: Rocket,
      title: t('engagement'),
      description: t('engagementDesc'),
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      highlights: [t('readingEvents'), t('storyTime'), t('communityFairs')],
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
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-20">
          <div className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-warm-gray-900/5 mb-6">
              <Target className="w-4 h-4 text-sunset-orange" />
              <span className="text-sm font-semibold text-warm-gray-700">{t('ourMission')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6 leading-tight">
              {t('spreadingLoveOfReading')}{' '}
              <span className="relative inline-block">
                <span className="text-gradient">{t('loveOfReading')}</span>
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
              {t('everywhere')}
            </h2>

            <p className="text-lg sm:text-xl text-warm-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('missionMainText')}
            </p>
          </div>
        </div>

        {/* Values Grid with Hover Effects */}
        <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredValue === index;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg shadow-warm-gray-900/5 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${value.bgColor} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-warm-gray-900 mb-3">{value.title}</h3>
                  <p className="text-warm-gray-600 leading-relaxed mb-4">{value.description}</p>

                  {/* Stats on hover */}
                  <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`text-sm font-semibold ${value.iconColor}`}>
                      {value.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Pillars with Images */}
        <div ref={pillarsRef} className={`bg-gradient-to-br from-warm-gray-900 via-warm-gray-800 to-warm-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-1000 ${pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('threePillarsOfImpact')}
            </h3>
            <p className="text-warm-gray-400 max-w-2xl mx-auto">
              {t('threePillarsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-500 ${pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <ImageWithFallback
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-warm-gray-900 via-warm-gray-900/50 to-transparent" />

                      {/* Number Badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-sunset-orange/20 to-sunset-pink/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-sunset-orange" />
                        </div>
                        <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                      </div>
                      <p className="text-warm-gray-400 leading-relaxed mb-4">{pillar.description}</p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {pillar.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle2 className="w-4 h-4 text-forest-green" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Globe Visualization */}
          <div className="mt-12 flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-sunset-orange/20 to-sunset-pink/20 rounded-full flex items-center justify-center animate-pulse-glow">
                <Globe className="w-12 h-12 text-sunset-orange animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-forest-green rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs font-bold text-white">50+</span>
              </div>
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-golden-yellow rounded-full" />
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-sky-blue rounded-full" />
              </div>
            </div>
            <p className="text-center text-warm-gray-500 mt-4 text-sm">
              {t('reachingChildrenWorldwide')}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 text-sunset-orange font-semibold text-lg hover:gap-4 transition-all duration-300"
          >
            {t('exploreOurPrograms')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
