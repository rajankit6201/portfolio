export const projects = [
  {
    id: 1,
    title: 'DevNote — AI Notes App',
    description: 'Markdown-first note taking with AI summarization, smart tagging, and real-time collaboration.',
    tags: ['React', 'OpenAI', 'Supabase'],
    emoji: '📚',
    color: 'rgba(167,139,250,0.08)',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Fintrack — Budget Dashboard',
    description: 'Visual spending tracker with real-time bank sync, AI insights, and beautiful charts.',
    tags: ['Next.js', 'Prisma', 'Chart.js'],
    emoji: '📈',
    color: 'rgba(45,212,191,0.07)',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Storefront — E-commerce Kit',
    description: 'Headless commerce starter with Stripe checkout, inventory management, and CMS support.',
    tags: ['React', 'Stripe', 'Sanity'],
    emoji: '🏪',
    color: 'rgba(251,146,60,0.07)',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export const skills = [
  { name: 'React', icon: '⚛', level: 92 },
  { name: 'Next.js', icon: '▲', level: 85 },
  { name: 'TypeScript', icon: '📄', level: 88 },
  { name: 'Node.js', icon: '🔄', level: 80 },
  { name: 'Tailwind', icon: '🎨', level: 95 },
  { name: 'PostgreSQL', icon: '🔧', level: 75 },
  { name: 'Docker', icon: '☕', level: 70 },
  { name: 'Figma', icon: '🌐', level: 82 },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years experience' },
  { value: 24, suffix: '', label: 'Projects shipped' },
  { value: 12, suffix: '', label: 'Happy clients' },
]

export const navLinks = ['About', 'Projects', 'Skills', 'Contact']

export const downloadSteps = [
  { pct: 5,  msg: 'Connecting to server...', delay: 400 },
  { pct: 18, msg: 'Authenticating request...', delay: 700 },
  { pct: 32, msg: 'Fetching Alex_Dev_Resume.pdf...', delay: 900 },
  { pct: 48, msg: 'Downloading file (68 KB / 142 KB)...', delay: 800 },
  { pct: 65, msg: 'Downloading file (92 KB / 142 KB)...', delay: 700 },
  { pct: 78, msg: 'Downloading file (111 KB / 142 KB)...', delay: 600 },
  { pct: 90, msg: 'Almost done...', delay: 500 },
  { pct: 100, msg: 'Download complete! ✓', delay: 400 },
]
