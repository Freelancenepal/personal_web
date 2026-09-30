import { motion } from 'framer-motion';
import { Code2, Layers, Users } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-stack development',
    description: 'React, TypeScript, Node.js, PostgreSQL, cloud infrastructure, and end-to-end product delivery.',
  },
  {
    icon: Layers,
    title: 'System architecture',
    description: 'Scalable backend systems, API design, microservices, and production-grade infrastructure.',
  },
  {
    icon: Users,
    title: 'Engineering leadership',
    description: 'Team mentoring, code reviews, architecture decisions, and cross-functional delivery.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
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
            What I do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            From senior code craft to
            <br />
            <span className="text-gray-500">full-stack product engineering leadership.</span>
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="mb-6">
                <service.icon size={32} className="text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
