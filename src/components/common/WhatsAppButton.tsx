import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
    const phoneNumber = '972546886606'
    const message = 'שלום, אני מעוניין/ת לקבל מידע נוסף על שיעורים פרטיים במרכז אריאדנה'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="whatsapp-pulse" />
            <div className="whatsapp-icon">
                <MessageCircle size={28} />
            </div>
            <span className="whatsapp-tooltip">דברו איתנו בוואטסאפ</span>
        </motion.a>
    )
}
