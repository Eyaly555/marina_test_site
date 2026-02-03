import { motion } from 'framer-motion'
import { Phone, AlertTriangle } from 'lucide-react'
import LeadForm from '../common/LeadForm'
import './FinalCTA.css'

export default function FinalCTA() {
    return (
        <section className="final-cta-section" id="contact">
            <div className="final-cta-bg">
                <div className="final-cta-gradient" />
            </div>

            <div className="container">
                <motion.div
                    className="final-cta-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Давайте посмотрим, подходим ли мы<br />вашему ребенку</h2>
                    <p className="final-cta-subtitle">
                        Короткий бесплатный телефонный звонок - поймем ситуацию и посмотрим, как мы можем помочь
                    </p>

                    <div className="final-cta-form">
                        <LeadForm
                            variant="dark"
                            buttonText="Запишитесь на бесплатную консультацию"
                        />
                    </div>

                    <div className="final-cta-notes">
                        <div className="cta-note">
                            <Phone size={16} />
                            <span>Звонок длится 15-20 минут | Без обязательств</span>
                        </div>
                        <div className="cta-note warning">
                            <AlertTriangle size={16} />
                            <span>Мы специализируемся на долгосрочном сопровождении. Фронтальные занятия только в Ришон-ле-Ционе.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
