import { Heart, Package, Clock, Share2, CreditCard, Mail, ArrowRight, CheckCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n';

export function GetInvolved() {
  const { t } = useLanguage();

  const ways = [
    {
      icon: CreditCard,
      title: t('donateOnline'),
      description: t('donateOnlineDesc'),
      action: t('donateNow'),
      color: 'from-sunset-orange to-sunset-coral',
      bgColor: 'bg-sunset-orange/10',
      iconColor: 'text-sunset-orange',
      features: [t('goesToBooks'), t('taxDeductible'), t('securePayment')],
    },
    {
      icon: Mail,
      title: t('mailACheck'),
      description: t('mailACheckDesc'),
      action: t('getAddress'),
      color: 'from-sky-blue to-ocean-teal',
      bgColor: 'bg-sky-blue/10',
      iconColor: 'text-sky-blue',
      address: '505 Yorkshire Cove, Harrison, AR 72601',
    },
    {
      icon: Package,
      title: t('donateBooks'),
      description: t('donateBooksDesc'),
      action: t('learnMore'),
      color: 'from-forest-green to-ocean-teal',
      bgColor: 'bg-forest-green/10',
      iconColor: 'text-forest-green',
      features: [t('newOrLikeNew'), t('childrensBooks'), t('dropOffOrShip')],
    },
    {
      icon: Clock,
      title: t('volunteer'),
      description: t('volunteerDesc'),
      action: t('getInvolved'),
      color: 'from-sunset-pink to-mountain-purple',
      bgColor: 'bg-sunset-pink/10',
      iconColor: 'text-sunset-pink',
      features: [t('flexibleHours'), t('youthWelcome'), t('makeAnImpact')],
    },
  ];

  const impactNumbers = [
    { value: '$10', description: t('provides2to3Books') },
    { value: '$25', description: t('createsMiniLibrary') },
    { value: '$50', description: t('supportsClassroom') },
    { value: '$100', description: t('fundsCommunityEvent') },
  ];

  return (
    <section id="get-involved" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sunset-orange/10 rounded-full mb-6">
            <Heart className="w-4 h-4 text-sunset-orange" />
            <span className="text-sm font-semibold text-sunset-orange uppercase tracking-wide">{t('getInvolved')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-6">
            {t('getInvolvedTitle')}{' '}
            <span className="text-gradient">{t('giftOfReading')}</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            {t('getInvolvedSubtitle')}
          </p>
        </div>

        {/* Ways to Help Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="group relative bg-warm-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${way.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 ${way.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${way.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-warm-gray-900 mb-2">{way.title}</h3>
                    <p className="text-warm-gray-600 mb-4">{way.description}</p>

                    {/* Features or Address */}
                    {way.features && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {way.features.map((feature, idx) => (
                          <span key={idx} className="flex items-center gap-1 text-sm text-warm-gray-500">
                            <CheckCircle className="w-3 h-3 text-forest-green" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    {way.address && (
                      <div className="bg-white rounded-xl p-3 mb-4 text-sm text-warm-gray-700 font-medium">
                        {way.address}
                      </div>
                    )}

                    <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${way.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
                      {way.action}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Numbers */}
        <div className="bg-gradient-to-r from-warm-gray-900 via-warm-gray-800 to-warm-gray-900 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-3">{t('yourDonationAtWork')}</h3>
            <p className="text-warm-gray-400">{t('donationImpactSubtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactNumbers.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-golden-yellow mb-2">{item.value}</div>
                <p className="text-warm-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-sunset-orange via-sunset-coral to-sunset-pink rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('readyToMakeImpact')}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('impactCTAText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-sunset-orange px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Heart className="w-5 h-5" />
                {t('donateNow')}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                {t('contactUs')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>{t('nonprofit')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>{t('taxDeductible')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>{t('oneHundredPercentVolunteer')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4">
            <Share2 className="w-5 h-5 text-warm-gray-400" />
            <span className="text-warm-gray-600">{t('shareOurMission')}</span>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 bg-warm-gray-100 rounded-full flex items-center justify-center hover:bg-sunset-orange hover:text-white transition-all duration-300 text-warm-gray-600"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                className="w-10 h-10 bg-warm-gray-100 rounded-full flex items-center justify-center hover:bg-sunset-orange hover:text-white transition-all duration-300 text-warm-gray-600"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                className="w-10 h-10 bg-warm-gray-100 rounded-full flex items-center justify-center hover:bg-sunset-orange hover:text-white transition-all duration-300 text-warm-gray-600"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
