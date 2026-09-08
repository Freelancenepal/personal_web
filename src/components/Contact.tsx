import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Let's work{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-violet-100 hover:shadow-md transition-all">
                <div className="p-3 bg-violet-100 rounded-xl">
                  <Mail size={20} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">alex@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-violet-100 hover:shadow-md transition-all">
                <div className="p-3 bg-violet-100 rounded-xl">
                  <MapPin size={20} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" className="p-3 bg-white border border-gray-100 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-all hover:-translate-y-1">
                <Github size={20} className="text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-white border border-gray-100 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-all hover:-translate-y-1">
                <Twitter size={20} className="text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-white border border-gray-100 rounded-xl hover:border-violet-200 hover:bg-violet-50 transition-all hover:-translate-y-1">
                <Linkedin size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  'Message Sent! ✓'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
