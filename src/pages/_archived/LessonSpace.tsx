import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Calculator, Languages, BookText, Clock, Atom, Blocks, Code, Scale,
    ArrowLeft, CheckCircle2, Sparkles, Target, Users, Award, BookOpen
} from 'lucide-react'
import './LessonSpace.css'

const lessonData: Record<string, {
    title: string;
    description: string;
    fullDescription: string;
    topics: string[];
    icon: typeof Calculator;
    gradient: string;
    levels: string[];
    benefits: string[];
}> = {
    math: {
        title: 'מתמטיקה',
        description: 'שיעורי מתמטיקה לכל הרמות, מיסודי ועד 5 יחידות בגרות',
        fullDescription: 'המתמטיקה היא בסיס להצלחה בכל תחום. אנחנו מלמדים מתמטיקה בגישה ברורה ומובנית, תוך התאמה לרמת התלמיד ובניית ביטחון עצמי. מיסודות האלגברה ועד חדו"א - נעזור לכם להגיע לציון שתמיד חלמתם עליו.',
        topics: ['אלגברה ופונקציות', 'גיאומטריה אנליטית', 'חדו"א (כולל אינפי)', 'סטטיסטיקה והסתברות', 'טריגונומטריה', 'סדרות'],
        icon: Calculator,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        levels: ['יסודי', 'חט"ב', '3 יח"ל', '4 יח"ל', '5 יח"ל'],
        benefits: ['הכנה מקיפה לבגרות', 'תרגול אינטנסיבי', 'פתרון מבחנים', 'חומרי עזר מותאמים']
    },
    english: {
        title: 'אנגלית',
        description: 'שיפור מיומנויות השפה ואנגלית לבגרות ולחיים',
        fullDescription: 'אנגלית היא מפתח להצלחה בעולם הגלובלי. אנחנו מלמדים אנגלית בצורה חווייתית ומעשית - שיפור דיבור, הבנת הנקרא, כתיבה ודקדוק. הכנה מקצועית לבגרות ולבחינות אחרות.',
        topics: ['דקדוק מתקדם', 'אוצר מילים', 'הבנת הנקרא', 'כתיבה אקדמית', 'שיחה ודיבור', 'הכנה לפסיכומטרי'],
        icon: Languages,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        levels: ['יסודי', 'חט"ב', '3 יח"ל', '4 יח"ל', '5 יח"ל'],
        benefits: ['שיפור ציון הבגרות', 'הגברת הביטחון בדיבור', 'הרחבת אוצר מילים', 'כתיבה שוטפת']
    },
    hebrew: {
        title: 'לשון',
        description: 'הכנה לבגרות בלשון, הבנת הנקרא וכתיבה',
        fullDescription: 'לשון עברית היא הבסיס להצלחה במקצועות רבים. אנחנו מלמדים תחביר, מערכת הצורות, הבנת הנקרא וכתיבה טיעונית בצורה יסודית ומעמיקה שמבטיחה הצלחה בבגרות.',
        topics: ['תחביר', 'מערכת הצורות', 'הבנת הנקרא', 'כתיבה טיעונית', 'פרקטיקה', 'משמעויות'],
        icon: BookText,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        levels: ['יסודי', 'חט"ב', 'בגרות'],
        benefits: ['הבנת מבנה השפה', 'שיפור הכתיבה', 'הצלחה בבגרות', 'כלים לחיים']
    },
    history: {
        title: 'היסטוריה',
        description: 'לימוד היסטוריה בצורה חווייתית ומעניינת',
        fullDescription: 'היסטוריה יכולה להיות מרתקת! אנחנו מלמדים היסטוריה בגישה חווייתית, עם דגש על הבנת התקופה, קישור לימינו וזיכרון חכם. הכנה מקיפה לבגרות בהיסטוריה.',
        topics: ['לאומיות בעולם ובישראל', 'בית שני', 'השואה', 'קום המדינה', 'מאבקים לאומיים', 'זיכרון ושימור'],
        icon: Clock,
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        levels: ['חט"ב', 'בגרות'],
        benefits: ['הבנה עמוקה', 'שיטות זיכרון', 'תרגול מבחנים', 'הצלחה בבגרות']
    },
    physics: {
        title: 'פיזיקה',
        description: 'שיעורי פיזיקה לתלמידי תיכון - מכניקה, חשמל ועוד',
        fullDescription: 'פיזיקה דורשת הבנה עמוקה ולא רק שינון. אנחנו מלמדים את העקרונות באופן ברור ומובן, עם המון תרגול ויישום. מתאים לכל הרמות - 3, 4 ו-5 יחידות.',
        topics: ['מכניקה', 'חשמל ומגנטיות', 'אופטיקה', 'קרינה וחומר', 'גלים ותנודות', 'מעבדות'],
        icon: Atom,
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        levels: ['3 יח"ל', '4 יח"ל', '5 יח"ל'],
        benefits: ['הבנת עקרונות', 'פתרון בעיות', 'תרגול מעבדות', 'הכנה לבגרות']
    },
    kindergarten: {
        title: 'הכנה לכיתה א׳',
        description: 'מוכנות לכיתה א׳ בצורה משחקית ומהנה',
        fullDescription: 'המעבר לכיתה א\' הוא רגע משמעותי. אנחנו מכינים את הילדים בצורה משחקית ומהנה - זיהוי אותיות ומספרים, מוטוריקה עדינה, וכישורים חברתיים שיעזרו להם להצליח בבית הספר.',
        topics: ['זיהוי אותיות', 'מספרים וספירה', 'מוטוריקה עדינה', 'מיומנויות חברתיות', 'ריכוז וקשב', 'הקראה מודרכת'],
        icon: Blocks,
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        levels: ['גן חובה', 'טרום חובה'],
        benefits: ['ביטחון עצמי', 'מוכנות לימודית', 'כישורים חברתיים', 'הרגלי למידה']
    },
    cs: {
        title: 'מדעי המחשב',
        description: 'הכרת עולם התכנות - Java, Python, C# ועוד',
        fullDescription: 'מדעי המחשב הם העתיד. אנחנו מלמדים תכנות מהיסודות ועד רמה מתקדמת - שפות כמו Java, Python ו-C#, חשיבה אלגוריתמית, ומבני נתונים. מתאים גם להכנה לבגרות וגם להעשרה.',
        topics: ['יסודות התכנות', 'תכנות מונחה עצמים', 'מבני נתונים', 'אלגוריתמים', 'פרויקטים מעשיים', 'Python / Java'],
        icon: Code,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        levels: ['חט"ב', '3 יח"ל', '5 יח"ל'],
        benefits: ['חשיבה לוגית', 'כלים מעשיים', 'הכנה לתעשייה', 'פרויקטים']
    },
    civics: {
        title: 'אזרחות',
        description: 'הכנה לבגרות באזרחות - המשטר והדמוקרטיה בישראל',
        fullDescription: 'אזרחות היא מקצוע יחודי שדורש הבנה ולא רק זיכרון. אנחנו מלמדים את עקרונות הדמוקרטיה, המשטר בישראל, זכויות האדם והאזרח בצורה ברורה ומעניינת.',
        topics: ['מגילת העצמאות', 'רשויות השלטון', 'זכויות אדם', 'מיעוטים בישראל', 'דמוקרטיה', 'חוקי יסוד'],
        icon: Scale,
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        levels: ['בגרות'],
        benefits: ['הבנת המשטר', 'ניתוח מקרים', 'הכנה לבגרות', 'אזרחות טובה']
    }
}

