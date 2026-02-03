import Hero from '../components/home/Hero'
import ResearchQuote from '../components/home/ResearchQuote'
import ProblemsVsSolutions from '../components/home/ProblemsVsSolutions'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import Results from '../components/home/Results'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Excellence from '../components/home/Excellence'
import WhoItsFor from '../components/home/WhoItsFor'
import FAQ from '../components/home/FAQ'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
    return (
        <div className="page-home">
            <Hero />
            <ResearchQuote />
            <ProblemsVsSolutions />
            <HowItWorks />
            <Testimonials />
            <Results />
            <WhyChooseUs />
            <Excellence />
            <WhoItsFor />
            <FAQ />
            <FinalCTA />
        </div>
    )
}
