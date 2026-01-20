import { useState, useEffect, useRef } from 'react';
import { TrendingUp, MapPin, BookOpen, Users, Heart, Star, Award, Zap, ArrowRight, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

// Simple US Map visualization
function USMapVisualization() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  // Major US cities/regions with approximate positions
  const states = [
    { name: 'WA', x: 12, y: 8, delay: 100 },
    { name: 'OR', x: 10, y: 18, delay: 150 },
    { name: 'CA', x: 8, y: 35, delay: 200 },
    { name: 'NV', x: 15, y: 30, delay: 250 },
    { name: 'ID', x: 18, y: 15, delay: 300 },
    { name: 'MT', x: 25, y: 10, delay: 350 },
    { name: 'WY', x: 28, y: 22, delay: 400 },
    { name: 'UT', x: 20, y: 30, delay: 450 },
    { name: 'AZ', x: 18, y: 45, delay: 500 },
    { name: 'CO', x: 30, y: 35, delay: 550 },
    { name: 'NM', x: 28, y: 48, delay: 600 },
    { name: 'TX', x: 38, y: 55, delay: 650 },
    { name: 'OK', x: 42, y: 45, delay: 700 },
    { name: 'KS', x: 42, y: 35, delay: 750 },
    { name: 'NE', x: 40, y: 28, delay: 800 },
    { name: 'SD', x: 38, y: 18, delay: 850 },
    { name: 'ND', x: 38, y: 10, delay: 900 },
    { name: 'MN', x: 50, y: 15, delay: 950 },
    { name: 'IA', x: 52, y: 28, delay: 1000 },
    { name: 'MO', x: 52, y: 38, delay: 1050 },
    { name: 'AR', x: 52, y: 48, delay: 1100, highlight: true }, // Arkansas highlighted
    { name: 'LA', x: 52, y: 58, delay: 1150 },
    { name: 'WI', x: 58, y: 18, delay: 1200 },
    { name: 'IL', x: 58, y: 32, delay: 1250 },
    { name: 'MS', x: 58, y: 52, delay: 1300 },
    { name: 'MI', x: 65, y: 20, delay: 1350 },
    { name: 'IN', x: 65, y: 32, delay: 1400 },
    { name: 'KY', x: 68, y: 40, delay: 1450 },
    { name: 'TN', x: 68, y: 45, delay: 1500 },
    { name: 'AL', x: 65, y: 52, delay: 1550 },
    { name: 'OH', x: 72, y: 32, delay: 1600 },
    { name: 'WV', x: 75, y: 38, delay: 1650 },
    { name: 'VA', x: 80, y: 40, delay: 1700 },
    { name: 'NC', x: 82, y: 45, delay: 1750 },
    { name: 'SC', x: 78, y: 50, delay: 1800 },
    { name: 'GA', x: 75, y: 55, delay: 1850 },
    { name: 'FL', x: 80, y: 65, delay: 1900 },
    { name: 'PA', x: 82, y: 30, delay: 1950 },
    { name: 'NY', x: 85, y: 22, delay: 2000 },
    { name: 'VT', x: 88, y: 14, delay: 2050 },
    { name: 'NH', x: 90, y: 16, delay: 2100 },
    { name: 'MA', x: 92, y: 22, delay: 2150 },
    { name: 'CT', x: 90, y: 26, delay: 2200 },
    { name: 'NJ', x: 88, y: 32, delay: 2250 },
    { name: 'MD', x: 85, y: 36, delay: 2300 },
  ];

  return (
    <div ref={ref} className="relative w-full h-48 bg-white/5 rounded-2xl overflow-hidden">
      {/* Map dots */}
      {states.map((state, index) => (
        <div
          key={state.name}
          className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${state.highlight
            ? 'bg-golden-yellow w-4 h-4 animate-pulse-glow'
            : 'bg-white/80'
            }`}
          style={{
            left: `${state.x}%`,
            top: `${state.y}%`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transitionDelay: `${state.delay}ms`,
          }}
        >
          {state.highlight && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-golden-yellow whitespace-nowrap">
              Harrison, AR
            </span>
          )}
        </div>
      ))}

      {/* Connection lines (simplified) */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: isVisible ? 0.3 : 0, transition: 'opacity 2s ease-out 2.5s' }}>
        <line x1="52%" y1="48%" x2="30%" y2="35%" stroke="white" strokeWidth="1" strokeDasharray="4" />
        <line x1="52%" y1="48%" x2="75%" y2="55%" stroke="white" strokeWidth="1" strokeDasharray="4" />
        <line x1="52%" y1="48%" x2="85%" y2="22%" stroke="white" strokeWidth="1" strokeDasharray="4" />
        <line x1="52%" y1="48%" x2="8%" y2="35%" stroke="white" strokeWidth="1" strokeDasharray="4" />
      </svg>

      {/* Legend */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs text-white/70">
        <div className="w-2 h-2 bg-golden-yellow rounded-full" />
        <span>Origin</span>
        <div className="w-2 h-2 bg-white/80 rounded-full ml-2" />
        <span>Reached</span>
      </div>
    </div>
  );
}

export function Impact() {
  const stats = [
    { value: 55000, maxValue: 60000, suffix: '+', label: 'Books Distributed', subtext: 'Brand new books given to children', icon: BookOpen, color: '#FBBF24' },
    { value: 50, maxValue: 50, suffix: '+', label: 'States Reached', subtext: 'Across the entire nation', icon: MapPin, color: '#0EA5E9' },
    { value: 13000, maxValue: 15000, suffix: '+', label: 'Children Helped', subtext: 'Lives touched by literacy', icon: Users, color: '#22C55E' },
    { value: 100, maxValue: 100, suffix: '%', label: 'Volunteer Run', subtext: 'Community powered mission', icon: Heart, color: '#EC4899' },
  ];

  const achievements = [
    { icon: Award, title: 'Youth-Founded', description: 'Started by a student in middle school', stat: '2019' },
    { icon: Star, title: 'National Reach', description: 'Books sent to all 50 states', stat: '50+' },
    { icon: Zap, title: 'Growing Daily', description: 'Expanding globally every day', stat: '100+' },
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
            <span className="text-sm font-semibold text-white uppercase tracking-wide">Our Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Making a <span className="text-golden-yellow">Real Difference</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Through your support, we're transforming lives and creating lasting change in communities across the nation.
          </p>
        </div>

        {/* Stats Grid with Ring Charts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const { count, ref, hasStarted } = useCountUp(stat.value, 2500);
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
              Our Nationwide Reach
            </h3>
            <USMapVisualization />
            <p className="text-white/70 text-sm mt-4">
              From our home base in Harrison, Arkansas, we've distributed books to children in every state across the nation.
            </p>
          </div>

          {/* Achievements & Images */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">What Makes Us Different</h3>

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
                  src="/images/children_learning_books.png"
                  alt="Children reading with joy at community event"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl image-shine aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                  alt="Colorful children's books on shelves"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
            Join Our Mission
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
