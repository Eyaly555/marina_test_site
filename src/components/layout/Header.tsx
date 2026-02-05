import { useState, useEffect } from 'react'
import { Phone, Menu, X, MapPin } from 'lucide-react'
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
        { id: 'hero', label: 'דף הבית' },
        { id: 'problems', label: 'הבעיה והפתרון' },
        { id: 'how-it-works', label: 'איך זה עובד' },
        { id: 'testimonials', label: 'המלצות' },
        { id: 'about', label: 'עלינו' },
        { id: 'faq', label: 'שאלות נפוצות' },
    ]

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            {/* Premium Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:054-805-2281" className="contact-item">
                            <div className="contact-icon">
                                <Phone size={14} />
                            </div>
                            <span>054-805-2281</span>
                        </a>
                        <div className="divider" />
                        <a href="https://wa.me/972549628860?text=%D7%A8%D7%90%D7%99%D7%A0%D7%95%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%9B%D7%9D%20%D7%95%D7%A8%D7%A6%D7%99%D7%A0%D7%95%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A7%D7%A6%D7%AA%20%D7%99%D7%95%D7%AA%D7%A8." target="_blank" rel="noopener noreferrer" className="contact-item whatsapp-item">
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
                            <span>ראשון לציון</span>
                        </span>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/ariadnablp" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="https://www.instagram.com/ariadnablp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                            <FaInstagram size={14} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCEq0zoCTCJiaSUYpSN6A6-Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
                            <FaYoutube size={14} />
                        </a>
                        <a href="https://www.tiktok.com/@ariadna.education" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link">
                            <FaTiktok size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav-container">
                <div className="container nav-content">
                    <button onClick={() => scrollToSection('hero')} className="logo">
                        <img src="/Gemini_Generated_Image_5ln0ad5ln0ad5ln0-removebg-preview.png" alt="מרכז למידה אריאדנה" className="logo-image" />
                        <div className="logo-text">
                            <span className="logo-main">אריאדנה</span>
                            <span className="logo-sub">מרכז למידה</span>
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
                            <span>שיחת יעוץ חינמית</span>
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
                                קבעו שיחת יעוץ חינמית
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
