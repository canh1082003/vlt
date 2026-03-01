import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Facebook, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'volunteer' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Kết nối</span>
            <h1 className="page-hero__title">Tham Gia & Liên Hệ</h1>
            <p className="page-hero__desc">
              Hãy trở thành một phần của gia đình HTi's Volunteer Club. Chúng tôi luôn chào đón bạn!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Info Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Liên hệ</span>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Cùng Nhau <span>Tạo Sự Thay Đổi</span>
            </h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '32px' }}>
              Bạn muốn tham gia tình nguyện, hợp tác hay chỉ đơn giản là muốn tìm hiểu thêm về CLB? 
              Chúng tôi luôn sẵn sàng lắng nghe!
            </p>

            <div className="contact-info__items">
              {[
                { icon: MapPin, label: 'Địa chỉ', value: 'Đại học Duy Tân, 254 Nguyễn Văn Linh, Đà Nẵng' },
                { icon: Mail, label: 'Email', value: 'htivolunteer@duytan.edu.vn' },
                { icon: Phone, label: 'Điện thoại', value: '0236 xxx xxxx' },
              ].map(item => (
                <div key={item.label} className="contact-info__item">
                  <div className="contact-info__icon">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="contact-info__label">{item.label}</p>
                    <p className="contact-info__value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-info__social">
              <p className="contact-info__label" style={{ marginBottom: '12px' }}>Mạng xã hội</p>
              <a
                href="https://www.facebook.com/profile.php?id=100079712665576"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info__fb"
              >
                <Facebook size={18} />
                HTi's Volunteer Club - Facebook
              </a>
            </div>

            <div className="contact-info__benefits">
              <p className="contact-info__label" style={{ marginBottom: '16px' }}>Lợi ích khi tham gia</p>
              {[
                'Phát triển kỹ năng lãnh đạo và làm việc nhóm',
                'Tích lũy giờ tình nguyện và chứng nhận hoạt động',
                'Kết nối với cộng đồng sinh viên năng động',
                'Trải nghiệm các hoạt động ý nghĩa cho cộng đồng',
                'Hỗ trợ phát triển bản thân và nghề nghiệp',
              ].map((b, i) => (
                <div key={i} className="contact-info__benefit-item">
                  <CheckCircle size={16} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <Heart size={40} fill="currentColor" />
                </div>
                <h3>Cảm ơn bạn đã đăng ký!</h3>
                <p>
                  Chúng tôi đã nhận được thông tin của bạn. Ban chủ nhiệm sẽ liên hệ với bạn 
                  trong thời gian sớm nhất. Hẹn gặp bạn tại các hoạt động của HTi's Volunteer Club!
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=100079712665576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: 'inline-flex', marginTop: '20px' }}
                >
                  <Facebook size={16} />
                  Theo dõi Facebook CLB
                </a>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Đăng Ký Tham Gia</h3>

                <div className="contact-form__type-select">
                  {[
                    { value: 'volunteer', label: '🤝 Tình nguyện viên' },
                    { value: 'member', label: '🌟 Thành viên CLB' },
                    { value: 'partner', label: '🤝 Đối tác' },
                    { value: 'other', label: '💬 Khác' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`type-btn ${form.type === opt.value ? 'type-btn--active' : ''}`}
                      onClick={() => setForm(f => ({ ...f, type: opt.value }))}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="contact-form__group">
                  <label>Họ và tên *</label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label>Email *</label>
                    <input
                      type="email"
                      placeholder="example@duytan.edu.vn"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label>Số điện thoại</label>
                    <input
                      type="tel"
                      placeholder="0xxx xxx xxx"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label>Lý do muốn tham gia / Lời nhắn</label>
                  <textarea
                    rows={4}
                    placeholder="Chia sẻ với chúng tôi lý do bạn muốn tham gia HTi's Volunteer Club..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>

                <button type="submit" className="btn-primary contact-form__submit">
                  <Send size={16} />
                  Gửi đăng ký
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
