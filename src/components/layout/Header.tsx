import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Mail, Menu, X, Facebook, Instagram, Youtube, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navLinks = [
        { to: '/', label: 'דף הבית' },
        { to: '/about', label: 'עלינו' },
        { to: '/lessons', label: 'מרחב השיעורים' },
        { to: '/price-list', label: 'מחירון' },
        { to: '/contact', label: 'צור קשר' },
    ]

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Premium Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:054-688-6606" className="contact-item">
                            <div className="contact-icon">
                                <Phone size={14} />
                            </div>
                            <span>054-688-6606</span>
                        </a>
                        <div className="divider" />
                        <a href="mailto:info@ariadna-center.com" className="contact-item">
                            <div className="contact-icon">
                                <Mail size={14} />
                            </div>
                            <span>info@ariadna-center.com</span>
                        </a>
                        <div className="divider" />
                        <span className="contact-item location">
                            <div className="contact-icon">
                                <MapPin size={14} />
                            </div>
                            <span>ראשון לציון</span>
                        </span>
                    </div>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook" className="social-link">
                            <Facebook size={16} />
                        </a>
                        <a href="#" aria-label="Instagram" className="social-link">
                            <Instagram size={16} />
                        </a>
                        <a href="#" aria-label="YouTube" className="social-link">
                            <Youtube size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav-container">
                <div className="container nav-content">
                    <Link to="/" className="logo">
                        <div className="logo-icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="18" stroke="url(#logoGradient)" strokeWidth="3" />
                                <path d="M20 8 L20 32 M12 16 L28 16 M12 24 L28 24" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0d9488" />
                                        <stop offset="100%" stopColor="#14b8a6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="logo-text">
                            <span className="logo-main">אריאדנה</span>
                            <span className="logo-sub">מרכז למידה</span>
                        </div>
                    </Link>

                    <nav className="main-nav desktop-nav">
                        <ul className="nav-links">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                        end={link.to === '/'}
                                    >
                                        {link.label}
                                        <span className="nav-indicator" />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-cta">
                        <Link to="/contact" className="cta-button">
                            <span>שיעור ניסיון</span>
                            <div className="cta-shine" />
                        </Link>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="mobile-nav">
                            <ul className="mobile-nav-links">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.to}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink
                                            to={link.to}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) => isActive ? 'active' : ''}
                                            end={link.to === '/'}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                            <Link
                                to="/contact"
                                className="mobile-cta"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                קבע שיעור ניסיון חינם
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
