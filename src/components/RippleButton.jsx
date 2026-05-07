import { useRef } from 'react'

export default function RippleButton({ children, onClick, variant = 'primary', style = {}, tooltip }) {
  const btnRef = useRef(null)

  const handleClick = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const span = document.createElement('span')
    span.style.cssText = `
      position:absolute;border-radius:50%;
      background:rgba(255,255,255,0.3);
      width:${size}px;height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
      transform:scale(0);pointer-events:none;
      animation:ripple 0.6s linear forwards;
    `
    btn.appendChild(span)
    setTimeout(() => span.remove(), 650)
    onClick && onClick(e)
  }

  const isPrimary = variant === 'primary'

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      data-hover
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '11px 26px',
        border: isPrimary ? 'none' : '1px solid rgba(255,255,255,0.12)',
        borderRadius: '9px',
        background: isPrimary ? '#a78bfa' : 'transparent',
        color: isPrimary ? '#0c0c0f' : '#9ca3b0',
        fontSize: '13px',
        fontWeight: isPrimary ? 700 : 500,
        fontFamily: "'DM Sans', sans-serif",
        cursor: 'none',
        transition: 'transform 0.15s ease, border-color 0.2s, color 0.2s',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        if (!isPrimary) {
          e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)'
          e.currentTarget.style.color = '#c4b5fd'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        if (!isPrimary) {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
          e.currentTarget.style.color = '#9ca3b0'
        }
      }}
    >
      {tooltip && (
        <span style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1e1e2e',
          border: '1px solid rgba(167,139,250,0.25)',
          color: '#c4b5fd',
          fontSize: '11px',
          padding: '7px 13px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.2s',
          zIndex: 20,
          fontWeight: 400,
          lineHeight: 1.4,
        }}
          className="btn-tip"
        >
          {tooltip}
          <span style={{
            position: 'absolute', top: '100%', left: '50%',
            transform: 'translateX(-50%)',
            border: '5px solid transparent',
            borderTopColor: '#1e1e2e',
          }} />
        </span>
      )}
      {children}
      <style>{`
        @keyframes ripple { to { transform:scale(4); opacity:0; } }
        button:hover .btn-tip { opacity: 1 !important; }
      `}</style>
    </button>
  )
}
