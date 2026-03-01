import { NavLink } from 'react-router-dom';
import { Heart, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40L60 46.7C120 53.3 240 66.7 360 66.7C480 66.7 600 53.3 720 46.7C840 40 960 40 1080 43.3C1200 46.7 1320 53.3 1380 56.7L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V40Z" fill="#071b3d"/>
        </svg>
      </div>
      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <img src="/images/avatar_placeholder.png" alt="HTI Logo" />
                <div>
                  <p className="footer__logo-name">HTi's Volunteer Club</p>
                  <p className="footer__logo-sub">Hospitality & Tourism Institute</p>
                </div>
              </div>
              <p className="footer__tagline">
                Câu lạc bộ tình nguyện của Đoàn Trường Du Lịch - Đại học Duy Tân. 
                Cùng nhau tạo nên những giá trị tốt đẹp cho cộng đồng.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100079712665576"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
              >
                <Facebook size={18} />
                Theo dõi chúng tôi
              </a>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h4 className="footer__col-title">Điều hướng</h4>
              <ul className="footer__links">
                {[
                  { to: '/', label: 'Trang chủ' },
                  { to: '/about', label: 'Giới thiệu CLB' },
                  { to: '/leaders', label: 'Ban chủ nhiệm' },
                  { to: '/events', label: 'Sự kiện' },
                  { to: '/contact', label: 'Liên hệ & Tham gia' },
                ].map(link => (
                  <li key={link.to}>
                    <NavLink to={link.to} end={link.to === '/'} className="footer__link">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__col-title">Liên hệ</h4>
              <ul className="footer__contact-list">
                <li>
                  <MapPin size={16} />
                  <span>Đại học Duy Tân, Đà Nẵng</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>htivolunteer@duytan.edu.vn</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>0236 xxx xxxx</span>
                </li>
                <li>
                  <Facebook size={16} />
                  <a href="https://www.facebook.com/profile.php?id=100079712665576" target="_blank" rel="noopener noreferrer">
                    HTi's Volunteer Club
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 HTi's Volunteer Club - Đại học Duy Tân. All rights reserved.</p>
          <p>
            Made with <Heart size={13} fill="currentColor" /> by HTi's Volunteer Team
          </p>
        </div>
      </div>
    </footer>
  );
}
