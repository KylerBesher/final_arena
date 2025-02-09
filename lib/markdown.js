import matter from 'gray-matter';

import siteConfig from '../content/settings/site.json';

export function processMarkdown(content) {
    const { data, content: markdownContent } = matter(content);

    // Create a context object from the frontmatter data
    const context = {
        // Page-specific data
        title: data.title,
        metadata: {
            ...data.metadata,
            title: data.metadata?.title || data.title,
        },
        // Expose all nested string values directly
        ...siteConfig.strings,
        // Add current date/time helpers
        date: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
        },
    };

    // Replace template variables in markdown content
    const processedContent = replaceTemplateVariables(markdownContent, context);

    // Also process template variables in metadata strings
    const processedData = processObjectTemplates(data, context);

    return {
        data: processedData,
        content: processedContent,
    };
}

function replaceTemplateVariables(text, context) {
    return text.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
        const value = getValueByPath(context, path.trim());
        return value !== undefined ? value : match;
    });
}

function processObjectTemplates(obj, context) {
    if (typeof obj !== 'object' || obj === null) {
        if (typeof obj === 'string') {
            return replaceTemplateVariables(obj, context);
        }
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => processObjectTemplates(item, context));
    }

    const processed = {};
    for (const [key, value] of Object.entries(obj)) {
        processed[key] = processObjectTemplates(value, context);
    }
    return processed;
}

function getValueByPath(obj, path) {
    return path.split('.').reduce((current, part) => current?.[part], obj);
}
