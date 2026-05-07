import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FiTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FiDribbble, label: 'Dribbble', href: 'https://dribbble.com' },
]

export default function Footer() {
  return (
    <footer style={{
      padding: '28px 48px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      <div style={{ fontSize: '12px', color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}>
        © 2026 Alex Dev — Built with React + Vite
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            title={label}
            style={{
              color: '#6b7280', textDecoration: 'none',
              display: 'flex', alignItems: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </footer>
  )
}
