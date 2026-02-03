
import React from 'react';
import { Linkedin, Mail, ArrowUpCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-32 px-6 lg:px-12 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85]"
            >
              LET'S BUILD <br />
              <span className="text-indigo-500 italic">SOMETHING BIG.</span>
            </motion.h2>

            <div className="flex flex-wrap gap-8 items-center">
              <a
                href="https://www.linkedin.com/in/stephanielouiselucena/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 text-slate-400 hover:text-white transition-all duration-300 items-center font-bold uppercase tracking-widest text-xs"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                  <Linkedin size={18} />
                </div>
                LinkedIn
              </a>
              <Link
                to="/contact"
                className="group flex gap-3 text-slate-400 hover:text-white transition-all duration-300 items-center font-bold uppercase tracking-widest text-xs"
              >
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                  <Mail size={18} />
                </div>
                Contact Form
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-10"
          >
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-6 text-slate-600 hover:text-indigo-400 transition-colors uppercase font-bold tracking-[0.2em] text-[10px]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
                <ArrowUpCircle size={64} className="relative group-hover:-translate-y-2 transition-transform duration-500 stroke-[1px]" />
              </div>
              Back to top
            </button>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-2">
            <p>© {new Date().getFullYear()} Stephanie Lucena</p>
            <p className="text-slate-600">Built with precision for performance.</p>
          </div>
          <div className="flex flex-wrap gap-8">
            <a href="#" className="hover:text-white transition-colors">Digital Strategy</a>
            <a href="#" className="hover:text-white transition-colors">Performance Media</a>
            <a href="#" className="hover:text-white transition-colors">Growth Consulting</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

