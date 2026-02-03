
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="pt-40 pb-32 px-6 lg:px-12 max-w-4xl mx-auto">
            <div className="space-y-16 text-center mb-16">
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
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]"
                    >
                        LET'S TALK <br />
                        <span className="text-indigo-500 italic">STRATEGY.</span>
                    </motion.h1>
                </div>
            </div>

            <ContactForm />
        </div>
    );
};

export default Contact;
