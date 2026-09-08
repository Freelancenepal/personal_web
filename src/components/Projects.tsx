import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Lumina Dashboard',
    description: 'A modern analytics dashboard with real-time data visualization, dark mode support, and responsive design.',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    gradient: 'from-violet-500 to-purple-600',
    image: '📊',
  },
  {
    title: 'Bloom E-Commerce',
    description: 'A full-featured e-commerce platform with cart management, payment integration, and admin panel.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    gradient: 'from-pink-500 to-rose-600',
    image: '🛍️',
  },
  {
    title: 'Wavelength Music',
    description: 'A music streaming app with playlist management, social features, and a beautiful audio visualizer.',
    tags: ['React', 'Node.js', 'WebSocket', 'Web Audio API'],
    gradient: 'from-indigo-500 to-blue-600',
    image: '🎵',
  },
  {
    title: 'TaskFlow Pro',
    description: 'A project management tool with drag-and-drop boards, team collaboration, and automated workflows.',
    tags: ['Vue.js', 'Firebase', 'DnD Kit', 'Chart.js'],
    gradient: 'from-amber-500 to-orange-600',
    image: '✅',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Portfolio</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              projects
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A selection of my recent work that showcases my skills and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-violet-100 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500"
            >
              {/* Project Image/Preview */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <span className="text-6xl relative z-10 group-hover:scale-125 transition-transform duration-500">
                  {project.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-violet-100 text-gray-600 hover:text-violet-600 transition-colors">
                      <Github size={16} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-violet-100 text-gray-600 hover:text-violet-600 transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
