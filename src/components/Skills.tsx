import { motion } from 'framer-motion';

const skills = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'GraphQL', 'REST APIs', 'AWS', 'Docker', 'Kubernetes',
  'CI/CD', 'Tailwind CSS', 'Figma', 'Git', 'Linux', 'Vercel'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Core stack
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
