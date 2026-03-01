import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, Award, ArrowRight } from 'lucide-react';
import './About.css';

const values = [
  { icon: Heart, title: 'Yêu Thương', desc: 'Lan tỏa yêu thương và sự đồng cảm tới mọi người, đặc biệt những hoàn cảnh khó khăn.' },
  { icon: Users, title: 'Đoàn Kết', desc: 'Xây dựng tinh thần đoàn kết, hợp tác và cùng nhau tạo nên sức mạnh tập thể.' },
  { icon: Target, title: 'Trách Nhiệm', desc: 'Sống có trách nhiệm với bản thân, cộng đồng và xã hội xung quanh.' },
  { icon: Award, title: 'Chuyên Nghiệp', desc: 'Hoạt động bài bản, có tổ chức và không ngừng học hỏi, phát triển bản thân.' },
];

const milestones = [
  { year: '2021', title: 'Thành lập CLB', desc: 'HTi\'s Volunteer Club được thành lập với tầm nhìn kết nối sinh viên có tấm lòng nhân ái.' },
  { year: '2022', title: 'Trung Thu Cho Em 1', desc: 'Tổ chức thành công chương trình Trung Thu đầu tiên, trao 200 phần quà cho trẻ em có hoàn cảnh khó khăn.' },
  { year: '2023', title: 'Mở rộng quy mô', desc: 'CLB phát triển lên 500+ thành viên, tổ chức 20+ sự kiện tình nguyện trong năm.' },
  { year: '2024', title: 'Trung Thu Cho Em 3', desc: 'Tổ chức lần thứ 3 với quy mô lớn hơn, 300+ em nhỏ được nhận quà và tham gia các hoạt động vui chơi.' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="about-page page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Về chúng tôi</span>
            <h1 className="page-hero__title">HTi's Volunteer Club</h1>
            <p className="page-hero__desc">
              Khám phá hành trình, sứ mệnh và những giá trị cốt lõi định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container about-mv">
          <motion.div
            className="about-mv__card about-mv__card--mission"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-mv__icon">
              <Target size={32} />
            </div>
            <h2>Sứ Mệnh</h2>
            <p>
              Kết nối và phát huy tinh thần tình nguyện của sinh viên Khoa Du Lịch - Đại học Duy Tân. 
              Thông qua các hoạt động thiện nguyện, chúng tôi góp phần xây dựng một cộng đồng văn minh, 
              nhân ái và phát triển bền vững.
            </p>
          </motion.div>
          <motion.div
            className="about-mv__card about-mv__card--vision"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-mv__icon about-mv__icon--gold">
              <Eye size={32} />
            </div>
            <h2>Tầm Nhìn</h2>
            <p>
              Trở thành câu lạc bộ tình nguyện tiêu biểu tại Đại học Duy Tân và khu vực miền Trung, 
              là ngôi nhà chung của những trái tim nhiệt huyết muốn cống hiến và tạo ra những thay đổi 
              tích cực cho xã hội.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Club Identity */}
      <section className="section about-identity">
        <div className="container about-identity__inner">
          <div className="about-identity__img">
            <img src="/images/avatar_placeholder.png" alt="HTI Volunteer Club Logo" className="about-identity__logo" />
            <div className="about-identity__glow" />
          </div>
          <div className="about-identity__text">
            <span className="section-tag">Danh tính CLB</span>
            <h2 className="section-title">Câu Chuyện <span>Của Chúng Tôi</span></h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
              <strong>HTi's Volunteer Club</strong> (HVC) được thành lập từ năm 2021, là câu lạc bộ 
              tình nguyện trực thuộc Đoàn Trường Du Lịch - Đại học Duy Tân, Đà Nẵng.
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
              Tên "HTi" là viết tắt của <em>Hospitality & Tourism Institute</em> - Viện Khách sạn và Du lịch. 
              Chúng tôi tự hào là môi trường nơi sinh viên không chỉ phát triển kỹ năng nghề nghiệp, 
              mà còn nuôi dưỡng tâm hồn và trách nhiệm xã hội.
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '28px' }}>
              Với hơn <strong>2,500 người theo dõi</strong> và <strong>500+ tình nguyện viên</strong>, 
              chúng tôi đã và đang tổ chức nhiều chương trình có ý nghĩa thiết thực cho cộng đồng 
              tại Đà Nẵng và các vùng lân cận.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100079712665576"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Xem Facebook CLB
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Giá trị cốt lõi</span>
            <h2 className="section-title">Những Giá Trị <span>Định Hướng</span></h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="value-card__icon">
                  <v.icon size={28} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hành trình</span>
            <h2 className="section-title">Những <span>Cột Mốc</span> Nổi Bật</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="timeline__connector" />
                <div className="timeline__card card">
                  <span className="timeline__year">{m.year}</span>
                  <h3 className="timeline__title">{m.title}</h3>
                  <p className="timeline__desc">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">Cùng tham gia</span>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Là Một Phần Của <span>Gia Đình HVC</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '36px' }}>
            Hãy cùng chúng tôi lan tỏa yêu thương và tạo ra những tác động tích cực cho cộng đồng
          </p>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
            <Heart size={16} />
            Đăng ký tham gia
          </Link>
        </div>
      </section>
    </div>
  );
}
