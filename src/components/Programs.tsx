import { BookMarked, Home, School, Gift } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: School,
      title: 'School Book Drives',
      description: 'We partner with local schools to ensure every classroom has a diverse, engaging library that inspires young readers.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Home,
      title: 'Home Libraries',
      description: 'Building personal libraries for families by providing book collections that children can call their own.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: BookMarked,
      title: 'Reading Programs',
      description: 'Interactive reading sessions and literacy programs that help children develop a lifelong love of reading.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Gift,
      title: 'Book Giveaways',
      description: 'Community events where children can select their own books to take home and treasure forever.',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're reaching children through multiple initiatives designed to make books accessible and reading exciting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${program.color} mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
