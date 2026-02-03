
import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 border border-indigo-500/20 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
            <Briefcase size={28} />
          </div>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 text-white tracking-tight">Professional Path</h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-light">Scaling global brands across EMEA, APAC, and North American markets.</p>
        </motion.div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-[2.5rem] scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 -z-10" />

              <div className="grid md:grid-cols-12 gap-10 items-start py-16 px-8 transition-transform duration-500 group-hover:translate-x-2">
                <div className="md:col-span-3">
                  <div className="flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest w-fit">{exp.period}</span>
                    <p className="text-indigo-400 font-bold tracking-tight mt-2">{exp.location}</p>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-400 transition-all duration-500">{exp.company}</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="h-px w-4 bg-slate-600" />
                    <p className="text-slate-300 text-lg font-medium tracking-tight uppercase">{exp.role}</p>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="flex flex-col gap-6">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex gap-4 items-start">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)] shrink-0" />
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

