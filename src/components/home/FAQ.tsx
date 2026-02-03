import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqs = [
    {
        question: 'איפה אתם נמצאים?',
        answer: 'שיעורים פרונטליים רק בראשון לציון. שיעורים אונליין לכל הארץ.',
    },
    {
        question: 'באילו מקצועות אתם מלמדים?',
        answer: 'בכל המקצועות - מתמטיקה, אנגלית, עברית, מדעים, והכל. מכיתה א\' עד יב\'.',
    },
    {
        question: 'כמה זמן לוקח לראות שיפור?',
        answer: 'תלוי בילד/ה ובמצב ההתחלתי, אבל רוב ההורים מדווחים על שיפור בביטחון העצמי תוך מספר שבועות ושיפור בציונים תוך חודשיים-שלושה.',
    },
    {
        question: 'מי המורים?',
        answer: 'צוות של מורים מאומנים שעברו הכשרה במתודולוגיה שלנו.',
    },
    {
        question: 'איך אני יודע/ת שזה יעבוד הפעם?',
        answer: 'אי אפשר להבטיח, אבל מה שכן - אנחנו לא עוד מורה פרטי בודד. אנחנו מערכת שלמה: תומך למידה, מעקב, התאמות, דיווחים. זה ההבדל.',
    },
    {
        question: 'מה קורה בשיחת הייעוץ?',
        answer: 'שיחת טלפון קצרה (15-20 דקות) שבה אנחנו מכירים אתכם, מבינים את המצב ורואים אם אנחנו מתאימים זה לזה. ללא התחייבות.',
    },
    {
        question: 'האם קיימת התחייבות לאחר ביצוע המיפוי?',
        answer: 'לא. המיפוי אינו מחייב להמשך תהליך. עם זאת, מומלץ לקבוע מיפוי רק אם קיימת כוונה אמיתית להתחיל תהליך לימודי לאחר מכן – כלומר שיש פניות, רצון ותקציב מתאימים.',
    },
    {
        question: 'כמה זמן נמשך תהליך מינימלי?',
        answer: 'תהליך הלמידה המינימלי נמשך כ-3 חודשים. עם זאת, אנו ממליצים על תקופה של לפחות חצי שנה, כדי לבנות שגרה יציבה, מחויבות והתמדה שמובילות לתוצאות משמעותיות לאורך זמן.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>שאלות שהורים שואלים</h2>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <button className="faq-question" onClick={() => toggle(index)}>
                                <span>{faq.question}</span>
                                <ChevronDown size={20} className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
