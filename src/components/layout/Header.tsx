import { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X, MapPin } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
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

    const scrollToSection = (sectionId: string) => {
        setIsMenuOpen(false)
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const navLinks = [
        { id: 'hero', label: 'Главная' },
        { id: 'problems', label: 'Проблема и решение' },
        { id: 'how-it-works', label: 'Как это работает' },
        { id: 'testimonials', label: 'Отзывы' },
        { id: 'about', label: 'О нас' },
        { id: 'faq', label: 'Вопросы' },
    ]

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Premium Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:054-8052281" className="contact-item">
                            <div className="contact-icon">
                                <Phone size={14} />
                            </div>
                            <span>054-8052281</span>
                        </a>
                        <div className="divider" />
                        <a href="https://wa.me/972549628860?text=%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D0%BB%D0%B8%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%B2%D0%B0%D1%81%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-item">
                            <div className="contact-icon whatsapp">
                                <FaWhatsapp size={14} />
                            </div>
                            <span>054-962-8860</span>
                        </a>
                        <div className="divider" />
                        <span className="contact-item location">
                            <div className="contact-icon">
                                <MapPin size={14} />
                            </div>
                            <span>Ришон-ле-Цион</span>
                        </span>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/mathmarina" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="https://www.instagram.com/ariadnaisrael/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                            <FaInstagram size={14} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCnBdmoLElMGGLhC6ikp266Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
                            <FaYoutube size={14} />
                        </a>
                        <a href="https://www.tiktok.com/@ariadnalearningce" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link">
                            <FaTiktok size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav-container">
                <div className="container nav-content">
                    <button onClick={() => scrollToSection('hero')} className="logo">
                        <img src="/Gemini_Generated_Image_5ln0ad5ln0ad5ln0-removebg-preview.png" alt="Центр Ариадна" className="logo-image" />
                        <div className="logo-text">
                            <span className="logo-main">Ариадна</span>
                            <span className="logo-sub">Центр обучения</span>
                        </div>
                    </button>

                    <nav className="main-nav desktop-nav">
                        <ul className="nav-links">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="nav-link"
                                    >
                                        {link.label}
                                        <span className="nav-indicator" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-cta">
                        <button onClick={() => scrollToSection('contact')} className="cta-button">
                            <span>Бесплатная консультация</span>
                            <div className="cta-shine" />
                        </button>
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
                                        key={link.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <button onClick={() => scrollToSection(link.id)}>
                                            {link.label}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                            <button
                                className="mobile-cta"
                                onClick={() => scrollToSection('contact')}
                            >
                                Запишитесь на бесплатную консультацию
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
