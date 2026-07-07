import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const About: React.FC = () => {
    useSEO({
        title: "About",
        description: "Learn more about Stephanie Lucena's approach to Growth Marketing, Paid Media, and Performance Strategy.",
    });
    return (
        <section id="about" className="py-20 md:py-32 px-6 lg:px-12 bg-white/[0.01] border-y border-white/5 mt-10 md:mt-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
                {/* Left Column: Bio & Growth Approach */}
                <div className="flex flex-col gap-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-8 tracking-tight uppercase tracking-widest">About Me</h2>
                        <div className="space-y-6 text-xl text-slate-400 leading-relaxed">
                            <p>
                                Hi! I'm Stephanie. I’m a <span className="text-white font-bold">Growth Marketer</span> with a strong foundation in paid media and performance strategy, working end-to-end from problem definition to execution and optimization.
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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

                {/* Right Column: Portrait */}
                <div className="flex flex-col lg:sticky lg:top-32">
                    <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <img
                            src="/assets/stephanie-portrait.jpg"
                            alt="Stephanie Lucena"
                            className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
            </div>

            {/* Audit CTA Section */}
            <div className="mt-24 md:mt-36 pt-16 border-t border-white/5 max-w-4xl mx-auto text-center">
                <div className="relative p-8 md:p-16 border border-white/10 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-transparent overflow-hidden shadow-2xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 blur-[80px] rounded-full -z-10 animate-pulse" />
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Shopify Performance Audit
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight max-w-2xl mx-auto leading-tight">
                        Spending on Meta or Google but not sure what’s actually driving sales?
                    </h3>
                    
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                        I’ll audit your ad account, landing page, and tracking setup, then send you a prioritized action plan.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a
                            href="https://calendly.com/stephanie-lucena95/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group"
                        >
                            Book a 30-minute audit call
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
                            Ideal for Shopify brands spending at least $5k/month
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
