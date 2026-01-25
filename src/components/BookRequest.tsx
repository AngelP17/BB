import { useState } from 'react';
import { BookOpen, Send, CheckCircle, School, Users, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n';

export function BookRequest() {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    eventDate: '',
    expectedChildren: '',
    address: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        organizationType: '',
        organizationName: '',
        contactName: '',
        email: '',
        phone: '',
        eventDate: '',
        expectedChildren: '',
        address: '',
        message: '',
      });
    }, 3000);
  };

  const organizationTypes = [
    { value: 'school', label: t('school'), icon: School },
    { value: 'nonprofit', label: t('nonprofitType'), icon: Users },
    { value: 'community', label: t('communityEvent'), icon: Calendar },
    { value: 'other', label: t('other'), icon: BookOpen },
  ];

  const benefits = [
    t('brandNewBooksNoCost'),
    t('ageAppropriateSelections'),
    t('flexibleDelivery'),
    t('supportForLiteracy'),
  ];

  return (
    <section id="book-request" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-30" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-orange/10 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-sunset-orange" />
              <span className="text-sm font-semibold text-sunset-orange uppercase tracking-wide">{t('requestBooksTitle')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
              {t('needBooksForEvent')}{' '}
              <span className="text-gradient">{t('eventOrProgram')}</span>
            </h2>

            <p className="text-lg text-warm-gray-600 mb-8 leading-relaxed">
              {t('bookRequestIntro')}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest-green/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-forest-green" />
                  </div>
                  <span className="text-warm-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-golden-yellow/10 rounded-2xl p-6 border border-golden-yellow/20">
              <p className="text-warm-gray-700">
                <span className="font-semibold text-warm-gray-900">{t('note')}</span> {t('bookAvailabilityNote')}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-warm-gray-50 rounded-3xl p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-forest-green" />
                </div>
                <h3 className="text-2xl font-bold text-warm-gray-900 mb-3">{t('requestSubmitted')}</h3>
                <p className="text-warm-gray-600">
                  {t('requestReceivedMessage')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Organization Type */}
                <div>
                  <label className="block text-sm font-semibold text-warm-gray-900 mb-3">
                    {t('organizationType')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {organizationTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, organizationType: type.value })}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${formData.organizationType === type.value
                              ? 'border-sunset-orange bg-sunset-orange/5 text-sunset-orange'
                              : 'border-warm-gray-200 hover:border-warm-gray-300 text-warm-gray-700'
                            }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Organization Name */}
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                    {t('organizationName')}
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                    placeholder={t('enterOrganizationName')}
                    required
                  />
                </div>

                {/* Contact Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                      {t('contactName')}
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                      placeholder={t('yourNamePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Event Date & Expected Children */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                      {t('eventDate')}
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="expectedChildren" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                      {t('expectedChildren')}
                    </label>
                    <input
                      type="number"
                      id="expectedChildren"
                      value={formData.expectedChildren}
                      onChange={(e) => setFormData({ ...formData, expectedChildren: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                      placeholder="100"
                      required
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                    {t('eventLocationAddress')}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray-400" />
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all"
                      placeholder={t('fullAddress')}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-warm-gray-900 mb-2">
                    {t('tellUsAboutEvent')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-xl focus:ring-2 focus:ring-sunset-orange/20 focus:border-sunset-orange outline-none transition-all resize-none"
                    placeholder={t('describeEvent')}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sunset-orange to-sunset-coral text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-sunset-orange/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  {t('submitRequest')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
