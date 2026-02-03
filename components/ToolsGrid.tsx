
import React from 'react';
import { TOOLS } from '../constants';
import { Settings, PenTool, Layout, BarChart2, Users, Search, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ToolsGrid: React.FC = () => {
  const categories = Array.from(new Set(TOOLS.map(t => t.category)));

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Ads': return <Target size={24} />;
      case 'Analytics': return <BarChart2 size={24} />;
      case 'Creative': return <PenTool size={24} />;
      case 'Management': return <Zap size={24} />;
      case 'CRM': return <Users size={24} />;
      default: return <Settings size={24} />;
    }
  };

  return (
    <section id="tools" className="py-32 px-6 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Tech Stack & Ecosystem</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 glass-card rounded-[2rem] hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  {getIcon(cat)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">{cat}</h3>
                  <div className="flex flex-col gap-2.5">
                    {TOOLS.filter(t => t.category === cat).map(tool => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                      >
                        <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                        {tool.name}
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

export default ToolsGrid;

