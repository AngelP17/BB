import { Quote, Heart, BookOpen, GraduationCap, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FounderStory() {
  const milestones = [
    {
      year: 'Middle School',
      title: 'A Dream Begins',
      description: 'Addie Elizabeth Jones, an avid reader since childhood, starts Bright Beginnings Books with a simple mission: share her love of reading.',
      icon: BookOpen,
    },
    {
      year: 'High School',
      title: 'Growing Impact',
      description: 'The organization expands from local school visits to reaching children across Arkansas and beyond.',
      icon: Heart,
    },
    {
      year: 'Today',
      title: '55,000+ Books',
      description: 'Now reaching all 50 states and multiple countries, Bright Beginnings Books continues to grow every day.',
      icon: Award,
    },
  ];

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
            <span className="text-sm font-semibold text-sunset-orange uppercase tracking-wide">Our Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
            Started by a Student,{' '}
            <span className="text-gradient">Changing Lives</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            What began as one student's passion project has grown into a movement reaching children across the nation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image & Quote */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Student reading and organizing books"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-gray-900/60 via-warm-gray-900/20 to-transparent" />

                {/* Quote Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Quote className="w-10 h-10 text-white/40 mb-3" />
                  <p className="text-white text-lg font-medium italic leading-relaxed">
                    "My goal is to spread the love of reading all over the state and around the world by providing access and creating enthusiasm for books."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-sunset-orange to-sunset-coral rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Addie Elizabeth Jones</p>
                      <p className="text-white/70 text-sm">Founder, Bright Beginnings Books</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3">
                <div className="w-12 h-12 bg-golden-yellow/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-golden-yellow" />
                </div>
                <div>
                  <p className="font-bold text-warm-gray-900">Harrison, AR</p>
                  <p className="text-sm text-warm-gray-500">Where it all began</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-warm-gray-900">
                From Classroom to Nationwide
              </h3>
              <p className="text-warm-gray-600 leading-relaxed">
                Addie Elizabeth Jones has been an avid reader for as long as she can remember. Books have always been an important part of her life, which is why she started Bright Beginnings Books while still in middle school.
              </p>
              <p className="text-warm-gray-600 leading-relaxed">
                What began as visits to local schools and community events has grown into a nationwide movement. Today, Bright Beginnings Books has given away over <span className="font-semibold text-sunset-orange">55,000 brand new books</span> to children all over the state and beyond.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-8 pt-4">
              {/* Timeline Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sunset-orange via-sunset-pink to-mountain-purple" />

              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div key={index} className="relative flex gap-6 group">
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-warm-gray-100 group-hover:border-sunset-orange group-hover:shadow-xl transition-all duration-300">
                      <Icon className="w-5 h-5 text-sunset-orange" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <span className="inline-block px-3 py-1 bg-sunset-orange/10 text-sunset-orange text-xs font-semibold rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h4 className="text-lg font-bold text-warm-gray-900 mb-1">{milestone.title}</h4>
                      <p className="text-warm-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#mission"
                className="inline-flex items-center gap-2 text-sunset-orange font-semibold hover:gap-3 transition-all duration-300"
              >
                Discover Our Mission
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-r from-warm-gray-900 to-warm-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '501(c)(3)', label: 'Registered Nonprofit', sublabel: 'EIN: 86-2430919' },
              { value: '2020', label: 'Year Founded', sublabel: 'In Harrison, AR' },
              { value: '100%', label: 'Volunteer Run', sublabel: 'Community powered' },
              { value: '50+', label: 'States Reached', sublabel: 'And growing' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
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
