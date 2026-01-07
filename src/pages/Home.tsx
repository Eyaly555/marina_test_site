import Hero from '../components/home/Hero'
import ServiceGrid from '../components/home/ServiceGrid'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
    return (
        <div className="page-home">
            <Hero />
            <ServiceGrid />
            <Stats />
            <Testimonials />
        </div>
    )
}
