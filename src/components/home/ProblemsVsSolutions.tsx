import { motion } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'
import './ProblemsVsSolutions.css'

const problems = [
    'הילד לא מבין את החומר בכיתה',
    'ציונים נמוכים במבחנים',
    'חוסר ביטחון בלמידה',
    'לחץ סביב שיעורי הבית',
    'תסכול והתנגדות ללמידה',
    '"ניסינו כבר מורים, כלום לא עזר"',
]

const solutions = [
    'יחס אישי לכל תלמיד',
    'תוכנית לימודים מותאמת',
    'חיזוק הביטחון העצמי',
    'שיפור אמיתי בציונים',
    'מעקב צמוד ודיווחים להורים',
    'בניית יסודות לטווח ארוך',
]

export default function ProblemsVsSolutions() {
    return (
        <section className="pvs-section" id="problems">
            <div className="container">
                <motion.div
                    className="pvs-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>גם אצלכם זה קורה?</h2>
                </motion.div>

                <div className="pvs-grid">
                    <motion.div
                        className="pvs-card problems"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>הבעיות</h3>
                        <ul>
                            {problems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <XCircle size={20} />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="pvs-card solutions"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>הפתרונות שלנו</h3>
                        <ul>
                            {solutions.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.2 }}
                                >
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
