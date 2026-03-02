import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart, Send, Facebook, Mail, MapPin, Phone,
  CheckCircle, User, MessageSquare, Loader2, AlertCircle
} from 'lucide-react';
import './Contact.css';

const ROLES = [
  { value: 'volunteer', emoji: '🤝', label: 'Tình nguyện viên' },
  { value: 'member',    emoji: '🌟', label: 'Thành viên CLB' },
  { value: 'partner',   emoji: '🏢', label: 'Đối tác / Nhà tài trợ' },
  { value: 'other',     emoji: '💬', label: 'Khác' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'volunteer',
    message: '',
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const roleLabel = ROLES.find(r => r.value === form.role)?.label ?? form.role;
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.phone,
          role:    roleLabel,
          message: form.message,
        }),
      });
      if (res.ok) { setStatus('success'); } else { setStatus('error'); }
    } catch {
      setStatus('error');
    }
  };




  return (
    <div className="contact-page page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
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
          {/* INFO SIDE */}
          <motion.div className="contact-info" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
                { icon: Mail,   label: 'Email',   value: 'htivolunteerclub@gmail.com' },
                { icon: Phone,  label: 'Điện thoại', value: '0792 284 533' },
              ].map(item => (
                <div key={item.label} className="contact-info__item">
                  <div className="contact-info__icon"><item.icon size={20} /></div>
                  <div>
                    <p className="contact-info__label">{item.label}</p>
                    <p className="contact-info__value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-info__social">
              <p className="contact-info__label" style={{ marginBottom: '12px' }}>Mạng xã hội</p>
              <a href="https://www.facebook.com/profile.php?id=100079712665576" target="_blank" rel="noopener noreferrer" className="contact-info__fb">
                <Facebook size={18} /> HTi's Volunteer Club – Facebook
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
                  <CheckCircle size={16} /><span>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.div className="contact-form-wrap" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" className="contact-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="contact-success__icon"><Heart size={40} fill="currentColor" /></div>
                  <h3>Cảm ơn bạn đã đăng ký!</h3>
                  <p>Chúng tôi đã nhận được thông tin của bạn. Ban chủ nhiệm sẽ liên hệ trong thời gian sớm nhất. Hẹn gặp bạn tại các hoạt động của HTi's Volunteer Club!</p>
                  <a href="https://www.facebook.com/profile.php?id=100079712665576" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', marginTop: '20px' }}>
                    <Facebook size={16} /> Theo dõi Facebook CLB
                  </a>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="contact-form__title">Đăng Ký Tham Gia</h3>
                  <p className="contact-form__subtitle">Điền thông tin bên dưới, chúng tôi sẽ liên hệ với bạn qua email sớm nhất.</p>

                  {/* Role tabs */}
                  <div className="contact-form__type-select">
                    {ROLES.map(opt => (
                      <button key={opt.value} type="button"
                        className={`type-btn ${form.role === opt.value ? 'type-btn--active' : ''}`}
                        onClick={() => set('role', opt.value)}>
                        {opt.emoji} {opt.label}
                      </button>
                    ))}
                  </div>

                  {/* Name */}
                  <div className="contact-form__group">
                    <label><User size={14} /> Họ và tên <span className="required">*</span></label>
                    <input type="text" name="name" placeholder="Nguyễn Văn A"
                      value={form.name} onChange={e => set('name', e.target.value)} required />
                  </div>

                  {/* Email + Phone row */}
                  <div className="contact-form__row">
                    <div className="contact-form__group">
                      <label><Mail size={14} /> Email <span className="required">*</span></label>
                      <input type="email" name="email" placeholder="example@gmail.com"
                        value={form.email} onChange={e => set('email', e.target.value)} required />
                    </div>
                    <div className="contact-form__group">
                      <label><Phone size={14} /> Số điện thoại</label>
                      <input type="tel" name="phone" placeholder="0xxx xxx xxx"
                        value={form.phone} onChange={e => set('phone', e.target.value)} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="contact-form__group">
                    <label><MessageSquare size={14} /> Lý do / Lời nhắn</label>
                    <textarea name="message" rows={4}
                      placeholder="Chia sẻ lý do bạn muốn tham gia HTi's Volunteer Club..."
                      value={form.message} onChange={e => set('message', e.target.value)} />
                  </div>

                  {/* Error notice */}
                  {status === 'error' && (
                    <div className="contact-form__error">
                      <AlertCircle size={16} />
                      Gửi thất bại. Vui lòng thử lại hoặc liên hệ qua Facebook.
                    </div>
                  )}

                  <button type="submit" className="btn-primary contact-form__submit" disabled={status === 'sending'}>
                    {status === 'sending'
                      ? <><Loader2 size={16} className="spin" /> Đang gửi...</>
                      : <><Send size={16} /> Gửi đăng ký</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
