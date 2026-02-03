import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'
import './WhoItsFor.css'

const suitableFor = [
    'תהליך חינוכי איכותי',
    'צוות מקצועי',
    'תוצאות לטווח ארוך',
    'שקט נפשי בבית',
    'אונליין או הגעה לראשון לציון',
]

const notSuitableFor = [
    'מי שמחפש פתרון מהיר וזול',
    'מי שלא מוכן לאונליין ולא יכול להגיע לראשון לציון',
    'מי שמחפש טיפול רגשי או פסיכולוגי',
    'מי שהילד שלו לא פנוי לתהליך למידה',
]

export default function WhoItsFor() {
    return (
        <section className="who-section" id="who">
            <div className="container">
                <motion.div
                    className="who-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>למי זה מתאים ולמי לא?</h2>
                </motion.div>

                <div className="who-grid">
                    <motion.div
                        className="who-card suitable"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>מתאים להורים שמחפשים:</h3>
                        <ul>
                            {suitableFor.map((item, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="who-card not-suitable"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>לא מתאים ל:</h3>
                        <ul>
                            {notSuitableFor.map((item, i) => (
                                <li key={i}>
                                    <XCircle size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
