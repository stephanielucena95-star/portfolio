
import React from 'react';
import { motion } from 'framer-motion';

const IMPACT_METRICS = [
    { label: 'ROAS', value: '9.3x', context: 'Industry Conference' },
    { label: 'User Acquisition', value: '86K', context: 'in 2.5 Weeks' },
    { label: 'Prod. Velocity', value: '+40%', context: 'Efficiency Gain' },
    { label: 'Awareness', value: '+21pp', context: 'Brand Lift' },
    { label: 'CTR Growth', value: '+33%', context: 'SEO Experiment' },
];

const ImpactMarquee: React.FC = () => {
    return (
        <section className="relative py-20 border-y border-white/5 bg-white/[0.01] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
                    {IMPACT_METRICS.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <span className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                {metric.value}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500/80 mb-1">
                                {metric.label}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium">
                                {metric.context}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default ImpactMarquee;
