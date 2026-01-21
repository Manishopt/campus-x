import { useState, useEffect } from 'react'
import Header from './components/landingpage/Header'
import Hero from './components/landingpage/Hero'
import Features from './components/landingpage/Features'
import HowItWorks from './components/landingpage/HowItWorks'
import CTA from './components/landingpage/CTA'
import Footer from './components/landingpage/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-display transition-colors duration-300">
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App