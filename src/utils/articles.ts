import fm from 'front-matter';

export interface ArticleAttributes {
    title: string;
    description: string;
    date: string;
    category?: string;
    imageUrl?: string;
}

export interface Article {
    slug: string;
    frontmatter: ArticleAttributes;
    body: string;
}

// Ensure the path is relative to the root or correct src structure. 
// Assuming this utility is in src/utils/articles.ts
const mdFiles = import.meta.glob('../articles/*.md', { query: '?raw', eager: true });

export const getAllArticles = (): Article[] => {
    const articles: Article[] = [];

    for (const path in mdFiles) {
        // Vite's raw import returns an object { default: string }
        const file = mdFiles[path] as { default: string };

        // Extract the filename without extension for the slug
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        // Parse the markdown file's frontmatter and body
        const parsed = fm<ArticleAttributes>(file.default);

        articles.push({
            slug,
            frontmatter: parsed.attributes,
            body: parsed.body,
        });
    }

    // Sort articles by date descending (newest first)
    return articles.sort((a, b) => {
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
};

export const getArticleBySlug = (slug: string): Article | undefined => {
    const allArticles = getAllArticles();
    return allArticles.find((article) => article.slug === slug);
};
