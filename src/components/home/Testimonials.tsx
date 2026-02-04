import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Testimonials.css'

export default function Testimonials() {
    const widgetRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!widgetRef.current) return
        const script = document.createElement('script')
        script.src = 'https://cdn.trustindex.io/loader.js?52fedbd6427d01184d862f6b98b'
        script.async = true
        script.defer = true
        widgetRef.current.appendChild(script)
        return () => {
            script.remove()
        }
    }, [])

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

                <div className="testimonials-widget" ref={widgetRef} />
            </div>
        </section>
    )
}
