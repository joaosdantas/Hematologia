import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FloatingCta } from './components/FloatingCta'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Areas } from './sections/Areas'
import { SecondOpinion } from './sections/SecondOpinion'
import { Approach } from './sections/Approach'
import { Blog } from './sections/Blog'
import { FAQ } from './sections/FAQ'
import { CTAFinal } from './sections/CTAFinal'
import { BlogList } from './pages/BlogList'
import { BlogPost } from './pages/BlogPost'
import { usePathname } from './lib/router'

export default function App() {
  const pathname = usePathname()
  const postMatch = pathname.match(/^\/blog\/([^/]+)\/?$/)

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        {pathname === '/blog' ? (
          <BlogList />
        ) : postMatch ? (
          <BlogPost slug={decodeURIComponent(postMatch[1])} />
        ) : (
          <>
            <Hero />
            <About />
            <Areas />
            <SecondOpinion />
            <Approach />
            <Blog />
            <FAQ />
            <CTAFinal />
          </>
        )}
      </main>
      <Footer />
      <FloatingCta />
    </div>
  )
}
