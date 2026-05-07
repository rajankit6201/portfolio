import { useEffect, useRef, useState } from 'react'
import { downloadSteps } from '../data'
import RippleButton from './RippleButton'

export default function DownloadModal({ open, onClose }) {
  const [pct, setPct] = useState(0)
  const [status, setStatus] = useState('Connecting to server...')
  const [done, setDone] = useState(false)
  const timeouts = useRef([])

  useEffect(() => {
    if (!open) return
    setPct(0)
    setStatus('Connecting to server...')
    setDone(false)

    let elapsed = 0
    downloadSteps.forEach((step) => {
      elapsed += step.delay
      const t = setTimeout(() => {
        setPct(step.pct)
        setStatus(step.msg)
        if (step.pct === 100) {
          setDone(true)
          // Trigger real browser file download
          const link = document.createElement('a')
          link.href = '/Alex_Dev_Resume.pdf'
          link.download = 'Alex_Dev_Resume.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }, elapsed)
      timeouts.current.push(t)
    })

    return () => timeouts.current.forEach(clearTimeout)
  }, [open])

  if (!open) return null

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,0.75)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div style={{
        background: '#13131a',
        border: '1px solid rgba(167,139,250,0.25)',
        borderRadius: '20px',
        padding: '40px 36px',
        width: '360px',
        textAlign: 'center',
        animation: 'slideUp 0.3s ease',
      }}>
        <div style={{
          fontSize: '44px', marginBottom: '16px',
          transition: 'all 0.4s',
          filter: done ? 'none' : 'none',
        }}>
          {done ? '✅' : '📄'}
        </div>

        <div style={{
          fontSize: '16px', fontWeight: 700,
          fontFamily: "'Sora', sans-serif",
          color: done ? '#22c55e' : '#f0f0f8',
          marginBottom: '6px',
          transition: 'color 0.4s',
        }}>
          {done ? 'Download complete!' : 'Downloading CV...'}
        </div>

        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '28px' }}>
          Alex_Dev_Resume.pdf — 142 KB
        </div>

        {/* Progress bar */}
        <div style={{
          height: '6px', background: 'rgba(255,255,255,0.06)',
          borderRadius: '4px', overflow: 'hidden', marginBottom: '10px',
        }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: done
              ? 'linear-gradient(90deg, #22c55e, #4ade80)'
              : 'linear-gradient(90deg, #7c3aed, #a78bfa)',
            borderRadius: '4px',
            transition: 'width 0.35s linear, background 0.5s ease',
          }} />
        </div>

        <div style={{
          fontSize: '13px', fontWeight: 700, color: '#a78bfa',
          marginBottom: '6px',
        }}>
          {pct}%
        </div>

        <div style={{
          fontSize: '11px', color: '#6b7280', minHeight: '18px',
          marginBottom: '20px',
          transition: 'all 0.3s',
        }}>
          {status}
        </div>

        {/* Step dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '24px' }}>
          {downloadSteps.map((step, i) => (
            <div key={i} style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: pct >= step.pct ? '#a78bfa' : 'rgba(255,255,255,0.1)',
              transition: 'background 0.3s ease',
            }} />
          ))}
        </div>

        {done ? (
          <RippleButton onClick={onClose} style={{ width: '100%', padding: '12px' }}>
            ✓ Close
          </RippleButton>
        ) : (
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none',
              color: '#6b7280', fontSize: '12px', cursor: 'none',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Cancel download
          </button>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(24px); opacity:0 } to { transform:translateY(0); opacity:1 } }
      `}</style>
    </div>
  )
}
