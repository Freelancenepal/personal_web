import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's build something
            <br />
            <span className="text-gray-500">together.</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or ways to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <motion.a
            href="mailto:alex@example.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all text-center"
          >
            <div className="mb-4 inline-flex p-3 bg-white/[0.03] rounded-xl">
              <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="text-white font-medium">alex@example.com</p>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
          >
            <div className="mb-4 inline-flex p-3 bg-white/[0.03] rounded-xl">
              <MapPin size={24} className="text-gray-400" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-500 mb-1">Location</p>
            <p className="text-white font-medium">San Francisco, CA</p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
          >
            <div className="mb-4 flex justify-center gap-3">
              <a href="#" className="p-2 bg-white/[0.03] rounded-lg hover:bg-white/[0.06] transition-all">
                <Github size={20} className="text-gray-400" />
              </a>
              <a href="#" className="p-2 bg-white/[0.03] rounded-lg hover:bg-white/[0.06] transition-all">
                <Linkedin size={20} className="text-gray-400" />
              </a>
              <a href="#" className="p-2 bg-white/[0.03] rounded-lg hover:bg-white/[0.06] transition-all">
                <Twitter size={20} className="text-gray-400" />
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-1">Social</p>
            <p className="text-white font-medium">Connect with me</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
