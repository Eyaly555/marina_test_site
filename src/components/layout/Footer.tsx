import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const quickLinks = [
        { id: 'hero', label: 'דף הבית' },
        { id: 'problems', label: 'הבעיה והפתרון' },
        { id: 'how-it-works', label: 'איך זה עובד' },
        { id: 'testimonials', label: 'המלצות' },
        { id: 'about', label: 'עלינו' },
        { id: 'faq', label: 'שאלות נפוצות' },
        { id: 'contact', label: 'צור קשר' },
    ]

    return (
        <footer className="site-footer">
            {/* Main Footer */}
            <div className="footer-main">
                <div className="container footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col footer-brand">
                        <button onClick={() => scrollToSection('hero')} className="footer-logo">
                            <img src="/logo.jpg" alt="מרכז למידה אריאדנה" className="footer-logo-img" />
                            <div className="footer-logo-text">
                                <span className="logo-main">אריאדנה</span>
                                <span className="logo-sub">מרכז למידה</span>
                            </div>
                        </button>
                        <p className="footer-description">
                            לא עוד מורה פרטי - מערכת שלמה לכל המקצועות. מרכז למידה מוביל בראשון לציון ואונליין.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>ניווט מהיר</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button onClick={() => scrollToSection(link.id)}>
                                        <span>{link.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>צרו קשר</h4>
                        <ul className="contact-list">
                            <li>
                                <div className="contact-icon">
                                    <MapPin size={16} />
                                </div>
                                <span>יעקב פריימן 20, א.ת ישן, ראשל"צ</span>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <Phone size={16} />
                                </div>
                                <a href="tel:054-688-6606">054-688-6606</a>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <Mail size={16} />
                                </div>
                                <a href="mailto:info@ariadna-center.com">info@ariadna-center.com</a>
                            </li>
                        </ul>
                        <div className="footer-hours">
                            <h5>שעות פעילות</h5>
                            <p>ראשון - חמישי: 14:00 - 21:00</p>
                            <p>שישי: 09:00 - 13:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} מרכז למידה אריאדנה. כל הזכויות שמורות.
                    </p>
                    <p className="made-with">
                        נבנה עם <Heart size={14} fill="#ef4444" color="#ef4444" /> בישראל
                    </p>
                </div>
            </div>
        </footer>
    )
}
