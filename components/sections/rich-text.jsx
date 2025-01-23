import React from 'react';
import { Markdown } from '../../components/markdown';

export function RichText({ content, backgroundColor = 'transparent', padding = 'default', width = 'default' }) {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-100',
        primary: 'bg-primary-50',
        transparent: 'bg-transparent'
    };

    const paddings = {
        none: '',
        small: 'py-6',
        default: 'py-12',
        large: 'py-24'
    };

    const widths = {
        full: 'w-full',
        default: 'container mx-auto px-4 max-w-5xl',
        narrow: 'container mx-auto px-4 max-w-3xl'
    };

    return (
        <section className={`${bgColors[backgroundColor]} ${paddings[padding]}`}>
            <div className={widths[width]}>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <Markdown content={content} />
                </div>
            </div>
        </section>
    );
} 