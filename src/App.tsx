import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import Campus from './components/Campus'
import Sports from './components/Sports'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className={darkMode ? 'dark-mode' : ''}>

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Page Sections */}
      <Hero />
      <About />
      <Academics />
      <Campus />
      <Sports />
      <Contact />

      {/* Footer */}
      <Footer />

    </main>
  )
}

export default App