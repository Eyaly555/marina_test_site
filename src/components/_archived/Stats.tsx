import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Calendar, Award, TrendingUp } from 'lucide-react'
import './Stats.css'

interface StatItem {
    icon: React.ElementType
    value: number
    suffix: string
    label: string
    description: string
}

const stats: StatItem[] = [
    {
        icon: Users,
        value: 500,
        suffix: '+',
        label: 'תלמידים',
        description: 'סיימו בהצלחה'
    },
    {
        icon: Calendar,
        value: 7,
        suffix: '+',
        label: 'שנות ניסיון',
        description: 'בהוראה והדרכה'
    },
    {
        icon: Award,
        value: 98,
        suffix: '%',
        label: 'שביעות רצון',
        description: 'מההורים והתלמידים'
    },
    {
        icon: TrendingUp,
        value: 25,
        suffix: '+',
        label: 'נקודות שיפור',
        description: 'ממוצע עלייה בציונים'
    },
]

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            let startTime: number
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
                setCount(Math.floor(progress * value))
                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
    }, [isInView, value, duration])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

export default function Stats() {
    return (
        <section className="stats-section">
            <div className="stats-bg">
                <div className="stats-gradient" />
                <div className="stats-pattern" />
            </div>

            <div className="container">
                <motion.div
                    className="stats-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>המספרים מדברים בעד עצמם</h2>
                    <p>אנחנו גאים בתוצאות שלנו ובאמון שההורים והתלמידים נותנים בנו</p>
                </motion.div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="stat-icon">
                                <stat.icon size={28} />
                            </div>
                            <div className="stat-value">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-description">{stat.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
