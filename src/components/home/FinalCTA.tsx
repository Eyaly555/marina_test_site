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
                    <h2>בואו נראה אם אנחנו מתאימים<br />לילד/ה שלכם</h2>
                    <p className="final-cta-subtitle">
                        שיחת טלפון קצרה וחינמית - נבין את המצב ונראה איך אנחנו יכולים לעזור
                    </p>

                    <div className="final-cta-form">
                        <LeadForm
                            variant="dark"
                            buttonText="קבעו שיחת יעוץ חינמית"
                        />
                    </div>

                    <div className="final-cta-notes">
                        <div className="cta-note">
                            <Phone size={16} />
                            <span>השיחה אורכת 15-20 דקות | ללא התחייבות</span>
                        </div>
                        <div className="cta-note warning">
                            <AlertTriangle size={16} />
                            <span>אנחנו מתמחים בליווי לטווח ארוך. שיעורים פרונטליים רק בראשון לציון.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
