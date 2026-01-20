import { BookMarked, Home, School, Gift, TreePine, Calendar, Users, Shield, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Programs() {
  const programs = [
    {
      icon: School,
      title: 'School Book Drives',
      description: 'We partner with local schools to ensure every classroom has a diverse, engaging library that inspires young readers and supports teachers.',
      color: 'from-sky-blue to-ocean-teal',
      bgColor: 'bg-sky-blue/10',
      iconColor: 'text-sky-blue',
      features: ['Classroom libraries', 'Teacher resources', 'Reading corners'],
    },
    {
      icon: Home,
      title: 'Home Libraries',
      description: 'Building personal libraries for families by providing book collections that children can call their own and treasure forever.',
      color: 'from-sunset-orange to-sunset-coral',
      bgColor: 'bg-sunset-orange/10',
      iconColor: 'text-sunset-orange',
      features: ['Family book sets', 'Age-appropriate selections', 'Reading guides'],
    },
    {
      icon: BookMarked,
      title: 'Reading Programs',
      description: 'Interactive reading sessions and literacy programs that help children develop a lifelong love of reading through fun activities.',
      color: 'from-sunset-pink to-mountain-purple',
      bgColor: 'bg-sunset-pink/10',
      iconColor: 'text-sunset-pink',
      features: ['Reading in the Park', 'Story time events', 'Literacy workshops'],
    },
    {
      icon: Gift,
      title: 'Book Giveaways',
      description: 'Community events where children can select their own books to take home, making reading a personal and exciting experience.',
      color: 'from-forest-green to-ocean-teal',
      bgColor: 'bg-forest-green/10',
      iconColor: 'text-forest-green',
      features: ['Holiday events', 'Community fairs', 'School visits'],
    },
  ];

  const specialPrograms = [
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Working with Arkansas State Police to provide comfort books for children in crisis situations.',
      image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    },
    {
      icon: Calendar,
      title: 'Christmas Giveaway',
      description: 'Annual holiday events where volunteers help children select free books as special gifts.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    },
    {
      icon: TreePine,
      title: 'Reading in the Park',
      description: 'Partnership with Boone County Imagination Library for outdoor reading sessions.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=600',
    },
  ];

  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden bg-warm-gray-50">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Main Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-warm-gray-900/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color}`} />

                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 ${program.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${program.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-warm-gray-900 mb-3">{program.title}</h3>
                    <p className="text-warm-gray-600 leading-relaxed mb-4">{program.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${program.bgColor} ${program.iconColor} text-sm font-medium rounded-full`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className={`w-6 h-6 ${program.iconColor}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Programs Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-warm-gray-900/5">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-warm-gray-900 mb-4">
              Special Initiatives
            </h3>
            <p className="text-warm-gray-600 max-w-2xl mx-auto">
              Beyond our core programs, we partner with organizations to reach children in unique and impactful ways.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden card-hover"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-gray-900/80 via-warm-gray-900/40 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="text-lg font-bold text-white mb-1">{program.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{program.description}</p>
                  </div>
                </div>
              );
            })}
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white font-semibold rounded-full shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Request Books
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
