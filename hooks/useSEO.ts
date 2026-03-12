import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
    jsonLd?: object;
}

export const useSEO = ({ title, description, type = 'website', image, jsonLd }: SEOProps) => {
    useEffect(() => {
        const baseTitle = 'Stephanie Lucena | Growth Marketer & Paid Media Strategist';
        const finalTitle = title ? `${title} | Stephanie Lucena` : baseTitle;
        document.title = finalTitle;

        // Helper to update meta tags
        const updateMeta = (selector: string, content?: string) => {
            const el = document.querySelector(selector);
            if (el && content) {
                el.setAttribute('content', content);
            }
        };

        if (description) {
            updateMeta('meta[name="description"]', description);
            updateMeta('meta[property="og:description"]', description);
            updateMeta('meta[property="twitter:description"]', description);
        }

        if (finalTitle) {
            updateMeta('meta[property="og:title"]', finalTitle);
            updateMeta('meta[property="twitter:title"]', finalTitle);
        }

        if (type) {
            updateMeta('meta[property="og:type"]', type);
        }

        if (image) {
            updateMeta('meta[property="og:image"]', image);
            updateMeta('meta[property="twitter:image"]', image);
        }

        // Handle JSON-LD
        let script: HTMLScriptElement | null = null;
        if (jsonLd) {
            script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }

        return () => {
            if (script) {
                document.head.removeChild(script);
            }
        };
    }, [title, description, type, image, jsonLd]);
};
