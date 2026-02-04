import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'
import './WhoItsFor.css'

const suitableFor = [
    'Качественный образовательный процесс',
    'Профессиональную команду',
    'Результаты для долгосрочной перспективы',
    'Душевное спокойствие дома',
    'Онлайн из любой точки мира или очно в Ришон-ле-Ционе',
]

const notSuitableFor = [
    'Ищет быстрое и дешевое решение',
    'Не готов к онлайн и не может приехать в Ришон-ле-Цион',
    'Хочет записать ребенка на психологическую или эмоциональную терапию',
    'Понимает, что ребенок в данный момент не готов начать обучение',
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
                    <h2>Для кого это подходит, а для кого нет?</h2>
                </motion.div>

                <div className="who-grid">
                    <motion.div
                        className="who-card suitable"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Подходит для родителей, которые ищут:</h3>
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
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Не подходит для тех, кто:</h3>
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
