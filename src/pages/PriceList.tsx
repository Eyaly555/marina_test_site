import { motion } from 'framer-motion'
import { Check, Sparkles, Star, Users, User, UsersRound, Gift, Info, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import './PriceList.css'

const pricingPlans = [
    {
        id: 'private',
        title: 'שיעור פרטי',
        duration: '45 דקות',
        price: 120,
        currency: '₪',
        icon: User,
        popular: false,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        features: [
            'יחס אישי 1 על 1',
            'התאמה מלאה לקצב התלמיד',
            'תכנית לימודים מותאמת',
            'סיכום שיעור במייל',
            'זמינות גבוהה לשאלות'
        ]
    },
    {
        id: 'duo',
        title: 'שיעור זוגי',
        duration: '60 דקות',
        price: 90,
        currency: '₪',
        perPerson: true,
        icon: Users,
        popular: true,
        gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
        features: [
            'למידה עם חבר/ה',
            'אווירה לימודית מהנה',
            'הפריה הדדית ודיונים',
            'מחיר משתלם יותר',
            'שיעור ארוך יותר'
        ]
    },
    {
        id: 'group',
        title: 'קבוצה קטנה',
        duration: '90 דקות',
        price: 70,
        currency: '₪',
        perPerson: true,
        maxParticipants: 5,
        icon: UsersRound,
        popular: false,
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        features: [
            'עד 5 משתתפים בקבוצה',
            'דיונים והפריה הדדית',
            'תרגול מעמיק ומגוון',
            'סביבה לימודית חברתית',
            'המחיר הכי משתלם'
        ]
    }
]

const packages = [
    {
        title: 'כרטיסייה 10 שיעורים',
        discount: '5%',
        description: 'רכשו 10 שיעורים מראש וקבלו הנחה של 5%',
        icon: Gift
    },
    {
        title: 'מנוי חודשי',
        discount: '10%',
        description: 'מנוי קבוע של 4 שיעורים בשבוע עם הנחה משמעותית',
        icon: Star
    }
]

const terms = [
    'המחירים כוללים מע״מ.',
    'ביטול שיעור עד 24 שעות מראש ללא חיוב.',
    'שיעור ניסיון ראשון בהנחה של 50%.',
    'ניתן לשלם באשראי, ביט, או העברה בנקאית.',
    'התשלום מתבצע בתחילת כל חודש.'
]

export default function PriceList() {
    return (
        <div className="page-price-list">
            {/* Hero Section */}
            <section className="pricing-hero">
                <div className="pricing-hero-bg">
                    <div className="hero-gradient" />
                    <div className="hero-pattern" />
                </div>

                <div className="container">
                    <motion.div
                        className="pricing-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Sparkles size={16} />
                            <span>שקיפות מלאה</span>
                        </div>
                        <h1>מחירון</h1>
                        <p>מחירים הוגנים ושקופים, בלי הפתעות</p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pricing-cards-section">
                <div className="container">
                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {plan.popular && (
                                    <div className="popular-badge">
                                        <Star size={14} />
                                        <span>הכי פופולרי</span>
                                    </div>
                                )}

                                <div className="card-header">
                                    <div className="plan-icon" style={{ background: plan.gradient }}>
                                        <plan.icon size={28} />
                                    </div>
                                    <h3>{plan.title}</h3>
                                    <span className="duration">{plan.duration}</span>
                                </div>

                                <div className="card-price">
                                    <span className="price-value">{plan.price}</span>
                                    <span className="price-currency">{plan.currency}</span>
                                    {plan.perPerson && (
                                        <span className="price-per">למשתתף</span>
                                    )}
                                </div>

                                <ul className="card-features">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <Check size={18} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="card-cta">
                                    <span>קבעו שיעור</span>
                                    <ArrowLeft size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="packages-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>חבילות והנחות</h2>
                        <p>חסכו עם החבילות המיוחדות שלנו</p>
                    </motion.div>

                    <div className="packages-grid">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className="package-card"
                                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="package-icon">
                                    <pkg.icon size={24} />
                                </div>
                                <div className="package-content">
                                    <div className="package-header">
                                        <h3>{pkg.title}</h3>
                                        <span className="discount-badge">{pkg.discount} הנחה</span>
                                    </div>
                                    <p>{pkg.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms Section */}
            <section className="terms-section">
                <div className="container">
                    <motion.div
                        className="terms-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="terms-header">
                            <Info size={24} />
                            <h3>הערות חשובות</h3>
                        </div>
                        <ul className="terms-list">
                            {terms.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pricing-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>יש לכם שאלות?</h2>
                        <p>נשמח לעזור ולהתאים את החבילה המושלמת עבורכם</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                צרו קשר
                            </Link>
                            <a href="tel:054-688-6606" className="btn btn-outline btn-lg">
                                התקשרו עכשיו
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
