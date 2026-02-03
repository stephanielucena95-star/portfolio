
import React from 'react';
import { ArrowDownRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 px-6 lg:px-12 overflow-hidden bg-transparent">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-indigo-400"
            >
              <Globe size={16} className="animate-spin-slow" />
              <span className="text-glow">Growth Marketer | Paid Media & Performance Strategy</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-400 text-sm font-medium hidden md:flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Currently Media Manager at a Global Creative & Media Agency
            </motion.div>
          </div>

          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight text-white leading-[0.85] mb-12"
            >
              Marketing Strategies <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">That Drive Business </span>
              Impact.
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-4">
                  Case Studies in <span className="text-white font-medium italic underline decoration-indigo-500/50 underline-offset-4">Growth</span>, <span className="text-white font-medium italic underline decoration-indigo-500/50 underline-offset-4">Performance</span>, and <span className="text-white font-medium italic underline decoration-indigo-500/50 underline-offset-4">Brand Building</span>.
                </p>
                <p className="text-lg text-slate-500 font-medium">
                  Stephanie Lucena
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6"
              >
                <button
                  onClick={onCtaClick}
                  className="group relative flex items-center justify-center gap-4 bg-white text-black px-10 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  Explore Work
                  <ArrowDownRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                </button>
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Client Category Mentions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 pt-12 border-t border-white/5 flex flex-wrap gap-x-12 md:gap-x-20 gap-y-10 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          >
            {[
              'EYEWEAR & TECH',
              'GLOBAL MEDIA AGENCY',
              'LEGACY FMCG',
              'FINTECH PLATFORM',
              'INDUSTRY CONFERENCE',
              'PUBLIC HEALTH INITIATIVE'
            ].map((client) => (
              <span key={client} className="text-xl md:text-2xl font-black text-white tracking-tighter hover:text-indigo-400 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

