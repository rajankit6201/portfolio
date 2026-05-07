import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#13131a',
        border: `1px solid ${hovered ? 'rgba(167,139,250,0.35)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'border-color 0.25s ease, transform 0.25s ease',
      }}
    >
      {/* Card image */}
      <div style={{
        height: '140px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '36px',
        background: project.color,
        transition: 'filter 0.25s',
        filter: hovered ? 'brightness(1.2)' : 'brightness(1)',
      }}>
        {project.emoji}
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: '15px', fontWeight: 700,
          color: '#f0f0f8', marginBottom: '8px',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '12px', color: '#6b7280',
          lineHeight: 1.65, marginBottom: '16px',
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: '11px', padding: '3px 10px',
              borderRadius: '12px',
              background: 'rgba(167,139,250,0.1)',
              color: '#a78bfa',
              border: '1px solid rgba(167,139,250,0.15)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '12px', color: '#6b7280', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
          >
            <FiGithub size={13} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              fontSize: '12px', color: '#a78bfa', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#c4b5fd'}
            onMouseLeave={e => e.currentTarget.style.color = '#a78bfa'}
          >
            <FiExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
