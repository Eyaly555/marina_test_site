import { motion } from 'framer-motion'
import { Target, Heart, BookOpen, Users, Award, Clock, CheckCircle2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
    {
        icon: Heart,
        title: 'להאמין',
        description: 'אנחנו מאמינים ביכולות של כל תלמיד ומחזקים את הביטחון העצמי שלו. ההצלחה מתחילה מאמונה.',
        color: '#ef4444'
    },
    {
        icon: BookOpen,
        title: 'ללמוד',
        description: 'אנחנו מלמדים שיטות למידה ואסטרטגיות להצלחה, לא רק חומר יבש. הכלים נשארים לכל החיים.',
        color: '#3b82f6'
    },
    {
        icon: Target,
        title: 'לתרגל',
        description: 'תרגול מוביל למצוינות. אנחנו מספקים סביבה תומכת לתרגול, חזרה והתקדמות מתמדת.',
        color: '#10b981'
    },
]

const features = [
    'שיעורים פרטיים וקבוצתיים קטנות',
    'מורים מוסמכים עם ניסיון עשיר',
    'גישה אישית לכל תלמיד',
    'עדכון שוטף להורים',
    'סביבה לימודית נעימה ומעוררת השראה',
    'שיטות למידה מוכחות',
]

const team = [
    { name: 'מרינה', role: 'מנהלת ומייסדת', years: '7+' },
    { name: 'צוות מקצועי', role: 'מורים מוסמכים', count: '28+' },
]

export default function About() {
    return (
        <div className="page-about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <div className="hero-gradient" />
                    <div className="hero-pattern" />
                </div>

                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Sparkles size={16} />
                            <span>הסיפור שלנו</span>
                        </div>
                        <h1>
                            <span className="title-line">מרכז למידה</span>
                            <span className="title-gradient">אריאדנה</span>
                        </h1>
                        <p className="hero-subtitle">
                            <strong>להאמין.</strong> <strong>ללמוד.</strong> <strong>לתרגל.</strong>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            className="story-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>מי אנחנו?</h2>
                            <p>
                                מרכז אריאדנה הוקם בשנת 2017 מתוך אמונה עמוקה כי לכל תלמיד ותלמידה
                                יש את הפוטנציאל להצליח. אנחנו מאמינים בגישה אישית, סבלנית ומקצועית,
                                המותאמת לצרכים הייחודיים של כל לומד.
                            </p>
                            <p>
                                הצוות שלנו מורכב ממורים מנוסים ואכפתיים, שרואים בהוראה שליחות.
                                אנחנו לא רק מלמדים חומר - אנחנו מעניקים כלים להצלחה בחיים,
                                מחזקים ביטחון עצמי, ובונים יחד את הדרך להישגים.
                            </p>
                            <div className="story-stats">
                                <div className="stat">
                                    <Users size={24} />
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">תלמידים</span>
                                </div>
                                <div className="stat">
                                    <Award size={24} />
                                    <span className="stat-number">7+</span>
                                    <span className="stat-label">שנים</span>
                                </div>
                                <div className="stat">
                                    <Clock size={24} />
                                    <span className="stat-number">28+</span>
                                    <span className="stat-label">מורים</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="story-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="image-placeholder">
                                <div className="placeholder-content">
                                    <BookOpen size={64} />
                                    <span>מרכז למידה אריאדנה</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>הערכים שלנו</h2>
                        <p>שלושת העמודים שמנחים את הפילוסופיה החינוכית שלנו</p>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="value-icon" style={{ background: value.color }}>
                                    <value.icon size={28} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="about-features">
                <div className="container">
                    <div className="features-grid">
                        <motion.div
                            className="features-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>למה לבחור בנו?</h2>
                            <p>
                                המרכז שלנו מציע חווית למידה ייחודית שמשלבת מקצועיות
                                עם יחס אישי וחם לכל תלמיד.
                            </p>
                            <ul className="features-list">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <CheckCircle2 size={20} />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="features-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="team-cards">
                                {team.map((member, index) => (
                                    <div key={index} className="team-card">
                                        <div className="team-avatar">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div className="team-info">
                                            <h4>{member.name}</h4>
                                            <p>{member.role}</p>
                                        </div>
                                        <div className="team-stat">
                                            {member.years || member.count}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>מוכנים להתחיל?</h2>
                        <p>הצטרפו למשפחת אריאדנה והתחילו את המסע להצלחה</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                קבעו שיעור ניסיון
                            </Link>
                            <Link to="/lessons" className="btn btn-outline btn-lg">
                                לכל המקצועות
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
