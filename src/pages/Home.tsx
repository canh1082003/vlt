import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Calendar, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { events } from '../data/events';
import { leaders } from '../data/leaders';
import './Home.css';

const stats = [
  { icon: Users, value: '2,500+', label: 'Người theo dõi' },
  { icon: Heart, value: '50+', label: 'Chương trình tình nguyện' },
  { icon: Calendar, value: '3+', label: 'Năm hoạt động' },
  { icon: Star, value: '500+', label: 'Tình nguyện viên' },
];

const fadeUp: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeInOut' as const }
  })
};

function StatCard({ icon: Icon, value, label, index }: { icon: typeof Users; value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="stat-card"
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
    >
      <div className="stat-card__icon">
        <Icon size={28} />
      </div>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__label">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  const upcomingEvents = [...events].reverse().slice(0, 3);
  const featuredLeaders = leaders.slice(0, 3);
  const aboutRef = useRef(null);
  const inViewAbout = useInView(aboutRef, { once: true });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="home page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/images/hero_banner.png" alt="HTI Volunteer Club" className="hero__bg-img" />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="hero__text"
          >
            <span className="section-tag">HTi's Volunteer Club • Đại học Duy Tân</span>
            <h1 className="hero__title">
              Thắp Sáng
              <br />
              <span className="hero__title-gold">Yêu Thương</span>
              <br />
              Cộng Đồng
            </h1>
            <p className="hero__desc">
              Câu lạc bộ tình nguyện của Đoàn Trường Du Lịch – Đại học Duy Tân, 
              nơi những trái tim nhiệt huyết cùng nhau xây dựng cộng đồng tốt đẹp hơn.
            </p>
            <div className="hero__cta">
              <Link to="/contact" className="btn-primary">
                <Heart size={16} />
                Tham gia CLB
              </Link>
              <Link to="/events" className="btn-secondary">
                Xem sự kiện
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
        <a href="#stats" className="hero__scroll">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* STATS */}
      <section className="stats-section" id="stats">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="section about-snippet" ref={aboutRef}>
        <div className="container about-snippet__inner">
          <motion.div
            className="about-snippet__img-side"
            initial={{ opacity: 0, x: -50 }}
            animate={inViewAbout ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="about-snippet__img-wrap">
              <img src="/images/trung_thu_event.png" alt="Hoạt động tình nguyện" />
              <div className="about-snippet__badge">
                <Heart size={20} fill="currentColor" />
                <span>Hành trình ý nghĩa</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="about-snippet__text-side"
            initial={{ opacity: 0, x: 50 }}
            animate={inViewAbout ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-tag">Về chúng tôi</span>
            <h2 className="section-title">
              HTi's Volunteer Club<br />
              <span>— Nơi Yêu Thương Lan Toả</span>
            </h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
              HTi's Volunteer Club (HVC) là câu lạc bộ tình nguyện trực thuộc Đoàn Trường Du Lịch, 
              Đại học Duy Tân – Đà Nẵng. Chúng tôi hoạt động với sứ mệnh kết nối sinh viên 
              có tấm lòng nhân ái, cùng chung tay vì một cộng đồng tốt đẹp hơn.
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '28px' }}>
              Từ những chương trình trao quà Trung Thu cho trẻ em đến các chiến dịch hiến máu, 
              bảo vệ môi trường – mỗi hoạt động của chúng tôi đều mang một thông điệp: 
              <em style={{ color: 'var(--navy)', fontWeight: 600 }}> "Cùng nhau, chúng ta tạo nên sự khác biệt."</em>
            </p>
            <Link to="/about" className="btn-primary" style={{ display: 'inline-flex' }}>
              Tìm hiểu thêm
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="section events-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Các chương trình</span>
            <h2 className="section-title">Sự Kiện <span>Nổi Bật</span></h2>
            <p className="section-desc">Những chương trình tình nguyện tiêu biểu mang dấu ấn của HTi's Volunteer Club</p>
          </div>
          <div className="events-preview__grid">
            {upcomingEvents.map((ev, i) => (
              <motion.div
                key={ev.id}
                className="event-preview-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="event-preview-card__img">
                  <img src={ev.image} alt={ev.title} />
                  <span className={`event-preview-card__badge event-preview-card__badge--${ev.category}`}>
                    {ev.category === 'charity' ? 'Từ thiện' : ev.category === 'education' ? 'Giáo dục' : ev.category === 'community' ? 'Cộng đồng' : 'Môi trường'}
                  </span>
                </div>
                <div className="event-preview-card__body">
                  <p className="event-preview-card__date">
                    <Calendar size={14} />
                    {ev.date} • {ev.location}
                  </p>
                  <h3 className="event-preview-card__title">{ev.title}</h3>
                  <p className="event-preview-card__desc">{ev.description.slice(0, 120)}...</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/events" className="btn-primary" style={{ display: 'inline-flex' }}>
              Xem tất cả sự kiện
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERS SNIPPET */}
      <section className="section leaders-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ban Lãnh Đạo</span>
            <h2 className="section-title">Ban <span>Chủ Nhiệm</span></h2>
            <p className="section-desc">Những con người nhiệt huyết dẫn dắt và định hướng cho CLB</p>
          </div>
          <div className="leaders-preview__grid">
            {featuredLeaders.map((l, i) => (
              <motion.div
                key={l.id}
                className="leader-preview-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <div className="leader-preview-card__img">
                  <img src={l.avatar} alt={l.name} />
                </div>
                <div className="leader-preview-card__body">
                  <span className="leader-preview-card__role">{l.role}</span>
                  <h3 className="leader-preview-card__name">{l.name}</h3>
                  <p className="leader-preview-card__gen">{l.generation}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/leaders" className="btn-primary" style={{ display: 'inline-flex' }}>
              Xem toàn bộ ban chủ nhiệm
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div className="cta-banner__text">
            <h2>Bạn muốn tạo ra sự thay đổi?</h2>
            <p>Hãy cùng chúng tôi lan tỏa yêu thương và xây dựng cộng đồng tốt đẹp hơn</p>
          </div>
          <div className="cta-banner__cta">
            <Link to="/contact" className="btn-primary">
              <Heart size={16} />
              Đăng ký tình nguyện viên
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=100079712665576"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Theo dõi Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
