import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Mail } from 'lucide-react';
import { leaders } from '../data/leaders';
import './Leaders.css';

export default function Leaders() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="leaders-page page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Lãnh đạo CLB</span>
            <h1 className="page-hero__title">Ban Chủ Nhiệm</h1>
            <p className="page-hero__desc">
              Gặp gỡ những con người nhiệt huyết đứng đầu và định hướng cho HTi's Volunteer Club
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nhiệm kỳ 2023 - 2024</span>
            <h2 className="section-title">Đội Ngũ <span>Ban Chủ Nhiệm</span></h2>
            <p className="section-desc">
              Những cá nhân xuất sắc, tận tâm và đầy nhiệt huyết cùng nhau dẫn dắt CLB
            </p>
          </div>

          <div className="leaders-grid">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.id}
                className="leader-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="leader-card__img-wrap">
                  <img src={leader.avatar} alt={leader.name} className="leader-card__img" />
                  <div className="leader-card__img-overlay">
                    <div className="leader-card__social">
                      {leader.facebook && (
                        <a href={leader.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook size={18} />
                        </a>
                      )}
                      <a href="mailto:htivolunteer@duytan.edu.vn">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="leader-card__body">
                  <span className="leader-card__role">{leader.role}</span>
                  <h3 className="leader-card__name">{leader.name}</h3>
                  <p className="leader-card__gen">{leader.generation}</p>
                  <p className="leader-card__desc">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="section leaders-join">
        <div className="container leaders-join__inner">
          <div className="leaders-join__img">
            <img src="/images/avatar_placeholder.png" alt="Tham gia ban chủ nhiệm" />
          </div>
          <div className="leaders-join__text">
            <span className="section-tag">Tuyển dụng</span>
            <h2 className="section-title">Bạn Muốn Trở Thành <span>Thành Viên BCN?</span></h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>
              Nếu bạn có tinh thần nhiệt huyết, muốn lãnh đạo và đóng góp cho cộng đồng, 
              hãy ứng tuyển vào Ban Chủ Nhiệm của HTi's Volunteer Club. 
              Chúng tôi luôn chào đón những tài năng mới!
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100079712665576"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              <Facebook size={16} />
              Theo dõi để cập nhật tuyển dụng
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
