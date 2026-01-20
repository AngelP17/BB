import { Mail, MapPin, Phone, Instagram, Facebook, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@brightbeginningsbooks.org',
      secondary: 'We respond within 24-48 hours',
      color: 'from-sunset-orange to-sunset-coral',
    },
    {
      icon: MapPin,
      title: 'Mailing Address',
      primary: '505 Yorkshire Cove',
      secondary: 'Harrison, AR 72601',
      color: 'from-sky-blue to-ocean-teal',
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '(870) 123-4567',
      secondary: 'Mon-Fri, 9am-5pm CST',
      color: 'from-forest-green to-ocean-teal',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-warm-gray-50">
      {/* Background */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-warm-gray-900/5 mb-6">
            <MessageSquare className="w-4 h-4 text-sunset-orange" />
            <span className="text-sm font-semibold text-warm-gray-700">Contact Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Have questions, want to partner with us, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-5 shadow-lg shadow-warm-gray-900/5 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-warm-gray-900 mb-1">{info.title}</h3>
                        <p className="text-warm-gray-800">{info.primary}</p>
                        <p className="text-sm text-warm-gray-500">{info.secondary}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-warm-gray-900/5">
              <h3 className="font-semibold text-warm-gray-900 mb-4">Follow Our Journey</h3>
              <p className="text-warm-gray-600 text-sm mb-4">
                Stay updated on our latest book drives, events, and impact stories.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-warm-gray-100 rounded-xl flex items-center justify-center hover:bg-sunset-orange hover:text-white text-warm-gray-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* EIN Info */}
            <div className="bg-gradient-to-br from-sunset-orange/10 to-sunset-pink/10 rounded-2xl p-6 border border-sunset-orange/20">
              <h3 className="font-semibold text-warm-gray-900 mb-2">Nonprofit Information</h3>
              <p className="text-warm-gray-600 text-sm">
                Bright Beginnings Books is a registered 501(c)(3) nonprofit organization.
              </p>
              <p className="text-sm mt-2">
                <span className="text-warm-gray-500">EIN:</span>{' '}
                <span className="font-mono font-semibold text-warm-gray-800">86-2430919</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-warm-gray-900/5">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-forest-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-warm-gray-600">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-warm-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-warm-gray-50 border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-warm-gray-50 border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-warm-gray-50 border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="donation">Donation Question</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="book-request">Book Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 bg-warm-gray-50 border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
