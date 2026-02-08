import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa'
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
                            <a href="https://www.facebook.com/mathmarina" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://www.instagram.com/ariadnaisrael/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCnBdmoLElMGGLhC6ikp266Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <FaYoutube size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@ariadnalearningce" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <FaTiktok size={18} />
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
                                <a href="tel:054-805-2281">054-805-2281</a>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <FaWhatsapp size={16} />
                                </div>
                                <a href="https://wa.me/972549628860?text=%D7%A8%D7%90%D7%99%D7%A0%D7%95%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%9B%D7%9D%20%D7%95%D7%A8%D7%A6%D7%99%D7%A0%D7%95%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A7%D7%A6%D7%AA%20%D7%99%D7%95%D7%AA%D7%A8." target="_blank" rel="noopener noreferrer">054-962-8860</a>
                            </li>
                            <li>
                                <div className="contact-icon">
                                    <Mail size={16} />
                                </div>
                                <a href="mailto:info@ariadnacenter.com">info@ariadnacenter.com</a>
                            </li>
                        </ul>
                        <div className="footer-hours">
                            <h5>Часы работы</h5>
                            <p>Воскресенье - Четверг: 9:00 - 20:00</p>
                            <p>Пятница: 9:00 - 16:00</p>
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
