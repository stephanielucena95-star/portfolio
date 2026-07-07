
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layers, Zap, BarChart3 } from 'lucide-react';

const STEPS = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Performance Audit",
        desc: "Identifying data-driven bottlenecks across the full-funnel ecosystem."
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Modular Strategy",
        desc: "Designing scalable creative and media architectures that evolve with your business."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Velocity Execution",
        desc: "Rapid-response activation across social, search, and retail environments."
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Direct Response Marketing",
        desc: "Conversion-focused campaigns designed to trigger immediate action, prioritizing trackable ROI and customer acquisition."
    }
];

const GrowthFramework: React.FC = () => {
    return (
        <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-24">
                <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Process</span>
                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8">
                    The Growth <span className="italic font-light text-indigo-400">Framework</span>
                </h2>
                <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
                    A systematic approach to scaling global brands through high-velocity performance strategy and modular creative systems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {STEPS.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed font-light">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GrowthFramework;
