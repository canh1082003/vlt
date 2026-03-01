import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/about', label: 'Giới thiệu' },
  { to: '/leaders', label: 'Ban chủ nhiệm' },
  { to: '/events', label: 'Sự kiện' },
  { to: '/contact', label: 'Tham gia' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src="/images/avatar_placeholder.png" alt="HTI Logo" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">HTi's Volunteer</span>
            <span className="navbar__logo-sub">Hospitality & Tourism Institute</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="navbar__cta btn-primary">
          <Heart size={15} />
          Tham gia ngay
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn-primary" style={{ marginTop: '12px', justifyContent: 'center' }}>
          <Heart size={15} />
          Tham gia ngay
        </NavLink>
      </div>
    </header>
  );
}
