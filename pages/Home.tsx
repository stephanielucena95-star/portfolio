import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ToolsGrid from '../components/ToolsGrid';
import ImpactMarquee from '../components/ImpactMarquee';
import GrowthFramework from '../components/GrowthFramework';
import WorkGrid from '../components/WorkGrid';
import { CASE_STUDIES } from '../constants';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredWork = CASE_STUDIES.slice(0, 3); // Top 3 projects

  useSEO({
    description: "Portfolio of Stephanie Lucena, a Senior Growth Marketer specializing in Paid Media, Performance Strategy, and E-commerce growth for global brands.",
  });

  return (
    <>
      <Hero onCtaClick={() => navigate('/work')} />

      <ImpactMarquee />

      <GrowthFramework />

      <section id="featured-work" className="py-32 px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col mb-20"
          >
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 w-fit">Featured Proof</span>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Selected <span className="italic font-light text-indigo-400">Impact</span> Cases
            </h2>
          </motion.div>

          <WorkGrid
            caseStudies={featuredWork}
            onSelect={(cs) => navigate(`/work/${cs.id}`)}
          />

          <div className="mt-24 flex justify-center">
            <button
              onClick={() => navigate('/work')}
              className="group relative flex items-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View All Case Studies
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                →
              </motion.span>
            </button>
          </div>
        </div>
      </section>

      <div id="tools">
        <ToolsGrid />
      </div>
    </>
  );
};

export default Home;
