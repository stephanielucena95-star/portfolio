
import React from 'react';
import { CaseStudy } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkGridProps {
  caseStudies: CaseStudy[];
  onSelect: (cs: CaseStudy) => void;
}

const WorkGrid: React.FC<WorkGridProps> = ({ caseStudies, onSelect }) => {
  return (
    <div className="grid gap-24 md:gap-32">
      {caseStudies.map((cs, idx) => (
        <motion.div
          key={cs.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: idx * 0.1 }}
          onClick={() => onSelect(cs)}
          className="group cursor-pointer grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-slate-900 shadow-2xl">
            <motion.img
              src={cs.imageUrl}
              alt={cs.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>

            {/* Overlay View Case Study */}
            <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-white font-bold text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">View Case Study</span>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-indigo-500" />
                <p className="text-indigo-400 text-xs font-black uppercase tracking-[0.3em]">{cs.category}</p>
              </div>
              <h3 className="text-3xl md:text-6xl font-bold text-white group-hover:text-indigo-50 transition-colors leading-[1.1] tracking-tight">{cs.title}</h3>
            </div>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl font-light">
              {cs.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {cs.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/10 px-4 py-2 rounded-full group-hover:border-indigo-500/30 group-hover:text-slate-300 transition-all">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 text-white font-bold group">
                <span className="text-lg border-b-2 border-indigo-500/50 group-hover:border-indigo-500 transition-all pb-1">Read Exploration</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkGrid;

