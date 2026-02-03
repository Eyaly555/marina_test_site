import { motion } from 'framer-motion'
import { Target, Globe, BookOpen, BarChart3, Trophy, Users } from 'lucide-react'
import './WhyChooseUs.css'

const features = [
    {
        icon: Target,
        title: 'Полная индивидуальная адаптация',
        description: 'Каждый ребенок учится по-своему - мы адаптируем метод под его стиль обучения',
    },
    {
        icon: Globe,
        title: 'Полная гибкость',
        description: 'Онлайн или очно в Ришон-ле-Ционе - выбираете то, что вам удобно',
    },
    {
        icon: BookOpen,
        title: 'Все предметы',
        description: 'Математика, английский, иврит, науки - все, что нужно вашему ребенку',
    },
    {
        icon: BarChart3,
        title: 'Регулярные отчеты',
        description: 'Постоянный контроль и отчеты для родителей - вы всегда знаете, что происходит',
    },
    {
        icon: Trophy,
        title: 'Построение основ для долгосрочной перспективы',
        description: 'Не "натаскивание" к тесту, а формирование прочной базы знаний, которые останутся навсегда',
    },
    {
        icon: Users,
        title: 'Обученные преподаватели',
        description: 'Команда, прошедшая обучение по нашей методологии и умеющая работать с каждым ребенком',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function WhyChooseUs() {
    return (
        <section className="why-section" id="why-us">
            <div className="container">
                <motion.div
                    className="why-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Почему родители выбирают Центр Ариадна?</h2>
                </motion.div>

                <motion.div
                    className="why-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} className="why-card" variants={cardVariants}>
                            <div className="why-icon">
                                <feature.icon size={28} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
