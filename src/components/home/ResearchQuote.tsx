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
                        "Исследования подтверждают: Успехи или неудачи в школе напрямую влияют на самооценку ребенка и его веру в свой потенциал."
                    </blockquote>
                    <cite className="research-cite">
                        Chapman, Turner & Prochnow, 2000 - обзорная статья об академической самооценке у детей
                    </cite>
                </motion.div>
            </div>
        </section>
    )
}
