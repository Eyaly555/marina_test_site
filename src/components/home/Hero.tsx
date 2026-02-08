import { motion } from 'framer-motion'
import { Star, AlertTriangle, Users, Calendar, Award } from 'lucide-react'
import LeadForm from '../common/LeadForm'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
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
                {/* Right Content (RTL) */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        <span className="title-line">שלושה מורים פרטיים. אפס תוצאה.</span>
                        <span className="title-line-sub">הילד שלכם מתקשה עדיין בלימודים.</span>
                    </h1>

                    <p className="hero-description">
                        אנחנו יודעים למה זה לא עבד.
                    </p>

                    <div className="hero-tagline">
                        <span className="tagline-brand">מרכז אריאדנה</span>
                        <span className="tagline-text"> - לא עוד מורה פרטי, מערכת שלמה לכל המקצועות.</span>
                    </div>

                    <div className="hero-notes">
                        <div className="hero-note">
                            <AlertTriangle size={16} />
                            <span>אנחנו מתמחים בליווי לטווח ארוך. שיעורים פרונטליים רק בראשון לציון ו<u>שיעורי אונליין מכל מקום בעולם</u>.</span>
                        </div>
                    </div>

                    <div className="hero-reviews">
                        <div className="review-stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                            ))}
                        </div>
                        <span className="review-text">ביקורות מצוינות בגוגל</span>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <Users size={20} />
                            <span className="stat-number">500+</span>
                            <span className="stat-label">תלמידים</span>
                        </div>
                        <div className="hero-stat">
                            <Calendar size={20} />
                            <span className="stat-number">7+</span>
                            <span className="stat-label">שנות ניסיון</span>
                        </div>
                        <div className="hero-stat">
                            <Award size={20} />
                            <span className="stat-number">98%</span>
                            <span className="stat-label">שביעות רצון</span>
                        </div>
                    </div>
                </motion.div>

                {/* Left Form */}
                <motion.div
                    className="hero-form-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <LeadForm variant="card" />
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
