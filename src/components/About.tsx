import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code2, label: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
    { icon: Palette, label: 'Design First', desc: 'Pixel-perfect UI with attention to detail' },
    { icon: Zap, label: 'Performance', desc: 'Blazing fast load times and interactions' },
    { icon: Heart, label: 'Passion', desc: 'Genuine love for creating great products' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">About Me</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Turning ideas into{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              reality
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Avatar Area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-indigo-600 rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-violet-500/20">
                      <span className="text-5xl font-bold text-white">AC</span>
                    </div>
                    <p className="text-gray-600 text-lg font-medium">5+ Years Experience</p>
                    <p className="text-gray-500 mt-2">Full-Stack Developer & Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer based in San Francisco with over 5 years
              of experience building web applications. I specialize in creating beautiful,
              performant, and accessible digital experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new design trends, contributing
              to open-source projects, or enjoying a good cup of coffee while sketching UI ideas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 bg-gray-50 rounded-2xl hover:bg-violet-50 transition-colors group"
                >
                  <item.icon size={24} className="text-violet-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
