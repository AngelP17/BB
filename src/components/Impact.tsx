import { ImageWithFallback } from './figma/ImageWithFallback';

export function Impact() {
  const stats = [
    { number: '10,000+', label: 'Books Distributed', subtext: 'And counting!' },
    { number: '50+', label: 'Partner Schools', subtext: 'Across the community' },
    { number: '2,500+', label: 'Children Reached', subtext: 'This year alone' },
    { number: '95%', label: 'Reading Improvement', subtext: 'In partner programs' }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Making a Real Difference</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Through your support, we're transforming lives and creating lasting change in our communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-purple-100">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607823477653-e2c3980acb86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxpYnJhcnklMjBib29rc3xlbnwxfHx8fDE3Njc2NTEwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Child in library with books"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765223111660-cdf94396832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZWR1Y2F0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY3NjUxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Kids learning and reading"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
