import React from 'react';
import { Markdown } from '../../components/markdown';
import { sectionStyles, getBackgroundStyle } from '../../lib/styles';

export function RichText({ content, background = 'transparent', customBackground, padding = 'default', width = 'default' }) {
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background === 'dark' || 
                  (background === 'custom' && customBackground?.toLowerCase() < '#888888');

    return (
        <section className={`${bgStyle} ${sectionStyles.paddings[padding]}`}>
            <div className={sectionStyles.widths[width]}>
                <div className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}>
                    <Markdown content={content} />
                </div>
            </div>
        </section>
    );
} 