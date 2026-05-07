import { useScrollFade } from '../hooks/useScrollFade'
import ProjectCard from './ProjectCard'
import { projects } from '../data'

export default function Projects() {
  const ref = useScrollFade()

  return (
    <section
      id="projects"
      ref={ref}
      className="fade-section"
      style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <p style={{ fontSize: '11px', color: '#a78bfa', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
        Work
      </p>
      <h2 style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
        fontWeight: 800, color: '#f0f0f8',
        letterSpacing: '-0.8px', marginBottom: '44px',
      }}>
        Featured projects
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '18px',
      }}>
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
