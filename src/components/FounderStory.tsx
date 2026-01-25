import { useState, useEffect, useRef } from 'react';
import { Quote, Heart, BookOpen, GraduationCap, Award, Sparkles, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../i18n';

// Scroll progress hook for timeline
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        // Calculate how much of the element is in view
        const visibleTop = Math.max(0, windowHeight - rect.top);
        const visibleBottom = Math.max(0, rect.bottom);
        const visibleHeight = Math.min(visibleTop, visibleBottom, elementHeight);

        const scrollProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + elementHeight * 0.5)));
        setProgress(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, ref };
}

// Intersection observer hook
function useInView(threshold: number = 0.3) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { isInView, ref };
}

export function FounderStory() {
  const { progress, ref: timelineRef } = useScrollProgress();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const { t } = useLanguage();

  // Update active index based on scroll progress
  useEffect(() => {
    const newIndex = Math.min(2, Math.floor(progress * 3));
    setActiveIndex(newIndex);
  }, [progress]);

  const milestones = [
    {
      year: '2019',
      period: t('middleSchool'),
      title: t('aDreamBegins'),
      description: t('dreamBeginsDesc'),
      icon: BookOpen,
      image: '/images/addie&books.jpeg',
      stats: { books: '500+', reach: t('local') },
    },
    {
      year: '2021',
      period: t('highSchool'),
      title: t('growingImpact'),
      description: t('growingImpactDesc'),
      icon: Heart,
      image: '/images/addie&kid.jpeg',
      stats: { books: '10,000+', reach: t('statewide') },
    },
    {
      year: '2024',
      period: t('today'),
      title: t('booksCount55k'),
      description: t('booksCount55kDesc'),
      icon: Award,
      image: '/images/addie&baby.jpeg',
      stats: { books: '55,000+', reach: t('nationwide') },
    },
  ];

  const { isInView: statsInView, ref: statsRef } = useInView(0.5);

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-orange/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-sunset-orange" />
            <span className="text-sm font-semibold text-sunset-orange uppercase tracking-wide">{t('ourStoryLabel')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
            {t('founderTitle')}{' '}
            <span className="text-gradient">{t('founderTitleHighlight')}</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            {t('founderSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image & Quote - Sticky on scroll */}
          <div className="lg:sticky lg:top-32">
            <div className="relative">
              {/* Main Image with parallax effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/images/addie&books.jpeg"
                  alt="Addie Elizabeth Jones, founder of Bright Beginnings Books, with books"
                  className="w-full h-[450px] object-contain bg-warm-gray-50/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-gray-900/70 via-warm-gray-900/30 to-transparent" />

                {/* Quote Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Quote className="w-10 h-10 text-white/40 mb-3" />
                  <p className="text-white text-lg font-medium italic leading-relaxed">
                    {t('founderQuote')}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Addie Elizabeth Jones</p>
                      <p className="text-white/70 text-sm">{t('founder')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 animate-float">
                <div className="w-12 h-12 bg-golden-yellow/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-golden-yellow" />
                </div>
                <div>
                  <p className="font-bold text-warm-gray-900">{t('harrisonAR')}</p>
                  <p className="text-sm text-warm-gray-500">{t('whereItAllBegan')}</p>
                </div>
              </div>

              {/* Year Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-sunset-orange to-sunset-coral p-3 rounded-xl shadow-xl hidden md:flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">{t('since')} 2019</span>
              </div>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="space-y-8" ref={timelineRef}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-warm-gray-900">
                {t('fromClassroomToNationwide')}
              </h3>
              <p className="text-warm-gray-600 leading-relaxed">
                {t('founderBio')}
              </p>
            </div>

            {/* Interactive Timeline */}
            <div className="relative space-y-8 pt-4">
              {/* Timeline Line with Progress */}
              <div className="absolute left-6 top-8 bottom-8 w-1 bg-warm-gray-200 rounded-full overflow-hidden">
                <div
                  className="w-full bg-gradient-to-b from-sunset-orange via-sunset-pink to-mountain-purple transition-all duration-500 ease-out"
                  style={{ height: `${Math.min(100, progress * 120)}%` }}
                />
              </div>

              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = index <= activeIndex;
                const isHovered = hoveredMilestone === index;

                return (
                  <div
                    key={index}
                    className="relative flex gap-6 group"
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    {/* Icon */}
                    <div className={`relative z-10 w-12 h-12 rounded-xl shadow-lg flex items-center justify-center border-2 transition-all duration-500 ${isActive
                      ? 'bg-gradient-to-br from-sunset-orange to-sunset-coral border-sunset-orange scale-110'
                      : 'bg-white border-warm-gray-200'
                      }`}>
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-warm-gray-400'}`} />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pb-4 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-2'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full transition-colors duration-300 ${isActive ? 'bg-sunset-orange text-white' : 'bg-warm-gray-100 text-warm-gray-500'
                          }`}>
                          {milestone.year}
                        </span>
                        <span className="text-warm-gray-400 text-sm">{milestone.period}</span>
                      </div>
                      <h4 className="text-xl font-bold text-warm-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-warm-gray-600 text-sm leading-relaxed mb-3">{milestone.description}</p>

                      {/* Expandable Stats */}
                      <div className={`overflow-hidden transition-all duration-500 ${isHovered || isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="flex gap-4 pt-2">
                          <div className="px-3 py-2 bg-sunset-orange/10 rounded-lg">
                            <div className="text-lg font-bold text-sunset-orange">{milestone.stats.books}</div>
                            <div className="text-xs text-warm-gray-500">{t('books')}</div>
                          </div>
                          <div className="px-3 py-2 bg-sky-blue/10 rounded-lg">
                            <div className="text-lg font-bold text-sky-blue">{milestone.stats.reach}</div>
                            <div className="text-xs text-warm-gray-500">{t('reach')}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Milestone Image - appears on hover */}
                    <div className={`absolute right-0 top-0 w-24 h-24 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hidden lg:block ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}>
                      <ImageWithFallback
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-contain bg-warm-gray-50/50"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#mission"
                className="group inline-flex items-center gap-2 text-sunset-orange font-semibold hover:gap-4 transition-all duration-300"
              >
                {t('discoverOurMission')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div ref={statsRef} className="mt-20 bg-gradient-to-r from-warm-gray-900 to-warm-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '501(c)(3)', label: t('registeredNonprofit'), sublabel: 'EIN: 86-2430919', delay: 0 },
              { value: '2019', label: t('yearFounded'), sublabel: t('inHarrisonAR'), delay: 100 },
              { value: '100%', label: t('volunteerRun'), sublabel: t('communityPowered'), delay: 200 },
              { value: '50+', label: t('statesReached'), sublabel: t('andGrowing'), delay: 300 },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/90 font-medium text-sm">{stat.label}</div>
                <div className="text-white/50 text-xs mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
