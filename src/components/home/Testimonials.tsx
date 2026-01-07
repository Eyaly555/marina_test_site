import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'רינת כהן',
        role: 'אמא של יובל, כיתה ט׳',
        content: 'הבן שלי התקשה במתמטיקה במשך שנים. אחרי 3 חודשים במרכז אריאדנה הוא עלה מ-60 ל-85! המורים באמת יודעים להתאים את השיטה לכל ילד.',
        rating: 5,
        subject: 'מתמטיקה'
    },
    {
        id: 2,
        name: 'משה לוי',
        role: 'אבא של נועה, כיתה י״א',
        content: 'הבת שלנו הגיעה ממש לפני הבגרות באנגלית בפאניקה. הצוות במרכז עבד איתה בצורה אינטנסיבית ומקצועית. התוצאה? 92 בבגרות!',
        rating: 5,
        subject: 'אנגלית'
    },
    {
        id: 3,
        name: 'שירה אברהם',
        role: 'אמא של עידן, כיתה ג׳',
        content: 'עידן התחיל שיעורים להכנה לכיתה א׳ והמשיך עד היום. האווירה חמה ומשפחתית, והתקדמות שלו בקריאה ובחשבון פשוט מדהימה.',
        rating: 5,
        subject: 'הכנה לכיתה א׳'
    },
    {
        id: 4,
        name: 'דני רוזן',
        role: 'אבא של מיכל, כיתה י״ב',
        content: 'מיכל למדה פיזיקה 5 יחידות במרכז. המורה שלה, ד״ר איתן, הפך מקצוע שנראה בלתי אפשרי לאהבה אמיתית. קיבלה 95 בבגרות!',
        rating: 5,
        subject: 'פיזיקה'
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="testimonials-section">
            <div className="testimonials-bg">
                <div className="testimonials-gradient" />
            </div>

            <div className="container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="testimonials-badge">
                        <Star size={16} fill="currentColor" />
                        <span>חוות דעת</span>
                    </div>
                    <h2>מה אומרים עלינו</h2>
                    <p>ההורים והתלמידים שלנו הם השגרירים הכי טובים שלנו</p>
                </motion.div>

                <div className="testimonials-carousel">
                    <button className="carousel-btn prev" onClick={prevTestimonial}>
                        <ChevronRight size={24} />
                    </button>

                    <div className="testimonials-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="testimonial-card featured"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="quote-icon">
                                    <Quote size={32} />
                                </div>

                                <div className="testimonial-content">
                                    <p>{testimonials[currentIndex].content}</p>
                                </div>

                                <div className="testimonial-rating">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                                    ))}
                                </div>

                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">{testimonials[currentIndex].name}</span>
                                        <span className="author-role">{testimonials[currentIndex].role}</span>
                                    </div>
                                    <div className="testimonial-subject">
                                        {testimonials[currentIndex].subject}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="carousel-btn next" onClick={nextTestimonial}>
                        <ChevronLeft size={24} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

                <motion.div
                    className="testimonials-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p>רוצים להצטרף לסיפורי ההצלחה שלנו?</p>
                    <a href="/contact" className="btn btn-secondary">
                        צרו קשר עכשיו
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
