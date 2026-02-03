import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle2, Rocket } from 'lucide-react'
import LeadForm from '../common/LeadForm'
import './Excellence.css'

const stats = [
    { icon: GraduationCap, value: '2,750+', label: 'выпускников добились впечатляющих результатов и преодолели учебные пробелы' },
    { icon: CheckCircle2, value: 'Полная адаптация', label: 'Учебная программа синхронизирована с требованиями Министерства образования' },
    { icon: Rocket, value: 'Инструменты для будущего', label: 'Математика, языки и технологии (программирование) - все под одной крышей' },
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
                    <h2>Уверенность в себе и установка на успех закладываются в центре Ариадна</h2>
                    <p className="excellence-subtitle">
                        Вам важно развить у ребенка уверенность в себе? Вы обратились по адресу. Центр Ариадна с 2008 года объединяет высокие образовательные стандарты с заботой об эмоциональном состоянии учеников.
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
                    Превращаем потенциал в доказанный успех. Присоединяйтесь к семье Ариадна.
                </motion.p>

                <motion.div
                    className="excellence-form-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <LeadForm variant="card" title="Присоединяйтесь к семье Ариадна" subtitle="Заполните данные, и мы свяжемся с вами в течение 24 часов" />
                </motion.div>
            </div>
        </section>
    )
}
