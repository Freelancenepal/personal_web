import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    color: 'from-violet-500 to-purple-600',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
  },
  {
    category: 'Backend',
    color: 'from-indigo-500 to-blue-600',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  },
  {
    category: 'Design',
    color: 'from-pink-500 to-rose-600',
    items: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Animation', 'Branding'],
  },
  {
    category: 'Tools',
    color: 'from-amber-500 to-orange-600',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Vercel', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Skills</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            My{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              toolkit
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Technologies and tools I use to bring products to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-violet-100 hover:-translate-y-2"
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${skill.color} mb-4`}>
                {skill.category}
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600 text-sm group-hover:text-gray-800 transition-colors"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color} opacity-60`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
