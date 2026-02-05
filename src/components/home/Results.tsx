import { motion } from 'framer-motion'
import './Results.css'

const results = [
    { image: '/test1.jpg', caption: 'תלמיד כיתה ח\' - 95 במתמטיקה' },
    { image: '/test2.jpg', caption: 'תלמידת כיתה ט\' - 92 במתמטיקה' },
    { image: '/test3.jpg', caption: 'תלמיד כיתה יא\' - 98 במתמטיקה' },
    { image: '/test4.jpg', caption: 'תלמידת כיתה י\' - 90 במתמטיקה' },
    { image: '/test5.jpg', caption: 'תלמיד כיתה יב\' - 96 באנגלית' },
]

export default function Results() {
    return (
        <section className="results-section" id="results">
            <div className="container">
                <motion.div
                    className="results-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>התוצאות מדברות בעד עצמן</h2>
                </motion.div>

                <div className="results-grid">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            className="result-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="result-image">
                                <img src={result.image} alt={result.caption} loading="lazy" />
                            </div>
                            <p className="result-caption">{result.caption}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
