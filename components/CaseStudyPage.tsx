import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { ArrowLeft, CheckCircle2, Layout, Target, Zap, User } from 'lucide-react';

interface PageProps {
  caseStudy: CaseStudy;
  onBack: () => void;
}

const CaseStudyPage: React.FC<PageProps> = ({ caseStudy, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseStudy]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      <main className="pt-32 md:pt-40 pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <div className="flex gap-3 mb-8">
            {caseStudy.tags.map((tag, i) => (
              <span key={i} className="px-4 py-1 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12 leading-[0.95]">
            {caseStudy.title}
          </h1>
          <p className="text-2xl text-slate-400 leading-relaxed italic">
            "{caseStudy.description}"
          </p>
        </div>

        {/* Hero Image */}
        <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-32 border border-white/5 bg-slate-900">
          <img src={caseStudy.imageUrl} className="w-full h-full object-contain md:object-cover" alt={caseStudy.title} />
        </div>

        {/* Detailed Content */}
        <div className="grid lg:grid-cols-3 gap-20">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-24">
            <section>
              <div className="flex items-center gap-4 mb-8 text-indigo-400">
                <Layout size={24} />
                <h2 className="text-3xl font-bold text-white tracking-tight">Context</h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed">
                {caseStudy.context}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8 text-red-400">
                <Target size={24} />
                <h2 className="text-3xl font-bold text-white tracking-tight">The Challenge</h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-8 text-green-400">
                <Zap size={24} />
                <h2 className="text-3xl font-bold text-white tracking-tight">The Strategy</h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed">
                {caseStudy.strategy}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Execution</h2>
              <div className="grid gap-6">
                {caseStudy.execution.map((item, i) => (
                  <div key={i} className="p-8 border border-white/5 rounded-3xl bg-white/[0.01]">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                        0{i + 1}
                      </div>
                      <p className="text-lg text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-16">
            <div className="p-10 bg-indigo-600 rounded-[3rem] text-white shadow-2xl shadow-indigo-600/20">
              <div className="flex items-center gap-4 mb-10">
                <CheckCircle2 size={24} />
                <h3 className="text-2xl font-bold tracking-tight">Impact & Learnings</h3>
              </div>
              <ul className="space-y-8">
                {caseStudy.impact.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-white mt-3 flex-shrink-0"></span>
                    <span className="text-lg font-bold leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 border border-white/10 rounded-[3rem]">
              <div className="flex items-center gap-4 mb-6 text-slate-400">
                <User size={20} />
                <h3 className="text-xl font-bold uppercase tracking-widest text-xs">My Role</h3>
              </div>
              <p className="text-lg text-slate-300 font-medium">
                {caseStudy.myRole}
              </p>
            </div>
          </div>
        </div>
        {/* Feedback/CTA Section */}
        <div className="mt-32 pt-24 border-t border-white/5 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
            Want to see more?
          </h3>
          <button
            onClick={onBack}
            className="group relative inline-flex items-center gap-4 bg-white text-black px-6 py-3.5 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            See other marketing case studies
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </main>

    </div>
  );
};

export default CaseStudyPage;
