import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import './LeadForm.css'

const gradeOptions = [
    '1 класс', '2 класс', '3 класс', '4 класс', '5 класс', '6 класс',
    '7 класс', '8 класс', '9 класс', '10 класс', '11 класс', '12 класс',
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
    title = 'Запись на консультацию с нами',
    subtitle = 'Заполните данные, и мы свяжемся с вами в течение 24 часов',
    buttonText = 'Записаться на бесплатную консультацию',
    badgeText = 'Бесплатная консультация',
    disclaimerText = 'Без обязательств, бесплатно',
    showBadge = true,
}: LeadFormProps) {
    const [formData, setFormData] = useState({
        parentFirstName: '',
        parentLastName: '',
        phone: '',
        childName: '',
        grade: '',
        notes: '',
    })
    const [privacyConsent, setPrivacyConsent] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch('/api/webhook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    parentFirstName: formData.parentFirstName,
                    parentLastName: formData.parentLastName,
                    phone: formData.phone,
                    childName: formData.childName,
                    grade: formData.grade,
                    notes: formData.notes,
                    source: 'landing-page',
                    timestamp: new Date().toISOString(),
                }),
            })

            if (!response.ok) throw new Error('Request failed')
            setIsSubmitted(true)
        } catch {
            console.error('Form submission failed')
            setError('Произошла ошибка, попробуйте еще раз или позвоните нам')
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
                    <h3>Большое спасибо!</h3>
                    <p>Мы получили ваши данные и свяжемся с вами в ближайшее время</p>
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
                        <label>Имя</label>
                        <input
                            type="text"
                            placeholder="Имя родителя"
                            value={formData.parentFirstName}
                            onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Фамилия</label>
                        <input
                            type="text"
                            placeholder="Фамилия родителя"
                            value={formData.parentLastName}
                            onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="form-group form-group-full">
                    <label>Телефон</label>
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
                        <label>Имя ребенка</label>
                        <input
                            type="text"
                            placeholder="Имя ребенка"
                            value={formData.childName}
                            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Класс</label>
                        <select
                            value={formData.grade}
                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                            required
                        >
                            <option value="">Выберите класс</option>
                            {gradeOptions.map((g) => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group form-group-full">
                    <label>Примечания (необязательно)</label>
                    <textarea
                        placeholder="Расскажите немного о ребенке и его трудностях..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={3}
                    />
                </div>

                <div className="form-group form-group-full privacy-consent">
                    <label className="consent-label">
                        <input
                            type="checkbox"
                            checked={privacyConsent}
                            onChange={(e) => setPrivacyConsent(e.target.checked)}
                            required
                        />
                        <span className="consent-text">
                            Я соглашаюсь на получение от центра «Ариадна» маркетинговых писем и релевантных обновлений.
                            <br />
                            <span className="consent-note">(Согласие можно отозвать в любое время)</span>
                            {' '}
                            <a href="https://ariadnacenter.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="consent-link">
                                (Политика конфиденциальности)
                            </a>
                        </span>
                    </label>
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
                            <ArrowRight size={18} />
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
