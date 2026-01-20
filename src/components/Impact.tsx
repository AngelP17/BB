import { useState, useEffect, useRef } from 'react';
import { TrendingUp, MapPin, BookOpen, Users, Heart, Star, Award, Zap } from 'lucide-react';
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

  return { count, ref };
}

export function Impact() {
  const stats = [
    { value: 55000, suffix: '+', label: 'Books Distributed', subtext: 'Brand new books given to children', icon: BookOpen, color: 'text-white' },
    { value: 50, suffix: '+', label: 'States Reached', subtext: 'Across the entire nation', icon: MapPin, color: 'text-white' },
    { value: 13000, suffix: '+', label: 'Children Helped', subtext: 'Lives touched by literacy', icon: Users, color: 'text-white' },
    { value: 100, suffix: '%', label: 'Volunteer Run', subtext: 'Community powered mission', icon: Heart, color: 'text-white' },
  ];

  const achievements = [
    { icon: Award, title: 'Youth-Founded', description: 'Started by a student in middle school' },
    { icon: Star, title: 'National Reach', description: 'Books sent to all 50 states' },
    { icon: Zap, title: 'Growing Impact', description: 'Expanding globally every day' },
  ];

  return (
    <section id="impact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange via-sunset-coral to-sunset-pink" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full pattern-grid" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

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

        {/* Stats Grid */}
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
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 stat-number">
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image & Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl image-shine">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
                  alt="Child reading with joy"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl image-shine">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
                  alt="Library books"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl image-shine">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1529390079861-591f6a5c2dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
                  alt="Children learning"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl image-shine">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600"
                  alt="Books for children"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">What Makes Us Different</h3>

              <div className="space-y-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-golden-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-golden-yellow/30 transition-colors">
                        <Icon className="w-6 h-6 text-golden-yellow" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{achievement.title}</h4>
                        <p className="text-white/70">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/90 italic text-lg leading-relaxed">
                  "Every book we give is a door opened to a world of possibilities for a child."
                </p>
                <p className="text-golden-yellow font-semibold mt-3">- Bright Beginnings Books Team</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white text-sunset-orange font-semibold px-8 py-4 rounded-xl hover:bg-golden-yellow hover:text-warm-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
