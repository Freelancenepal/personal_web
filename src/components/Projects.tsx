import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'React · TypeScript · Node.js',
    title: 'E-Commerce Platform',
    description: 'A production-grade e-commerce platform with real-time inventory, payment processing, and scalable architecture.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
  },
  {
    category: 'React · TypeScript · Tailwind',
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization, user management, and role-based access control.',
    tags: ['React', 'TypeScript', 'D3.js', 'Supabase'],
  },
  {
    category: 'Node.js · AWS · Docker',
    title: 'Microservices Architecture',
    description: 'Scalable backend system with event-driven architecture, message queues, and containerized deployment.',
    tags: ['Node.js', 'Docker', 'AWS', 'Kafka'],
  },
  {
    category: 'React Native · TypeScript',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, real-time transactions, and fraud detection.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Plaid'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Selected work
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Practical tools,
            <br />
            <span className="text-gray-500">durable apps.</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-gray-500 font-medium">
                  {project.category}
                </span>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
