import { motion } from 'framer-motion'
import { Phone, Users, ClipboardList, BarChart3 } from 'lucide-react'
import './HowItWorks.css'

const steps = [
    {
        icon: Phone,
        number: '1',
        title: 'Телефонный звонок (бесплатно)',
        description: 'Поговорим с вами, разберемся в ситуации и определим с чем будем работать',
    },
    {
        icon: Users,
        number: '2',
        title: 'Встреча для знакомства и адаптации',
        description: 'Тьютор познакомится с ребенком и определит, в каких темах у него сложности',
    },
    {
        icon: ClipboardList,
        number: '3',
        title: 'Индивидуальный план',
        description: 'Создадим учебный план, который точно подходит вашему ребенку',
    },
    {
        icon: BarChart3,
        number: '4',
        title: 'Контроль и корректировки',
        description: 'Внимательно следим как проходит процесс обучения ребенка и своевременно вносим корректировки',
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
                    <h2>Как это работает в Центре Ариадна?</h2>
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
