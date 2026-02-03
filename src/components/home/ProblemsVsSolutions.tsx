import { motion } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'
import './ProblemsVsSolutions.css'

const problems = [
    'Ребенок не понимает материал в классе',
    'Получает низкие оценки на тестах',
    'Не чувствует уверенности в своих силах',
    'Ненавидит домашние задания',
    'Не испытывает интерес к учебе',
    'Занимался с репетиторами, но ничего не помогло',
]

const solutions = [
    'Индивидуальный подход к каждому ученику',
    'Адаптированная учебная программа',
    'Укрепление уверенности в себе',
    'Реальное улучшение оценок',
    'Постоянный контроль и отчеты для родителей',
    'Построение основ для долгосрочной перспективы',
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
                    <h2>Знакомо?</h2>
                </motion.div>

                <div className="pvs-grid">
                    <motion.div
                        className="pvs-card problems"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Проблемы</h3>
                        <ul>
                            {problems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
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
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>Наши решения</h3>
                        <ul>
                            {solutions.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
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
