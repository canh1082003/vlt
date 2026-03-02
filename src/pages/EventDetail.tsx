import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, CheckCircle, ArrowLeft, Facebook, Clock, CreditCard, Phone, Mail, Gift, Megaphone } from 'lucide-react';
import { events } from '../data/events';
import './EventDetail.css';

const categoryLabel: Record<string, string> = {
  charity: 'Từ thiện',
  education: 'Giáo dục',
  community: 'Cộng đồng',
  environment: 'Môi trường',
};

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === Number(id));

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!event) {
    return (
      <div className="event-detail-404">
        <h2>Không tìm thấy sự kiện</h2>
        <Link to="/events" className="btn-primary" style={{ display: 'inline-flex', marginTop: '20px' }}>
          <ArrowLeft size={16} /> Quay lại danh sách
        </Link>
      </div>
    );
  }

  const related = events.filter(e => e.season === event.season && e.id !== event.id);

  return (
    <div className="event-detail page-enter">
      {/* HERO */}
      <div className="event-detail__hero">
        <img src={event.image} alt={event.title} className="event-detail__hero-img" />
        <div className="event-detail__hero-overlay" />
        <div className="container event-detail__hero-content">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <button className="event-detail__back" onClick={() => navigate(-1)}>
              <ArrowLeft size={16} /> Quay lại
            </button>
            <span className={`event-detail__cat event-detail__cat--${event.category}`}>
              {categoryLabel[event.category]}
            </span>
            <h1 className="event-detail__title">{event.title}</h1>
            <div className="event-detail__meta">
              <span><Calendar size={16} /> {event.date}</span>
              <span><MapPin size={16} /> {event.location}</span>
              {event.participants && <span><Users size={16} /> {event.participants} tình nguyện viên</span>}
              <span className={`event-detail__status ${event.status === 'upcoming' ? 'status--upcoming' : 'status--done'}`}>
                {event.status === 'upcoming' ? <><Clock size={14} /> Sắp diễn ra</> : <><CheckCircle size={14} /> Hoàn thành</>}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container event-detail__body">
        <div className="event-detail__grid">
          {/* MAIN */}
          <motion.div className="event-detail__main" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>

            {/* Description */}
            <section className="event-detail__section">
              <h2>Về chương trình</h2>
              <p>{event.description}</p>
            </section>

            {/* Activities */}
            {event.activities && (
              <section className="event-detail__section">
                <h2><span className="section-icon"><Gift size={18}/></span> Chương trình gồm các hoạt động</h2>
                <ul className="event-detail__activities">
                  {event.activities.map((a, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.07 }}>
                      <span className="activity-num">{i + 1}</span>
                      <span>{a}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            )}

            {/* Gift Items Table */}
            {event.giftItems && event.giftItems.length > 0 && (
              <section className="event-detail__section">
                <h2><span className="section-icon"><Gift size={18}/></span> Những xuất quà trao tặng</h2>
                <div className="gift-tables">
                  {event.giftItems.map((grp, gi) => (
                    <div key={gi} className="gift-table-wrap">
                      <h3 className="gift-table__title">{grp.group}</h3>
                      <table className="gift-table">
                        <thead>
                          <tr><th>Tên</th><th>Số lượng</th></tr>
                        </thead>
                        <tbody>
                          {grp.items.map((item, ii) => (
                            <tr key={ii}><td>{item.name}</td><td>{item.quantity}</td></tr>
                          ))}
                        </tbody>
                        {grp.total && (
                          <tfoot>
                            <tr><td colSpan={2}>Tổng: <strong>{grp.total}</strong></td></tr>
                          </tfoot>
                        )}
                      </table>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gift image if any */}
            {event.giftImage && (
              <section className="event-detail__section">
                <h2>Thông tin chi tiết</h2>
                <img src={event.giftImage} alt="Chi tiết quà tặng" className="gift-detail-img" />
              </section>
            )}

            {/* Support Call */}
            {event.supportCall && (
              <section className="event-detail__section">
                <h2><span className="section-icon"><Megaphone size={18}/></span> Chương trình kêu gọi ủng hộ</h2>
                <ul className="event-detail__highlights">
                  {event.supportCall.map((s, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07 }}>
                      <CheckCircle size={18} />
                      <span>{s}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            )}

            {/* Contact / Bank */}
            {event.contact && (
              <section className="event-detail__section">
                <h2><span className="section-icon"><CreditCard size={18}/></span> Thông tin chuyển khoản ủng hộ</h2>
                <div className="bank-card">
                  {event.contact.bank && <div className="bank-row"><span>Ngân hàng</span><strong>{event.contact.bank}</strong></div>}
                  {event.contact.stk && <div className="bank-row"><span>Số tài khoản</span><strong className="bank-stk">{event.contact.stk}</strong></div>}
                  {event.contact.owner && <div className="bank-row"><span>Chủ tài khoản</span><strong>{event.contact.owner}</strong></div>}
                  {event.contact.phone && (
                    <div className="bank-row">
                      <span><Phone size={13}/> Liên hệ</span>
                      <a href={`tel:${event.contact.phone}`}>{event.contact.phone}</a>
                    </div>
                  )}
                  {event.contact.email && (
                    <div className="bank-row">
                      <span><Mail size={13}/> Email</span>
                      <a href={`mailto:${event.contact.email}`}>{event.contact.email}</a>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="event-detail__section">
              <h2>Tham gia cùng chúng tôi</h2>
              <p>HTi's Volunteer Club luôn chào đón những tấm lòng nhiệt huyết muốn đóng góp cho cộng đồng. Hãy theo dõi fanpage để cập nhật các chương trình mới nhất!</p>
              <div className="event-detail__ctas">
                <a href="https://www.facebook.com/profile.php?id=100079712665576" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Facebook size={16} /> Theo dõi Facebook CLB
                </a>
                <Link to="/contact" className="btn-secondary-dark">Đăng ký tình nguyện viên</Link>
              </div>
            </section>
          </motion.div>

          {/* SIDEBAR */}
          <motion.aside className="event-detail__sidebar" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.5 }}>
            <div className="detail-info-card">
              <h3>Thông tin chương trình</h3>
              <ul>
                <li>
                  <span className="info-label"><Calendar size={15} /> Thời gian</span>
                  <span className="info-value">{event.organizedDate ?? event.date}</span>
                </li>
                <li>
                  <span className="info-label"><MapPin size={15} /> Địa điểm</span>
                  <span className="info-value">{event.location}</span>
                </li>
                {event.participants && (
                  <li>
                    <span className="info-label"><Users size={15} /> Tình nguyện viên</span>
                    <span className="info-value">{event.participants} người</span>
                  </li>
                )}
                <li>
                  <span className="info-label">Danh mục</span>
                  <span className={`info-badge info-badge--${event.category}`}>{categoryLabel[event.category]}</span>
                </li>
                <li>
                  <span className="info-label">Trạng thái</span>
                  <span className={`info-badge ${event.status === 'upcoming' ? 'info-badge--upcoming' : 'info-badge--done'}`}>
                    {event.status === 'upcoming' ? 'Sắp diễn ra' : 'Hoàn thành'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Highlights */}
            {event.highlights && (
              <div className="detail-info-card">
                <h3>Điểm nổi bật</h3>
                <ul className="sidebar-highlights">
                  {event.highlights.map((h, i) => (
                    <li key={i}><CheckCircle size={14}/><span>{h}</span></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related */}
            {related.length > 0 && (
              <div className="detail-related">
                <h3>Các mùa khác</h3>
                <div className="detail-related__list">
                  {related.map(e => (
                    <Link key={e.id} to={`/events/${e.id}`} className="detail-related__item">
                      <img src={e.image} alt={e.title} />
                      <div>
                        <p className="detail-related__title">{e.title}</p>
                        <p className="detail-related__date"><Calendar size={11} /> {e.organizedDate ?? e.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
