import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-6 lg:px-12 bg-white/[0.01] border-y border-white/5 mt-10 md:mt-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-8 tracking-tight uppercase tracking-widest">About Me</h2>
                    <div className="space-y-6 text-xl text-slate-400 leading-relaxed">
                        <p>
                            I’m a <span className="text-white font-bold">Growth Marketer</span> with a strong foundation in paid media and performance strategy, working end-to-end from problem definition to execution and optimization.
                        </p>
                        <p>
                            I focus on translating business and growth objectives into clear marketing strategies, shaping brand narratives, and activating across paid social and search to drive awareness and conversion.
                        </p>
                        <div className="pt-8 space-y-4 text-lg">
                            <div className="flex gap-4 items-start">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                                <span>Global brand and awareness campaigns</span>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                                <span>Performance and revenue growth for conversion-driven initiatives</span>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                                <span>Scalable growth systems and operational efficiency</span>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0"></span>
                                <span>Go-to-market launches in new and emerging categories</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="p-6 md:p-10 border border-white/10 rounded-3xl md:rounded-[3rem] bg-indigo-600/5">
                        <h3 className="text-2xl font-bold text-white mb-6">The Growth Approach</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            I prioritize systems over one-off campaigns, platform-native thinking over generic playbooks, and business impact over surface-level metrics. I care about what actually moves the business beyond vanity metrics.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
                                <h4 className="text-indigo-400 font-bold mb-1 text-sm uppercase">Strategic Clarity</h4>
                                <p className="text-xs text-slate-500 leading-tight">Problem definition that leads to measurable goals.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
                                <h4 className="text-indigo-400 font-bold mb-1 text-sm uppercase">Hands-on Execution</h4>
                                <p className="text-xs text-slate-500 leading-tight">Tactical activation across search and social channels.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-2xl bg-black/40 md:col-span-2">
                                <h4 className="text-indigo-400 font-bold mb-1 text-sm uppercase">Learning to Optimize</h4>
                                <p className="text-xs text-slate-500 leading-tight">High-velocity experimentation and rapid feedback loops to distill performance signals into scalable growth levers.</p>
                            </div>
                        </div>
                        <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center">
                            <a
                                href="https://www.linkedin.com/in/stephanielouiselucena/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors group"
                            >
                                <span className="border-b border-indigo-500/50 group-hover:border-indigo-500">Connect on LinkedIn</span>
                                <svg size={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                            <Link
                                to="/contact"
                                className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-all text-sm"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
