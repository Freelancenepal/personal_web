import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            AC.
          </a>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Alex Chen © 2024
          </p>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">About</a>
            <a href="#projects" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
