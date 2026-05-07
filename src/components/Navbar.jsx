import { useState, useEffect } from 'react'
import { navLinks } from '../data'

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 48px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
  },
  logo: {
    fontFamily: "'Sora', sans-serif",
    fontSize: '18px',
    fontWeight: 800,
    color: '#a78bfa',
    letterSpacing: '-0.5px',
    cursor: 'none',
  },
  links: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setActive(id)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      style={{
        ...styles.nav,
        background: scrolled ? 'rgba(12,12,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div style={styles.logo}>alex.dev</div>
      <ul style={styles.links}>
        {navLinks.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '13px',
                fontFamily: "'DM Sans', sans-serif",
                color: active === link ? '#a78bfa' : '#9ca3b0',
                cursor: 'none',
                padding: '4px 0',
                position: 'relative',
                transition: 'color 0.2s',
              }}
              data-hover
            >
              {link}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: active === link ? '100%' : '0%',
                  height: '1px',
                  background: '#a78bfa',
                  transition: 'width 0.25s ease',
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
