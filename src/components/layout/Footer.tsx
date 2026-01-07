import { useState } from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send, Heart, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            console.log('Newsletter signup:', email)
            setIsSubscribed(true)
            setEmail('')
        }
    }

    const quickLinks = [
        { to: '/', label: 'דף הבית' },
        { to: '/about', label: 'עלינו' },
        { to: '/lessons', label: 'מרחב השיעורים' },
        { to: '/price-list', label: 'מחירון' },
        { to: '/contact', label: 'צור קשר' },
    ]

    const subjects = [
        { to: '/lessons/math', label: 'מתמטיקה' },
        { to: '/lessons/english', label: 'אנגלית' },
        { to: '/lessons/hebrew', label: 'לשון' },
        { to: '/lessons/physics', label: 'פיזיקה' },
        { to: '/lessons/cs', label: 'מדעי המחשב' },
    ]

    return (
        <footer className="site-footer">
            {/* Newsletter Section */}
            <div className="footer-newsletter">
                <div className="container newsletter-container">
                    <div className="newsletter-content">
                        <h3>הישארו מעודכנים</h3>
                        <p>הירשמו לניוזלטר שלנו וקבלו טיפים ועדכונים ישירות למייל</p>
                    </div>
                    {isSubscribed ? (
                        <div className="newsletter-success">
                            <span>תודה! נשמח לעדכן אותך</span>
                        </div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleNewsletter}>
                            <input
                                type="email"
                                placeholder="הכניסו את האימייל שלכם"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">
                                <Send size={18} />
                                <span>הרשמה</span>
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="container footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col footer-brand">
                        <Link to="/" className="footer-logo">
                            <div className="footer-logo-icon">
                                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="18" stroke="url(#footerLogoGradient)" strokeWidth="3" />
                                    <path d="M20 8 L20 32 M12 16 L28 16 M12 24 L28 24" stroke="url(#footerLogoGradient)" strokeWidth="2.5" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#0d9488" />
                                            <stop offset="100%" stopColor="#14b8a6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="footer-logo-text">
                                <span className="logo-main">אריאדנה</span>
                                <span className="logo-sub">מרכז למידה</span>
                            </div>
                        </Link>
                        <p className="footer-description">
                            מרכז למידה מוביל בראשון לציון. אנחנו מאמינים שכל ילד יכול להצליח עם הליווי הנכון.
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
                        <h4>קישורים מהירים</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to}>
                                        <ChevronLeft size={14} />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subjects */}
                    <div className="footer-col">
                        <h4>מקצועות לימוד</h4>
                        <ul className="footer-links">
                            {subjects.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to}>
                                        <ChevronLeft size={14} />
                                        <span>{link.label}</span>
                                    </Link>
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
                                <span>יעקב פריימן 20, א.ת ישן, ראשל״צ</span>
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
                        © {new Date().getFullYear()} מרכז למידה אריאדנה. כל הזכויות שמורות.
                    </p>
                    <p className="made-with">
                        נבנה עם <Heart size={14} fill="#ef4444" color="#ef4444" /> בישראל
                    </p>
                </div>
            </div>
        </footer>
    )
}
