import { Calendar, MapPin, ArrowRight, Clock, Users } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from './ScrollReveal';

interface Event {
  date: { month: string; day: string };
  title: string;
  description: string;
  location: string;
  time: string;
  attendees?: number;
}

const upcomingEvents: Event[] = [
  {
    date: { month: 'MAR', day: '15' },
    title: 'Book Fair at Harrison Elementary',
    description: 'Come select free books for your children and enjoy reading activities.',
    location: 'Harrison Elementary School',
    time: '10:00 AM - 2:00 PM',
    attendees: 150,
  },
  {
    date: { month: 'APR', day: '03' },
    title: 'Reading in the Park',
    description: 'Join us for outdoor storytime and book giveaways at the Boone County Library.',
    location: 'Boone County Library Park',
    time: '1:00 PM - 4:00 PM',
    attendees: 75,
  },
  {
    date: { month: 'APR', day: '20' },
    title: 'Little Free Library Restocking Day',
    description: 'Help us restock Little Free Libraries across Harrison with fresh books.',
    location: 'Various Locations',
    time: '9:00 AM - 12:00 PM',
    attendees: 30,
  },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-warm-gray-100 hover:border-sunset-orange/20"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Date Badge */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-sunset-orange/10 to-sunset-coral/10 rounded-2xl flex flex-col items-center justify-center group-hover:from-sunset-orange group-hover:to-sunset-coral transition-all duration-300">
            <span className="text-xs font-bold text-sunset-orange group-hover:text-white uppercase tracking-wide transition-colors">
              {event.date.month}
            </span>
            <span className="text-2xl font-bold text-warm-gray-900 group-hover:text-white transition-colors">
              {event.date.day}
            </span>
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-warm-gray-900 mb-2 group-hover:text-sunset-orange transition-colors">
            {event.title}
          </h3>
          <p className="text-warm-gray-600 mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-warm-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sunset-orange" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sunset-orange" />
              <span>{event.time}</span>
            </div>
            {event.attendees && (
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-sunset-orange" />
                <span>{event.attendees}+ expected</span>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0 self-center">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-sunset-orange/10 text-sunset-orange rounded-full font-medium hover:bg-sunset-orange hover:text-white transition-all duration-300 group/btn">
            <span>Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-sunset-orange/5 to-transparent rotate-45" />
      </div>
    </div>
  );
}

export function Events() {
  return (
    <section id="events" className="relative py-20 bg-gradient-to-b from-cream-white to-orange-50/30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sunset-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sunset-orange/10 rounded-full text-sunset-orange text-sm font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4" />
            Join Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-gray-900 mb-4">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto">
            Be part of our mission to spread the love of reading. Join us at these upcoming events in your community.
          </p>
        </ScrollReveal>

        {/* Events List */}
        <StaggerContainer className="space-y-4" staggerDelay={150}>
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </StaggerContainer>

        {/* View All Events Button */}
        <ScrollReveal delay={400} className="text-center mt-10">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-warm-gray-800 rounded-full font-semibold border-2 border-warm-gray-200 hover:border-sunset-orange hover:text-sunset-orange shadow-lg hover:shadow-xl transition-all duration-300">
            <Calendar className="w-5 h-5" />
            <span>View Full Calendar</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
