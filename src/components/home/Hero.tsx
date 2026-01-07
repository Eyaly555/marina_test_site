import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2, Star, Users, Award, ArrowLeft } from 'lucide-react'
import './Hero.css'

export default function Hero() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        childName: '',
        grade: '',
        subject: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log('Form submitted:', formData)
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const trustBadges = [
        { icon: Users, text: '500+ תלמידים', subtext: 'סיימו בהצלחה' },
        { icon: Star, text: '4.9 כוכבים', subtext: 'ממוצע חוות דעת' },
        { icon: Award, text: '7+ שנים', subtext: 'ניסיון בהוראה' },
    ]

    return (
        <section className="hero-section">
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-gradient" />
                <div className="hero-shapes">
                    <motion.div
                        className="shape shape-1"
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="shape shape-2"
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="shape shape-3"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <div className="hero-pattern" />
            </div>

            <div className="container hero-container">
                {/* Left Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles size={16} />
                        <span>מרכז הלמידה המוביל בראשון לציון</span>
                    </motion.div>

                    <h1 className="hero-title">
                        <span className="title-line">מרכז למידה</span>
                        <span className="title-gradient">אריאדנה</span>
                    </h1>

                    <p className="hero-subtitle">
                        <strong>להאמין.</strong> <strong>ללמוד.</strong> <strong>לתרגל.</strong>
                    </p>

                    <p className="hero-description">
                        אנחנו מאמינים שכל ילד יכול להצליח. עם גישה אישית, מורים מקצועיים
                        ושיטות למידה מוכחות, אנחנו מלווים את התלמידים בדרך להצלחה.
                    </p>

                    <div className="hero-features">
                        <div className="feature">
                            <CheckCircle2 size={20} />
                            <span>שיעורים פרטיים וקבוצתיים</span>
                        </div>
                        <div className="feature">
                            <CheckCircle2 size={20} />
                            <span>מגיל 5 ועד בגרויות</span>
                        </div>
                        <div className="feature">
                            <CheckCircle2 size={20} />
                            <span>מורים מוסמכים ומנוסים</span>
                        </div>
                    </div>

                    <div className="trust-badges">
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                className="trust-badge"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <div className="badge-icon">
                                    <badge.icon size={24} />
                                </div>
                                <div className="badge-text">
                                    <span className="badge-number">{badge.text}</span>
                                    <span className="badge-label">{badge.subtext}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    className="hero-form-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="form-card">
                        <div className="form-header">
                            <div className="form-badge">
                                <span className="pulse-dot" />
                                שיעור ניסיון חינם
                            </div>
                            <h2>הרשמה לשיעור ראשון</h2>
                            <p>מלאו את הפרטים ונחזור אליכם תוך 24 שעות</p>
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
                                <p>קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="hero-form">
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
                                        <label>שם הילד/ה</label>
                                        <input
                                            type="text"
                                            placeholder="שם הילד/ה"
                                            value={formData.childName}
                                            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>כיתה</label>
                                        <select
                                            value={formData.grade}
                                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                            required
                                        >
                                            <option value="" disabled>בחר כיתה</option>
                                            <option value="pre">גן - הכנה לכיתה א׳</option>
                                            <option value="1-2">א׳-ב׳</option>
                                            <option value="3-4">ג׳-ד׳</option>
                                            <option value="5-6">ה׳-ו׳</option>
                                            <option value="7-9">ז׳-ט׳</option>
                                            <option value="10-12">י׳-י״ב</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label>מקצוע מבוקש</label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                    >
                                        <option value="" disabled>בחר מקצוע</option>
                                        <option value="math">מתמטיקה</option>
                                        <option value="english">אנגלית</option>
                                        <option value="hebrew">לשון</option>
                                        <option value="history">היסטוריה</option>
                                        <option value="physics">פיזיקה</option>
                                        <option value="kindergarten">הכנה לכיתה א׳</option>
                                        <option value="cs">מדעי המחשב</option>
                                        <option value="civics">אזרחות</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="loader" />
                                    ) : (
                                        <>
                                            <span>קבע שיעור ניסיון חינם</span>
                                            <ArrowLeft size={18} />
                                        </>
                                    )}
                                </button>

                                <p className="form-disclaimer">
                                    <CheckCircle2 size={14} />
                                    ללא התחייבות, ללא עלות
                                </p>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>גלול למטה</span>
            </motion.div>
        </section>
    )
}
