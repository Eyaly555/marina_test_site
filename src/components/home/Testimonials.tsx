import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
    {
        text: 'Видеть, как моя дочь улыбается после теста - это просто чудо. После двух лет фрустрации центр совершил переворот на 180 градусов. Теперь она даже любит учиться!',
        author: 'Ронит Ш.',
        role: 'родитель ученицы 8 класса',
    },
    {
        text: 'Контроль и регулярные отчеты дали нам душевное спокойствие. Наконец-то я знаю, что происходит и где находится мой ребенок. Персонал профессиональный и внимательный.',
        author: 'Дэни М.',
        role: 'родитель ученика 10 класса',
    },
    {
        text: 'Мы попробовали 4 репетитора до Центра Ариадна. Разница? Здесь есть целая система, которая работает - не просто учитель. Оценки выросли на 25 баллов за 4 месяца.',
        author: 'Яэль К.',
        role: 'родитель ученицы 9 класса',
    },
]

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-bg">
                <div className="testimonials-gradient" />
            </div>

            <div className="container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Что говорят родители о Центре Ариадна</h2>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="testimonial-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <strong>{testimonial.author}</strong>
                                <span>{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
