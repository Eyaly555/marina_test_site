import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        childName: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Contact Form submitted:', formData)
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: 'כתובת',
            content: 'יעקב פריימן 20, א.ת ישן, ראשון לציון',
            link: 'https://maps.google.com/?q=יעקב+פריימן+20+ראשון+לציון'
        },
        {
            icon: Phone,
            title: 'טלפון',
            content: '054-688-6606',
            link: 'tel:054-688-6606'
        },
        {
            icon: Mail,
            title: 'אימייל',
            content: 'info@ariadna-center.com',
            link: 'mailto:info@ariadna-center.com'
        },
        {
            icon: Clock,
            title: 'שעות פעילות',
            content: 'א׳-ה׳: 14:00 - 21:00 | ו׳: 09:00 - 13:00',
            link: null
        },
    ]

    return (
        <div className="page-contact">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-bg">
                    <div className="hero-gradient" />
                    <div className="hero-pattern" />
                </div>

                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Sparkles size={16} />
                            <span>נשמח לשמוע מכם</span>
                        </div>
                        <h1>צרו קשר</h1>
                        <p>אנחנו כאן לכל שאלה, התייעצות או בקשה לשיעור ניסיון</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-main">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2>פרטי התקשרות</h2>
                            <p className="info-intro">
                                מוזמנים לפנות אלינו בכל אחת מהדרכים הבאות. נשמח לענות על כל שאלה!
                            </p>

                            <div className="info-cards">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="info-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                    >
                                        <div className="info-icon">
                                            <item.icon size={22} />
                                        </div>
                                        <div className="info-content">
                                            <h3>{item.title}</h3>
                                            {item.link ? (
                                                <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p>{item.content}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="whatsapp-cta">
                                <MessageCircle size={24} />
                                <div>
                                    <span>רוצים תשובה מהירה?</span>
                                    <a href="https://wa.me/972546886606" target="_blank" rel="noopener noreferrer">
                                        שלחו לנו הודעה בוואטסאפ
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="form-card">
                                <div className="form-header">
                                    <h2>שלחו לנו הודעה</h2>
                                    <p>מלאו את הפרטים ונחזור אליכם בהקדם</p>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        className="form-success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="success-icon">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h3>תודה רבה!</h3>
                                        <p>קיבלנו את הפנייה שלכם ונחזור אליכם בהקדם האפשרי</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>שם ההורה</label>
                                                <input
                                                    type="text"
                                                    placeholder="השם שלך"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>טלפון</label>
                                                <input
                                                    type="tel"
                                                    placeholder="050-000-0000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>אימייל</label>
                                                <input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>שם הילד/ה</label>
                                                <input
                                                    type="text"
                                                    placeholder="שם הילד/ה"
                                                    value={formData.childName}
                                                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>מקצוע מבוקש</label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            >
                                                <option value="">בחר מקצוע (אופציונלי)</option>
                                                <option value="math">מתמטיקה</option>
                                                <option value="english">אנגלית</option>
                                                <option value="hebrew">לשון</option>
                                                <option value="history">היסטוריה</option>
                                                <option value="physics">פיזיקה</option>
                                                <option value="kindergarten">הכנה לכיתה א׳</option>
                                                <option value="cs">מדעי המחשב</option>
                                                <option value="civics">אזרחות</option>
                                                <option value="other">אחר</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>הודעה</label>
                                            <textarea
                                                placeholder="ספרו לנו איך נוכל לעזור..."
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="submit-btn"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="loader" />
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    <span>שלח הודעה</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map">
                <div className="map-placeholder">
                    <MapPin size={48} />
                    <span>יעקב פריימן 20, ראשון לציון</span>
                    <a href="https://maps.google.com/?q=יעקב+פריימן+20+ראשון+לציון" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        פתח במפות
                    </a>
                </div>
            </section>
        </div>
    )
}
