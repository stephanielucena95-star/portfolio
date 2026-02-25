import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticleBySlug } from '../src/utils/articles';
import { format } from 'date-fns';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const ArticleDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const article = slug ? getArticleBySlug(slug) : null;

    useSEO({
        title: article?.frontmatter.title || "Article Not Found",
        description: article?.frontmatter.description,
        type: "article",
        image: article?.frontmatter.imageUrl
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <button onClick={() => navigate('/insights')} className="text-indigo-400 hover:text-white transition-colors">
                        ← Back to Insights
                    </button>
                </div>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
            <button
                onClick={() => navigate('/insights')}
                className="group flex items-center text-slate-400 hover:text-white transition-colors mb-12 font-medium"
            >
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
            </button>

            <header className="mb-16">
                <div className="flex items-center gap-4 mb-6 text-sm font-bold tracking-widest uppercase">
                    <span className="text-indigo-400">{article.frontmatter.category || "Article"}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500">
                        {format(new Date(article.frontmatter.date), 'MMMM d, yyyy')}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                    {article.frontmatter.title}
                </h1>

                {article.frontmatter.description && (
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
                        {article.frontmatter.description}
                    </p>
                )}
            </header>

            {article.frontmatter.imageUrl && (
                <div className="mb-16 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
                    <img
                        src={article.frontmatter.imageUrl}
                        alt={article.frontmatter.title}
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
            )}

            {/* Markdown Content Styling */}
            <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300 prose-a:transition-colors
                prose-strong:text-white prose-strong:font-bold
                prose-ul:text-slate-300 prose-ul:mb-8
                prose-li:my-2
                prose-blockquote:border-l-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:text-white prose-blockquote:font-medium prose-blockquote:not-italic
                prose-code:text-indigo-300 prose-code:bg-indigo-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {article.body}
                </ReactMarkdown>
            </div>

            <hr className="my-20 border-white/10" />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <div>
                    <h4 className="text-white font-bold mb-2">Want to discuss this?</h4>
                    <p className="text-slate-400 text-sm">I'm always open to talking strategy and growth.</p>
                </div>
                <button
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-colors w-full sm:w-auto justify-center"
                >
                    Get in touch <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
        </article>
    );
};

export default ArticleDetail;
