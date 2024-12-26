import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  // Smooth scroll behavior for navigation
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.hash) {
        e.preventDefault()
        const element = document.querySelector(e.target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleNavClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleNavClick)
      })
    }
  }, [])

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
