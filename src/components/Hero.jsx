import { useEffect, useRef, useState } from 'react'
import ParticleCanvas from './ParticleCanvas'
import RippleButton from './RippleButton'
import DownloadModal from './DownloadModal'
import { stats } from '../data'

const WORDS = [
  'products people love',
  'beautiful interfaces',
  'scalable backends',
  'fast experiences',
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % words.length)
    }

    setText(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words])

  return text
}

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const dur = 1500, step = 16
        const frames = dur / step
        const inc = target / frames
        let cur = 0
        const t = setInterval(() => {
          cur = Math.min(cur + inc, target)
          setVal(Math.round(cur))
          if (cur >= target) clearInterval(t)
        }, step)
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero({ onDownload }) {
  const typed = useTypewriter(WORDS)
  const [dlOpen, setDlOpen] = useState(false)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        padding: '120px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParticleCanvas />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
        {/* Available badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontSize: '12px', color: '#a78bfa',
          background: 'rgba(167,139,250,0.1)',
          border: '1px solid rgba(167,139,250,0.2)',
          padding: '5px 16px', borderRadius: '20px',
          marginBottom: '28px', letterSpacing: '0.06em',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#22c55e',
            animation: 'pulse 1.4s infinite',
          }} />
          Available for work
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-1.5px',
          color: '#f0f0f8',
          marginBottom: '8px',
        }}>
          Building digital<br />
          <span style={{ color: '#a78bfa' }}>{typed}</span>
          <span style={{
            borderRight: '3px solid #a78bfa',
            marginLeft: '2px',
            animation: 'blink 0.7s infinite',
            display: 'inline-block',
            height: '1em',
            verticalAlign: 'middle',
          }} />
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px', color: '#6b7280',
          marginTop: '20px', maxWidth: '480px', lineHeight: 1.75,
        }}>
          Full-stack developer crafting fast, beautiful, and accessible web experiences.
          Turning complex problems into elegant solutions.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
          <RippleButton
            tooltip="Browse all 24 case studies"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </RippleButton>

          <RippleButton
            variant="outline"
            tooltip="Downloads PDF — 142 KB"
            onClick={() => setDlOpen(true)}
          >
            ↡ Download CV
          </RippleButton>

          <RippleButton
            variant="outline"
            tooltip="Opens your email client"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </RippleButton>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px',
          marginTop: '56px', paddingTop: '44px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '28px', fontWeight: 800, color: '#f0f0f8',
              }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '3px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DownloadModal open={dlOpen} onClose={() => setDlOpen(false)} />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}
