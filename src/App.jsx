import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <div style={{ background: '#0c0c0f', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.04)' }} />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </div>
    </>
  )
}
