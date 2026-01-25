import { useState, useEffect, useRef } from 'react';
import { TrendingUp, MapPin, BookOpen, Users, Heart, Star, Award, Zap, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../i18n';

// Animated counter hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref, hasStarted };
}

// Animated ring/donut chart component
function AnimatedRing({
  value,
  maxValue,
  color,
  size = 120,
  strokeWidth = 10,
  delay = 0
}: {
  value: number;
  maxValue: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (animatedValue / maxValue) * 100;
  const offset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => setHasStarted(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedValue(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, value]);

  return (
    <svg ref={ref} width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={strokeWidth}
      />
      {/* Animated circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-100 ease-out"
      />
    </svg>
  );
}

// US Map SVG visualization with proper state shapes
function USMapVisualization() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full bg-white/5 rounded-2xl overflow-hidden p-4">
      {/* US Map SVG */}
      <svg
        viewBox="0 0 960 600"
        className={`w-full h-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ maxHeight: '280px' }}
      >
        {/* Simplified US outline path */}
        <path
          d="M158.1,489.9l-1.1-1.5l-4.5-0.3l-3.8-3.7l-2.5,0.5l-0.4,3.3l1.1,4.4l-1.7,5.3l-4.6,5.2l-2.8,4.7l-1.5,5.9l2.9,6.1l1.1,6.9l-0.5,5l-2.5,4.6l-2.9-2.7l-4.2-0.8l-4.5,5l-4.9-1.7l-3.3,0.5l-3.2,4.9l-7.6-2.9l-3.9-4.4l0.2-4.5l-2.7-4.7l-5.4-0.5l-4.2-5.6l-3.9-1.3l-2.5,3.9l-6.7-2.7l-9.2-6.9l-9.1-3.9l-1.5-2.1l-0.8-6.7l-4.7-0.5l-5.1,1l-4.9-4.8l-8.9-3.5l-7.5-4.9l-5.9-1.7l-5.9,1.1l-3.7-2.3l-3.3-4.7l-3.9-0.5l-5.7,3.5l-5.3-1.1l-1.3-3.1l3.7-4.1l-2.5-4.5l-5.1-3.5l-4.1,0.5l-5.7-4.3l-4.1-1.1l-6.3,2.7l-5.9-5.1l-5.7,1.5l-3.3,5.3l-6.5-1.1l-4.5-4.5l-3.9-0.5l-4.9,5.3l-8.9-5.5l-6.3,0.5l-2.9,4.1l-8.3-3.7l-10.1-1.3l-3.7,1.7l-2.5,4.9l-5.9,0.3l-2.7-3.9l-6.5-0.5l-4.1,3.5l-6.7-4.9l-7.1,1.1l-2.9-3.3l-5.7,0.1l-3.9-3.9l-8.9,2.3l-1.7-3.1l-7.1-0.5l-2.5,2.3l0.1,35.1l32.1-0.3l32.1-0.5l32.1-0.7l32.1-0.9l32.1-1.1l32.1-1.3l20.5-1.3"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* State dots representing coverage */}
        {[
          // West Coast
          { cx: 100, cy: 120, name: 'WA' },
          { cx: 95, cy: 180, name: 'OR' },
          { cx: 85, cy: 280, name: 'CA' },
          // Mountain
          { cx: 150, cy: 150, name: 'ID' },
          { cx: 130, cy: 230, name: 'NV' },
          { cx: 200, cy: 100, name: 'MT' },
          { cx: 210, cy: 180, name: 'WY' },
          { cx: 160, cy: 280, name: 'UT' },
          { cx: 240, cy: 260, name: 'CO' },
          { cx: 160, cy: 360, name: 'AZ' },
          { cx: 230, cy: 360, name: 'NM' },
          // Central
          { cx: 290, cy: 100, name: 'ND' },
          { cx: 290, cy: 160, name: 'SD' },
          { cx: 290, cy: 220, name: 'NE' },
          { cx: 300, cy: 280, name: 'KS' },
          { cx: 300, cy: 340, name: 'OK' },
          { cx: 330, cy: 420, name: 'TX' },
          // Midwest
          { cx: 380, cy: 120, name: 'MN' },
          { cx: 380, cy: 180, name: 'IA' },
          { cx: 380, cy: 250, name: 'MO' },
          { cx: 380, cy: 320, name: 'AR', highlight: true }, // Arkansas - HOME
          { cx: 380, cy: 400, name: 'LA' },
          { cx: 430, cy: 130, name: 'WI' },
          { cx: 440, cy: 200, name: 'IL' },
          { cx: 430, cy: 350, name: 'MS' },
          // Great Lakes
          { cx: 490, cy: 130, name: 'MI' },
          { cx: 480, cy: 210, name: 'IN' },
          { cx: 520, cy: 250, name: 'OH' },
          { cx: 500, cy: 280, name: 'KY' },
          { cx: 520, cy: 310, name: 'TN' },
          { cx: 480, cy: 360, name: 'AL' },
          // Southeast
          { cx: 540, cy: 360, name: 'GA' },
          { cx: 560, cy: 450, name: 'FL' },
          { cx: 570, cy: 320, name: 'SC' },
          { cx: 590, cy: 290, name: 'NC' },
          { cx: 590, cy: 250, name: 'VA' },
          { cx: 560, cy: 240, name: 'WV' },
          // Northeast
          { cx: 570, cy: 200, name: 'PA' },
          { cx: 600, cy: 160, name: 'NY' },
          { cx: 630, cy: 130, name: 'VT' },
          { cx: 650, cy: 130, name: 'NH' },
          { cx: 660, cy: 155, name: 'MA' },
          { cx: 645, cy: 175, name: 'CT' },
          { cx: 620, cy: 195, name: 'NJ' },
          { cx: 600, cy: 220, name: 'MD' },
        ].map((state, index) => (
          <g key={state.name}>
            <circle
              cx={state.cx}
              cy={state.cy}
              r={state.highlight ? 12 : 8}
              fill={state.highlight ? '#FBBF24' : 'rgba(255,255,255,0.8)'}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 40}ms` }}
            />
            {state.highlight && (
              <>
                <circle
                  cx={state.cx}
                  cy={state.cy}
                  r={20}
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="2"
                  className={`transition-all duration-500 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
                  style={{ transitionDelay: '1500ms' }}
                />
                <text
                  x={state.cx}
                  y={state.cy - 30}
                  textAnchor="middle"
                  fill="#FBBF24"
                  fontSize="14"
                  fontWeight="bold"
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: '1500ms' }}
                >
                  Harrison, AR
                </text>
              </>
            )}
          </g>
        ))}

        {/* Connection lines from Arkansas */}
        <g className={`transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`} style={{ transitionDelay: '2000ms' }}>
          <line x1="380" y1="320" x2="85" y2="280" stroke="white" strokeWidth="1" strokeDasharray="8,4" />
          <line x1="380" y1="320" x2="560" y2="450" stroke="white" strokeWidth="1" strokeDasharray="8,4" />
          <line x1="380" y1="320" x2="600" y2="160" stroke="white" strokeWidth="1" strokeDasharray="8,4" />
          <line x1="380" y1="320" x2="100" y2="120" stroke="white" strokeWidth="1" strokeDasharray="8,4" />
        </g>
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm text-white/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-golden-yellow rounded-full shadow-lg" />
          <span>{t('ourHomeBase')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white/80 rounded-full" />
          <span>{t('statesReached')}</span>
        </div>
      </div>
    </div>
  );
}

export function Impact() {
  const { t } = useLanguage();

  const stats = [
    { value: 55000, maxValue: 60000, suffix: '+', label: t('booksLabel'), subtext: t('booksDistributedStat').replace('55,000+ ', ''), icon: BookOpen, color: '#FBBF24' },
    { value: 50, maxValue: 50, suffix: '+', label: t('statesReached'), subtext: t('acrossNation'), icon: MapPin, color: '#0EA5E9' },
    { value: 13000, maxValue: 15000, suffix: '+', label: t('childrenHelped'), subtext: t('livesTouched'), icon: Users, color: '#22C55E' },
    { value: 100, maxValue: 100, suffix: '%', label: t('volunteerRun'), subtext: t('communityPoweredMission'), icon: Heart, color: '#EC4899' },
  ];

  const achievements = [
    { icon: Award, title: t('youthFounded'), description: t('youthFoundedDesc'), stat: '2019' },
    { icon: Star, title: t('nationalReach'), description: t('nationalReachDesc'), stat: '50+' },
    { icon: Zap, title: t('growingDailyTitle'), description: t('growingDailyDesc'), stat: '100+' },
  ];

  return (
    <section id="impact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange via-sunset-coral to-sunset-pink" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-slow animation-delay-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">{t('ourImpact')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('makingADifference')} <span className="text-golden-yellow">{t('realDifference')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {t('impactSubtitle')}
          </p>
        </div>

        {/* Stats Grid with Ring Charts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2500);
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={ref}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center h-full flex flex-col items-center">
                  {/* Ring Chart */}
                  <div className="relative mb-4">
                    <AnimatedRing
                      value={stat.value}
                      maxValue={stat.maxValue}
                      color={stat.color}
                      size={100}
                      strokeWidth={8}
                      delay={index * 200}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2 stat-number">
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map & Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Interactive US Map */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {t('nationwideReach')}
            </h3>
            <USMapVisualization />
            <p className="text-white/70 text-sm mt-4">
              {t('fromHomeBase')}
            </p>
          </div>

          {/* Achievements & Images */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">{t('whatMakesUsDifferent')}</h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-xl transition-colors">
                      <div className="w-12 h-12 bg-golden-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-golden-yellow/30 group-hover:scale-110 transition-all">
                        <Icon className="w-6 h-6 text-golden-yellow" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white mb-0.5">{achievement.title}</h4>
                        <p className="text-white/70 text-sm">{achievement.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-golden-yellow">{achievement.stat}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-2xl image-shine aspect-square">
                <ImageWithFallback
                  src="/images/addie&baby.jpeg"
                  alt="Addie sharing books with a young child"
                  className="w-full h-full object-contain bg-white/5 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl image-shine aspect-square">
                <ImageWithFallback
                  src="/images/addie&kid.jpeg"
                  alt="Addie helping a child select books"
                  className="w-full h-full object-contain bg-white/5 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 bg-white text-sunset-orange font-semibold px-8 py-4 rounded-full hover:bg-golden-yellow hover:text-warm-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('joinOurMission')}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