export default function LessonSpace() {
    const { subject } = useParams()
    const data = subject ? lessonData[subject] : null

    // Subjects listing page
    if (!data) {
        return (
            <div className="page-lessons">
                {/* Hero Section */}
                <section className="lessons-hero">
                    <div className="lessons-hero-bg">
                        <div className="hero-gradient" />
                        <div className="hero-pattern" />
                    </div>

                    <div className="container">
                        <motion.div
                            className="lessons-hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="hero-badge">
                                <BookOpen size={16} />
                                <span>מרחב הלמידה</span>
                            </div>
                            <h1>המקצועות שלנו</h1>
                            <p>בחרו את המקצוע וגלו כיצד אנחנו יכולים לעזור</p>
                        </motion.div>
                    </div>
                </section>

                {/* Subjects Grid */}
                <section className="subjects-section">
                    <div className="container">
                        <div className="subjects-grid">
                            {Object.entries(lessonData).map(([key, info], index) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <Link to={`/lessons/${key}`} className="subject-card">
                                        <div className="subject-icon" style={{ background: info.gradient }}>
                                            <info.icon size={32} />
                                        </div>
                                        <div className="subject-content">
                                            <h3>{info.title}</h3>
                                            <p>{info.description}</p>
                                            <div className="subject-levels">
                                                {info.levels.slice(0, 3).map((level, idx) => (
                                                    <span key={idx} className="level-tag">{level}</span>
                                                ))}
                                                {info.levels.length > 3 && (
                                                    <span className="level-more">+{info.levels.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="subject-arrow">
                                            <ArrowLeft size={20} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="lessons-stats">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-item">
                                <Users size={32} />
                                <span className="stat-number">500+</span>
                                <span className="stat-label">תלמידים מרוצים</span>
                            </div>
                            <div className="stat-item">
                                <Award size={32} />
                                <span className="stat-number">95%</span>
                                <span className="stat-label">שיעור הצלחה</span>
                            </div>
                            <div className="stat-item">
                                <Target size={32} />
                                <span className="stat-number">8</span>
                                <span className="stat-label">מקצועות</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    // Subject detail page
    const otherSubjects = Object.entries(lessonData)
        .filter(([key]) => key !== subject)
        .slice(0, 3)

    return (
        <div className="page-lesson-detail">
            {/* Hero Section */}
            <section className="lesson-hero">
                <div className="lesson-hero-bg" style={{ background: data.gradient }} />

                <div className="container">
                    <motion.div
                        className="lesson-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/lessons" className="back-link">
                            <ArrowLeft size={16} />
                            <span>חזרה למקצועות</span>
                        </Link>
                        <div className="lesson-icon">
                            <data.icon size={48} />
                        </div>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className="hero-levels">
                            {data.levels.map((level, idx) => (
                                <span key={idx} className="level-badge">{level}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="lesson-main">
                <div className="container">
                    <div className="lesson-grid">
                        {/* Description */}
                        <motion.div
                            className="lesson-description"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2>על המסלול</h2>
                            <p>{data.fullDescription}</p>

                            <h3>נושאי לימוד עיקריים</h3>
                            <ul className="topics-grid">
                                {data.topics.map((topic, index) => (
                                    <li key={index}>
                                        <CheckCircle2 size={18} />
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefits Card */}
                        <motion.div
                            className="benefits-card"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="benefits-header">
                                <Sparkles size={24} />
                                <h3>מה תקבלו?</h3>
                            </div>
                            <ul className="benefits-list">
                                {data.benefits.map((benefit, index) => (
                                    <li key={index}>
                                        <CheckCircle2 size={18} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="cta-button">
                                <span>קבעו שיעור ניסיון</span>
                                <ArrowLeft size={18} />
                            </Link>
                            <p className="cta-note">שיעור ניסיון ראשון בהנחה של 50%</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Subjects */}
            <section className="related-subjects">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>מקצועות נוספים</h2>
                        <p>גלו עוד מקצועות שאנחנו מלמדים</p>
                    </motion.div>

                    <div className="related-grid">
                        {otherSubjects.map(([key, info], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/lessons/${key}`} className="related-card">
                                    <div className="related-icon" style={{ background: info.gradient }}>
                                        <info.icon size={24} />
                                    </div>
                                    <h4>{info.title}</h4>
                                    <ArrowLeft size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="lesson-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>מוכנים להתחיל?</h2>
                        <p>הצטרפו לתלמידים שכבר מצליחים ב{data.title}</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                לשיעור ניסיון
                            </Link>
                            <Link to="/price-list" className="btn btn-outline btn-lg">
                                למחירון
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
