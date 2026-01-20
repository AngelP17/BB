import { BookOpen, Heart, Users, Sparkles } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: BookOpen,
      title: 'Literacy for All',
      description: 'We believe every child should have access to books that inspire imagination and learning.'
    },
    {
      icon: Heart,
      title: 'Community Love',
      description: 'Building stronger communities through the power of reading and shared stories.'
    },
    {
      icon: Users,
      title: 'Together We Grow',
      description: 'Partnering with families, schools, and volunteers to reach more children every day.'
    },
    {
      icon: Sparkles,
      title: 'Bright Futures',
      description: 'Creating opportunities for children to discover their potential through reading.'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Bright Beginnings Books, we're dedicated to putting books in the hands of children who need them most. 
            We believe that literacy is the foundation of success, and every child deserves the opportunity to 
            discover the joy of reading.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
