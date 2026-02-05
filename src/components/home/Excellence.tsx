import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle2, Rocket } from 'lucide-react'
import LeadForm from '../common/LeadForm'
import './Excellence.css'

const stats = [
    { icon: GraduationCap, value: '2,750+', label: 'בוגרים שהגיעו להישגים מרשימים וסגרו פערי לימוד' },
    { icon: CheckCircle2, value: 'התאמה מלאה', label: 'תוכנית הלימודים מסונכרנת עם דרישות משרד החינוך' },
    { icon: Rocket, value: 'ארגז כלים לעתיד', label: 'מתמטיקה, שפות וטכנולוגיה (תכנות) – הכל תחת קורת גג אחת' },
]

export default function Excellence() {
    return (
        <section className="excellence-section" id="about">
            <div className="container">
                <motion.div
                    className="excellence-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>מצוינות לימודית מתחילה כאן: מרכז אריאדנה</h2>
                    <p className="excellence-subtitle">
                        מחפשים תוצאות? הגעתם למקום הנכון. עם ניסיון חינוכי אישי שמתחיל ב־2008 ופעילות כמרכז למידה מאז 2017, מרכז אריאדנה מציע שילוב מנצח של מקצועיות ללא פשרות וליווי רגשי מעצים.
                    </p>
                </motion.div>

                <div className="excellence-stats">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="excellence-stat"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="excellence-stat-icon">
                                <stat.icon size={32} />
                            </div>
                            <div className="excellence-stat-value">{stat.value}</div>
                            <p className="excellence-stat-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="excellence-cta-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    הופכים פוטנציאל להצלחה מוכחת. הצטרפו למשפחת אריאדנה.
                </motion.p>

                <motion.div
                    className="excellence-form-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <LeadForm variant="card" title="הרשמה לשיחת יעוץ ללא עלות עם צוות המרכז" subtitle="מלאו פרטים ונחזור אליכם תוך 24 שעות" />
                </motion.div>
            </div>
        </section>
    )
}
