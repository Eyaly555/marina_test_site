import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calculator, Languages, BookOpen, GraduationCap, Atom, Calendar, Binary, Scale, ArrowLeft, Sparkles } from 'lucide-react'
import './ServiceGrid.css'

const services = [
    {
        id: 'math',
        name: 'מתמטיקה',
        icon: Calculator,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        description: 'מאלגברה ועד חדו"א, הכנה מושלמת לבגרות'
    },
    {
        id: 'english',
        name: 'אנגלית',
        icon: Languages,
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        description: 'שליטה מלאה בשפה, קריאה, כתיבה ודיבור'
    },
    {
        id: 'hebrew',
        name: 'לשון',
        icon: BookOpen,
        gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
        description: 'הבנת הנקרא, דקדוק וכתיבה יצירתית'
    },
    {
        id: 'history',
        name: 'היסטוריה',
        icon: Calendar,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        description: 'מההיסטוריה הקדומה ועד ימינו'
    },
    {
        id: 'physics',
        name: 'פיזיקה',
        icon: Atom,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        description: 'מכניקה, חשמל ואופטיקה לכל הרמות'
    },
    {
        id: 'kindergarten',
        name: 'הכנה לכיתה א׳',
        icon: GraduationCap,
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        description: 'קריאה, כתיבה וחשבון בסביבה חמה'
    },
    {
        id: 'cs',
        name: 'מדעי המחשב',
        icon: Binary,
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        description: 'תכנות, אלגוריתמיקה ומבני נתונים'
    },
    {
        id: 'civics',
        name: 'אזרחות',
        icon: Scale,
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        description: 'משטר ופוליטיקה בישראל'
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
}

export default function ServiceGrid() {
    return (
        <section className="services-section">
            {/* Background Elements */}
            <div className="services-bg">
                <div className="services-pattern" />
            </div>

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge">
                        <Sparkles size={16} />
                        <span>מגוון מקצועות</span>
                    </div>
                    <h2 className="section-title">מרחב השיעורים שלנו</h2>
                    <p className="section-subtitle">
                        בחרו את המקצוע שמתאים לכם ותתחילו את המסע להצלחה
                    </p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={cardVariants}>
                            <Link to={`/lessons/${service.id}`} className="service-card">
                                <div className="card-glow" style={{ background: service.gradient }} />
                                <div className="card-content">
                                    <div className="icon-wrapper" style={{ background: service.gradient }}>
                                        <service.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3>{service.name}</h3>
                                    <p>{service.description}</p>
                                    <div className="card-link">
                                        <span>למידע נוסף</span>
                                        <ArrowLeft size={16} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p>לא מצאתם את מה שחיפשתם?</p>
                    <Link to="/contact" className="btn btn-outline">
                        דברו איתנו
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
