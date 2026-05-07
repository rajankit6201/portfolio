import { useEffect, useRef, useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import { skills } from '../data'

function SkillCard({ skill, animate }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#13131a',
        border: `1px solid ${hovered ? 'rgba(167,139,250,0.3)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '12px',
        padding: '18px',
        textAlign: 'center',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
    >
      <div style={{ fontSize: '22px', marginBottom: '8px' }}>{skill.icon}</div>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#c4c4d4', marginBottom: '10px' }}>
        {skill.name}
      </div>
      <div style={{
        height: '3px', background: 'rgba(255,255,255,0.06)',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: animate ? `${skill.level}%` : '0%',
          background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
          borderRadius: '2px',
          transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
      <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '6px' }}>
        {skill.level}%
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useScrollFade()
  const barsRef = useRef(null)
  const animated = useRef(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        setAnimate(true)
      }
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      className="fade-section"
      style={{
        background: '#0f0f14',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: '80px 48px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', color: '#a78bfa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
          Expertise
        </p>
        <h2 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          fontWeight: 800, color: '#f0f0f8',
          letterSpacing: '-0.8px', marginBottom: '44px',
        }}>
          Skills & tools
        </h2>

        <div
          ref={barsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '14px',
          }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  )
}
