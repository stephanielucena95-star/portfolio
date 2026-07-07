
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import CalendlyWidget from '../components/CalendlyWidget';
import { useSEO } from '../hooks/useSEO';

const Contact: React.FC = () => {
    useSEO({
        title: "Contact",
        description: "Get in touch with Stephanie Lucena for growth marketing consultation, paid media strategy, or e-commerce scaling projects.",
    });

    const [activeTab, setActiveTab] = useState<'form' | 'call'>('form');

    return (
        <div className="pt-24 md:pt-40 pb-32 px-6 lg:px-12 max-w-4xl mx-auto">
            <div className="space-y-12 text-center mb-12">
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-indigo-500 font-black tracking-[0.3em] uppercase text-sm block mb-4"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]"
                    >
                        LET'S TALK <br />
                        <span className="text-indigo-500 italic">STRATEGY.</span>
                    </motion.h1>
                </div>

                {/* Modern Toggle Switch */}
                <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-full relative z-10">
                    <button
                        onClick={() => setActiveTab('form')}
                        className={`relative px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                            activeTab === 'form' ? 'text-black' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {activeTab === 'form' && (
                            <motion.div
                                layoutId="activeContactTab"
                                className="absolute inset-0 bg-white rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        Send Message
                    </button>
                    <button
                        onClick={() => setActiveTab('call')}
                        className={`relative px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                            activeTab === 'call' ? 'text-black' : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        {activeTab === 'call' && (
                            <motion.div
                                layoutId="activeContactTab"
                                className="absolute inset-0 bg-white rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        Book a Call
                    </button>
                </div>
            </div>

            <div className="relative min-h-[700px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'form' ? (
                        <motion.div
                            key="form-tab"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                        >
                            <ContactForm />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="call-tab"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                        >
                            <CalendlyWidget />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Contact;
