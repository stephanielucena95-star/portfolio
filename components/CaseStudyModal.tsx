
import React from 'react';
import { CaseStudy } from '../types';
import { X, Target, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';

interface ModalProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

const CaseStudyModal: React.FC<ModalProps> = ({ caseStudy, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-5xl max-h-full bg-[#0d0d0d] rounded-[2.5rem] border border-white/10 overflow-y-auto overflow-x-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="sticky top-6 left-[calc(100%-4rem)] z-10 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-16">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-6">
              {caseStudy.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {caseStudy.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 text-lg">
              <span className="font-bold text-white">Client: {caseStudy.client}</span>
              <span className="hidden md:inline text-slate-700">|</span>
              <span className="text-slate-400">{caseStudy.category}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-12">
              <div className="glass-card p-10 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-6 text-indigo-400">
                  <Target size={28} />
                  <h4 className="text-2xl font-bold text-white">The Challenge</h4>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {caseStudy.description}
                </p>
                <div className="space-y-4">
                  {caseStudy.objectives.map((obj, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <ChevronRight className="text-indigo-600 mt-1 flex-shrink-0" size={18} />
                      <p className="text-slate-300 font-medium">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 border border-white/5 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-6 text-blue-400">
                  <Lightbulb size={28} />
                  <h4 className="text-2xl font-bold text-white">The Strategy</h4>
                </div>
                <div className="space-y-4">
                  {caseStudy.solutions.map((sol, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-400 text-xs font-bold mt-1">
                        {i + 1}
                      </div>
                      <p className="text-slate-300">{sol}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
                <img src={caseStudy.imageUrl} className="w-full h-full object-cover" alt="Outcome visualization" />
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-10 rounded-[2rem] text-white shadow-xl shadow-indigo-600/20">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp size={28} />
                  <h4 className="text-2xl font-bold">Key Results</h4>
                </div>
                <div className="space-y-6">
                  {caseStudy.results.map((res, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <p className="text-xl font-bold leading-tight">{res}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
