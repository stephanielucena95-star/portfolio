
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WorkGrid from '../components/WorkGrid';
import { CASE_STUDIES } from '../constants';
import CaseStudyPage from '../components/CaseStudyPage';

const Work: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'all' | 'performance' | 'branding' | 'strategy'>('all');

    const selectedCaseStudy = CASE_STUDIES.find(cs => cs.id === id) || null;

    const filteredCaseStudies = activeTab === 'all'
        ? CASE_STUDIES
        : CASE_STUDIES.filter(cs =>
            cs.category.toLowerCase().includes(activeTab) ||
            cs.tags.some(tag => tag.toLowerCase().includes(activeTab))
        );

    if (selectedCaseStudy) {
        return <CaseStudyPage caseStudy={selectedCaseStudy} onBack={() => navigate('/work')} />;
    }

    return (
        <section id="work" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        Case Studies
                    </h2>
                    <p className="text-slate-400 text-xl leading-relaxed">
                        Collecting growth work across global brands, FMCG, fintech, and events. Click to explore strategy and impact.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
                    {(['all', 'performance', 'branding', 'strategy'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                ? 'bg-white text-black'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <WorkGrid
                caseStudies={filteredCaseStudies}
                onSelect={(cs) => navigate(`/work/${cs.id}`)}
            />
        </section>
    );
};

export default Work;
