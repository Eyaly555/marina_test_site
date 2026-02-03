import { motion } from 'framer-motion'
import { ReactGoogleReviews } from 'react-google-reviews'
import 'react-google-reviews/dist/index.css'
import './Testimonials.css'

const FEATURABLE_WIDGET_ID = import.meta.env.VITE_FEATURABLE_WIDGET_ID || 'YOUR_WIDGET_ID'

export default function Testimonials() {
    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-bg">
                <div className="testimonials-gradient" />
            </div>

            <div className="container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>מה הורים אומרים על מרכז אריאדנה</h2>
                </motion.div>

                <motion.div
                    className="google-reviews-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <ReactGoogleReviews
                        layout="carousel"
                        featurableId={FEATURABLE_WIDGET_ID}
                        maxCharacters={200}
                        carouselAutoplay={true}
                        carouselSpeed={5000}
                        showDots={true}
                        dateDisplay="relative"
                        reviewVariant="card"
                        theme="light"
                        structuredData={true}
                        brandName="מרכז אריאדנה"
                    />
                </motion.div>
            </div>
        </section>
    )
}
