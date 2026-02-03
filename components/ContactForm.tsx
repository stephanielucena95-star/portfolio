
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/mqaeokbr", { // Placeholder Formspree ID
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error("Submission failed");
            }
        } catch (err) {
            console.error(err);
            alert("There was an error sending your message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-12 text-center bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl"
            >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle className="text-emerald-500" size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">MESSAGE SENT</h3>
                <p className="text-slate-400 max-w-sm">
                    Thanks for reaching out! I've received your message and will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-indigo-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 ml-4">Full Name</label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 ml-4">Email Address</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 ml-4">Company / Business</label>
                        <input
                            name="company"
                            type="text"
                            placeholder="Company Name"
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 ml-4">WhatsApp (Optional)</label>
                        <input
                            name="whatsapp"
                            type="text"
                            placeholder="+1 234 567 890"
                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 ml-4">Message</label>
                    <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project or growth goals..."
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                    />
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full group relative py-6 overflow-hidden rounded-2xl font-black text-lg uppercase tracking-widest transition-all disabled:opacity-50"
                >
                    <div className="absolute inset-0 bg-indigo-600 transition-transform duration-300 group-hover:scale-105" />
                    <div className="relative flex items-center justify-center gap-3">
                        {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </div>
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
