import { motion } from 'framer-motion'
import './Results.css'

const results = [
    { image: '/test1.jpg', caption: 'Ученик 8 класса - 95 по математике' },
    { image: '/test2.jpg', caption: 'Ученица 9 класса - 92 по английскому' },
    { image: '/test3.jpg', caption: 'Ученик 11 класса - 98 по физике' },
    { image: '/test4.jpg', caption: 'Ученица 10 класса - 90 по ивриту' },
    { image: '/test5.jpg', caption: 'Ученик 12 класса - 96 по математике' },
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
                    <h2>Результаты говорят сами за себя</h2>
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
