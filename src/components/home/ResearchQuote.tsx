import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import './ResearchQuote.css'

export default function ResearchQuote() {
    return (
        <section className="research-section" id="research">
            <div className="container">
                <motion.div
                    className="research-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="research-icon">
                        <BookOpen size={32} />
                    </div>
                    <blockquote className="research-quote">
                        "מחקרים מראים שחוויות של הצלחה או כישלון בבית הספר משפיעות בצורה משמעותית על התפתחות תחושת המסוגלות והביטחון העצמי האקדמי של הילדים"
                    </blockquote>
                    <cite className="research-cite">
                        Chapman, Turner & Prochnow, 2000 - מאמר סקירה על תפיסה עצמית אקדמית אצל ילדים
                    </cite>
                </motion.div>
            </div>
        </section>
    )
}
