import { motion } from 'framer-motion'
import { Phone, Users, ClipboardList, BarChart3 } from 'lucide-react'
import './HowItWorks.css'

const steps = [
    {
        icon: Phone,
        number: '1',
        title: 'שיחת טלפון (חינם)',
        description: 'נדבר איתכם, ההורים, ונבין בדיוק מה המצב ומה האתגרים',
    },
    {
        icon: Users,
        number: '2',
        title: 'מפגש הכרות והתאמה',
        description: 'תומך למידה שלנו ייפגש עם הילד/ה - נכיר, נבין ונבנה התאמה אישית',
    },
    {
        icon: ClipboardList,
        number: '3',
        title: 'תוכנית מותאמת אישית',
        description: 'נבנה תוכנית לימודים שמתאימה בדיוק לילד/ה שלכם',
    },
    {
        icon: BarChart3,
        number: '4',
        title: 'מעקב והתאמות',
        description: 'אנחנו לא \'זורקים\' ילד למורה ונעלמים - יש מעקב, דיווחים והתאמות לאורך הדרך',
    },
]

export default function HowItWorks() {
    return (
        <section className="hiw-section" id="how-it-works">
            <div className="container">
                <motion.div
                    className="hiw-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>איך זה עובד במרכז אריאדנה?</h2>
                </motion.div>

                <div className="hiw-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="hiw-step"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">
                                <step.icon size={28} />
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            {index < steps.length - 1 && <div className="step-connector" />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
