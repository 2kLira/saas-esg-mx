import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import ForWhom from './components/ForWhom'
import WhyNotConsultant from './components/WhyNotConsultant'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ForWhom />
        <WhyNotConsultant />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
