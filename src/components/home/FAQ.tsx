import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqs = [
    {
        question: 'Где вы находитесь?',
        answer: 'Очные занятия только в Ришон-ле-Ционе. Онлайн занятия по всему Израилю.',
    },
    {
        question: 'Какие предметы вы преподаете?',
        answer: 'Все предметы - математика, английский, иврит, науки и все остальное. С 1 по 12 класс.',
    },
    {
        question: 'Сколько времени нужно, чтобы увидеть улучшение?',
        answer: 'Это зависит от ребенка и его начального уровня знаний. Но большинство родителей наших учеников отмечают, что через несколько недель ребенок начал верить в себя, а через 2-3 месяца улучшились оценки.',
    },
    {
        question: 'Кто преподаватели?',
        answer: 'Команда опытных и эмпатичных преподавателей, прошедших обучение по нашей методологии.',
    },
    {
        question: 'Откуда мне знать что в этот раз получится?',
        answer: 'Важно подчеркнуть, что у нас вы получите не очередного репетитора, а комплексную систему обучения: оптимально подходящий учитель, контроль, корректировки, отчеты. Однако успех во многом будет зависеть от ребенка и его вложений в процесс обучения.',
    },
    {
        question: 'Что происходит на консультации?',
        answer: 'Короткий телефонный звонок (15-20 минут), во время которого мы знакомимся с вами, понимаем ситуацию и смотрим, подходим ли мы друг другу. Без обязательств.',
    },
    {
        question: 'Есть ли обязательство после проведения диагностики?',
        answer: 'Нет. Диагностика не обязывает записаться на занятия. Однако мы рекомендуем назначать ее, только если вы действительно решили заниматься, выделили время на уроки и заложили обучение в бюджет.',
    },
    {
        question: 'Сколько длится минимальный процесс?',
        answer: 'Минимальный срок обучения в нашем центре 3 месяца. Но для устойчивых результатов, формирования привычки к занятиям и развития уверенности в себе мы рекомендуем заниматься от 6 месяцев.',
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
                    <h2>Вопросы, которые задают родители</h2>
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
