import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft, Phone } from 'lucide-react'
import './LeadForm.css'

const gradeOptions = [
    "א'", "ב'", "ג'", "ד'", "ה'", "ו'",
    "ז'", "ח'", "ט'", "י'", "יא'", "יב'",
]


interface LeadFormProps {
    variant?: 'card' | 'inline' | 'dark'
    title?: string
    subtitle?: string
    buttonText?: string
    badgeText?: string
    disclaimerText?: string
    showBadge?: boolean
}

export default function LeadForm({
    variant = 'card',
    title = 'הרשמה לשיעור ראשון',
    subtitle = 'מלאו את הפרטים ונחזור אליכם תוך 24 שעות',
    buttonText = 'קבע שיעור ניסיון חינם',
    badgeText = 'שיעור ניסיון חינם',
    disclaimerText = 'ללא התחייבות, ללא עלות',
    showBadge = true,
}: LeadFormProps) {
    const [formData, setFormData] = useState({
        parentFirstName: '',
        parentLastName: '',
        phone: '',
        childName: '',
        grade: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        const webhookUrl = import.meta.env.VITE_WEBHOOK_URL

        try {
            if (webhookUrl && webhookUrl !== 'https://your-webhook-url.example.com/webhook') {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        parentFirstName: formData.parentFirstName,
                        parentLastName: formData.parentLastName,
                        phone: formData.phone,
                        childName: formData.childName,
                        grade: formData.grade,
                        source: 'landing-page',
                        timestamp: new Date().toISOString(),
                    }),
                })
            } else {
                console.log('Form submitted (no webhook configured):', formData)
            }
            setIsSubmitted(true)
        } catch {
            console.error('Form submission failed')
            setError('אירעה שגיאה, נסו שנית או התקשרו אלינו')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <motion.div
                className={`lead-form-wrapper ${variant}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="form-success">
                    <div className="success-icon">
                        <CheckCircle2 size={48} />
                    </div>
                    <h3>תודה רבה!</h3>
                    <p>קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם</p>
                </div>
            </motion.div>
        )
    }

    return (
        <div className={`lead-form-wrapper ${variant}`}>
            {variant === 'card' && (
                <div className="form-header">
                    {showBadge && (
                        <div className="form-badge">
                            <span className="pulse-dot" />
                            {badgeText}
                        </div>
                    )}
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="lead-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>שם פרטי</label>
                        <input
                            type="text"
                            placeholder="שם פרטי של ההורה"
                            value={formData.parentFirstName}
                            onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>שם משפחה</label>
                        <input
                            type="text"
                            placeholder="שם משפחה של ההורה"
                            value={formData.parentLastName}
                            onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="form-group form-group-full">
                    <label>טלפון</label>
                    <input
                        type="tel"
                        placeholder="050-000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>שם הילד/ה</label>
                        <input
                            type="text"
                            placeholder="שם הילד/ה"
                            value={formData.childName}
                            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>כיתה</label>
                        <select
                            value={formData.grade}
                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                            required
                        >
                            <option value="">בחר כיתה</option>
                            {gradeOptions.map((g) => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {error && <p className="form-error">{error}</p>}

                <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="loader" />
                    ) : (
                        <>
                            <Phone size={18} />
                            <span>{buttonText}</span>
                            <ArrowLeft size={18} />
                        </>
                    )}
                </button>

                <p className="form-disclaimer">
                    <CheckCircle2 size={14} />
                    {disclaimerText}
                </p>
            </form>
        </div>
    )
}
