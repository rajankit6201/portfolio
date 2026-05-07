import { useState } from 'react'
import { useScrollFade } from '../hooks/useScrollFade'
import RippleButton from './RippleButton'

const highlights = [
  { title: 'Education', sub: 'B.Tech CS — VIT 2022' },
  { title: 'Location', sub: 'Bangalore, India' },
  { title: 'Freelance', sub: 'Open to projects' },
  { title: 'Languages', sub: 'English, Hindi' },
]

export default function About() {
  const ref = useScrollFade()
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSend = () => {
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  const inputStyle = (name) => ({
    width: '100%',
    padding: '10px 14px',
    background: focused === name ? 'rgba(167,139,250,0.05)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '8px',
    color: '#e8e8f0',
    fontSize: '13px',
    outline: 'none',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.2s, background 0.2s',
  })

  return (
    <section
      id="about"
      ref={ref}
      className="fade-section"
      style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <p style={{ fontSize: '11px', color: '#a78bfa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
        Me
      </p>
      <h2 style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
        fontWeight: 800, color: '#f0f0f8',
        letterSpacing: '-0.8px', marginBottom: '44px',
      }}>
        About
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
        {/* Left: about */}
        <div>
          <div style={{
            width: '96px', height: '96px', borderRadius: '50%',
            background: 'rgba(167,139,250,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '38px',
            border: '2px solid rgba(167,139,250,0.2)',
            marginBottom: '20px',
          }}>
            👨‍💻
          </div>
          <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.85, marginBottom: '24px' }}>
            Hey! I'm Alex — a full-stack developer based in Bangalore, India.
            I love building products that are both beautiful and blazing fast.
            When I'm not coding I'm probably hiking or experimenting with generative art.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {highlights.map((h) => (
              <div key={h.title} style={{
                background: '#13131a',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '10px', padding: '14px',
              }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#f0f0f8', marginBottom: '3px' }}>
                  {h.title}
                </div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>{h.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <div id="contact" style={{
          background: '#13131a',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px', padding: '30px',
        }}>
          <div style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: '15px', fontWeight: 700,
            color: '#f0f0f8', marginBottom: '20px',
          }}>
            Send a message
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <input
              placeholder="Your name"
              style={inputStyle('name')}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
            />
            <input
              placeholder="Email address"
              style={inputStyle('email')}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
            />
          </div>
          <input
            placeholder="Subject"
            style={{ ...inputStyle('subject'), marginBottom: '10px' }}
            onFocus={() => setFocused('subject')}
            onBlur={() => setFocused(null)}
          />
          <textarea
            placeholder="Your message..."
            style={{
              ...inputStyle('msg'),
              height: '90px', resize: 'none',
              display: 'block', marginBottom: '14px',
            }}
            onFocus={() => setFocused('msg')}
            onBlur={() => setFocused(null)}
          />
          <RippleButton
            onClick={handleSend}
            style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
          >
            {sent ? '✓ Message sent!' : 'Send message'}
          </RippleButton>
        </div>
      </div>
    </section>
  )
}
