import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FloatingCta } from './components/FloatingCta'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Areas } from './sections/Areas'
import { Approach } from './sections/Approach'
import { Blog } from './sections/Blog'
import { FAQ } from './sections/FAQ'
import { CTAFinal } from './sections/CTAFinal'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Areas />
        <Approach />
        <Blog />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  )
}