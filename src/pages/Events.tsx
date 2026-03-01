import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle, Clock } from 'lucide-react';
import { events } from '../data/events';
import type { Event } from '../data/events';
import './Events.css';

type Filter = 'all' | 'upcoming' | 'completed' | 'charity' | 'education' | 'community' | 'environment';

const categoryLabel: Record<string, string> = {
  charity: 'Từ thiện',
  education: 'Giáo dục',
  community: 'Cộng đồng',
  environment: 'Môi trường',
};

const filterButtons: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'upcoming', label: 'Sắp tới' },
  { key: 'completed', label: 'Đã diễn ra' },
  { key: 'charity', label: 'Từ thiện' },
  { key: 'education', label: 'Giáo dục' },
  { key: 'community', label: 'Cộng đồng' },
  { key: 'environment', label: 'Môi trường' },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      className="event-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <div className="event-card__img-wrap">
        <img src={event.image} alt={event.title} />
        <div className="event-card__badges">
          <span className={`event-card__cat event-card__cat--${event.category}`}>
            {categoryLabel[event.category]}
          </span>
          <span className={`event-card__status ${event.status === 'upcoming' ? 'event-card__status--upcoming' : 'event-card__status--done'}`}>
            {event.status === 'upcoming' ? <><Clock size={11} /> Sắp diễn ra</> : <><CheckCircle size={11} /> Hoàn thành</>}
          </span>
        </div>
      </div>
      <div className="event-card__body">
        <h3 className="event-card__title">{event.title}</h3>
        <div className="event-card__meta">
          <span><Calendar size={14} /> {event.date}</span>
          <span><MapPin size={14} /> {event.location}</span>
          {event.participants && <span><Users size={14} /> {event.participants} TNV</span>}
        </div>
        <p className="event-card__desc">{event.description}</p>
        {event.highlights && (
          <ul className="event-card__highlights">
            {event.highlights.map((h, i) => (
              <li key={i}>
                <CheckCircle size={13} />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [filter, setFilter] = useState<Filter>('all');
  const [filtered, setFiltered] = useState<Event[]>(events);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFiltered(events);
    } else if (filter === 'upcoming' || filter === 'completed') {
      setFiltered(events.filter(e => e.status === (filter === 'completed' ? 'completed' : 'upcoming')));
    } else {
      setFiltered(events.filter(e => e.category === filter));
    }
  }, [filter]);

  return (
    <div className="events-page page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Hoạt động</span>
            <h1 className="page-hero__title">Sự Kiện & Chương Trình</h1>
            <p className="page-hero__desc">
              Tổng hợp các chương trình tình nguyện đã và sắp diễn ra của HTi's Volunteer Club
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="events-filter">
            {filterButtons.map(btn => (
              <button
                key={btn.key}
                className={`events-filter__btn ${filter === btn.key ? 'events-filter__btn--active' : ''}`}
                onClick={() => setFilter(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filtered.length > 0 ? (
            <div className="events-grid">
              {filtered.map((ev, i) => (
                <EventCard key={ev.id} event={ev} index={i} />
              ))}
            </div>
          ) : (
            <div className="events-empty">
              <p>Không có sự kiện nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
