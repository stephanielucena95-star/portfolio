
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Glass Container */}
        <div className={`absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 h-[90%] glass-card rounded-2xl transition-opacity duration-500 -z-10 ${isScrolled ? 'opacity-100' : 'opacity-0'
          }`} />

        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-white z-10 hover:opacity-70 transition-opacity">
          STEPHANIE LUCENA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 z-10">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <div key={link.name} className="relative py-2">
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"
                  />
                )}
              </div>
            );
          })}
          <Link
            to="/contact"
            className="group relative px-6 py-2.5 overflow-hidden rounded-full font-bold text-[11px] uppercase tracking-[0.2em]"
          >
            <div className="absolute inset-0 bg-white transition-transform duration-300 group-hover:scale-x-110" />
            <span className="relative text-black">Contact</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl px-6 pt-32 flex flex-col gap-8 items-center"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
              >
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold tracking-tighter text-slate-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold tracking-tighter text-slate-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 w-full"
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-white text-black py-6 rounded-2xl font-bold text-xl shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

