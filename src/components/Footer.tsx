import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © 2024 Alex Chen. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm text-gray-500 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-gray-500 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
