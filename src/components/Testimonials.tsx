import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Thanks to Bright Beginnings Books, my daughter now has her own collection of books. She reads every night before bed and her confidence has grown so much!",
      author: "Sarah Martinez",
      role: "Parent"
    },
    {
      quote: "The book drive at our school was incredible. Every child got to choose books they were excited about. Thank you for making literacy accessible!",
      author: "Michael Chen",
      role: "Elementary School Teacher"
    },
    {
      quote: "Volunteering with Bright Beginnings Books has been so rewarding. Seeing children's faces light up when they receive books is priceless.",
      author: "Emily Johnson",
      role: "Volunteer"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stories from Our Community</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the families, educators, and volunteers who are part of our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <Quote className="w-10 h-10 text-purple-200 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
