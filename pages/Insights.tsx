import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllArticles } from '../src/utils/articles';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const Insights: React.FC = () => {
    const articles = getAllArticles();
    const navigate = useNavigate();

    useSEO({
        title: "Insights",
        description: "Articles and thoughts on Growth Marketing, Performance Strategy, and E-commerce scaling.",
    });

    return (
        <section id="insights" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5 mt-20">
            <div className="max-w-2xl mb-20">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                    Insights
                </h2>
                <p className="text-slate-400 text-xl leading-relaxed">
                    Thoughts, frameworks, and strategies on growth marketing and performance media.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div
                        key={article.slug}
                        onClick={() => navigate(`/insights/${article.slug}`)}
                        className="group flex flex-col p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-6">
                            {article.frontmatter.category && (
                                <span className="px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                    {article.frontmatter.category}
                                </span>
                            )}
                            <span className="text-slate-500 text-sm font-medium">
                                {format(new Date(article.frontmatter.date), 'MMM d, yyyy')}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                            {article.frontmatter.title}
                        </h3>

                        <p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">
                            {article.frontmatter.description}
                        </p>

                        <div className="mt-auto flex items-center text-indigo-400 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                            Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Insights;
