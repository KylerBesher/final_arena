import React from 'react';
import { Markdown } from '../../components/markdown';
import { sectionStyles } from '../../lib/styles';

export function RichText({ content, background = 'transparent', padding = 'default', width = 'default' }) {
    return (
        <section className={`${sectionStyles.backgrounds[background]} ${sectionStyles.paddings[padding]}`}>
            <div className={sectionStyles.widths[width]}>
                <div className={`prose prose-lg max-w-none ${background === 'dark' ? 'prose-invert' : ''}`}>
                    <Markdown content={content} />
                </div>
            </div>
        </section>
    );
} 