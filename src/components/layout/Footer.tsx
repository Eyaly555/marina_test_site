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
        { id: 'hero', label: 'Главная' },
        { id: 'problems', label: 'Проблема и решение' },
        { id: 'how-it-works', label: 'Как это работает' },
        { id: 'testimonials', label: 'Отзывы' },
        { id: 'about', label: 'О нас' },
        { id: 'faq', label: 'Вопросы' },
        { id: 'contact', label: 'Контакты' },
    ]

    return (
        <footer className="site-footer">
            {/* Main Footer */}
            <div className="footer-main">
                <div className="container footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col footer-brand">
                        <button onClick={() => scrollToSection('hero')} className="footer-logo">
                            <img src="/Gemini_Generated_Image_5ln0ad5ln0ad5ln0-removebg-preview.png" alt="Центр Ариадна" className="footer-logo-img" />
                            <div className="footer-logo-text">
                                <span className="logo-main">Ариадна</span>
                                <span className="logo-sub">Центр обучения</span>
                            </div>
                        </button>
                        <p className="footer-description">
                            Не просто репетитор - комплексная система обучения по всем предметам. Ведущий центр обучения в Ришон-ле-Ционе и онлайн.
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
                        <h4>Быстрая навигация</h4>
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
                        <h4>Свяжитесь с нами</h4>
                        <ul className="contact-list">
                            <li>
                                <div className="contact-icon">
                                    <MapPin size={16} />
                                </div>
                                <span>Ришон-ле-Цион</span>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <Phone size={16} />
                                </div>
                                <a href="tel:050-123-4567">050-123-4567</a>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <Mail size={16} />
                                </div>
                                <a href="mailto:info@ariadna-center.co.il">info@ariadna-center.co.il</a>
                            </li>
                        </ul>
                        <div className="footer-hours">
                            <h5>Часы работы</h5>
                            <p>Воскресенье - Четверг: 14:00 - 21:00</p>
                            <p>Пятница: 09:00 - 13:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Центр Ариадна. Все права защищены.
                    </p>
                    <p className="made-with">
                        Сделано с <Heart size={14} fill="#ef4444" color="#ef4444" /> в Израиле
                    </p>
                </div>
            </div>
        </footer>
    )
}
