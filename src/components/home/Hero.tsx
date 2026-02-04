import { motion } from 'framer-motion'
import { Star, AlertTriangle, MapPin, Users, Clock } from 'lucide-react'
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
                {/* Left Content (LTR) */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        <span className="title-line">Пробовали заниматься с 3 репетиторами. Ничего не помогло.</span>
                    </h1>

                    <p className="hero-description">
                        Именно с этими словами к нам обращаются родители. В центре Ариадна они понимают, почему не получалось раньше и что действительно работает.
                    </p>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <Users size={20} />
                            <div>
                                <strong>2,750+</strong>
                                <span>учеников преуспели</span>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <Clock size={20} />
                            <div>
                                <strong>18</strong>
                                <span>лет опыта</span>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <div className="review-stars-mini">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>
                            <span>отзывы в Google</span>
                        </div>
                    </div>

                    <div className="hero-notes">
                        <div className="hero-note">
                            <AlertTriangle size={16} />
                            <span>Мы предлагаем комплексную систему для долгосрочного обучения</span>
                        </div>
                        <div className="hero-note">
                            <MapPin size={16} />
                            <span>Фронтально в Ришон-ле-Ционе, онлайн из любой точки мира</span>
                        </div>
                    </div>

                    <div className="hero-reviews">
                        <div className="review-stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                            ))}
                        </div>
                        <span className="review-text">отличные отзывы в Google</span>
                    </div>
                </motion.div>

                {/* Right Form */}
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
                <span>Прокрутите вниз</span>
            </motion.div>
        </section>
    )
}
