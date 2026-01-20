import { DollarSign, Package, Clock, Share2 } from 'lucide-react';

export function GetInvolved() {
  const ways = [
    {
      icon: DollarSign,
      title: 'Donate Funds',
      description: 'Your financial contribution helps us purchase and distribute books to children in need.',
      action: 'Make a Donation',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      icon: Package,
      title: 'Donate Books',
      description: 'Have gently used children\'s books? We\'ll make sure they find a loving new home.',
      action: 'Learn How to Donate',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Clock,
      title: 'Volunteer',
      description: 'Join our team of volunteers who sort books, organize events, and read with children.',
      action: 'Sign Up to Volunteer',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      icon: Share2,
      title: 'Spread the Word',
      description: 'Follow us on social media and help us reach more families and supporters.',
      action: 'Share Our Mission',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            There are many ways you can help us bring the joy of reading to more children. Every contribution makes a difference!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-sm mb-4">
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{way.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{way.description}</p>
                </div>
                <button className={`mt-auto ${way.color} text-white px-6 py-3 rounded-full transition-colors font-medium`}>
                  {way.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Your support today can help a child discover the magic of reading tomorrow.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
