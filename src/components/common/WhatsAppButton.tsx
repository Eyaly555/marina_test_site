import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '972549628860'
    const phoneNumber = '054-8052281'
    const message = 'Посмотрели информацию о вас на сайте, заинтересовались и хотели бы узнать дополнительную информацию.'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return (
        <div className="floating-contact">
            <motion.a
                href={`tel:${phoneNumber}`}
                className="contact-button phone-button"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="contact-icon">
                    <Phone size={24} />
                </div>
                <span className="contact-tooltip">{phoneNumber}</span>
            </motion.a>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button whatsapp-button"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="whatsapp-pulse" />
                <div className="contact-icon whatsapp-icon">
                    <FaWhatsapp size={28} />
                </div>
                <span className="contact-tooltip">Напишите нам в WhatsApp</span>
            </motion.a>
        </div>
    )
}
